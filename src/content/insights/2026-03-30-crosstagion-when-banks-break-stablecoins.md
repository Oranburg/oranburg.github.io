---
layout: post
title: "Crosstagion: When Banks Break Stablecoins"
date: 2026-03-30
tags: [fintech, securities, regulation, markets]
kind: essay
source_papers: [crosstagion]
featured: true
excerpt: "The policy designed to make stablecoins safe — anchoring them to Treasuries — is simultaneously the policy that transmits Treasury market stress into the stablecoin market with maximum efficiency."
---

On March 10, 2023, Silicon Valley Bank collapsed. The immediate transmission was conventional: depositors ran, equity crashed, the FDIC stepped in within forty-eight hours. What received less attention was the simultaneous cascade into decentralized finance. Circle disclosed that $3.3 billion of USDC's reserves — roughly 8% of the total — were held at SVB. Within hours, USDC traded as low as $0.87 on major exchanges. DeFi lending protocols that accepted USDC as collateral began liquidating positions at distressed prices. The Curve 3pool became severely imbalanced. Perpetual futures open interest collapsed from approximately $14 billion to under $2 billion in forty-eight hours as leveraged long positions were forcibly unwound.

This was crosstagion: bidirectional risk contagion between traditional finance and decentralized finance.

## The reverse channel is structural

The GENIUS Act protects against the forward channel — stablecoin failure destabilizing banks. Reserve requirements, monthly attestations, and insolvency priority for token holders all address the risk that a stablecoin issuer fails. But the SVB event demonstrated that financial risk runs in reverse too: traditional bank failure destabilized the stablecoin, which destabilized DeFi, which traditional finance relies on for collateral markets.

This is not episodic. Treasury market stress events in March 2020, September 2022, and early 2023 each produced measurable depegging pressure on reserve-backed stablecoins. The pattern is structural: it is an artifact of GENIUS-style reserve concentration requirements, not of any idiosyncratic weakness in a particular issuer.

The policy designed to make stablecoins safe by anchoring them to the safest assets in the world is simultaneously the policy that transmits Treasury market stress into the stablecoin market with maximum efficiency.

The SVB cascade was contained only because the FDIC chose to protect uninsured depositors — a discretionary policy intervention, not a legal safeguard. Had the FDIC applied standard depositor preference rules, Circle would have faced substantial losses on its uninsured SVB deposits. The USDC depeg would have been permanent. The DeFi cascade would have continued. The containment reflects a government decision that was not legally compelled. The next reverse-channel event may not receive the same discretionary rescue.

## The classification cliff

The CLARITY Act's mutual exclusion clause creates an unintended problem under stress. A compliant payment stablecoin under GENIUS is explicitly not a digital commodity for CFTC purposes. But when a stablecoin breaks its peg, its GENIUS compliance status becomes ambiguous. An asset trading at $0.87 rather than $1.00 may no longer qualify as a "payment stablecoin" designed to "maintain a consistent 1:1 value."

If the stablecoin loses its GENIUS classification even temporarily, it falls into the digital commodity category — shifting jurisdiction from OCC to CFTC at the exact moment of maximum market stress. The classification itself becomes unstable under stress.

This is not a theoretical concern. It means that at the precise moment when coordinated regulatory action is most needed, the jurisdictional boundaries between agencies are shifting. The OCC may lose authority over an asset it supervised yesterday. The CFTC may gain authority over derivative markets it was not monitoring. And the SEC may simultaneously claim the depegged stablecoin as a potential investment contract under Howey — because an asset whose value no longer tracks its peg starts to look less like a payment instrument and more like a speculative one.

## The three-agency pileup

No statute allocates liability or mandates coordination among these three agencies when contagion crosses their boundaries. The Stablecoin Certification Review Committee includes Treasury, the Fed, and the OCC. The CFTC is not represented — despite holding jurisdiction over the derivative markets through which the cascade propagates. The OCC's implementing rulemaking does not cite the CLARITY Act even once, despite being issued after CLARITY had been under congressional consideration for over a year. The two statutes were designed in isolation. They do not talk to each other.

## DAO governance failure at blockchain speed

The finance literature maps crosstagion through price and liquidity channels. It does not account for the distinctly legal mechanism by which DAO governance failure accelerates and amplifies the cascade. A flash loan attacker can borrow sufficient governance tokens, pass a malicious proposal, drain a protocol treasury, repay the loan, and exit — all in a single thirteen-second Ethereum block. The Beanstalk attack of April 2022 demonstrated this: $182 million drained in one block, with no telephone number to call, no assets to freeze, and no entity capable of posting margin.

The CFTC can sue a DAO (*CFTC v. Ooki DAO*). Token holders may face personal liability (*Sarcuni v. bZx DAO*). Immutable smart contracts cannot be sanctioned as "property" (*Van Loon v. Dep't of Treasury*). Together these cases describe a landscape in which agencies have theoretical authority but no operational tools that function on the timescale of a crosstagion cascade. The CFTC brought its Ooki DAO action in September 2022; the court entered default judgment in June 2023; the $643,542 penalty remained uncollected because the DAO held no attachable assets in any U.S. jurisdiction.

## The proposal

Closing the crosstagion gap requires not new prudential requirements but a designated tri-agency coordination mechanism — triggered by observable stress indicators — that assigns jurisdictional primacy before a crisis and activates a classification standstill rather than after the contagion has already propagated across the TradFi-DeFi boundary. The mechanism must operate at a speed that existing frameworks (FSOC annual reports, inter-agency memoranda) were not designed for.

Congress responded to exactly half of the two-way risk with the most significant federal stablecoin legislation ever enacted. The other half remains unowned.

---

**Read the full article:** Seth C. Oranburg, *Crosstagion: The GENIUS Act, CLARITY, and the OCC-CFTC-SEC Gap in Bidirectional Stablecoin Contagion*, SSRN (2026). [SSRN](https://dx.doi.org/10.2139/ssrn.6421898)
