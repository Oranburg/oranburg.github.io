---
layout: post
title: "Crosstagion: When Banks Break Stablecoins"
date: 2026-03-30
tags: [fintech, securities, regulation, markets]
kind: essay
source_papers: [crosstagion]
featured: true
excerpt: "The GENIUS Act protects against stablecoin runs crashing banks. But what happens when a bank crash breaks a stablecoin? No statute covers that."
---

On March 10, 2023, Silicon Valley Bank collapsed. The immediate transmission was conventional: depositors ran, equity crashed, the FDIC stepped in within forty-eight hours. What received less attention was the simultaneous cascade into decentralized finance. Circle disclosed that $3.3 billion of USDC's reserves — roughly 8% of the total — were held at SVB. Within hours, USDC traded as low as $0.87 on major exchanges. DeFi lending protocols that accepted USDC as collateral began liquidating positions at distressed prices. Perpetual futures markets saw open interest collapse. The Curve 3pool, a critical DeFi liquidity hub, became severely imbalanced.

This was crosstagion: bidirectional risk contagion between traditional finance and decentralized finance. In *Crosstagion*, I map the jurisdictional gap this phenomenon exposes — a gap that neither the GENIUS Act nor the CLARITY Act closes.

## The two channels

Financial stability literature has long recognized the forward channel: a stablecoin run forces the issuer to liquidate reserve assets, transmitting stress into the money markets where those reserves are held. A large stablecoin issuer holding short-term Treasury bills is, in functional terms, a money market fund without the regulatory architecture that governs money market funds. GENIUS addresses this channel with reserve requirements and prudential oversight.

The reverse channel is less discussed but empirically documented. Treasury market stress events in March 2020, September 2022, and early 2023 each produced measurable depegging pressure on reserve-backed stablecoins. In the reverse channel, stress originating in traditional financial institutions degrades the quality or availability of stablecoin reserves, creating redemption pressure from the DeFi side.

> Congress responded to exactly half of this two-way risk with the most significant federal stablecoin legislation ever enacted.

The SVB event demonstrated both channels operating simultaneously and feeding on each other. And here is the detail that matters for policy: the SVB event was contained by a government decision that was not legally compelled. The FDIC chose to protect uninsured depositors. Had it applied the standard depositor preference rules, Circle would have faced substantial losses on its SVB deposits, the USDC depeg would likely have been permanent rather than temporary, and the crosstagion cascade would have continued — DeFi protocols liquidating USDC collateral, the Curve pool imbalance persisting, price pressure on USDC feeding back into Treasury markets as Circle attempted to raise liquidity by selling its remaining reserves. The entire cascade played out over roughly twenty-four hours before the FDIC's backstop announcement stabilized the market. The fact that this did not happen reflects a policy choice, not a legal safeguard.

There is also a deep irony embedded in the GENIUS Act's own design. The Act's reserve requirements mandate concentration in Treasury bills and their equivalents — the safest assets in the world. But a sustained Treasury market disruption of the kind that has periodically threatened during U.S. debt ceiling negotiations would hit stablecoin reserves directly. The policy designed to make stablecoins safe is simultaneously the policy that transmits Treasury market stress into the stablecoin market with maximum efficiency.

## The jurisdictional gap

GENIUS addresses what happens when a stablecoin issuer fails. It does not address what happens when a bank failure destabilizes a stablecoin. CLARITY assigns the CFTC jurisdiction over the derivative markets where the cascade lands; it does not assign the CFTC any coordination role with the OCC when the cascade originates in the reserve bank. The OCC's implementing rulemaking introduces concentration limits and a seven-day redemption circuit breaker — but those internal mitigations do not prevent the DeFi derivative cascade that follows even a brief depeg.

The OCC's implementing rulemaking does not cite the CLARITY Act even once — a significant omission given that the NPRM was issued on March 2, 2026, after CLARITY had been under congressional consideration for over a year. The OCC does not currently view CLARITY's commodity classification framework as relevant to its stablecoin reserve supervision.

No statute allocates liability or mandates coordination among these three agencies when contagion crosses their respective boundaries. No mechanism exists for assigning jurisdictional primacy before all three assert competing claims. The critical legal implication: when a DAO governance exploit occurs in a protocol that holds stablecoin reserves or operates stablecoin-denominated derivative markets, the cascade falls simultaneously into the jurisdictions of the OCC (because stablecoin reserves are affected), the CFTC (because derivative markets respond), and potentially the SEC (because the distress may alter the security/commodity classification of the stablecoin itself). No agency has been designated to act first. No statute specifies who calls whom. And the cascade will be over before any agency has identified the trigger.

## The DAO accelerant

DAO governance failure compounds the problem. A flash loan attacker drained $182 million from the Beanstalk protocol in a single thirteen-second Ethereum block — from flash loan acquisition to governance vote to fund drain, all in approximately thirteen seconds. There was no telephone number to call, no assets to freeze, no identifiable counterparty capable of posting margin. A crosstagion cascade accelerated by a governance exploit can exhaust the enforcement tools of both the OCC and the CFTC before either agency has received its first alert.

## The proposal

I argue that closing the crosstagion gap requires not new prudential requirements but a designated tri-agency coordination mechanism — triggered by observable stress indicators — that assigns jurisdictional primacy *before* a crisis and activates a classification standstill rather than after the contagion has already propagated across the TradFi-DeFi boundary.

---

**Read the full article:** Seth C. Oranburg, *Crosstagion: The GENIUS Act, CLARITY, and the OCC-CFTC-SEC Gap in Bidirectional Stablecoin Contagion*, SSRN (2026). [SSRN](https://dx.doi.org/10.2139/ssrn.6421898)
