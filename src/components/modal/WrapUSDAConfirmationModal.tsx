import { useEffect, useState } from 'react';
import { Box, Button, Typography, Link as MuiLink } from '@mui/material';
import { useContract, useAccount, useNetwork, useContractRead } from 'wagmi';
import { ContractReceipt, ContractTransaction, utils } from 'ethers';

import { BN, locale, formatNumber } from '~/utils';
import { useAppSelector, useAmphContracts } from '~/hooks';
import { formatColor, neutral } from '~/theme';
import { getConfig, Chains } from '~/config';
import { BaseModal } from './BaseModal';
import { ModalType, useModalContext } from '../libs/modal-content-provider/ModalContentProvider';
import { DisableableModalButton } from '../button/DisableableModalButton';
import { ForwardIcon } from '../icons/misc/ForwardIcon';
import SVGBox from '../icons/misc/SVGBox';

export const WrapUSDAConfirmationModal = () => {
  const { type, setType, USDA, updateTransactionState } = useModalContext();
  const { USDA: USDA_TOKEN } = useAppSelector((state) => state.stablecoins);
  const [loading, setLoading] = useState(false);
  const [loadmsg, setLoadmsg] = useState('');

  const [hasAllowance, setHasAllowance] = useState(false);
  const [approvalTxn, setApprovalTxn] = useState<ContractTransaction>();
  const { chain: currentChain } = useNetwork();
  const { DEFAULT_CHAIN_ID } = getConfig();
  const chain = Chains.getInfo(currentChain?.id || DEFAULT_CHAIN_ID);
  const { address } = useAccount();
  const { usdaContract, wUsdaContract } = useAmphContracts();
  const USDAContract = useContract(usdaContract);
  const wUSDAContract = useContract(wUsdaContract);
  const { WUSDA: WUSDA_ADDR } = getConfig().ADDRESSES[currentChain?.id || DEFAULT_CHAIN_ID];

  const UsdaAllowance = useContractRead({
    ...usdaContract,
    functionName: 'allowance',
    args: address && [address, WUSDA_ADDR],
  });

  useEffect(() => {
    if (USDA.amountToWrap && UsdaAllowance.data) {
      const amount = USDA.maxWrap
        ? USDA_TOKEN.wallet_amount!
        : utils.parseUnits(USDA.amountToWrap, USDA_TOKEN.decimals);
      setHasAllowance(UsdaAllowance.data.gte(amount));
    }
  }, [USDA.amountToWrap, UsdaAllowance.data, USDA.maxWrap, USDA_TOKEN.wallet_amount, USDA_TOKEN.decimals]);

  const handleWrapConfirmationRequest = async () => {
    if (USDA.amountToWrap && wUSDAContract) {
      setLoading(true);
      setLoadmsg(locale('CheckWallet'));
      try {
        const wrapTransaction = await wUSDAContract.wrap(
          USDA.maxWrap ? BN(USDA_TOKEN.wallet_amount!) : BN(USDA.amountToWrap).mul(BN(`1e${USDA_TOKEN.decimals}`)),
        );

        updateTransactionState(wrapTransaction);
        setLoadmsg(locale('TransactionPending'));

        const wrapReceipt = await wrapTransaction.wait();
        updateTransactionState(wrapReceipt);
        await UsdaAllowance.refetch();
      } catch (err) {
        updateTransactionState(err as ContractReceipt);
      }
      setApprovalTxn(undefined);
      setLoading(false);
    }
  };

  const handleApprovalRequest = async () => {
    if (USDAContract && USDA.amountToWrap) {
      const wrapAmount = BN(USDA.amountToWrap).mul(BN(`1e${USDA_TOKEN.decimals}`));

      setLoading(true);
      try {
        setLoadmsg(locale('CheckWallet'));
        const txn = await USDAContract.approve(WUSDA_ADDR, wrapAmount);

        setApprovalTxn(txn);

        setLoadmsg(locale('TransactionPending'));
        await txn?.wait();

        setLoadmsg('');
        await UsdaAllowance.refetch();
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
  };

  return (
    <BaseModal
      open={type === ModalType.WrapUSDAConfirmation}
      setOpen={() => {
        setType(null);
      }}
    >
      <Typography variant='body3' color='text.primary'>
        Confirm Wrap
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          mt: 3,
          py: 2,
          borderRadius: '10px',
          columnGap: 4,
          backgroundColor: 'background.overview',
        }}
      >
        <Box display='flex' alignItems='center'>
          <SVGBox width={36} height={36} img_name='USDA.png' alt='USDA' sx={{ mr: 3 }} />
          <Box>
            <Typography variant='body3' color='text.primary'>
              {'$' + formatNumber(Number(USDA.amountToWrap))}
            </Typography>
          </Box>
        </Box>

        <ForwardIcon sx={{ width: 15, height: 15 }} strokecolor={formatColor(neutral.gray3)} />

        <Box display='flex' alignItems='center'>
          <Box>
            <Typography variant='body3' color='text.primary'>
              {'$' + formatNumber(Number(USDA.amountToWrap))}
            </Typography>
          </Box>

          <SVGBox width={36} height={36} img_name='wUSDA.png' alt='wUSDA' sx={{ ml: 3 }} />
        </Box>
      </Box>

      <Box textAlign='center' mb={5}>
        <Typography variant='body3_medium' color={formatColor(neutral.gray3)} fontStyle='italic'>
          1 USDA = 1 wUSDA ($1)
        </Typography>
      </Box>

      <DisableableModalButton
        text={hasAllowance ? 'Confirm Wrap' : 'Set Allowance'}
        disabled={false}
        onClick={hasAllowance ? handleWrapConfirmationRequest : handleApprovalRequest}
        loading={loading}
        load_text={loadmsg}
      />
      {approvalTxn !== undefined && (
        <MuiLink mt={1} display='block' target='_blank' href={`${chain.scan_url}tx/${approvalTxn.hash}`}>
          <Button variant='text'>View approval on {chain.scan_site}</Button>
        </MuiLink>
      )}
    </BaseModal>
  );
};
