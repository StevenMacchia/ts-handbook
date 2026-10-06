# 16. Regulation and compliance

> **Which laws apply to your service, and what do they make you do?**

*Part 4: Scale and govern* · [Contents](../README.md) · [← 15. Working with Product, Legal, Comms and leadership](15-working-with-product-legal-and-leadership.md) · [17. Transparency reports and enforcement notices →](17-transparency-reports-and-notices.md)

## In one minute

- **Start from what your service is, not from a list of laws.** Duties attach to facts: where your users are, what they can do with each other, whether children use it, how big it is and which features it has. Write those facts down first, and the duties follow.
- **Turn every duty into a line with an owner, a process and evidence.** Legal interprets the law. The people who run the process own the proof that it happens. A duty nobody can point to in your operations isn't met, however good the policy reads.
- **Run risk assessments as product work.** Redo them when the product changes, before the launch, not on the anniversary.
- **Build a record that holds up.** One owner for every threshold, and every change written down with the numbers behind it, so you can answer "why this account?" on the day someone asks.
- **Read settlements and court orders as requirements in waiting.** Time limits, overnight restrictions, default feeds and age checks are now written into them, and AI products are in scope too.
- **The mistake to avoid:** treating compliance as a launch checklist that Legal owns. The question has moved from "do you have a policy?" to "can you prove it works?", and only the people running the program can prove it.

## Why it matters

