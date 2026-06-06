import { createViemTest } from "@morpho-org/test/vitest";
import dotenv from "dotenv";
import { mainnet } from "viem/chains";

dotenv.config();

export const indexingTest = createViemTest(mainnet, {
  forkUrl: process.env.RPC_URL_1 ?? mainnet.rpcUrls.default.http[0],
  forkBlockNumber: 19_200_000,
});

export const helpersTest = createViemTest(mainnet, {
  forkUrl: process.env.RPC_URL_1 ?? mainnet.rpcUrls.default.http[0],
  forkBlockNumber: 21_000_000,
});

export const preLiquidationTest = createViemTest(mainnet, {
  forkUrl: process.env.RPC_URL_1 ?? mainnet.rpcUrls.default.http[0],
  forkBlockNumber: 22_274_328,
});
