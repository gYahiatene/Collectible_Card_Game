/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Card, CardInterface } from "../../Tocken.sol/Card";

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
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
  "0x608060405234801561001057600080fd5b50611ea1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806342966c681161007157806342966c68146101895780636352211e146101a557806370a08231146101d5578063a22cb46514610205578063b88d4fde14610221578063e985e9c51461023d576100b4565b806301ffc9a7146100b9578063081812fc146100e9578063095ea7b31461011957806323b872dd1461013557806340c10f191461015157806342842e0e1461016d575b600080fd5b6100d360048036038101906100ce919061141f565b61026d565b6040516100e09190611467565b60405180910390f35b61010360048036038101906100fe91906114b8565b61033f565b6040516101109190611526565b60405180910390f35b610133600480360381019061012e919061156d565b61041c565b005b61014f600480360381019061014a91906115ad565b610604565b005b61016b6004803603810190610166919061156d565b6108ee565b005b610187600480360381019061018291906115ad565b6108fc565b005b6101a3600480360381019061019e91906114b8565b610a34565b005b6101bf60048036038101906101ba91906114b8565b610ae0565b6040516101cc9190611526565b60405180910390f35b6101ef60048036038101906101ea9190611600565b610b8b565b6040516101fc919061163c565b60405180910390f35b61021f600480360381019061021a9190611683565b610c42565b005b61023b60048036038101906102369190611728565b610d3f565b005b610257600480360381019061025291906117b0565b610e7d565b6040516102649190611467565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061033857507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036103e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d89061184d565b60405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600080600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105135750600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b610552576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610549906118b9565b60405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b60008082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146106a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069b90611925565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070a90611991565b60405180910390fd5b61071e833383610eac565b61075d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610754906118b9565b60405180910390fd5b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906107ad906119e0565b9190505550600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061080290611a09565b91905055508160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506002600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6108f88282610fe0565b5050565b610907838383610604565b60008273ffffffffffffffffffffffffffffffffffffffff163b14806109f0575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168273ffffffffffffffffffffffffffffffffffffffff1663150b7a023386856040518463ffffffff1660e01b815260040161098c93929190611a88565b6020604051808303816000875af11580156109ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cf9190611ae7565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b610a2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2690611b60565b60405180910390fd5b505050565b60008082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ad4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acb90611bcc565b60405180910390fd5b610add816111f6565b50565b600080600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7d9061184d565b60405180910390fd5b919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bfb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf290611c38565b60405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610d339190611467565b60405180910390a35050565b610d4a858585610604565b60008473ffffffffffffffffffffffffffffffffffffffff163b1480610e37575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168473ffffffffffffffffffffffffffffffffffffffff1663150b7a0233888787876040518663ffffffff1660e01b8152600401610dd3959493929190611ca5565b6020604051808303816000875af1158015610df2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e169190611ae7565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b610e76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6d90611b60565b60405180910390fd5b5050505050565b60036020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60008373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480610f6e5750600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b80610fd757506002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16145b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361104f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104690611d3f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146110f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e790611dab565b60405180910390fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061114090611a09565b91905055508160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361129c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129390611e17565b60405180910390fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112eb9190611e37565b9250508190555060008083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113fc816113c7565b811461140757600080fd5b50565b600081359050611419816113f3565b92915050565b600060208284031215611435576114346113bd565b5b60006114438482850161140a565b91505092915050565b60008115159050919050565b6114618161144c565b82525050565b600060208201905061147c6000830184611458565b92915050565b6000819050919050565b61149581611482565b81146114a057600080fd5b50565b6000813590506114b28161148c565b92915050565b6000602082840312156114ce576114cd6113bd565b5b60006114dc848285016114a3565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611510826114e5565b9050919050565b61152081611505565b82525050565b600060208201905061153b6000830184611517565b92915050565b61154a81611505565b811461155557600080fd5b50565b60008135905061156781611541565b92915050565b60008060408385031215611584576115836113bd565b5b600061159285828601611558565b92505060206115a3858286016114a3565b9150509250929050565b6000806000606084860312156115c6576115c56113bd565b5b60006115d486828701611558565b93505060206115e586828701611558565b92505060406115f6868287016114a3565b9150509250925092565b600060208284031215611616576116156113bd565b5b600061162484828501611558565b91505092915050565b61163681611482565b82525050565b6000602082019050611651600083018461162d565b92915050565b6116608161144c565b811461166b57600080fd5b50565b60008135905061167d81611657565b92915050565b6000806040838503121561169a576116996113bd565b5b60006116a885828601611558565b92505060206116b98582860161166e565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f8401126116e8576116e76116c3565b5b8235905067ffffffffffffffff811115611705576117046116c8565b5b602083019150836001820283011115611721576117206116cd565b5b9250929050565b600080600080600060808688031215611744576117436113bd565b5b600061175288828901611558565b955050602061176388828901611558565b9450506040611774888289016114a3565b935050606086013567ffffffffffffffff811115611795576117946113c2565b5b6117a1888289016116d2565b92509250509295509295909350565b600080604083850312156117c7576117c66113bd565b5b60006117d585828601611558565b92505060206117e685828601611558565b9150509250929050565b600082825260208201905092915050565b7f746f6b656e20646f65736e277420657869737400000000000000000000000000600082015250565b60006118376013836117f0565b915061184282611801565b602082019050919050565b600060208201905081810360008301526118668161182a565b9050919050565b7f6e6f7420617574686f72697a6564000000000000000000000000000000000000600082015250565b60006118a3600e836117f0565b91506118ae8261186d565b602082019050919050565b600060208201905081810360008301526118d281611896565b9050919050565b7f66726f6d20213d206f776e657200000000000000000000000000000000000000600082015250565b600061190f600d836117f0565b915061191a826118d9565b602082019050919050565b6000602082019050818103600083015261193e81611902565b9050919050565b7f7472616e7366657220746f207a65726f20616464726573730000000000000000600082015250565b600061197b6018836117f0565b915061198682611945565b602082019050919050565b600060208201905081810360008301526119aa8161196e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006119eb82611482565b9150600082036119fe576119fd6119b1565b5b600182039050919050565b6000611a1482611482565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a4657611a456119b1565b5b600182019050919050565b600082825260208201905092915050565b50565b6000611a72600083611a51565b9150611a7d82611a62565b600082019050919050565b6000608082019050611a9d6000830186611517565b611aaa6020830185611517565b611ab7604083018461162d565b8181036060830152611ac881611a65565b9050949350505050565b600081519050611ae1816113f3565b92915050565b600060208284031215611afd57611afc6113bd565b5b6000611b0b84828501611ad2565b91505092915050565b7f756e7361666520726563697069656e7400000000000000000000000000000000600082015250565b6000611b4a6010836117f0565b9150611b5582611b14565b602082019050919050565b60006020820190508181036000830152611b7981611b3d565b9050919050565b7f6e6f74206f776e65720000000000000000000000000000000000000000000000600082015250565b6000611bb66009836117f0565b9150611bc182611b80565b602082019050919050565b60006020820190508181036000830152611be581611ba9565b9050919050565b7f6f776e6572203d207a65726f2061646472657373000000000000000000000000600082015250565b6000611c226014836117f0565b9150611c2d82611bec565b602082019050919050565b60006020820190508181036000830152611c5181611c15565b9050919050565b82818337600083830152505050565b6000601f19601f8301169050919050565b6000611c848385611a51565b9350611c91838584611c58565b611c9a83611c67565b840190509392505050565b6000608082019050611cba6000830188611517565b611cc76020830187611517565b611cd4604083018661162d565b8181036060830152611ce7818486611c78565b90509695505050505050565b7f6d696e7420746f207a65726f2061646472657373000000000000000000000000600082015250565b6000611d296014836117f0565b9150611d3482611cf3565b602082019050919050565b60006020820190508181036000830152611d5881611d1c565b9050919050565b7f616c7265616479206d696e746564000000000000000000000000000000000000600082015250565b6000611d95600e836117f0565b9150611da082611d5f565b602082019050919050565b60006020820190508181036000830152611dc481611d88565b9050919050565b7f6e6f74206d696e74656400000000000000000000000000000000000000000000600082015250565b6000611e01600a836117f0565b9150611e0c82611dcb565b602082019050919050565b60006020820190508181036000830152611e3081611df4565b9050919050565b6000611e4282611482565b9150611e4d83611482565b9250828203905081811115611e6557611e646119b1565b5b9291505056fea2646970667358221220dcf8d280141cce889f575f15f3847f93d9a369f7ee79eb8eb2f2e7054fd7a5b764736f6c63430008100033";

type CardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Card__factory extends ContractFactory {
  constructor(...args: CardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Card> {
    return super.deploy(overrides || {}) as Promise<Card>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Card {
    return super.attach(address) as Card;
  }
  override connect(signer: Signer): Card__factory {
    return super.connect(signer) as Card__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CardInterface {
    return new utils.Interface(_abi) as CardInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Card {
    return new Contract(address, _abi, signerOrProvider) as Card;
  }
}
