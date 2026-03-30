# Abstract

Four American states have enacted statutes that grant legal personality to decentralized autonomous organizations, and every one of them conditions that recognition on a minimum threshold of human governance. Wyoming, Tennessee, Utah, and New Hampshire each take a different structural approach to the DAO, with two wrapping the DAO in a limited liability company and two creating freestanding entity types, yet all four require identified natural persons, mandate that smart contracts remain amendable by human decision, and provide for dissolution when human control lapses. This Article presents the first systematic comparative analysis to incorporate New Hampshire's 2024 statute alongside the three earlier frameworks, organized around a five-dimension analytical approach that identifies the convergent "human governance floor." The Article examines each statute's treatment of management structure, fiduciary duties, liability protection, information rights, and dissolution. Across these five dimensions, a consistent pattern emerges: each statute establishes what this Article terms a "human governance floor," an irreducible set of human-governance requirements below which no DAO may operate as a recognized legal entity. Identifying and mapping this floor clarifies the design space available to DAO organizers, reveals significant divergences in how states balance autonomy against accountability, and provides a factual foundation for the federal regulatory and judicial actors who will inevitably confront these entities.

# Introduction

When the Commodity Futures Trading Commission sought to hold Ooki DAO liable for operating an unregistered trading platform, the Commission could not identify any person to serve with process.[^1] Ooki DAO had no officers, no registered agent, and no physical address; its governance protocol operated through token-holder voting on a blockchain. A federal court permitted service by posting in Ooki DAO's online help chat and forum, and subsequently entered a default judgment confirming substantive jurisdiction over the entity.[^2] The underlying problem, however, was structural: the entity lacked the human governance infrastructure that legal process presupposes. Similar difficulties have arisen in private litigation. In *Sarcuni v. bZx DAO*, a California federal court held that a DAO could be treated as a general partnership, exposing individual token holders to personal liability for the organization's losses.[^3] In *Samuels v. Lido DAO*, the court denied the defendants' motion to dismiss, rejecting arguments that a DAO was too decentralized to be sued as an unincorporated association and reasoning that "decentralization" did not immunize an entity from the obligations that attend collective economic activity.[^4]

These cases expose a tension that state legislatures have begun to address. Decentralized autonomous organizations operate through smart contracts on blockchains, and their proponents value precisely the qualities that create legal difficulty: pseudonymous participation, algorithmic execution, and resistance to centralized control. Granting legal personality to such organizations requires determining what minimum institutional structure the law will demand in exchange for the benefits of entity status: limited liability, capacity to contract, and standing to sue and be sued.

This determination takes on particular urgency in light of Shawn Bayern's demonstration that existing LLC law may already permit zero-member entities managed entirely by software.[^5] Bayern showed that the Revised Uniform Limited Liability Company Act permits a sole human member to assign management authority to an algorithm and then withdraw, creating a perpetual entity with no human governance at all.[^6] Lynn LoPucki subsequently warned that such "algorithmic entities" could facilitate regulatory arbitrage and criminal exploitation by creating organizations with no identifiable human accountable for the entity's conduct.[^7] The state DAO statutes examined in this Article respond directly to this doctrinal baseline. Each legislature, confronting the possibility that existing law permitted fully autonomous entities, chose to establish affirmative requirements for human governance as a condition of DAO recognition. The statutes do not merely accommodate DAOs within existing frameworks; they impose floors that existing LLC law did not itself provide.

Between 2021 and 2024, four states enacted purpose-built DAO statutes: Wyoming in 2021 (substantially amended in 2022), Tennessee in 2022, Utah in 2023 (effective January 1, 2024), and New Hampshire in 2024 (effective July 1, 2025).[^8] Each statute takes a different approach to the foundational question of how to fit a blockchain-native organization into existing legal architecture. Wyoming and Tennessee wrap the DAO in a limited liability company; Utah creates a freestanding "limited liability decentralized autonomous organization" (LLD); New Hampshire establishes a blockchain-native registry for an entirely new entity type.[^9] Despite these structural differences, all four statutes share a common feature: every one conditions legal recognition on a minimum threshold of human governance. No state has created a pathway for a fully autonomous, human-free organization to obtain legal personality.

This Article identifies and maps what it calls the "human governance floor," the irreducible minimum of human-governance requirements that each state imposes as the price of DAO recognition. Across all four statutes, the floor has three consistent elements: an identified natural person associated with the entity's formation or ongoing operation, a requirement that smart contracts remain amendable through processes that humans can initiate, and a dissolution mechanism triggered when human governance lapses.[^10] Beyond these shared elements, the statutes diverge significantly in how they structure the floor's specific requirements, and these divergences have practical consequences for DAO organizers choosing a jurisdiction, for courts adjudicating disputes involving DAOs, and for federal regulators assessing whether state-recognized DAOs satisfy federal legal prerequisites.

A note on scope. Vermont enacted a blockchain-based limited liability company (BBLLC) statute in 2018, creating the first state-level business entity statute to reference blockchain technology.[^11] Vermont's BBLLC is a standard LLC that "operates, in whole or in part, through blockchain technology."[^12] The BBLLC statute imposes no DAO-specific governance requirements and presupposes the full apparatus of traditional LLC governance. Because the BBLLC statute neither targets DAOs specifically nor addresses the governance challenges unique to them, this Article excludes it from the primary comparative analysis. The four statutes examined here are the ones that grapple directly with the question of how much human governance a decentralized autonomous organization must maintain. Prior comparative work has examined subsets of these statutes, principally Wyoming and Tennessee, and in some instances Utah.[^13] This Article's contribution is the first comparative analysis to incorporate New Hampshire's 2024 statute alongside the three earlier frameworks, using a systematic five-dimension approach to identify the convergent human governance floor.

Part I describes the four statutory frameworks, identifying each statute's entity structure, relationship to background law, and distinctive features. Part II conducts a comparative analysis across five governance dimensions: management structure and smart contract amendability, fiduciary duties and standards of conduct, liability protection and its boundaries, information rights and transparency, and dissolution triggers and failure mechanisms. Part III synthesizes these comparisons to identify the human governance floor, describing what every statute requires, what those requirements address, and where the statutes diverge in ways that matter for organizers and courts.

# I. The Four Frameworks

## A. Wyoming: The LLC Wrapper and Its Reversal

Wyoming enacted the first American DAO statute in 2021, structuring the decentralized autonomous organization as a species of limited liability company governed by a supplement to the Wyoming Limited Liability Company Act.[^14] A DAO organizes by filing articles of organization with the secretary of state that include a statement identifying the entity as a decentralized autonomous organization and a publicly available identifier for any smart contract directly used to manage the organization.[^15] The LLC Act applies to DAOs except where the supplement's provisions are inconsistent.[^16]

As originally enacted, the 2021 statute permitted DAOs to be either "member managed" or "algorithmically managed," with the latter category permitting governance by smart contract with no human management intermediary.[^17] Wyoming reversed course one year later. In the 2022 amendments, the legislature repealed the "algorithmically managed" category entirely, replacing the binary classification with a single management structure: DAOs "shall be managed by the members."[^18] Articles of organization must now "establish how" the DAO will be managed, "including to what extent the management will be conducted" algorithmically, but management authority vests in members, that is, natural or legal persons, not autonomous code.[^19]

