# TinySwap
#### By SSM

A minimal, open-source multi-chain token swap interface. Get the best rates across decentralized exchanges powered by 0x Protocol.

## Features

- **Multi-Chain Support** - Swap on Ethereum, Polygon, Arbitrum, Optimism, Base, BNB Chain, Avalanche, Linea, Scroll, and Blast
- **Wallet Connection** - Connect with MetaMask, Coinbase Wallet, WalletConnect, and 300+ wallets via RainbowKit
- **Best Rates** - 0x aggregates liquidity from Uniswap, SushiSwap, Curve, PancakeSwap, and 100+ DEXs
- **Real-time Quotes** - Live price updates as you type
- **USD Mode** - Enter amounts in USD and auto-convert to tokens
- **Slippage Control** - Adjustable slippage tolerance (0.5%, 1%, 3%, or custom)
- **Developer Friendly** - Easy to add/remove tokens and chains

## Supported Chains

| Chain | Native Token | Chain ID |
|-------|-------------|----------|
| Ethereum | ETH | 1 |
| Polygon | MATIC | 137 |
| Arbitrum | ETH | 42161 |
| Optimism | ETH | 10 |
| Base | ETH | 8453 |
| BNB Chain | BNB | 56 |
| Avalanche | AVAX | 43114 |
| Linea | ETH | 59144 |
| Scroll | ETH | 534352 |
| Blast | ETH | 81457 |

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [RainbowKit](https://www.rainbowkit.com/) - Wallet connection
- [wagmi v2](https://wagmi.sh/) - React hooks for Ethereum
- [viem](https://viem.sh/) - TypeScript Ethereum library
- [0x Swap API v2](https://0x.org/) - DEX aggregation with Permit2

---

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/ssm-official/TinySwap.git
cd TinySwap
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Required - Get from https://cloud.walletconnect.com/
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

# Required - Get FREE from https://dashboard.0x.org/
ZEROX_API_KEY=your_0x_api_key
```

#### Getting Your API Keys

**WalletConnect Project ID:**
1. Go to [cloud.walletconnect.com](https://cloud.walletconnect.com/)
2. Sign up or log in
3. Create a new project
4. Copy the Project ID

**0x API Key:**
1. Go to [dashboard.0x.org](https://dashboard.0x.org/)
2. Sign up for a free account
3. Create an API key
4. Copy the API key

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production

```bash
npm run build
npm start
```

---

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ssm-official/TinySwap&env=NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,ZEROX_API_KEY)

Or deploy manually:

```bash
npm install -g vercel
vercel --prod
```

Add your environment variables in the Vercel dashboard under Settings > Environment Variables.

### Deploy to Other Platforms

TinySwap works on any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify
- Self-hosted

---

## Configuration Guide

### Adding/Removing Tokens

Edit `lib/tokens.ts` to customize the token list for each chain.

**Add a new token:**

```typescript
// Find your chain's section (e.g., ETHEREUM MAINNET)
{
  address: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
  symbol: 'SHIB',
  name: 'Shiba Inu',
  decimals: 18,
  logoURI: 'https://assets.coingecko.com/coins/images/11939/small/shiba.png',
}
```

**Remove a token:** Simply delete the token object from the array.

### Adding/Removing Chains

**To add a new chain:**

1. Add to `SUPPORTED_CHAINS` in `lib/tokens.ts`:
```typescript
{ id: 250, name: 'Fantom', nativeSymbol: 'FTM', nativeName: 'Fantom' }
```

2. Add tokens for the chain in `TOKENS_BY_CHAIN`:
```typescript
250: [
  { address: NATIVE_TOKEN_ADDRESS, symbol: 'FTM', name: 'Fantom', decimals: 18, logoURI: '...' },
  // ... more tokens
]
```

3. Add the chain to `app/providers.tsx`:
```typescript
import { fantom } from 'wagmi/chains';
// Add to chains array
chains: [mainnet, polygon, ..., fantom]
```

4. Add stablecoin info to `CHAIN_STABLECOINS` in `components/SwapCard.tsx`:
```typescript
250: { address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', decimals: 6 }
```

**To remove a chain:** Remove it from all four locations above.

### Customizing the UI

- **Colors:** Edit the Tailwind classes in components (purple-600, zinc-800, etc.)
- **Logo:** Replace `public/favicon.ico` and update `app/layout.tsx`
- **App Name:** Change "TinySwap" in `app/providers.tsx` and `app/layout.tsx`

---

## Project Structure

```
tinyswap/
├── app/
│   ├── api/swap/         # API routes for 0x
│   │   ├── price/        # Price quotes
│   │   └── quote/        # Swap transactions
│   ├── terms/            # Terms of Service page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── providers.tsx     # Web3 providers
├── components/
│   ├── ConnectButton.tsx # Wallet connect button
│   ├── SwapCard.tsx      # Main swap interface
│   └── TokenSelector.tsx # Token dropdown
├── lib/
│   ├── swap.ts           # 0x API functions
│   └── tokens.ts         # Token & chain config
└── public/               # Static assets
```

---

## How It Works

1. **User connects wallet** via RainbowKit
2. **User enters amount** to swap
3. **App fetches quote** from 0x API (aggregates 100+ DEXs)
4. **User approves token** for Permit2 contract (one-time per token)
5. **User signs permit** and executes swap in one transaction
6. **Tokens are swapped** at the best available rate

---

## License

This project is licensed under the **Apache License 2.0** - see the [LICENSE](LICENSE) file for details.

You are free to:
- Use commercially
- Modify
- Distribute
- Use privately

---

## Links

- **GitHub:** [github.com/ssm-official/TinySwap](https://github.com/ssm-official/TinySwap)
- **0x Protocol:** [0x.org](https://0x.org/)
- **RainbowKit:** [rainbowkit.com](https://www.rainbowkit.com/)

---

## Acknowledgments

- [0x Protocol](https://0x.org/) for the swap aggregation API
- [RainbowKit](https://www.rainbowkit.com/) for the wallet connection UI
- [wagmi](https://wagmi.sh/) for React Ethereum hooks

---

Made with love by the TinySwap team
