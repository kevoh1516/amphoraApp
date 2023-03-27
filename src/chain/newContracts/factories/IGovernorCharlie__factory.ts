/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { IGovernorCharlie, IGovernorCharlieInterface } from '../IGovernorCharlie';

const _abi = [
  {
    inputs: [],
    name: 'GovernorCharlie_AlreadyVoted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_ArityMismatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_DelayNotReached',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_ExpirationExceedsMax',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_InvalidProposalId',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_InvalidSignature',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_InvalidVoteType',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_MultipleActiveProposals',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_MultiplePendingProposals',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_NoActions',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_NotActive',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_NotGovernorCharlie',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_ProposalAboveThreshold',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_ProposalAlreadyExecuted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_ProposalAlreadyQueued',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_ProposalNotQueued',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_ProposalNotSucceeded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_TimelockNotReached',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_TooManyActions',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_TransactionReverted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_TransactionStale',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_VotesBelowThreshold',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_VotingClosed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorCharlie_WhitelistedProposer',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: '_txHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_signature',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_eta',
        type: 'uint256',
      },
    ],
    name: 'CancelTransaction',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldEmergencyVotingPeriod',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_emergencyVotingPeriod',
        type: 'uint256',
      },
    ],
    name: 'EmergencyVotingPeriodSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: '_txHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_signature',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_eta',
        type: 'uint256',
      },
    ],
    name: 'ExecuteTransaction',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldTimelockDelay',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_proposalTimelockDelay',
        type: 'uint256',
      },
    ],
    name: 'NewDelay',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldEmergencyTimelockDelay',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_emergencyTimelockDelay',
        type: 'uint256',
      },
    ],
    name: 'NewEmergencyDelay',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldEmergencyQuorumVotes',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_emergencyQuorumVotes',
        type: 'uint256',
      },
    ],
    name: 'NewEmergencyQuorum',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldQuorumVotes',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_quorumVotes',
        type: 'uint256',
      },
    ],
    name: 'NewQuorum',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldOptimisticQuorumVotes',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_optimisticQuorumVotes',
        type: 'uint256',
      },
    ],
    name: 'OptimisticQuorumVotesSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldOptimisticVotingDelay',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_optimisticVotingDelay',
        type: 'uint256',
      },
    ],
    name: 'OptimisticVotingDelaySet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'ProposalCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_proposer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: '_targets',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: '_values',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: '_signatures',
        type: 'string[]',
      },
      {
        indexed: false,
        internalType: 'bytes[]',
        name: '_calldatas',
        type: 'bytes[]',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_startBlock',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_endBlock',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_description',
        type: 'string',
      },
    ],
    name: 'ProposalCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'ProposalExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_eta',
        type: 'uint256',
      },
    ],
    name: 'ProposalQueued',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldProposalThreshold',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newProposalThreshold',
        type: 'uint256',
      },
    ],
    name: 'ProposalThresholdSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: '_txHash',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_signature',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_eta',
        type: 'uint256',
      },
    ],
    name: 'QueueTransaction',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_voter',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: '_support',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_votes',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: '_reason',
        type: 'string',
      },
    ],
    name: 'VoteCast',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldVotingDelay',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newVotingDelay',
        type: 'uint256',
      },
    ],
    name: 'VotingDelaySet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_oldVotingPeriod',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_newVotingPeriod',
        type: 'uint256',
      },
    ],
    name: 'VotingPeriodSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_expiration',
        type: 'uint256',
      },
    ],
    name: 'WhitelistAccountExpirationSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_oldGuardian',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_newGuardian',
        type: 'address',
      },
    ],
    name: 'WhitelistGuardianSet',
    type: 'event',
  },
  {
    inputs: [],
    name: 'amph',
    outputs: [
      {
        internalType: 'contract IAMPH',
        name: '_amph',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
    ],
    name: 'cancel',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: '_support',
        type: 'uint8',
      },
    ],
    name: 'castVote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: '_support',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: '_v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: '_r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_s',
        type: 'bytes32',
      },
    ],
    name: 'castVoteBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: '_support',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: '_reason',
        type: 'string',
      },
    ],
    name: 'castVoteWithReason',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'emergencyQuorumVotes',
    outputs: [
      {
        internalType: 'uint256',
        name: '_emergencyQuorumVotes',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'emergencyTimelockDelay',
    outputs: [
      {
        internalType: 'uint256',
        name: '_emergencyTimelockDelay',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'emergencyVotingPeriod',
    outputs: [
      {
        internalType: 'uint256',
        name: '_emergencyVotingPeriod',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_signature',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: '_eta',
        type: 'uint256',
      },
    ],
    name: 'executeTransaction',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
    ],
    name: 'getActions',
    outputs: [
      {
        internalType: 'address[]',
        name: '_targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_values',
        type: 'uint256[]',
      },
      {
        internalType: 'string[]',
        name: '_signatures',
        type: 'string[]',
      },
      {
        internalType: 'bytes[]',
        name: '_calldatas',
        type: 'bytes[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
    ],
    name: 'getProposal',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'proposer',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'eta',
            type: 'uint256',
          },
          {
            internalType: 'address[]',
            name: 'targets',
            type: 'address[]',
          },
          {
            internalType: 'uint256[]',
            name: 'values',
            type: 'uint256[]',
          },
          {
            internalType: 'string[]',
            name: 'signatures',
            type: 'string[]',
          },
          {
            internalType: 'bytes[]',
            name: 'calldatas',
            type: 'bytes[]',
          },
          {
            internalType: 'uint256',
            name: 'startBlock',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endBlock',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'forVotes',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'againstVotes',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'abstainVotes',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'canceled',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'executed',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'emergency',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'quorumVotes',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'delay',
            type: 'uint256',
          },
        ],
        internalType: 'struct Proposal',
        name: '_proposal',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_voter',
        type: 'address',
      },
    ],
    name: 'getReceipt',
    outputs: [
      {
        components: [
          {
            internalType: 'bool',
            name: 'hasVoted',
            type: 'bool',
          },
          {
            internalType: 'uint8',
            name: 'support',
            type: 'uint8',
          },
          {
            internalType: 'uint96',
            name: 'votes',
            type: 'uint96',
          },
        ],
        internalType: 'struct Receipt',
        name: '_receipt',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialProposalId',
    outputs: [
      {
        internalType: 'uint256',
        name: '_initialProposalId',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'isWhitelisted',
    outputs: [
      {
        internalType: 'bool',
        name: '_isWhitelisted',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_proposer',
        type: 'address',
      },
    ],
    name: 'latestProposalIds',
    outputs: [
      {
        internalType: 'uint256',
        name: '_proposerId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxWhitelistPeriod',
    outputs: [
      {
        internalType: 'uint256',
        name: '_maxWhitelistPeriod',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'optimisticQuorumVotes',
    outputs: [
      {
        internalType: 'uint256',
        name: '_optimisticQuorumVotes',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'optimisticVotingDelay',
    outputs: [
      {
        internalType: 'uint256',
        name: '_optimisticVotingDelay',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proposalCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '_proposalCount',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proposalThreshold',
    outputs: [
      {
        internalType: 'uint256',
        name: '_proposalThreshold',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proposalTimelockDelay',
    outputs: [
      {
        internalType: 'uint256',
        name: '_proposalTimelockDelay',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_values',
        type: 'uint256[]',
      },
      {
        internalType: 'string[]',
        name: '_signatures',
        type: 'string[]',
      },
      {
        internalType: 'bytes[]',
        name: '_calldatas',
        type: 'bytes[]',
      },
      {
        internalType: 'string',
        name: '_description',
        type: 'string',
      },
      {
        internalType: 'bool',
        name: '_emergency',
        type: 'bool',
      },
    ],
    name: 'propose',
    outputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
    ],
    name: 'queue',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_transaction',
        type: 'bytes32',
      },
    ],
    name: 'queuedTransactions',
    outputs: [
      {
        internalType: 'bool',
        name: '_isQueued',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'quorumVotes',
    outputs: [
      {
        internalType: 'uint256',
        name: '_quorumVotes',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_delay',
        type: 'uint256',
      },
    ],
    name: 'setDelay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_emergencyTimelockDelay',
        type: 'uint256',
      },
    ],
    name: 'setEmergencyDelay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newEmergencyQuorumVotes',
        type: 'uint256',
      },
    ],
    name: 'setEmergencyQuorumVotes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newEmergencyVotingPeriod',
        type: 'uint256',
      },
    ],
    name: 'setEmergencyVotingPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newOptimisticVotingDelay',
        type: 'uint256',
      },
    ],
    name: 'setOptimisticDelay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newOptimisticQuorumVotes',
        type: 'uint256',
      },
    ],
    name: 'setOptimisticQuorumVotes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newProposalThreshold',
        type: 'uint256',
      },
    ],
    name: 'setProposalThreshold',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newQuorumVotes',
        type: 'uint256',
      },
    ],
    name: 'setQuorumVotes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newVotingDelay',
        type: 'uint256',
      },
    ],
    name: 'setVotingDelay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newVotingPeriod',
        type: 'uint256',
      },
    ],
    name: 'setVotingPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_expiration',
        type: 'uint256',
      },
    ],
    name: 'setWhitelistAccountExpiration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'setWhitelistGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_proposalId',
        type: 'uint256',
      },
    ],
    name: 'state',
    outputs: [
      {
        internalType: 'enum ProposalState',
        name: '_proposalState',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'votingDelay',
    outputs: [
      {
        internalType: 'uint256',
        name: '_votingDelay',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'votingPeriod',
    outputs: [
      {
        internalType: 'uint256',
        name: '_votingPeriod',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'whitelistAccountExpirations',
    outputs: [
      {
        internalType: 'uint256',
        name: '_expiration',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelistGuardian',
    outputs: [
      {
        internalType: 'address',
        name: '_guardian',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export class IGovernorCharlie__factory {
  static readonly abi = _abi;
  static createInterface(): IGovernorCharlieInterface {
    return new utils.Interface(_abi) as IGovernorCharlieInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IGovernorCharlie {
    return new Contract(address, _abi, signerOrProvider) as IGovernorCharlie;
  }
}