Three additional changes in the 2022 amendments reinforced the turn toward human control. First, the legislature made smart contract upgradeability universal: "All smart contracts utilized by a decentralized autonomous organization shall be capable of being updated, modified or otherwise upgraded."[^20] Under the original statute, only algorithmically managed DAOs needed upgradeable contracts; the 2022 amendments applied this requirement to every DAO regardless of how the DAO distributes management authority. Second, the legislature added a dissolution trigger tied to human control: a DAO "shall be dissolved" if the DAO "is no longer under the control of at least one (1) natural person."[^21] No other dissolution trigger in the statute is as stark. Third, the amendments added a thirty-day deadline for newly formed DAOs to provide a publicly available identifier to the secretary of state, with automatic dissolution as the penalty for noncompliance.[^22]

A critical ambiguity remains in the 2022 amendments. The statute does not define "control" for purposes of the natural-person dissolution trigger. Whether a DAO with one nominal human signer and thousands of pseudonymous token holders satisfies the requirement that the DAO remain "under the control of at least one (1) natural person" is an open question with no judicial precedent.[^23] The gap illuminates the difference between formal compliance with the floor's letter and substantive compliance with the floor's purpose. A DAO that designates a natural person as a nominal member but vests all practical decision-making authority in smart contracts may satisfy the statute's text while frustrating the legislature's evident intent to ensure meaningful human governance. Courts confronting this provision will need to determine whether "control" requires operational authority over the organization's affairs or merely formal association with the entity. That determination will shape the practical reach of Wyoming's human governance floor.

Wyoming's trajectory, from accommodating fully algorithmic governance in 2021 to mandating human control in 2022, is itself significant. Within a single year, the first-mover legislature concluded that entity recognition without human governance was unworkable.

## B. Tennessee: The Two-Track LLC

Tennessee's 2022 statute follows Wyoming's LLC-wrapper approach but retains the dual management structure that Wyoming abandoned.[^24] A Tennessee decentralized organization is a limited liability company whose articles of organization contain a statement identifying the entity as such, and the Tennessee Revised Limited Liability Company Act applies to the extent not inconsistent with the DAO supplement.[^25] Organizers elect between two tracks: member-managed, in which the DAO's members direct its affairs, or smart contract-managed, in which the smart contract governs.[^26]

Tennessee placed a critical constraint on the smart contract-managed track. A smart contract-managed decentralized organization "may only form under this chapter if the underlying smart contracts are able to be amended."[^27] This provision ensures that even where code manages the organization's affairs, human intervention remains structurally possible. Smart contract-managed does not mean unalterable.

Like Wyoming, Tennessee requires articles of organization to include a publicly available identifier for the smart contract directly used to manage, facilitate, or operate the organization.[^28] Formation requires at least one member to sign and deliver the articles, ensuring a natural person is associated with the entity's creation.[^29] Registered names must include "DO," "DAO," "DO LLC," or "DAO LLC," making DAO status publicly visible.[^30]

Tennessee's treatment of fiduciary duties and dissolution tracks Wyoming's structure closely but with distinctive terms. Members of a decentralized organization owe no fiduciary duty to the organization or to one another by default, though members remain subject to the implied contractual covenant of good faith and fair dealing.[^31] Dissolution occurs upon events including majority member vote, failure to approve proposals or take actions for one year, and order of the secretary of state if the organization is deemed to no longer perform a lawful purpose.[^32] Tennessee does not include Wyoming's explicit "natural person control" dissolution trigger. Tennessee's one-year inactivity provision reaches the same outcome as Wyoming's natural-person trigger in the specific case where loss of human governance produces organizational inaction, but the two triggers diverge in their doctrinal structure and may produce different outcomes in cases where automated systems continue functioning after human control lapses. A DAO whose smart contracts continue executing transactions automatically, without any human member approving proposals or taking governance actions, would eventually trigger Tennessee's inactivity provision only if the smart contracts' execution does not constitute "actions" within the meaning of the statute. Wyoming's trigger, by contrast, operates categorically: loss of natural-person control mandates dissolution regardless of whether the DAO remains operationally active.

## C. Utah: The Freestanding LLD

Utah departed from the LLC-wrapper model in 2023 (effective January 1, 2024), creating a "limited liability decentralized autonomous organization" (LLD) as a freestanding entity type under a dedicated chapter of the Utah Code.[^33] Where the background LLC act fills gaps in Wyoming and Tennessee, Utah's DAO Act establishes an independent governance hierarchy: the statute takes primacy, followed by the organization's by-laws, then the Utah Revised Uniform Limited Liability Company Act as a residual gap-filler, and finally principles of law and equity.[^34]

Utah's formation requirements are the most demanding of the four statutes. At least one organizer must be an individual, a natural person, not a juridical entity.[^35] The organization must submit evidence that it meets nine substantive requirements, including deployment on a permissionless blockchain, a unique public address for monitoring transactions, publicly available source code that has undergone quality assurance, a graphical user interface displaying key smart contract variables and by-laws, decentralized governance, at least one member, a publicly specified communication mechanism for contacting the registered agent, and a binding dispute resolution mechanism.[^36] By-laws must be "set out in plain terms."[^37]

Utah introduced two concepts absent from the earlier statutes. First, the "legal representative": "an individual appointed in the manner specified in the by-laws of a decentralized autonomous organization to perform procedural functions off-chain on behalf of" the organization.[^38] Every LLD must retain a legal representative for tasks that cannot be achieved on-chain, creating a mandatory human agent for the entity's interactions with the legal system.[^39] Second, the statute defines "failure event" as a software error or exploit that either renders the organization inoperative or fundamentally changes its expected operation.[^40] A failure event may trigger personal liability on the person deploying or upgrading the organization if that person acted in bad faith or engaged in gross negligence.[^41]

Utah also addresses blockchain forks and organizational restructuring in detail, providing rules for asset allocation between majority and minority chains after a contentious hard fork and preserving legal personality through restructuring if the reconstituted organization satisfies formation requirements.[^42]

## D. New Hampshire: The Blockchain-Native Registry

New Hampshire's 2024 statute (effective July 1, 2025) represents the most structurally distinctive approach.[^43] Like Utah, New Hampshire creates a freestanding entity type, a "decentralized autonomous organization," rather than wrapping the DAO in an LLC.[^44] Unlike any other state, New Hampshire mandates that the state's DAO registry itself operate on a blockchain. The Secretary of State must establish and administer the registry as "a blockchain system," and that system must be "a permissionless and open-source Free and Open-Source Software" blockchain.[^45]

