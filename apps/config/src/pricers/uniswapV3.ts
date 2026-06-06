import type { Address } from "viem";
import { base, mainnet } from "viem/chains";

import { hyperevm, katana } from "../chains";

export const USD_REFERENCE: Record<number, Address[]> = {
  [mainnet.id]: [
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
    "0xdAC17F958D2ee523a2206206994597C13D831ec7", // USDT
    "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
  ],
  [base.id]: [
    "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC
    "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2", // USDT
    "0x50c5725949A6F0c72E6C45641f24029a21cFE8cf", // DAI
  ],
  [katana.id]: ["0x203A662b0BD271A6ed5a60EdFbd04bFce608FD36"],
  [hyperevm.id]: ["0xb88339CB7199b77E23DB6E890353E22632Ba630f"],
};
