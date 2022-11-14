import { useContract } from "./useContract";
import MineNFTAbi from "../contracts/MineNFT.json";
import MineNFTContractAddress from "../contracts/MineNFT-address.json";

export const useMinterContract = () =>
  useContract(MineNFTAbi.abi, MineNFTContractAddress.MineNFT);