New Hampshire's gap-filler statute is RSA 304-C, a general provision for miscellaneous business associations, rather than the state's LLC act.[^46] Registration requires filing a registration statement that includes, among other items, governance documents "written in plain language comprehensible by a layperson."[^47] The statute requires every New Hampshire DAO to maintain a registered agent who is an individual residing in the state, establishing a natural-person nexus at the point of legal process.[^48] This requirement addresses the precise problem the *Ooki DAO* litigation exposed: an entity that cannot be served because no identifiable person stands behind the organization. New Hampshire does not, however, independently require that the entity's organizer be a natural person, distinguishing the state's approach from Utah's unambiguous individual-organizer mandate.[^49]

New Hampshire tracks Utah in requiring a "legal representative" but defines the term differently. Where Utah specifies that the legal representative must be "an individual," unambiguously a natural person, New Hampshire defines the legal representative as "a person appointed in the manner specified in the governance documents of a decentralized autonomous organization to perform procedural functions off-chain."[^50] Because "person" in New Hampshire statutory usage includes entities, an LLD or corporation could potentially serve as legal representative, whereas Utah requires a flesh-and-blood human.

New Hampshire's statute is the most detailed of the four on several governance dimensions. The statute requires open-source and publicly accessible software and monitoring tools, mandating transparency that goes beyond the blockchain-readability provisions of other states.[^51] New Hampshire addresses contentious blockchain forks with provisions similar to Utah's, establishing default rules for asset allocation between majority and minority chains.[^52] Annual renewal is required rather than the perpetual existence that LLC-based DAOs enjoy, creating an ongoing compliance checkpoint.[^53] The Attorney General may initiate deregistration through judicial proceedings, and the statute requires the registry vendor to provide technical assistance in such proceedings.[^54]

# Ii. Comparative Analysis

## A. Management Structure and Smart Contract Amendability

All four statutes address the same structural question, who or what manages the DAO, but the answers vary in form and implication. Wyoming now requires member management, with flexibility to define the extent of algorithmic involvement in articles of organization.[^55] Tennessee preserves the choice between member management and smart contract management.[^56] Utah vests governance in members as a class by default (if by-laws do not mandate administrators), with an optional administrator structure specified in by-laws.[^57] New Hampshire's statute does not mandate a specific management structure but requires governance documents to establish the procedures for organizational decision-making.[^58]

On smart contract amendability, the statutes converge. Wyoming mandates that "all smart contracts" utilized by a DAO be "capable of being updated, modified or otherwise upgraded."[^59] Tennessee conditions smart contract-managed formation on the underlying contracts being "able to be amended."[^60] Utah's formation requirements, including quality assurance, GUI access to key variables, and publicly available code, presuppose a software architecture that permits human review and modification, even without a single amendability sentence.[^61] New Hampshire requires governance documents to specify procedures for amending smart contracts and organizational rules.[^62]

The convergence on amendability reflects a shared legislative judgment: immutable code is incompatible with legal entity status. If a smart contract cannot be changed, no human decision can correct errors, respond to changed circumstances, or comply with legal obligations. Amendability is not merely a technical preference; amendability is the mechanism through which human governance maintains authority over algorithmic execution.

## B. Fiduciary Duties and Standards of Conduct

Fiduciary duties, the obligations of loyalty, care, and good faith that traditionally bind those who manage other people's assets, receive strikingly different treatment across the four statutes. Wyoming allows fiduciary duties to be "define\[d\], reduce\[d\], or eliminate\[d\]" in the articles of organization, smart contracts, or operating agreement, as stated in the mandatory disclosure notice required at formation.[^63] Because Wyoming DAOs are LLCs, the default duties of Wyoming LLC law apply unless modified, and the extent of permissible modification follows the Wyoming LLC Act's parameters.

Tennessee's mandatory disclosure notice is nearly identical to Wyoming's, permitting the articles, smart contracts, and operating agreement to "define, reduce, or eliminate fiduciary duties."[^64] Critically, Tennessee provides that members of a decentralized organization do not owe fiduciary duties by default but remain subject to the implied contractual covenant of good faith and fair dealing.[^65] This provision establishes a statutory floor: whatever the governing documents say about fiduciary duties, the duty of good faith survives.

Utah goes further in limiting fiduciary obligations. No "developer, member, participant, or legal representative" may have fiduciary duties imputed toward each other or third parties "solely on account of their role," unless the person explicitly holds out as a fiduciary or stipulates to fiduciary status in the by-laws.[^66] No implied covenant of good faith appears as a statutory backstop; Utah's RULLCA gap-filler presumably supplies one, but the statute does not make this explicit.

New Hampshire does not address fiduciary duties in its DAO statute, leaving the question to RSA 304-C gap-filler provisions and common law.[^67] This silence may reflect confidence in background law or an intentional decision to leave the question to judicial development.

## C. Liability Protection and Its Boundaries

Limited liability is the primary incentive for DAO organizers to seek state recognition, and all four statutes provide limited liability, but with meaningfully different boundaries.

Wyoming and Tennessee, as LLC wrappers, provide limited liability through their respective LLC acts. Members are not personally liable for the organization's obligations, though the standard conditions for piercing the LLC veil presumably apply.[^68] Neither statute explicitly addresses the liability consequences of software failures.

Utah provides limited liability through its dedicated statute, with three distinctive features. First, a member "may only be liable for the on-chain contributions that the member has committed to the decentralized autonomous organization."[^69] This provision raises an interpretive ambiguity that warrants close attention. Read as a ceiling on member exposure, the provision affirmatively caps liability at committed on-chain contributions rather than shielding against entity obligations generally, a narrower protection than a standard LLC liability shield. Read as a floor, the provision establishes minimum liability, the member is at least liable for committed contributions, while leaving open the possibility that additional liability attaches under other provisions. The Utah RULLCA gap-filler in section 48-5-102(3) complicates the analysis: if the standard LLC liability shield supplements the DAO-specific provision, members would enjoy both the general LLC shield and the on-chain-contribution limitation; if the DAO-specific provision displaces the general shield, members face a different liability profile than traditional LLC members. Until a court interprets section 48-5-202(1)(a) in conjunction with the gap-filler hierarchy, organizers should assume the more restrictive reading and structure contributions accordingly.

Second, if a DAO refuses to comply with an enforceable judgment, order, or award, members who voted against compliance "may be liable for any monetary payments ordered in the judgment, order, or award in proportion to the member's share of governance rights."[^70] This provision, unique among the four statutes, creates personal liability for governance decisions, specifically the decision to defy a legal obligation. The provision is the most direct example of a state linking liability to the exercise (or refusal) of human governance. Third, personal liability for torts is unaffected: members remain liable for their own wrongful acts or omissions.[^71]

Utah's failure-event liability is also distinctive. When a software error or exploit renders the organization inoperative or fundamentally changes its expected operation, the person who deployed or upgraded the software may face personal liability if that person "acted in bad faith" or "engaged in gross negligence."[^72] This provision creates a liability channel that runs not from members through the entity, but from users back to developers, a reversal of the traditional principal-agent direction.

New Hampshire provides limited liability through its statute, with the legal representative shielded from personal liability for acts performed on behalf of the organization.[^73] As with Utah, the details of member liability protection depend on the gap-filler statute (RSA 304-C) and the governance documents.

