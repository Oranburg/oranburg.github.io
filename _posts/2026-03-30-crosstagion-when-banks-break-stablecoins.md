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

This was crosstagion: bidirectional risk contagion between traditional finance and decentralized finance. In *Crosstagion*, I coin the term and maps the jurisdictional gap it exposes — a gap that neither the GENIUS Act nor the CLARITY Act closes.

## The two channels

Financial stability literature has long recognized the forward channel: a stablecoin run forces the issuer to liquidate reserve assets, transmitting stress into the money markets where those reserves are held. A large stablecoin issuer holding short-term Treasury bills is, in functional terms, a money market fund without the regulatory architecture that governs money market funds. GENIUS addresses this channel with reserve requirements and prudential oversight.

The reverse channel is less discussed but empirically documented. Treasury market stress events in March 2020, September 2022, and early 2023 each produced measurable depegging pressure on reserve-backed stablecoins. In the reverse channel, stress originating in traditional financial institutions degrades the quality or availability of stablecoin reserves, creating redemption pressure from the DeFi side.

> Congress responded to exactly half of this two-way risk with the most significant federal stablecoin legislation ever enacted.

The SVB event demonstrated both channels operating simultaneously and feeding on each other.

## The jurisdictional gap

GENIUS addresses what happens when a stablecoin issuer fails. It does not address what happens when a bank failure destabilizes a stablecoin. CLARITY assigns the CFTC jurisdiction over the derivative markets where the cascade lands; it does not assign the CFTC any coordination role with the OCC when the cascade originates in the reserve bank. The OCC's implementing rulemaking introduces concentration limits and a seven-day redemption circuit breaker — but those internal mitigations do not prevent the DeFi derivative cascade that follows even a brief depeg.

No statute allocates liability or mandates coordination among these three agencies when contagion crosses their respective boundaries. No mechanism exists for assigning jurisdictional primacy before all three assert competing claims.

## The DAO accelerant

DAO governance failure compounds the problem. A flash loan attacker drained $182 million from the Beanstalk protocol in a single thirteen-second Ethereum block — from flash loan acquisition to governance vote to fund drain, all in approximately thirteen seconds. There was no telephone number to call, no assets to freeze, no identifiable counterparty capable of posting margin. A crosstagion cascade accelerated by a governance exploit can exhaust the enforcement tools of both the OCC and the CFTC before either agency has received its first alert.

## The proposal

I argue that closing the crosstagion gap requires not new prudential requirements but a designated tri-agency coordination mechanism — triggered by observable stress indicators — that assigns jurisdictional primacy *before* a crisis and activates a classification standstill rather than after the contagion has already propagated across the TradFi-DeFi boundary.

---

**Read the full article:** Seth C. Oranburg, *Crosstagion: The GENIUS Act, CLARITY, and the OCC-CFTC-SEC Gap in Bidirectional Stablecoin Contagion*, SSRN (2026). [SSRN](https://dx.doi.org/10.2139/ssrn.6421898)
