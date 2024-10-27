/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ERC721, ERC721Interface } from "../../Card.sol/ERC721";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061150b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80636352211e116100665780636352211e1461011c57806370a082311461014c578063a22cb4651461017c578063b88d4fde14610198578063e985e9c5146101b457610093565b8063081812fc14610098578063095ea7b3146100c857806323b872dd146100e457806342842e0e14610100575b600080fd5b6100b260048036038101906100ad9190610c8d565b6101e4565b6040516100bf9190610cfb565b60405180910390f35b6100e260048036038101906100dd9190610d42565b6102c1565b005b6100fe60048036038101906100f99190610d82565b6104a9565b005b61011a60048036038101906101159190610d82565b610749565b005b61013660048036038101906101319190610c8d565b610881565b6040516101439190610cfb565b60405180910390f35b61016660048036038101906101619190610dd5565b61092c565b6040516101739190610e11565b60405180910390f35b61019660048036038101906101919190610e64565b6109e3565b005b6101b260048036038101906101ad9190610f09565b610ae0565b005b6101ce60048036038101906101c99190610f91565b610c1e565b6040516101db9190610fe0565b60405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610286576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027d90611058565b60405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600080600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806103b85750600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b6103f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ee906110c4565b60405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b60008082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610549576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054090611130565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036105b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105af9061119c565b60405180910390fd5b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190610608906111eb565b9190505550600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061065d90611214565b91905055508160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506002600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6107548383836104a9565b60008273ffffffffffffffffffffffffffffffffffffffff163b148061083d575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168273ffffffffffffffffffffffffffffffffffffffff1663150b7a023386856040518463ffffffff1660e01b81526004016107d993929190611293565b6020604051808303816000875af11580156107f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081c9190611335565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b61087c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610873906113ae565b60405180910390fd5b505050565b600080600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610927576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091e90611058565b60405180910390fd5b919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361099c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109939061141a565b60405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ad49190610fe0565b60405180910390a35050565b610aeb8585856104a9565b60008473ffffffffffffffffffffffffffffffffffffffff163b1480610bd8575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663150b7a0233888787876040518663ffffffff1660e01b8152600401610b74959493929190611487565b6020604051808303816000875af1158015610b93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb79190611335565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b610c17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0e906113ae565b60405180910390fd5b5050505050565b60036020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600080fd5b600080fd5b6000819050919050565b610c6a81610c57565b8114610c7557600080fd5b50565b600081359050610c8781610c61565b92915050565b600060208284031215610ca357610ca2610c4d565b5b6000610cb184828501610c78565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ce582610cba565b9050919050565b610cf581610cda565b82525050565b6000602082019050610d106000830184610cec565b92915050565b610d1f81610cda565b8114610d2a57600080fd5b50565b600081359050610d3c81610d16565b92915050565b60008060408385031215610d5957610d58610c4d565b5b6000610d6785828601610d2d565b9250506020610d7885828601610c78565b9150509250929050565b600080600060608486031215610d9b57610d9a610c4d565b5b6000610da986828701610d2d565b9350506020610dba86828701610d2d565b9250506040610dcb86828701610c78565b9150509250925092565b600060208284031215610deb57610dea610c4d565b5b6000610df984828501610d2d565b91505092915050565b610e0b81610c57565b82525050565b6000602082019050610e266000830184610e02565b92915050565b60008115159050919050565b610e4181610e2c565b8114610e4c57600080fd5b50565b600081359050610e5e81610e38565b92915050565b60008060408385031215610e7b57610e7a610c4d565b5b6000610e8985828601610d2d565b9250506020610e9a85828601610e4f565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f840112610ec957610ec8610ea4565b5b8235905067ffffffffffffffff811115610ee657610ee5610ea9565b5b602083019150836001820283011115610f0257610f01610eae565b5b9250929050565b600080600080600060808688031215610f2557610f24610c4d565b5b6000610f3388828901610d2d565b9550506020610f4488828901610d2d565b9450506040610f5588828901610c78565b935050606086013567ffffffffffffffff811115610f7657610f75610c52565b5b610f8288828901610eb3565b92509250509295509295909350565b60008060408385031215610fa857610fa7610c4d565b5b6000610fb685828601610d2d565b9250506020610fc785828601610d2d565b9150509250929050565b610fda81610e2c565b82525050565b6000602082019050610ff56000830184610fd1565b92915050565b600082825260208201905092915050565b7f746f6b656e20646f65736e277420657869737400000000000000000000000000600082015250565b6000611042601383610ffb565b915061104d8261100c565b602082019050919050565b6000602082019050818103600083015261107181611035565b9050919050565b7f6e6f7420617574686f72697a6564000000000000000000000000000000000000600082015250565b60006110ae600e83610ffb565b91506110b982611078565b602082019050919050565b600060208201905081810360008301526110dd816110a1565b9050919050565b7f66726f6d20213d206f776e657200000000000000000000000000000000000000600082015250565b600061111a600d83610ffb565b9150611125826110e4565b602082019050919050565b600060208201905081810360008301526111498161110d565b9050919050565b7f7472616e7366657220746f207a65726f20616464726573730000000000000000600082015250565b6000611186601883610ffb565b915061119182611150565b602082019050919050565b600060208201905081810360008301526111b581611179565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111f682610c57565b915060008203611209576112086111bc565b5b600182039050919050565b600061121f82610c57565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611251576112506111bc565b5b600182019050919050565b600082825260208201905092915050565b50565b600061127d60008361125c565b91506112888261126d565b600082019050919050565b60006080820190506112a86000830186610cec565b6112b56020830185610cec565b6112c26040830184610e02565b81810360608301526112d381611270565b9050949350505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611312816112dd565b811461131d57600080fd5b50565b60008151905061132f81611309565b92915050565b60006020828403121561134b5761134a610c4d565b5b600061135984828501611320565b91505092915050565b7f756e7361666520726563697069656e7400000000000000000000000000000000600082015250565b6000611398601083610ffb565b91506113a382611362565b602082019050919050565b600060208201905081810360008301526113c78161138b565b9050919050565b7f6f776e6572203d207a65726f2061646472657373000000000000000000000000600082015250565b6000611404601483610ffb565b915061140f826113ce565b602082019050919050565b60006020820190508181036000830152611433816113f7565b9050919050565b82818337600083830152505050565b6000601f19601f8301169050919050565b6000611466838561125c565b935061147383858461143a565b61147c83611449565b840190509392505050565b600060808201905061149c6000830188610cec565b6114a96020830187610cec565b6114b66040830186610e02565b81810360608301526114c981848661145a565b9050969550505050505056fea26469706673582212200a8f3f63a96903d7d25872642d0bb96f1a8e0bef045c57a5a0b8ecad16bf05e964736f6c63430008100033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721> {
    return super.deploy(overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
