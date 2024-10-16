import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  arbitrumSepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RockPaperScissors",
  projectId: "6ff8eb59587cd5a38c24cc85d30763ea",
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    arbitrumSepolia,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});