## D. Information Rights and Transparency

Information rights, the ability of members to inspect organizational records and demand financial disclosures, represent a tension between blockchain transparency and traditional governance expectations. All four statutes address this tension, and all four resolve the tension the same way: where information is available on a public blockchain, the traditional right to inspect books and records does not apply.

Wyoming provides that, to the extent information is available on an open blockchain, members and dissociated members have no right to separately inspect or copy records, and the organization has no obligation to furnish information about its activities, financial condition, or other circumstances.[^74] Tennessee's language is nearly identical, substituting "publicly available distributed ledger technology" for "open blockchain."[^75]

Utah imposes transparency requirements through formation conditions rather than through member inspection rights. Every LLD must provide a graphical user interface that allows any person, not just members, to read key smart contract variables, monitor all transactions, view by-laws, and access restrictions on token redemption.[^76] By-laws must be set out in plain terms.[^77] Source code must be publicly available and must have undergone quality assurance.[^78] Utah's approach substitutes universal public transparency for the member-specific inspection rights found in traditional entity law.

New Hampshire requires governance documents to be "written in plain language comprehensible by a layperson" and mandates open-source, publicly accessible software and monitoring tools.[^79] Like Utah, New Hampshire shifts the transparency model from private inspection rights to public accessibility, and New Hampshire's blockchain-native registry ensures that registration data itself resides on a publicly verifiable ledger.

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ***Dimension***                 **Wyoming**                             **Tennessee**                              **Utah**                                                                **New Hampshire**
  ------------------------------- --------------------------------------- ------------------------------------------ ----------------------------------------------------------------------- ---------------------------------------------------------
  *Entity type*                   LLC wrapper                             LLC wrapper                                Freestanding LLD                                                        Freestanding DAO

  *Gap-filler law*                Wyoming LLC Act                         Tennessee RLLCA                            Utah RULLCA (residual)                                                  RSA 304-C

  *Natural-person organizer*      Not explicit (members sign articles)    Not explicit (member signs articles)       Yes (individual organizer required)                                     Not required (natural-person registered agent required)

  *Management structure*          Member-managed only (2022)              Member-managed or smart contract-managed   Members as class; optional administrator                                Per governance documents

  *Smart contract amendability*   Universal mandate                       Condition of SC-managed formation          Presupposed by formation conditions                                     Per governance documents

  *Fiduciary duties*              Modifiable per LLC Act                  No default duties; good faith survives     No imputed duties; opt-in only                                          Silent (gap-filler)

  *Liability shield*              Standard LLC                            Standard LLC                               On-chain contributions ceiling; deployer liability for failure events   Per statute and gap-filler

  *Information rights*            Blockchain substitutes for inspection   Blockchain substitutes for inspection      Universal GUI transparency                                              Open-source mandate

  *Dissolution trigger*           Loss of natural-person control          One year of inactivity                     Failure event (liability, not dissolution)                              AG deregistration; annual renewal
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  : . Comparative Summary of State DAO Statutes Across Five Governance Dimensions.

## E. Dissolution, Failure, and the Limits of Autonomy

Dissolution provisions reveal how each state defines the boundaries of permissible autonomy, the point at which the legal system reclaims authority over an entity that has ceased to function as the statute intends.

Wyoming provides five dissolution triggers: expiration of a fixed duration, majority member vote, events specified in the articles or smart contracts, the organization ceasing to perform a lawful purpose or ceasing to be "under the control of at least one (1) natural person," and withdrawal of all members.[^80] The natural-person-control trigger, added in 2022, is the most direct legislative statement that a DAO without human governance forfeits entity status. A court may also order dissolution upon finding that any of these events has occurred.[^81]

Tennessee provides five dissolution triggers: expiration of fixed duration, majority vote of a member-managed organization's members, events specified in the smart contracts, articles, or operating agreement, failure to approve proposals or take actions for one year, and order of the secretary of state if the organization is deemed to no longer perform a lawful purpose.[^82] Tennessee lacks Wyoming's explicit natural-person trigger, but Tennessee's one-year inactivity provision serves an overlapping function in the specific case where loss of human governance produces organizational inaction. An organization incapable of human decision-making will fail to approve proposals or take actions within twelve months, triggering dissolution by operation of statute.

Utah does not include a dissolution section per se, but Utah's failure-event and restructuring provisions serve an analogous function. A "failure event," a software error or exploit that renders the organization inoperative or fundamentally changes its expected operation, does not automatically dissolve the entity; instead, legal personality and limited liability are "maintained to the extent necessary to protect decentralized autonomous organization members and participants from personal liability."[^83] Utah also prohibits members from compelling dissolution for failure to return on-chain contributions, channeling exit through the by-laws' exit rules rather than judicial dissolution.[^84] The practical effect is that Utah LLDs are harder to dissolve involuntarily than their Wyoming and Tennessee counterparts, but the failure-event liability provisions ensure that software failures have consequences for the humans responsible.

New Hampshire authorizes deregistration through judicial proceedings initiated by the Attorney General, with the registry vendor required to provide technical assistance.[^85] Annual renewal operates as an additional check: an organization that fails to renew its registration loses its registered status. New Hampshire also addresses contentious blockchain forks, providing that the legal representative remains on the majority chain by default and establishing rules for organizations that choose to maintain presence on a minority chain.[^86]

# Iii. The Human Governance Floor

## A. What Every Statute Requires

Across all four statutes, three requirements recur without exception. First, each statute requires at least one identified natural person at or near the point of formation. Wyoming requires "one or more members" to sign and deliver articles of organization, with a registered agent reachable through standard legal channels.[^87] Tennessee requires at least one member to sign and deliver the articles.[^88] Utah mandates that at least one organizer be "an individual."[^89] New Hampshire requires a registered agent who is an individual residing in the state, establishing a natural-person nexus at the entity's point of contact with the legal system.[^90] The four statutes converge on the principle that a flesh-and-blood human must be identifiable in connection with the entity's creation or legal presence, but the statutes diverge on the precise role that natural person must fill. Utah's requirement is the most exacting: the organizer, the person who forms the entity, must be an individual. Wyoming and Tennessee require a member to sign formation documents. New Hampshire requires a natural-person registered agent but does not independently require a natural-person organizer, a distinction that matters because an organizer bears formation responsibility while a registered agent serves as the entity's recipient of legal process. New Hampshire's approach ensures that the problem in *Ooki DAO*, an entity with no identifiable person to receive service, cannot arise for a registered New Hampshire DAO, but the state does not require human involvement at the formation-decision level with the same specificity as Utah.

Second, each statute requires that the organization's smart contracts remain amendable by human decision. Wyoming mandates universal upgradeability.[^91] Tennessee conditions smart contract-managed formation on amendability.[^92] Utah's formation conditions, requiring quality assurance, public code, and a GUI for monitoring key variables, presuppose amendable architecture.[^93] New Hampshire requires governance documents to specify amendment procedures.[^94] No state permits an organization to lock its code beyond human alteration and still claim legal personality.

