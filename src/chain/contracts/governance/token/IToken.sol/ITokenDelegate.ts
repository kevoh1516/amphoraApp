/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../../common';

export interface ITokenDelegateInterface extends utils.Interface {
  functions: {
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'changeName(string)': FunctionFragment;
    'changeSymbol(string)': FunctionFragment;
    'delegate(address)': FunctionFragment;
    'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
    'getCurrentVotes(address)': FunctionFragment;
    'getPriorVotes(address,uint256)': FunctionFragment;
    'initialize(address,uint256)': FunctionFragment;
    'mint(address,uint256)': FunctionFragment;
    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'allowance'
      | 'allowance(address,address)'
      | 'approve'
      | 'approve(address,uint256)'
      | 'balanceOf'
      | 'balanceOf(address)'
      | 'changeName'
      | 'changeName(string)'
      | 'changeSymbol'
      | 'changeSymbol(string)'
      | 'delegate'
      | 'delegate(address)'
      | 'delegateBySig'
      | 'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)'
      | 'getCurrentVotes'
      | 'getCurrentVotes(address)'
      | 'getPriorVotes'
      | 'getPriorVotes(address,uint256)'
      | 'initialize'
      | 'initialize(address,uint256)'
      | 'mint'
      | 'mint(address,uint256)'
      | 'permit'
      | 'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)'
      | 'transfer'
      | 'transfer(address,uint256)'
      | 'transferFrom'
      | 'transferFrom(address,address,uint256)',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'allowance', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'allowance(address,address)', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'approve(address,uint256)', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'balanceOf(address)', values: [string]): string;
  encodeFunctionData(functionFragment: 'changeName', values: [string]): string;
  encodeFunctionData(functionFragment: 'changeName(string)', values: [string]): string;
  encodeFunctionData(functionFragment: 'changeSymbol', values: [string]): string;
  encodeFunctionData(functionFragment: 'changeSymbol(string)', values: [string]): string;
  encodeFunctionData(functionFragment: 'delegate', values: [string]): string;
  encodeFunctionData(functionFragment: 'delegate(address)', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'delegateBySig',
    values: [string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)',
    values: [string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'getCurrentVotes', values: [string]): string;
  encodeFunctionData(functionFragment: 'getCurrentVotes(address)', values: [string]): string;
  encodeFunctionData(functionFragment: 'getPriorVotes', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getPriorVotes(address,uint256)', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'initialize', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'initialize(address,uint256)', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'mint', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'mint(address,uint256)', values: [string, BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'permit',
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)',
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transfer(address,uint256)', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'transferFrom', values: [string, string, BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'transferFrom(address,address,uint256)',
    values: [string, string, BigNumberish],
  ): string;

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allowance(address,address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve(address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf(address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeName(string)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeSymbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeSymbol(string)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'delegate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'delegate(address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'delegateBySig', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'getCurrentVotes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCurrentVotes(address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPriorVotes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPriorVotes(address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize(address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mint(address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'permit', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer(address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom(address,address,uint256)', data: BytesLike): Result;

  events: {};
}

export interface ITokenDelegate extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITokenDelegateInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allowance(account: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'allowance(address,address)'(account: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    approve(
      spender: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'approve(address,uint256)'(
      spender: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'balanceOf(address)'(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    changeName(
      name_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'changeName(string)'(
      name_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    changeSymbol(
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'changeSymbol(string)'(
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'delegate(address)'(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)'(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getCurrentVotes(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'getCurrentVotes(address)'(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    'getPriorVotes(address,uint256)'(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    initialize(
      account_: string,
      initialSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'initialize(address,uint256)'(
      account_: string,
      initialSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    mint(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'mint(address,uint256)'(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    permit(
      owner: string,
      spender: string,
      rawAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)'(
      owner: string,
      spender: string,
      rawAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transfer(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'transfer(address,uint256)'(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      src: string,
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'transferFrom(address,address,uint256)'(
      src: string,
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  allowance(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

  'allowance(address,address)'(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

  approve(
    spender: string,
    rawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'approve(address,uint256)'(
    spender: string,
    rawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  'balanceOf(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  changeName(name_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  'changeName(string)'(
    name_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  changeSymbol(
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'changeSymbol(string)'(
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  delegate(
    delegatee: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'delegate(address)'(
    delegatee: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  delegateBySig(
    delegatee: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)'(
    delegatee: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getCurrentVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  'getCurrentVotes(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  'getPriorVotes(address,uint256)'(
    account: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  initialize(
    account_: string,
    initialSupply_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'initialize(address,uint256)'(
    account_: string,
    initialSupply_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  mint(
    dst: string,
    rawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'mint(address,uint256)'(
    dst: string,
    rawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  permit(
    owner: string,
    spender: string,
    rawAmount: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)'(
    owner: string,
    spender: string,
    rawAmount: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transfer(
    dst: string,
    rawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'transfer(address,uint256)'(
    dst: string,
    rawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    src: string,
    dst: string,
    rawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'transferFrom(address,address,uint256)'(
    src: string,
    dst: string,
    rawAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    'allowance(address,address)'(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(spender: string, rawAmount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    'approve(address,uint256)'(spender: string, rawAmount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    changeName(name_: string, overrides?: CallOverrides): Promise<void>;

    'changeName(string)'(name_: string, overrides?: CallOverrides): Promise<void>;

    changeSymbol(symbol_: string, overrides?: CallOverrides): Promise<void>;

    'changeSymbol(string)'(symbol_: string, overrides?: CallOverrides): Promise<void>;

    delegate(delegatee: string, overrides?: CallOverrides): Promise<void>;

    'delegate(address)'(delegatee: string, overrides?: CallOverrides): Promise<void>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)'(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    getCurrentVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentVotes(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'getPriorVotes(address,uint256)'(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initialize(account_: string, initialSupply_: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'initialize(address,uint256)'(
      account_: string,
      initialSupply_: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    mint(dst: string, rawAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'mint(address,uint256)'(dst: string, rawAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    permit(
      owner: string,
      spender: string,
      rawAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)'(
      owner: string,
      spender: string,
      rawAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    transfer(dst: string, rawAmount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    'transfer(address,uint256)'(dst: string, rawAmount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    transferFrom(src: string, dst: string, rawAmount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    'transferFrom(address,address,uint256)'(
      src: string,
      dst: string,
      rawAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    allowance(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    'allowance(address,address)'(account: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'approve(address,uint256)'(
      spender: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    changeName(name_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'changeName(string)'(
      name_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    changeSymbol(symbol_: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'changeSymbol(string)'(
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    delegate(delegatee: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    'delegate(address)'(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)'(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getCurrentVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    'getCurrentVotes(address)'(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'getPriorVotes(address,uint256)'(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initialize(
      account_: string,
      initialSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'initialize(address,uint256)'(
      account_: string,
      initialSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    mint(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'mint(address,uint256)'(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    permit(
      owner: string,
      spender: string,
      rawAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)'(
      owner: string,
      spender: string,
      rawAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transfer(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'transfer(address,uint256)'(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferFrom(
      src: string,
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'transferFrom(address,address,uint256)'(
      src: string,
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(account: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'allowance(address,address)'(
      account: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'approve(address,uint256)'(
      spender: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'balanceOf(address)'(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeName(
      name_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'changeName(string)'(
      name_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    changeSymbol(
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'changeSymbol(string)'(
      symbol_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    delegate(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'delegate(address)'(
      delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    delegateBySig(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)'(
      delegatee: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getCurrentVotes(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getCurrentVotes(address)'(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPriorVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'getPriorVotes(address,uint256)'(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    initialize(
      account_: string,
      initialSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'initialize(address,uint256)'(
      account_: string,
      initialSupply_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    mint(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'mint(address,uint256)'(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      spender: string,
      rawAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)'(
      owner: string,
      spender: string,
      rawAmount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transfer(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'transfer(address,uint256)'(
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      src: string,
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'transferFrom(address,address,uint256)'(
      src: string,
      dst: string,
      rawAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
