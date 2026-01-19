import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - TinySwap',
  description: 'Terms of Service and License Information for TinySwap',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Swap
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-white">Terms of Service</h1>

        <div className="space-y-8 text-zinc-300">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">About TinySwap</h2>
            <p className="leading-relaxed">
              TinySwap is an open-source, non-custodial decentralized exchange (DEX) aggregator interface.
              It connects to the 0x Protocol to find the best swap rates across multiple decentralized
              exchanges. TinySwap does not hold, control, or have access to your funds at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">How It Works</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>You connect your own Web3 wallet (MetaMask, Coinbase Wallet, etc.)</li>
              <li>TinySwap fetches price quotes from the 0x API</li>
              <li>You approve and sign transactions directly in your wallet</li>
              <li>Swaps are executed on-chain through smart contracts</li>
              <li>Your tokens go directly from your wallet to the DEX and back</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Disclaimer</h2>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
              <p className="leading-relaxed">
                <strong className="text-white">USE AT YOUR OWN RISK.</strong> TinySwap is provided &quot;as is&quot;
                without warranty of any kind. Cryptocurrency trading involves substantial risk of loss.
                You are solely responsible for your trading decisions and any resulting gains or losses.
                Always verify transaction details in your wallet before signing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">No Financial Advice</h2>
            <p className="leading-relaxed">
              Nothing on this platform constitutes financial, investment, legal, or tax advice.
              TinySwap does not recommend any particular token, trading strategy, or investment decision.
              Consult with qualified professionals before making any financial decisions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Third-Party Services</h2>
            <p className="leading-relaxed">
              TinySwap integrates with third-party services including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>0x Protocol</strong> - DEX aggregation and swap execution</li>
              <li><strong>RainbowKit/WalletConnect</strong> - Wallet connection</li>
              <li><strong>Various DEXs</strong> - Uniswap, SushiSwap, Curve, PancakeSwap, and others</li>
            </ul>
            <p className="mt-2 leading-relaxed">
              We are not responsible for the operation, availability, or security of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Open Source License</h2>
            <p className="mb-4 leading-relaxed">
              TinySwap is open source software licensed under the <strong>Apache License 2.0</strong>.
            </p>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4 font-mono text-sm">
              <p className="mb-2 text-white">Apache License 2.0</p>
              <p className="text-zinc-400">
                Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
                you may not use this file except in compliance with the License.
                You may obtain a copy of the License at:
              </p>
              <p className="mt-2 text-purple-400">
                http://www.apache.org/licenses/LICENSE-2.0
              </p>
              <p className="mt-2 text-zinc-400">
                Unless required by applicable law or agreed to in writing, software
                distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
                WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Your Rights Under Apache 2.0</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Use</strong> - Use the software for any purpose, including commercial</li>
              <li><strong>Modify</strong> - Make changes to the source code</li>
              <li><strong>Distribute</strong> - Share the software with others</li>
              <li><strong>Patent Grant</strong> - Use any patents that apply to the code</li>
              <li><strong>Private Use</strong> - Use and modify privately without sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Source Code</h2>
            <p className="leading-relaxed">
              The complete source code for TinySwap is available on GitHub:
            </p>
            <a
              href="https://github.com/ssm-official/TinySwap"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              github.com/ssm-official/TinySwap
            </a>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Contact</h2>
            <p className="leading-relaxed">
              For questions, issues, or contributions, please visit our GitHub repository
              and open an issue or pull request.
            </p>
          </section>

          <div className="border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
            <p>Last updated: January 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