Third, each statute provides a mechanism for dissolution or deregistration when human governance fails. Wyoming's trigger is explicit: loss of natural-person control.[^95] Tennessee's trigger is functional: one year without proposals or actions.[^96] Utah channels failure through liability rather than dissolution, holding deployers personally accountable when software errors or exploits cause harm.[^97] New Hampshire combines annual renewal with Attorney General-initiated deregistration.[^98] The mechanisms differ, but the principle is uniform: an entity that ceases to be subject to human governance cannot persist indefinitely as a legal person.

## B. What the Floor Addresses

These requirements respond to identifiable problems that arise when organizations lack human governance infrastructure. Federal courts have already encountered each of these problems.

Service of process requires a person or agent capable of receiving legal notice. Ooki DAO had none, and the court improvised a solution that would not generalize.[^99] Every state statute addresses this by requiring a registered agent (Wyoming, Tennessee) or legal representative with a publicly specified communication mechanism (Utah, New Hampshire). An identifiable human at formation addresses the minimum institutional requirement for legal process.

Remediation of errors requires the ability to alter code. Smart contracts, once deployed, execute deterministically; a coding error in a deployed contract cannot be corrected unless the architecture permits modification. The 2022 Beanstalk exploit demonstrated the consequences of governance structures that could not respond quickly to exploit conditions: an attacker used a flash-loan governance attack to drain approximately \$182 million from a DeFi protocol by temporarily acquiring a controlling governance stake, proposing and executing a malicious governance proposal, and withdrawing the funds in a single transaction block.[^100] Every state statute addresses this by requiring smart contract amendability, ensuring that human decision-making can override algorithmic execution when circumstances demand it.

Accountability for collective action requires identifying who bears responsibility when an organization causes harm. The *Sarcuni* court's general-partnership holding, imposing joint and several liability on individual token holders, was a blunt response to the absence of any governance structure that could channel liability in a more calibrated way.[^101] LoPucki warned in 2018 that autonomous entities without human governance would create precisely this accountability gap, enabling organizations to cause harm with no identifiable person answerable for the entity's conduct.[^102] State DAO statutes address this by providing limited liability in exchange for minimum governance requirements, creating an incentive structure that favors formal organization over legal limbo.

## C. Where the Statutes Diverge

Beyond the shared floor, the four statutes diverge in ways that create meaningfully different governance regimes. Three divergences are particularly significant.

First, the statutes differ on the entity's relationship to background law. Wyoming and Tennessee DAOs are LLCs, and the full apparatus of LLC law, including judicial dissolution, derivative actions, and the implied covenant of good faith, applies as a gap-filler. Utah's LLD draws on the RULLCA but establishes an independent governance hierarchy in which the statute takes primacy over the LLC act. New Hampshire uses RSA 304-C, a general business-association statute with less developed case law, as its gap-filler.[^103] For organizers and their counsel, the choice of background law is a choice about the body of precedent and statutory default rules that will fill gaps in the governing documents.

Second, the statutes differ on whether the mandatory human agent must be a natural person. Utah requires the legal representative to be "an individual," unambiguously a natural person.[^104] New Hampshire defines its legal representative as "a person," which under New Hampshire statutory construction includes entities.[^105] Wyoming and Tennessee do not use the "legal representative" concept, relying instead on registered agents and member management. An organizer concerned about ensuring continuous human oversight would find Utah's requirement most exacting; an organizer seeking flexibility might prefer New Hampshire's broader definition.

Third, the statutes differ on the consequences of technological failure. Wyoming and Tennessee rely on dissolution as the primary remedy when governance breaks down. Utah preserves entity status through failure events but channels consequences to the deployer through a bad-faith or gross-negligence liability standard.[^106] New Hampshire combines deregistration with annual renewal, creating an administrative rather than judicial mechanism for removing non-compliant organizations from the registry. These are not merely procedural differences; they reflect different judgments about whether the primary risk of DAO failure is entity persistence (addressed by dissolution), developer accountability (addressed by deployer liability), or regulatory oversight (addressed by administrative deregistration).

# Conclusion

Every state that has enacted a purpose-built DAO statute has required, as a condition of legal recognition, a minimum threshold of human governance. No legislature has created a pathway for a fully autonomous entity, one with no identified human at formation, no mechanism for human amendment of its governing code, and no dissolution trigger for loss of human control. This convergence is not the product of coordination; the four statutes were enacted by different legislatures, in different years, with different structural approaches. Wyoming wraps the DAO in an LLC and reversed its initial accommodation of algorithmic management within a year. Tennessee retains the dual-track structure but constrains smart contract management through an amendability requirement. Utah creates a freestanding entity with the most demanding formation conditions and channels failure consequences to developers. New Hampshire establishes a blockchain-native registry with annual renewal and attorney-general enforcement.

What remains open is substantial. The definition of "control" in Wyoming's natural-person dissolution trigger has not been judicially tested. Utah's deployer-liability provision for failure events has no federal analogue and no interpretive precedent. The interpretive ambiguity in Utah's on-chain-contribution liability provision remains unresolved. New Hampshire's statute has not yet taken effect.

Equally open is the interface between these state frameworks and federal law. No state has yet confronted, through case law, how these DAO statutes interact with federal securities regulation under the Securities Exchange Act, commodity regulation under the Commodity Exchange Act, bank regulation under 12 U.S.C. section 1813, or anti-money-laundering requirements under the Bank Secrecy Act (31 U.S.C. section 5312). Whether a state-recognized DAO satisfies federal prerequisites for standing to sue in federal court, capacity to hold a federal license, eligibility for bankruptcy protection, or treatment under federal tax law depends on whether federal law recognizes the state entity status. The CFTC's successful prosecution of Ooki DAO and the SEC's 2017 DAO Report both demonstrate that federal regulators will assert jurisdiction over decentralized organizations regardless of state-law entity status.[^107] The interaction between these four state frameworks and the federal regulatory apparatus is a priority for future scholarship.

What is established is the floor itself. State legislatures have concluded that legal personality requires human governance, not total human control, but a minimum: an identifiable person, amendable code, and a mechanism for reclaiming authority when human governance disappears. The variation above the floor is substantial and consequential, but the floor itself is consistent. For DAO organizers, the practical implication is that any entity seeking state recognition must build human governance into its structure from the outset. For courts, the implication is that state-recognized DAOs have, by definition, human actors who can be identified, served, and held accountable within the constraints of the applicable statute. For federal regulators and legislators, the implication is that the states have already answered the threshold question, DAOs that want legal personality must have people, and the remaining questions concern how much human governance is enough, and for what purposes.

[^1]: CFTC v. Ooki DAO, No. 3:22-cv-05416-WHO, 2022 WL 17822445 (N.D. Cal. Dec. 20, 2022) (permitting alternative service on a DAO with no registered agent or identifiable officers).

[^2]: CFTC v. Ooki DAO, No. 3:22-cv-05416-WHO, 2023 WL 5321568 (N.D. Cal. Aug. 17, 2023) (entering default judgment and confirming substantive jurisdiction over the entity). The court authorized service by posting in Ooki DAO's online help chat and discussion forum, reasoning that these were the channels most likely to reach the entity's participants. *Id.*

