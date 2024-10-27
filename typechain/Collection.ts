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
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface CollectionInterface extends utils.Interface {
  functions: {
    "cardCount()": FunctionFragment;
    "createCard(string,string,uint256,address)": FunctionFragment;
    "getCardCount()": FunctionFragment;
    "getCards()": FunctionFragment;
    "getId()": FunctionFragment;
    "getImageURI()": FunctionFragment;
    "getName()": FunctionFragment;
    "name()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cardCount"
      | "createCard"
      | "getCardCount"
      | "getCards"
      | "getId"
      | "getImageURI"
      | "getName"
      | "name"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cardCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createCard",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCardCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getCards", values?: undefined): string;
  encodeFunctionData(functionFragment: "getId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getImageURI",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cardCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createCard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCardCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getImageURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;

  events: {};
}

export interface Collection extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CollectionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cardCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    createCard(
      _cardName: PromiseOrValue<string>,
      _imageUrl: PromiseOrValue<string>,
      cardId: PromiseOrValue<BigNumberish>,
      creator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCardCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCards(overrides?: CallOverrides): Promise<[string[]]>;

    getId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getImageURI(overrides?: CallOverrides): Promise<[string]>;

    getName(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;
  };

  cardCount(overrides?: CallOverrides): Promise<BigNumber>;

  createCard(
    _cardName: PromiseOrValue<string>,
    _imageUrl: PromiseOrValue<string>,
    cardId: PromiseOrValue<BigNumberish>,
    creator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCardCount(overrides?: CallOverrides): Promise<BigNumber>;

  getCards(overrides?: CallOverrides): Promise<string[]>;

  getId(overrides?: CallOverrides): Promise<BigNumber>;

  getImageURI(overrides?: CallOverrides): Promise<string>;

  getName(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cardCount(overrides?: CallOverrides): Promise<BigNumber>;

    createCard(
      _cardName: PromiseOrValue<string>,
      _imageUrl: PromiseOrValue<string>,
      cardId: PromiseOrValue<BigNumberish>,
      creator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getCardCount(overrides?: CallOverrides): Promise<BigNumber>;

    getCards(overrides?: CallOverrides): Promise<string[]>;

    getId(overrides?: CallOverrides): Promise<BigNumber>;

    getImageURI(overrides?: CallOverrides): Promise<string>;

    getName(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    cardCount(overrides?: CallOverrides): Promise<BigNumber>;

    createCard(
      _cardName: PromiseOrValue<string>,
      _imageUrl: PromiseOrValue<string>,
      cardId: PromiseOrValue<BigNumberish>,
      creator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCardCount(overrides?: CallOverrides): Promise<BigNumber>;

    getCards(overrides?: CallOverrides): Promise<BigNumber>;

    getId(overrides?: CallOverrides): Promise<BigNumber>;

    getImageURI(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cardCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createCard(
      _cardName: PromiseOrValue<string>,
      _imageUrl: PromiseOrValue<string>,
      cardId: PromiseOrValue<BigNumberish>,
      creator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCardCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getImageURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