The era of voluntary safety is ending. Courts, attorneys general and regulators are turning platform promises into binding obligations, and the laws reach a long way. The UK's Online Safety Act applies to any service with a significant number of UK users, that targets UK users, or that can be used in the UK and presents a material risk of significant harm to people there, wherever the company is based ([section 4](https://www.legislation.gov.uk/ukpga/2023/50/section/4)). The EU's Digital Services Act (DSA) applies to services offered to people in the EU, wherever the provider is established ([Article 2](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). Fines are sized for large companies: up to 6% of annual worldwide turnover under the DSA (Articles 52 and 74), and up to £18 million or 10% of qualifying worldwide revenue, whichever is greater, under the UK Act ([Schedule 13, paragraph 4](https://www.legislation.gov.uk/ukpga/2023/50/schedule/13)). Enforcement has started. In December 2025 the European Commission fined X €120 million in its [first non-compliance decision under the DSA](https://digital-strategy.ec.europa.eu/en/news/commission-fines-x-eu120-million-under-digital-services-act).

In the US, much of the pressure arrives through courts and attorneys general. In September 2026, TikTok's [settlement with Alabama's Attorney General](https://www.alabamaag.gov/attorney-general-marshall-announces-historic-multi-million-dollar-settlement-with-tiktok/) included, according to the Attorney General's announcement, a two-hour daily time limit, restricted night-time access for children from midnight to 6 a.m., and a default non-personalized feed for teens. Rules like these used to be product choices. Now they're terms a company has agreed to and has to show it meets.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A list of the markets you serve and the laws that apply in each, one named owner for regulatory questions, the basics every service needs running (a way to report illegal content, a notice when you act, CSAM reporting where US law applies), and a first risk assessment if you have UK users. | A duty register with an owner, a process and evidence for each line; risk assessments rerun at design review; a written change log for every threshold; a regulatory check in the launch process; and a regular look at what changed. | Annual systemic risk assessments and independent audits if you're a very large platform, a compliance function independent of operations, commitments to regulators tracked like roadmap items, and responses to consultations on new rules. |
| **What you can show** | A one-page service profile and duty map, the date each risk assessment was last reviewed, and every regulator or law enforcement request answered on time. | The share of duties with current evidence, every required risk assessment in date, illegal-content notice handling time, and statement-of-reasons coverage. | Audit findings closed on schedule, information requests answered without later corrections, mitigations delivered on their dates, and a record that answers "why this account?" for any decision. |

## How to do it

### 1. Describe your service the way the laws do

Laws don't care what you call your product. They care what it does. Before anyone reads an article of law, write a one-page service profile. Legal and T&S fill it in together, and it changes whenever the product does.

| Question | Why it matters |
|---|---|
| Where are your users? | Most laws reach any service with enough users in their market, or that targets it, wherever the company is based. |
| What can users do with content and with each other? | The EU sorts services into hosting services, online platforms (which share users' content with the public) and others. The UK regulates user-to-user services, search services and pornography providers. |
| Can children use it, and how young are they? | Under-13s bring in the US COPPA Rule, under-16s Australia's social media minimum age, under-18s the UK's children's duties, and minors DSA Article 28 (the DSA doesn't define "minor", so check with Legal). |
| How big is it, in users and in company size? | The DSA exempts micro and small enterprises from some duties and adds many for very large platforms. The UK adds duties for categorised services. |
| Which features does it have? | Recommendations, ads, direct messages, marketplaces and generative AI each switch on specific duties. |

Answer from data, not intent. Under the UK Act, whether a service is likely to be accessed by children turns on whether a significant number of children actually use it, or it's likely to attract them, not on who you built it for. You can only conclude children can't access it if age verification or estimation means they normally can't ([section 35](https://www.legislation.gov.uk/ukpga/2023/50/section/35)).

Ofcom's [checker](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/check) and the Workbench's [compliance readiness](https://stevenmacchia.com/ts-workbench/#dsa) tool help with the first pass. Neither is legal advice, but both make a good agenda for your first meeting with counsel.

### 2. Map the duties that follow

Once the profile is written, the duties mostly follow from it. These are the regimes most consumer platforms meet first.

**EU: the Digital Services Act** ([Regulation (EU) 2022/2065](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). Duties stack by tier, and each tier carries everything in the rows above it.

| If you are | You add | Articles |
|---|---|---|
| Any intermediary service offered in the EU | Points of contact, a legal representative if you have no EU establishment, clear terms applied diligently and proportionately, and a yearly transparency report | 11 to 15 |
| A hosting service | A notice-and-action mechanism, a statement of reasons for every restriction, and prompt reports to the police of suspected crimes that threaten someone's life or safety | 16 to 18 |
| An online platform | Internal complaints, out-of-court dispute settlement, priority for trusted flaggers, measures against misuse, user numbers every six months, statements of reasons sent to the Commission's database, no deceptive design, ad and recommender transparency, and protection of minors | 20 to 28 |
| A very large online platform: 45 million or more average monthly active users in the EU, designated by the Commission | Yearly systemic risk assessments and mitigation, an independent audit, a feed option not based on profiling, an ad repository, data access for researchers, a compliance function and transparency reports every six months | 33 to 42 |

Size changes some of this. Micro and small enterprises, broadly fewer than 50 staff and no more than €10 million in turnover or balance sheet ([Recommendation 2003/361/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003H0361)), don't have to publish transparency reports (Article 15(2)). They're also exempt from the online platform duties in Articles 20 to 28, except giving their user numbers when asked (Article 19). That platform exemption continues for 12 months after you lose micro or small status, which happens only once you've exceeded the thresholds for two accounting periods in a row, and it never covers a very large platform. Notice and action, and statements of reasons, apply at any size.

**UK: the Online Safety Act 2023** ([legislation.gov.uk](https://www.legislation.gov.uk/ukpga/2023/50/contents)). It applies to organizations big and small, with duties proportionate to risk and to the provider's size and capacity ([GOV.UK explainer](https://www.gov.uk/government/publications/online-safety-act-explainer/online-safety-act-explainer)). For a user-to-user service:

| Who | Duties | Sections |
|---|---|---|
| Every regulated user-to-user service | An illegal content risk assessment, kept up to date and redone before significant changes; proportionate measures to stop users encountering priority illegal content and to take illegal content down swiftly; easy reporting; complaints; regard for freedom of expression and privacy; written records; and a children's access assessment | 9, 10, 20 to 23, 35 to 37 |
| UK providers, and others for UK-linked content only | Reporting child sexual exploitation and abuse content detected from 7 April 2026 to the National Crime Agency, unless it's already reported to an equivalent foreign agency such as NCMEC ([chapter 12](12-severe-harm-escalations.md)) | 66 |
| Services likely to be accessed by children | A children's risk assessment and measures to protect children, including highly effective age assurance where the service allows the most harmful content, such as pornography or content promoting suicide, self-harm or eating disorders | 11, 12 |
| Categorised services (Category 1 or 2B on Ofcom's register; 2A is for search and combined services) | Annual transparency reports to Ofcom's specification, plus further duties by category | 77, 95 |

Ofcom's codes of practice are the practical route. A service that takes the measures a code recommends is treated as complying with the duty they cover ([section 49](https://www.legislation.gov.uk/ukpga/2023/50/section/49)). The illegal content duties have been enforceable since 17 March 2025, and children's protections set out in the codes since 25 July 2025.

**US: the COPPA Rule** ([16 CFR Part 312](https://www.law.cornell.edu/cfr/text/16/part-312)). It applies if your service is directed to children under 13, or you know you're collecting personal information from a child under 13 ([§ 312.3](https://www.law.cornell.edu/cfr/text/16/312.3)). You need a clear notice, verifiable parental consent before collecting, using or disclosing a child's information, a way for parents to review and delete it, and reasonable security. The FTC's 2025 amendments, in force since 23 June 2025 with compliance due by 22 April 2026, changed definitions, notices and safe harbor rules, and, among other things, added: separate parental consent before disclosing a child's information to third parties, unless that's integral to the service ([§ 312.5(a)(2)](https://www.law.cornell.edu/cfr/text/16/312.5)); a written information security program ([§ 312.8](https://www.law.cornell.edu/cfr/text/16/312.8)); and a written data retention policy, with no keeping children's data indefinitely ([§ 312.10](https://www.law.cornell.edu/cfr/text/16/312.10)). Separately, providers must report apparent child sexual abuse material to NCMEC's CyberTipline under 18 U.S.C. § 2258A ([chapter 12](12-severe-harm-escalations.md)).

**US: the TAKE IT DOWN Act** ([Public Law 119-12](https://www.govinfo.gov/content/pkg/PLAW-119publ12/html/PLAW-119publ12.htm)). It applies to covered platforms: public websites and apps that primarily provide a forum for user-generated content, not email or broadband (section 4). They must run a clear, plain-language process for people to ask for removal of an intimate image of them shared without consent, real or AI-made. After a valid request, they must remove it "as soon as possible, but not later than 48 hours", and make reasonable efforts to remove known identical copies (section 3). The FTC has enforced it since 19 May 2026, and its [guidance for platforms](https://www.ftc.gov/business-guidance/resources/complying-take-it-down-act) names social, messaging, image-sharing and gaming services. The law shields good-faith removals and has no counter-notice step, so build your own appeal route. Treat the 48 hours as a ceiling, staffed through weekends, and if the person in the image was under 18, handle it as child sexual abuse material ([chapter 3](03-the-first-90-days.md), [chapter 12](12-severe-harm-escalations.md)).

**Australia: the Online Safety Act 2021** ([Federal Register of Legislation](https://www.legislation.gov.au/C2021A00076/latest/text)). The eSafety Commissioner can issue removal notices, which give you 24 hours to comply unless eSafety allows longer (for example, section 65, for cyberbullying material targeted at a child). Services are measured against the Basic Online Safety Expectations (sections 45 and 46) and can be required to report on how they meet them (sections 49 and 56). Registered industry codes and industry standards set rules for each section of the industry, which eSafety can enforce (sections 140 to 146). Since 10 December 2025, age-restricted social media platforms must take reasonable steps to prevent Australians under 16 from having accounts (Part 4A, section 63D). The Minister's rules exclude messaging, online gaming, professional networking, education and health services ([Department of Infrastructure](https://www.infrastructure.gov.au/media-communications/internet/online-safety/social-media-minimum-age)).

Other markets have their own rules. The abuse pre-mortem's [legal obligations list](https://github.com/stevenmacchia/abuse-premortem/blob/main/laws.md) covers 33 obligations in 7 jurisdictions in plain language. Use it as a starting map, and confirm each line with counsel.

### 3. Turn the duties into a register with owners

A map tells you what applies. A register tells you who makes it happen and how you'd prove it. Give each duty one row:

- The duty in plain words, with its law and article.
- Why it applies to you: the line in your service profile that brings it in.
- One named owner, not a team.
- The process that delivers it, and where that process is written down.
- The evidence you keep, and where it lives.
- Its status, and the date of the next review.

Each row has an owner, and the register as a whole needs one too. Often the risk assessment sits with Legal, the age checks with Product and the takedown inbox with Support, and nobody sees them side by side until a regulator asks. Have the leadership team name one person who owns the whole picture, so no team assumes another has it. If nobody can name that person today, start there.

T&S owns the processes and the evidence, Product and Engineering build what's missing, and whoever plays the compliance role keeps the register honest. Very large platforms must set up a compliance function independent of operations ([Article 41](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). [Chapter 8](08-hiring-and-structuring-the-team.md) covers where that role sits.

The test of a row: could its owner show a regulator the evidence within a day? For statements of reasons, that could be a monthly sample of notices checked against the list in DSA Article 17 ([chapter 17](17-transparency-reports-and-notices.md)). For a UK risk assessment, it's the written record section 23 requires. If the answer is no, the row is a gap with a date, not a tick.

Close gaps in order of consequence: first duties with hard deadlines or that protect people from severe harm, such as child safety reporting and removal notices, then the duties regulators are known to check. The [program maturity model](https://github.com/stevenmacchia/ts-maturity-model/blob/main/maturity-model.md) calls a program with every obligation mapped to an owner, a process and evidence "Defined" (level 3), and sets that as the target for regulatory readiness even at the early stage, because the harm is the same whatever your size.

### 4. Run risk assessments as product work

Risk assessments are where regulation meets the product. The UK Act requires illegal content and children's risk assessments to be kept up to date, and redone before any significant change to the service's design or operation ([section 9](https://www.legislation.gov.uk/ukpga/2023/50/section/9), [section 11](https://www.legislation.gov.uk/ukpga/2023/50/section/11)). It also requires a written record of each one ([section 23](https://www.legislation.gov.uk/ukpga/2023/50/section/23)). The DSA requires very large platforms to assess systemic risks at least once a year and before deploying functionality likely to have a critical impact on those risks, and to keep the supporting documents for at least three years (Article 34).

Ofcom's risk assessment guidance uses four steps that work for any assessment: understand the kinds of harm that could occur, assess the risk of each, decide on measures and record them, then report, review and update.

The trap is treating the assessment as a document you file. Tie it to design review instead ([chapter 2](02-know-your-risks.md), [chapter 15](15-working-with-product-legal-and-leadership.md)). When a launch lets strangers contact each other, moves money or items between users, exposes location or changes what minors can do, the abuse pre-mortem at design review starts the risk assessment update. A children's risk assessment last reviewed 14 months ago, before direct messaging launched, needs a review now, not at the next annual cycle. Track the age of the oldest assessment and the share of mitigations overdue.

### 5. Build a record that holds up

Every threshold decision gets tested the day a regulator, a parent or a court asks why a specific account was or wasn't restricted. That question is only answerable if:

- One person owned the threshold.
- Every change was written down, with the date, the numbers behind it and who signed it off.
- The decision to report to law enforcement was made by people trained for it.

Make the record a by-product of the work, not a project at the deadline. Log every decision with its policy, source and timestamps. Keep one change log for thresholds, models and policies. Stamp legal notices the moment they arrive, because regulators start the clock then, not when someone opens them. When a launch goes ahead with a known risk, record who accepted it and when it will be revisited ([chapter 15](15-working-with-product-legal-and-leadership.md)). The [data to log](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/data-to-log.md) guide lists the fields.

Be careful with what you tell regulators. Under the DSA, supplying incorrect, incomplete or misleading information can itself be fined up to 1% of annual income or worldwide turnover ([Article 52(3)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). A known gap with a remediation plan is a better answer than a figure you'll have to correct later. Treat every commitment you make to a regulator as a roadmap item with an owner and a date, because the follow-up request will test it. And don't count on regulators taking your word for it. Assume every number will be checked.

### 6. Read settlements and court orders as requirements in waiting

Not every duty comes from a statute. Settlements and court orders are now writing product requirements, and once one company has agreed to terms, expect other states to ask for the same.

- **TikTok and Alabama, September 2026.** A two-hour daily limit for young users that parents can lower, no night-time access from midnight to 6 a.m., a default non-personalized feed for teens, stronger parental controls and more robust age assurance ([Alabama Attorney General](https://www.alabamaag.gov/attorney-general-marshall-announces-historic-multi-million-dollar-settlement-with-tiktok/)).
- **New Mexico v. Meta, August 2026.** A court ruling on public nuisance, with a $567 million abatement fund on top of the March jury penalty. According to the state's Department of Justice, it orders reforms for five years, including more rigorous age verification for New Mexico users, no push notifications to under-18s overnight, time-use limits for under-18s and semiannual public compliance reports ([New Mexico Department of Justice](https://nmdoj.gov/press-release/court-orders-meta-to-pay-942-million-and-overhaul-protections-for-children-on-facebook-and-instagram-in-landmark-new-mexico-ruling/)). Meta has said it will appeal, so treat these as a signal of where requirements are going, not settled law.

When an order lands against any company in your sector, run its terms against your own product as a gap check, and show the result to the person who owns the product outcome. Each term you don't meet becomes a decision made on purpose, not one discovered in a deposition.

Age assurance is where requirements are moving fastest. The UK requires it for the most harmful content. Australia requires reasonable steps to keep under-16s off social media. The DSA lists age verification among the measures very large platforms can take against systemic risk ([Article 35(1)(j)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). In February 2026, the FTC said it [would not bring COPPA enforcement](https://www.ftc.gov/news-events/news/press-releases/2026/02/ftc-issues-coppa-policy-statement-incentivize-use-age-verification-technologies-protect-children) against general-audience and mixed-audience operators that collect information solely to determine age, if they meet conditions such as using it only for that purpose and deleting it promptly. It's a statement of enforcement discretion until the Rule is amended, and it doesn't bind state attorneys general or private plaintiffs. Every other safeguard assumes you know who's a child ([chapter 6](06-child-safety-and-age-assurance.md)).

AI products are in scope too. In September 2025 the FTC [ordered seven companies](https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-launches-inquiry-ai-chatbots-acting-companions) running AI chatbots to explain how they test for and limit harm to children and teens. California's [SB 243](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB243) requires companion chatbot operators to tell users the chatbot is AI where they could think it's human, keep a protocol for suicidal ideation and self-harm, and add protections for users they know are minors. AI age gating and safety evaluations need the same rigor as feeds. [Chapter 18](18-ai-in-trust-and-safety.md) covers the AI-specific laws.

### 7. Work with Legal and regulators, and keep up

Agree who decides what before the first letter arrives. Legal advises on what the law requires, decides how much legal risk to take and protects privileged advice. T&S owns the facts, the processes and the evidence. The person who owns the product outcome signs off any risk the company accepts ([chapter 15](15-working-with-product-legal-and-leadership.md)).

When a regulator sends a request for information, treat it as a data problem that Legal packages. Name one owner on day one, map every question to a data source, and say early where your data has gaps. Deadlines are short, so know where your data lives before the request arrives.

Keep up on a schedule, for example monthly, not when the news breaks. Take each change (a new law, guidance or code, an enforcement decision, a settlement) and ask: does it touch our service profile, which register lines does it change, who owns that, and by when? Reread the whole profile quarterly or so, and before entering a new market.

By stage:

- **Early.** The founder or first safety hire owns the list, with outside counsel for the questions that matter. Get reporting, notices and child safety reporting running before launch in each market.
- **Growing.** A named compliance owner in or beside T&S keeps the register, and a regulatory check sits in the launch process.
- **At scale or regulated.** A compliance function, audits and a standing relationship with each regulator. Respond to consultations, because you'll know where a proposal won't work in practice.

## Mistakes to avoid

- **Starting from the list of laws.** Start from your service profile, and let the duties follow from it.
- **Assuming you're too small or too far away.** The UK Act applies to services of every size, and both the UK and EU laws reach companies based elsewhere. The DSA's small-company exemption covers some duties, not notice and action or statements of reasons.
- **Letting Legal own compliance alone.** Legal interprets the law. The people who run each process own the evidence that it happens.
- **Owning every duty and nobody owning the whole.** Have the leadership team name one person who sees the risk assessment, the age checks and the takedown queue side by side before a regulator does.
- **Writing the risk assessment once.** Redo it at design review for any significant change, and track how old each one is.
- **Changing thresholds without writing it down.** One owner, a change log and the numbers behind every change.
- **Giving a regulator a number you can't stand behind.** Say what you don't know, and when you will.
- **Ignoring other companies' settlements.** Run their terms against your product before someone asks you to.

## Start from this template

**Service profile.** Fill it in with Legal, and update it whenever the product changes.

| Question | Your answer | Duties it brings in |
|---|---|---|
| Markets where you have users, and markets you target | | |
| What users can do with content and with each other | | |
| Youngest users, and how you know | | |
| Average monthly active users in the EU, and company size | | |
| UK users, and Ofcom category if any | | |
| Recommendations, ads, messaging, marketplace, generative AI | | |

**Duty register.** One row per duty. Three example rows to start from.

| Duty | Law and article | Applies because | Owner | Process | Evidence | Next review |
|---|---|---|---|---|---|---|
| A statement of reasons for every restriction | DSA Article 17 | Hosting service with EU users | | Notice templates for each policy | Monthly sample of 100 notices checked against Article 17(3) | |
| Children's risk assessment | Online Safety Act, sections 11 and 23 | Likely to be accessed by children in the UK | | Rerun at design review for significant changes | Written record and last review date | |
| Remove a reported intimate image within 48 hours | TAKE IT DOWN Act, section 3 | US platform built mainly around user-generated content | | Request form, a round-the-clock owner, hashing for known copies, an appeal route | Request log with a reference number, time to removal and copies found | |

**Monthly regulatory review.** One page: what changed this month (laws, guidance, codes, enforcement decisions, settlements), whether each change touches your service profile, the register lines added or changed with owners and dates, risk assessments due for review, open requests from regulators and law enforcement, and commitments made to regulators with their status.

## Do it with

- **[Compliance readiness](https://stevenmacchia.com/ts-workbench/#dsa)**: Find which duties under the EU Digital Services Act and the US COPPA Rule apply, article by article.
- **[COPPA readiness](https://stevenmacchia.com/ts-workbench/#coppa)**: Check a service against the US COPPA Rule's duties for children under 13.
- **[Legal obligations](https://github.com/stevenmacchia/abuse-premortem/blob/main/laws.md)**: 33 obligations in 7 jurisdictions, from the abuse pre-mortem.
- **[Program maturity](https://stevenmacchia.com/ts-workbench/#maturity)**: Rate regulatory readiness and seven other areas against the targets for your stage, and get a phased roadmap. [Open content](https://github.com/stevenmacchia/ts-maturity-model)
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Rehearse [The age gate countdown](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/newlaw.md) (UK children's duties 90 days before launch) and [The regulator's request](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/rfi.md) (an EU information request with ten working days to answer).
- **[Systemic-risk assessment currency](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/systemic-risk-assessment-currency.md)** (metric): how long since each required risk assessment was reviewed, and how many of its mitigations are overdue.
- **[Illegal-content notice handling time](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/illegal-content-notice-handling-time.md)** (metric): how fast formal notices of illegal content get a decision, split by who sent them.

## Further reading

From Steven's writing:

- **[Since 2024, the job is proving it works](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-onlinesafety-ageassurance-share-7512890720316203008-kHP4/)** (Oct 5, 2026): Since 2024 the question has moved from whether you have a policy to whether you can show it works: UK risk assessments that must be redone before significant changes, age assurance as the foundation, 48-hour removal of intimate images under the US TAKE IT DOWN Act, and free open-source tooling. Those duties land on different teams, so the leadership team should name one owner for the whole picture.
- **[Saturday reading: child safety gaps in games, Ofcom in court and California's new laws](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-onlinesafety-gamingsafety-share-7512121016282882048-B4fp/)** (Oct 3, 2026): Australia's eSafety found Fortnite and Minecraft still mostly rely on self-declared age. Age assurance is the foundation, because every other safeguard assumes you know who's a kid.
- **[The era of voluntary child safety is ending](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-contentmoderation-onlinesafety-share-7510666169993805824-VI4v/)** (Sep 29, 2026): India's push for age checks, Florida's case against OpenAI, Copilot data labeling, TikTok's Alabama settlement and Meta's New Mexico verdict. The question has moved from "do you have a policy?" to "can you prove it works?"
- **[Games are where kids socialize now, and regulators know it](https://www.linkedin.com/posts/stevenmacchia_games-have-become-one-of-the-main-places-share-7510446882154864641-n3PV/)** (Sep 28, 2026): Grooming builds over weeks and usually moves off-platform. Protections that work act earlier and limit who can reach a child. Measure prevented contact, not just removals.

Outside sources:

- **[Regulation (EU) 2022/2065, the Digital Services Act](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)**: the official text. Articles 11 to 42 set out the duties, tier by tier.
- **[Online Safety Act 2023](https://www.legislation.gov.uk/ukpga/2023/50/contents)**: the UK Act as amended, on legislation.gov.uk.
- **[Ofcom: Check if the Online Safety Act applies to you](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/check)**: the regulator's ten-minute checker for whether your service is in scope.
- **[FTC: Complying with COPPA, frequently asked questions](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions)**: the FTC's own guidance on the COPPA Rule, flagged for the 2025 amendments.
- **[FTC: Complying with the TAKE IT DOWN Act](https://www.ftc.gov/business-guidance/resources/complying-take-it-down-act)**: the FTC's guidance for covered platforms on the notice-and-removal process.
- **[eSafety: Social media age restrictions](https://www.esafety.gov.au/about-us/industry-regulation/social-media-age-restrictions)**: which platforms Australia's under-16 rule covers, what's excluded and what eSafety expects.

---

*Last updated: 2026-10-05.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