[^3]: Sarcuni v. bZx DAO, 644 F. Supp. 3d 807, 818--20 (S.D. Cal. 2022) (holding that a DAO could be treated as a general partnership under California law, exposing token holders to personal liability).

[^4]: Samuels v. Lido DAO, No. 2:23-cv-02226, 2024 WL 1288513 (N.D. Cal. Mar. 28, 2024) (denying motion to dismiss claims against Lido DAO as an unincorporated association and reasoning that venture capital investors Paradigm, a16z, and Dragonfly were potentially liable as general partners).

[^5]: *See* Shawn Bayern, *Of Bitcoins, Independently Wealthy Software, and the Zero-Member LLC*, 108 Nw. U. L. Rev. 1485 (2014) (demonstrating that existing LLC law permits the formation of perpetual zero-member entities managed entirely by software).

[^6]: *See id.* at 1495--97 (describing the technique: form LLC, assign management to an algorithm, and withdraw the sole human member under RULLCA section 701(a)(3)'s 90-day window).

[^7]: *See* Lynn M. LoPucki, *Algorithmic Entities*, 95 Wash. U. L. Rev. 887 (2018) (arguing that autonomous entities without human governance facilitate regulatory arbitrage and criminal exploitation by creating organizations with no identifiable human accountable for the entity's conduct).

[^8]: Wyoming: Wyo. Stat. Ann. sections 17-31-101 to 17-31-116 (enacted 2021 Wyo. Sess. Laws ch. 73 (SF0038); amended 2022 Wyo. Sess. Laws ch. 16 (SF0068)). Tennessee: Tenn. Code Ann. sections 48-250-101 to 48-250-115 (enacted 2022). Utah: Utah Code Ann. sections 48-5-101 to 48-5-406 (enacted 2023 Utah Laws ch. 85; effective Jan. 1, 2024). New Hampshire: N.H. Rev. Stat. Ann. sections 301-B:1 to 301-B:31 (enacted 2024 N.H. Laws ch. 263; effective July 1, 2025).

[^9]: *See infra* Part I (describing each framework's structural approach).

[^10]: *See infra* Part III (identifying and mapping the human governance floor across all four statutes).

[^11]: 11 V.S.A. sections 4171--4176 (enacted 2018) (creating the "blockchain-based limited liability company" (BBLLC), the first state-level business entity statute to reference blockchain technology).

[^12]: 11 V.S.A. section 4173(1) (defining BBLLC as an LLC that "operates, in whole or in part, through blockchain technology" for purposes including participant identity verification, record ownership, and voting).

[^13]: *See, e.g.*, Carla L. Reyes, *Autonomous Corporate Personhood*, 96 Wash. L. Rev. 1453 (2021) (analyzing Wyoming's framework and proposing an autonomy-based regulatory taxonomy); Robert D. Brown et al., *Decentralized Autonomous Organization and AI Legal Personhood*, in Oxford Intersections: AI in Society (Oxford Univ. Press 2025) (comparing Wyoming and Tennessee approaches); Shawn Bayern, Thomas Burri, Thomas D. Grant et al., *Company Law and Autonomous Systems: A Blueprint for Lawyers, Entrepreneurs, and Regulators*, 9 Hastings Sci. & Tech. L.J. 135 (2017) (providing a comparative framework for autonomous entity regulation).

[^14]: Wyo. Stat. Ann. section 17-31-101 (short title: "Wyoming Decentralized Autonomous Organization Supplement"); *id.* section 17-31-103(a) ("The Wyoming Limited Liability Company Act applies to decentralized autonomous organizations to the extent not inconsistent with the provisions of this chapter.").

[^15]: Wyo. Stat. Ann. section 17-31-106(a)--(b) (requiring articles to include a DAO designation statement pursuant to section 17-31-104 and a publicly available identifier of any smart contract directly used to manage the organization).

[^16]: Wyo. Stat. Ann. section 17-31-103(a).

[^17]: 2021 Wyo. Sess. Laws ch. 73 (SF0038), section 17-31-104(e) (as originally enacted, permitting articles to "define the decentralized autonomous organization as either a member managed decentralized autonomous organization or an algorithmically managed decentralized autonomous organization").

[^18]: 2022 Wyo. Sess. Laws ch. 16 (SF0068), section 17-31-104(e) (as amended: "A statement in the articles of organization shall establish how the decentralized autonomous organization shall be managed by the members, including to what extent the management will be conducted algorithmically."); *id.* section 17-31-109 ("Management of a decentralized autonomous organization shall be vested in its members and any applicable smart contracts.").

[^19]: *Id.* section 17-31-104(e).

[^20]: Wyo. Stat. Ann. section 17-31-109 (as amended 2022) ("All smart contracts utilized by a decentralized autonomous organization shall be capable of being updated, modified or otherwise upgraded.").

[^21]: Wyo. Stat. Ann. section 17-31-114(a)(v) (as amended 2022) (providing for dissolution when the DAO "no longer performs a lawful purpose or is no longer under the control of at least one (1) natural person").

[^22]: Wyo. Stat. Ann. section 17-31-105(e) (as amended 2022) (requiring the publicly available identifier within thirty days of filing, with dissolution by the secretary of state if the identifier is not timely provided).

[^23]: *See id.* section 17-31-114(a)(v) (using "control" without further definition). No Wyoming court has interpreted this provision.

[^24]: Tenn. Code Ann. sections 48-250-101 to 48-250-115 (2022).

[^25]: Tenn. Code Ann. section 48-250-102(a) ("The Tennessee Revised Limited Liability Company Act, compiled in chapter 249 of this title, applies to decentralized organizations to the extent not inconsistent with this chapter."); *id.* section 48-250-103(a) ("A decentralized organization is a limited liability company whose articles of organization contain a statement that the company is a decentralized organization.").

[^26]: Tenn. Code Ann. section 48-250-103(e) ("A statement in the articles of organization may define the decentralized organization as either a member-managed decentralized organization or a smart contract-managed decentralized organization."); *id.* section 48-250-108 (vesting management in members if member-managed, or the smart contract if smart contract-managed).

[^27]: Tenn. Code Ann. section 48-250-104(d) ("A smart contract-managed decentralized organization may only form under this chapter if the underlying smart contracts are able to be amended.").

[^28]: Tenn. Code Ann. section 48-250-105(a)(3) (requiring articles to include "a publicly available identifier of a smart contract directly used to manage, facilitate, or operate the decentralized organization").

[^29]: Tenn. Code Ann. section 48-250-104(a) ("A person may form a decentralized organization by having at least one (1) member sign and deliver one (1) original and one (1) exact or conformed copy of the articles of organization to the secretary of state for filing.").

[^30]: Tenn. Code Ann. section 48-250-103(d) (requiring the registered name to include "DO," "DAO," "DO LLC," or "DAO LLC").

[^31]: Tenn. Code Ann. section 48-250-109 ("Unless otherwise provided for in the articles of organization or operating agreement, a member of a decentralized organization does not have a fiduciary duty to the organization or another member; except, that the member is subject to the implied contractual covenant of good faith and fair dealing.").

[^32]: Tenn. Code Ann. section 48-250-113(a)(1)--(5) (listing dissolution events: period expiration, majority vote of member-managed organization, events specified in smart contracts or articles or operating agreement, failure to approve proposals or take actions for one year, and secretary-of-state order for failure to perform a lawful purpose).

[^33]: Utah Code Ann. sections 48-5-101 to 48-5-406 (effective Jan. 1, 2024).

[^34]: Utah Code Ann. section 48-5-102 (establishing governing document hierarchy: "(1) this act; (2) the by-laws of the decentralized autonomous organization; (3) if this act and a decentralized autonomous organization's by-laws are silent, the provisions of Chapter 3a, Utah Revised Uniform Limited Liability Company Act; and (4) principles of law and equity").

[^35]: Utah Code Ann. section 48-5-201(1)(b) ("At least one of the organizers of a decentralized autonomous organization shall be an individual.").

[^36]: Utah Code Ann. section 48-5-201(3)(a)--(i) (listing formation evidence requirements).

[^37]: Utah Code Ann. section 48-5-203(2) ("The by-laws shall be set out in plain terms.").

[^38]: Utah Code Ann. section 48-5-101(13) ("'Legal representative' means an individual appointed in the manner specified in the by-laws of a decentralized autonomous organization to perform procedural functions off-chain on behalf of a decentralized autonomous organization.").

[^39]: Utah Code Ann. section 48-5-306(1) ("A decentralized autonomous organization shall retain a legal representative to undertake tasks that cannot be achieved on-chain.").

[^40]: Utah Code Ann. section 48-5-101(10) ("'Failure event' means an error in the decentralized autonomous organization's software code or an exploit that: (a) renders the decentralized autonomous organization inoperative; or (b) fundamentally changes the expected operation of the decentralized autonomous organization.").

[^41]: Utah Code Ann. section 48-5-405(2) ("A failure event may trigger liability on the person deploying or upgrading the decentralized autonomous organization if that person: (a) acted in bad faith; or (b) engaged in gross negligence.").

[^42]: Utah Code Ann. sections 48-5-403, 48-5-404 (addressing contentious forks and restructuring, respectively).

[^43]: N.H. Rev. Stat. Ann. sections 301-B:1 to 301-B:31 (enacted 2024 N.H. Laws ch. 263; effective July 1, 2025).

[^44]: *Id.* section 301-B:1 (establishing a new chapter for decentralized autonomous organizations, separate from New Hampshire's LLC or partnership statutes).

[^45]: N.H. Rev. Stat. Ann. section 301-B:14(VI) ("The registry administrator shall undertake reasonable efforts to establish the New Hampshire DAO registry as a blockchain system."); *id.* section 301-B:15(I)(c) ("The software code establishing and maintaining the DAO shall be in open-source format in a public forum to allow anyone to review it.").

[^46]: N.H. Rev. Stat. Ann. section 301-B:28 ("The provisions of RSA 304-C shall apply to New Hampshire DAOs except to the extent that any such provision is inconsistent with any provision of this chapter.").

[^47]: N.H. Rev. Stat. Ann. section 301-B:16(III) ("The bylaws shall be written in plain language comprehensible by a layperson.").

[^48]: N.H. Rev. Stat. Ann. section 301-B:9(I)(b)(1) (requiring a registered agent who is "\[a\]n individual who resides in this state," establishing a natural-person requirement at the entity's point of contact with the legal system for purposes of receiving service of process).

[^49]: *Compare* Utah Code Ann. section 48-5-201(1)(b) (requiring at least one organizer to be "an individual"), *with* N.H. Rev. Stat. Ann. section 301-B:9(I)(b)(1) (requiring only a natural-person registered agent, without an independent natural-person organizer requirement). New Hampshire's registered-agent provision addresses the service-of-process problem but does not impose the same formation-level human involvement as Utah.

[^50]: N.H. Rev. Stat. Ann. section 301-B:5(XIX) ("'Legal representative' means a person who is appointed and authorized by a New Hampshire DAO in a manner specified in the bylaws to perform functions, activities and operations on behalf of the New Hampshire DAO in off-chain interactions and as may be required under this act.").

[^51]: N.H. Rev. Stat. Ann. section 301-B:15(I)(c) ("The software code establishing and maintaining the DAO shall be in open-source format in a public forum to allow anyone to review it.").

[^52]: N.H. Rev. Stat. Ann. section 301-B:25 (addressing contentious blockchain forks, establishing default rules for legal representative authority and asset allocation between majority and minority chains).

[^53]: N.H. Rev. Stat. Ann. section 301-B:12(III) (establishing a filing fee for registration); *id.* section 301-B:31 (directing the Secretary of State to establish the registry with provisions for "registration and annual fee for registry registrants," creating an ongoing compliance requirement).

[^54]: N.H. Rev. Stat. Ann. section 301-B:24 (authorizing deregistration proceedings by the Attorney General, with technical assistance from the registry vendor).

[^55]: *See supra* note 14 and accompanying text.

[^56]: *See supra* note 21 and accompanying text.

[^57]: Utah Code Ann. section 48-5-305(1)--(2) ("Unless mandated in the decentralized autonomous organization's by-laws, a decentralized autonomous organization is not required to have an administrator, including a board of directors or a trustee." In the absence of administrators, "all the powers and tasks of an administrator shall be vested in the decentralized autonomous organization members as a class.").

[^58]: N.H. Rev. Stat. Ann. section 301-B:16(II) ("The bylaws shall accurately reflect the rules, terms, instructions and conditions of the software code that governs the smart contracts and permissionless blockchain network of the New Hampshire DAO, including the rules and regulations that govern the procedures followed by the New Hampshire DAO and the interaction of its participants, administrators and legal representatives.").

[^59]: *See supra* note 16 and accompanying text.

[^60]: *See supra* note 22 and accompanying text.

[^61]: *See* Utah Code Ann. section 48-5-201(3)(c)--(e) (requiring publicly available source code, quality assurance, and a GUI displaying key smart contract variables, conditions that presuppose modifiable software architecture).

[^62]: N.H. Rev. Stat. Ann. section 301-B:16(II) (requiring by-laws to reflect the rules governing smart contracts and the procedures followed by the organization, which encompasses amendment procedures).

[^63]: Wyo. Stat. Ann. section 17-31-104(c) (requiring articles to contain a notice of restrictions stating that the DAO supplement, smart contracts, articles, and operating agreement "may define, reduce, or eliminate fiduciary duties and may restrict transfer of ownership interests, withdrawal or resignation from the decentralized autonomous organization, return of capital contributions, and dissolution").

[^64]: Tenn. Code Ann. section 48-250-103(c) (containing substantially identical notice language).

[^65]: Tenn. Code Ann. section 48-250-109.

[^66]: Utah Code Ann. section 48-5-307 ("A developer, member, participant, or legal representative of a decentralized autonomous organization may not be imputed to have fiduciary duties towards each other or third parties solely on account of their role, unless the developer, member, participant, or legal representative: (1) explicitly holds themselves out as a fiduciary; or (2) stipulates to assume a fiduciary status as provided in the decentralized autonomous organization's by-laws.").

[^67]: The New Hampshire DAO statute (RSA 301-B) contains no provision addressing fiduciary duties. The gap-filler statute, RSA 304-C, and common-law principles presumably supply default rules.

[^68]: *See* Wyo. Stat. Ann. section 17-29-304 (Wyoming LLC Act limited liability provisions, applicable to DAOs via section 17-31-103(a)); Tenn. Code Ann. section 48-249-114 (Tennessee LLC Act limited liability provisions, applicable to decentralized organizations via section 48-250-102(a)).

[^69]: Utah Code Ann. section 48-5-202(1)(a).

[^70]: Utah Code Ann. section 48-5-202(2) ("If a decentralized autonomous organization refuses to comply with an enforceable judgment, order, or award entered against the decentralized autonomous organization, the members who voted against compliance may be liable for any monetary payments ordered in the judgment, order, or award in proportion to the member's share of governance rights in the decentralized autonomous organization.").

[^71]: Utah Code Ann. section 48-5-202(3) ("Subsections (1) and (2) do not affect the personal liability of a member in tort for a member's own wrongful act or omission.").

[^72]: Utah Code Ann. section 48-5-405(2).

[^73]: Utah Code Ann. section 48-5-306(5) ("A legal representative may not be personally liable for acts performed on behalf of the decentralized autonomous organization."); N.H. Rev. Stat. Ann. section 301-B:19(III) ("A legal representative shall not be personally liable for acts done on behalf of the New Hampshire DAO.").

[^74]: Wyo. Stat. Ann. section 17-31-112 (as amended 2022) ("To the extent the information is available on an open blockchain, members and dissociated members shall have no right under W.S. 17-29-410 to separately inspect or copy records of a decentralized autonomous organization and the organization shall have no obligation to furnish any information to members or dissociated members concerning the organization's activities, financial condition or other circumstances.").

[^75]: Tenn. Code Ann. section 48-250-111 ("A member does not have a right under this chapter to separately inspect or copy records of a decentralized organization, and the organization does not have an obligation to furnish information concerning the organization's activities, financial condition, or other circumstances to the extent the information is available on publicly available distributed ledger technology.").

[^76]: Utah Code Ann. section 48-5-201(3)(e)(i)--(v) (requiring a GUI that displays key smart contract variables, transaction monitoring, token redemption restrictions, by-laws, and a mechanism to contact the administrator).

[^77]: *See supra* note 32 and accompanying text.

[^78]: Utah Code Ann. section 48-5-201(3)(c)--(d) (requiring publicly available source code and quality assurance).

[^79]: *See supra* note 42 and accompanying text.

[^80]: Wyo. Stat. Ann. section 17-31-114(a) (as amended 2022) (listing dissolution events at subsections (i) through (vi): period expiration, majority member vote, events in articles or smart contracts, period of inactivity (carried from LLC Act), failure to perform lawful purpose or loss of natural-person control, and withdrawal of all members).

[^81]: Wyo. Stat. Ann. section 17-31-114(c) (as amended 2022) ("Any interested party may petition a court of competent jurisdiction for dissolution of a decentralized autonomous organization upon the occurrence of any of the events specified in subsection (a) of this section and upon finding the occurrence of one (1) or more of the events specified in subsection (a) of this section the court shall enter an order dissolving the decentralized autonomous organization.").

[^82]: Tenn. Code Ann. section 48-250-113(a)(1)--(5).

[^83]: Utah Code Ann. section 48-5-405(1) ("In the case of a failure event, legal personality and limited liability are maintained to the extent necessary to protect decentralized autonomous organization members and participants from personal liability.").

[^84]: Utah Code Ann. section 48-5-401(4) ("No member may compel the dissolution of the decentralized autonomous organization for failure to return the member's on-chain contribution.").

[^85]: *See supra* note 48 and accompanying text.

[^86]: *See supra* note 46 and accompanying text.

[^87]: Wyo. Stat. Ann. section 17-31-105(a) ("Any person may form a decentralized autonomous organization which shall have one (1) or more members by signing and delivering one (1) original and one (1) exact or conformed copy of the articles of organization to the secretary of state for filing.").

[^88]: *See supra* note 24 and accompanying text.

[^89]: *See supra* note 30 and accompanying text.

[^90]: *See supra* note 43 and accompanying text.

[^91]: *See supra* note 16 and accompanying text.

[^92]: *See supra* note 22 and accompanying text.

[^93]: *See supra* note 55 and accompanying text.

[^94]: *See supra* note 52 and accompanying text.

[^95]: *See supra* note 17 and accompanying text.

[^96]: *See supra* note 27 and accompanying text.

[^97]: *See supra* notes 35--36, 77 and accompanying text.

[^98]: *See supra* note 48 and accompanying text.

[^99]: *See supra* note 1 and accompanying text.

[^100]: *See* Sidhartha Shukla, *DeFi Project Beanstalk Loses \$182 Million in Flash Loan Attack*, Bloomberg (Apr. 18, 2022) (reporting that an attacker used flash-loan-acquired governance tokens to pass a malicious proposal draining approximately \$182 million from the protocol); Beanstalk Farms, *Beanstalk Governance Exploit*, bean.money (Apr. 19, 2022), https://bean.money/blog/beanstalk-governance-exploit (official project disclosure describing the attack mechanics and confirming approximately \$77 million in stolen non-protocol assets); *see also* Katrin Schuler, Ann Sofie Cloots & Fabian Schar, *On DeFi and On-Chain CeFi: How (Not) to Regulate Decentralized Finance*, 10 J. Fin. Reg. 213 (2024) (analyzing flash-loan governance attacks as a critical DeFi risk and discussing timelocks as mitigation). *Cf.* SEC Release No. 81207, *Report of Investigation Pursuant to Section 21(a) of the Securities Exchange Act of 1934: The DAO* (July 25, 2017) (concluding that tokens issued by "The DAO," a separate 2016 Ethereum-based investment fund, constituted securities and describing a distinct exploit that drained approximately \$60 million in Ether from that organization).

[^101]: *See supra* note 3 and accompanying text.

[^102]: *See* LoPucki, *supra* note 5c, at 906--15 (arguing that autonomous entities create accountability gaps that existing legal frameworks cannot adequately address).

[^103]: *See supra* note 41 and accompanying text.

[^104]: *See supra* note 33 and accompanying text.

[^105]: *See supra* note 44 and accompanying text.

[^106]: *See supra* note 62 and accompanying text.

[^107]: *See* CFTC v. Ooki DAO, 2023 WL 5321568 (N.D. Cal. Aug. 17, 2023) (entering default judgment against DAO for operating unregistered trading platform); SEC Release No. 81207, *supra* note 94 (concluding that DAO tokens constituted securities under federal law regardless of the issuing entity's decentralized structure).
