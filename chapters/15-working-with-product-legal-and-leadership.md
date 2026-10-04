# 15. Working with Product, Legal, Comms and leadership

> **How do you get safety built in rather than bolted on?**

*Part 3: Run* · [Contents](../README.md) · [← 14. Moderator wellbeing](14-moderator-wellbeing.md) · [16. Regulation and compliance →](16-regulation-and-compliance.md)

## In one minute

- **Get in at design review, not the week before launch.** At design review, changing a default is a quick edit to the spec. After launch, the same change means taking something away from users.
- **Earn the invite by being selective and fast.** Full reviews for launches that let strangers contact each other, move money or items between users, expose location or change what minors can do. A short checklist for everything else, and answers in days.
- **Make accepted risk someone's decision.** The person who owns the product outcome signs off, with a date to revisit. Risks too serious for one person go to the executive who owns safety risk.
- **Treat public safety claims as evidence.** What Comms says has to match what enforcement actually does, because courts and regulators will compare the two.
- **Agree who decides what, and report outcomes upward.** Write down the split of decisions with Legal, and tell leadership whether users are safer, not just how busy the team was.
- **The mistake to avoid:** a review that slows every release. It won't stay in the launch plan for long.

## Why it matters

Safety that's bolted on after launch costs more and holds less. Users have already got used to the feature, and every safeguard looks like something being taken away. The legal ground has moved too. In March 2026, a New Mexico jury found Meta liable under the state's Unfair Practices Act for misleading consumers about the safety of its platforms, and ordered $375 million in civil penalties ([New Mexico Department of Justice](https://nmdoj.gov/press-release/new-mexico-department-of-justice-wins-landmark-verdict-against-meta/)). The evidence at trial included internal documents and testimony from former employees. In August 2026 the court ordered a further $567 million and five years of court-supervised changes. Meta has said it will appeal. What a company says about safety, in public and in private, is now evidence about whether it was true.

Regulators also expect safety to be designed in. The UK's Online Safety Act requires user-to-user services to carry out a further illegal content risk assessment before making any significant change to their design or operation ([section 9(4)](https://www.legislation.gov.uk/ukpga/2023/50/section/9)). The EU's Digital Services Act requires very large platforms to assess systemic risks at least once a year, and in any event before deploying functionalities likely to have a critical impact on them ([Article 34](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). The question has moved from "do you have a policy?" to "can you prove it works?" That proof is built with Product, Legal, Comms and leadership, not by the safety team alone.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | The founder or first safety hire in design review for risky launches, a short checklist for everything else, a list of accepted risks with an owner and a date for each, and one person who checks public safety claims before they go out. | A tiered launch review with a turnaround target in days, exit criteria agreed for safeguards that cost a metric, an escalation path for serious risks, a written split of decisions with Legal, Comms review of every safety claim, and a regular leadership review. | Launch review built into product development and tied to legally required risk assessments, a named executive who owns safety risk, regular board reporting, a register of public safety claims with the evidence behind each, and launch reviews that are audited. |
| **What you can show** | The launches reviewed, and the defaults changed before launch. | Review turnaround time. The share of in-scope launches reviewed before launch. Accepted risks with owners and revisit dates. Incidents in a feature's first 90 days that the review predicted. | Accepted risks that turned into incidents, every public safety claim traced to its evidence, risk assessments that are current, and leadership reports that pair outcomes with operations. |

## How to do it

### 1. Get in at design review

An abuse pre-mortem is the session where a team works out how a feature could be misused before it ships. The best time to run it is at design review.

At that point, changing a default is easy. If new accounts shouldn't be able to message strangers, or should have a lower gifting cap in their first week, it's a quick edit to the spec. Once the feature has shipped and people are using it, the same change means taking something away from users. That's a much harder decision to get through.

Most product launches get a security review. Almost none get an abuse review: who will misuse this, how, and what do we ship on day one to stop it. The [abuse pre-mortem](https://stevenmacchia.com/ts-workbench/#premortem) gives a team that review in one sitting: 12 plain questions about the product, the abuse risks that apply rated by severity and likelihood, the safeguards to ship first with an owner for each, and the laws likely to apply across seven jurisdictions. Bring its output to design review, not a list of concerns.

For services under the UK Online Safety Act, a review before a significant change is part of the legal duty, and very large platforms in the EU have a similar duty before deploying high-impact features (see "Why it matters"). Australia's eSafety Commissioner sets out the same idea as [Safety by Design](https://www.esafety.gov.au/industry/safety-by-design): anticipate harms and build protections in from the start rather than retrofitting them.

At an early stage, the founder or first safety hire simply asks to be in the room for the launches that matter. A growing team might get a standing slot on the design review calendar, or a named reviewer each product team can call on. At scale, the review becomes a gate in the product development process, and its output feeds the risk assessments the law requires.

### 2. Earn the invite: be selective, and answer in days

Being invited early is something T&S earns. A review that slows every release won't stay in the launch plan for long, so two things matter: being selective, and answering in days.

Be selective about what gets a full review:

| If the launch... | Review |
|---|---|
| Lets strangers contact each other | Full pre-mortem |
| Moves money or items between users | Full pre-mortem |
| Exposes location | Full pre-mortem |
| Changes what minors can do | Full pre-mortem |
| Does none of these | A short checklist, which the product team can complete itself |

The checklist covers the basics that apply to almost everything: can users report it and block people on it, do new accounts get the same reach as established ones, are minors' defaults unchanged, and is enough logged to enforce and to explain decisions. If any answer is worrying, it becomes a full review.

Then answer fast. Set a turnaround target in days and publish it. Make every review usable: name each safeguard, its owner and its rough effort, rank them, and say plainly which ones must ship before launch and which can follow. Give options with their costs, not a single "no". Product teams invite the reviewer who helps them ship safely, and route around the one who only says what's wrong.

### 3. Agree exit criteria for safeguards that cost a metric

Some safeguards cost the feature its own metric. A gifting limit on new accounts will reduce gifting. Buy-in is hard, because the cost shows up in a growth or revenue number and the benefit doesn't.

Agreeing the exit criteria up front keeps the follow-up simple. Before launch, write down:

- what the safeguard is meant to prevent, and how you'll measure that;
- what it costs, in the feature's own metric;
- what result would justify loosening it, and what would mean tightening it;
- when you'll look, and who decides.

That turns a standing argument into a scheduled decision with evidence. It also protects the safeguard: if the data shows it's working, the decision to keep it is already agreed.

You can strengthen the case with your own data. Harm drives people away, but raw retention data hides it, because the most engaged users run into the most abuse. A matched cohort (exposed users compared with similar unexposed ones) shows the real cost. [Chapter 11](11-measuring-what-matters.md) covers the method, and [chapter 19](19-budgets-roadmaps-and-making-the-case.md) covers using it to make the case.

### 4. Make accepted risk someone's decision

Not every risk will be fixed before launch, and that's fine if it's a decision rather than an oversight.

If a launch goes ahead with a known risk, the person who owns the product outcome signs off on it, with a date to revisit. T&S makes sure the risk is in front of them when they decide: in writing, with the likely harm, who it falls on, the safeguards considered and why they're not shipping now. When a risk is too serious to be one person's call, T&S takes it to the executive who owns safety risk.

Decide in advance what counts as too serious, so escalation isn't a matter of nerve. A reasonable line: anything that could seriously harm a child, put someone's physical safety at risk, breach a legal duty, or is likely to become a news story or a regulator's question goes up.

Every company needs a named person at the top who owns safety risk. In the UK, Ofcom's codes of practice for the illegal content duties recommend that every service name an individual accountable to its most senior governance body for compliance with those duties and the reporting and complaints duties ([Ofcom, illegal content codes for user-to-user services](https://www.ofcom.org.uk/siteassets/resources/documents/online-safety/information-for-industry/illegal-harms/illegal-content-codes-of-practice-for-user-to-user-services-24-feb.pdf?v=391889)). Whatever your market, the person who takes the most serious risk decisions should be the person accountable for them.

Then measure the review itself. Track two numbers: how many incidents in a feature's first 90 days the review predicted, and how many accepted risks turned into incidents. If the second number keeps climbing, risks are being accepted at too low a level.

### 5. Treat public safety claims as evidence

Public safety claims are litigation evidence. What Comms says has to match what enforcement actually does.

In the US, the Federal Trade Commission Act declares unfair or deceptive acts or practices in commerce unlawful ([15 U.S.C. § 45](https://www.law.cornell.edu/uscode/text/15/45)), and state attorneys general bring cases under their own consumer protection laws, as New Mexico did. A safety claim that enforcement can't back up is a deception claim waiting to happen.

So keep a register of every public safety claim: on the website, in help pages, in app store listings, in press statements and in answers to regulators. For each one, record the evidence behind it, who owns it and when it was last checked. When enforcement changes, such as an automation rollback, a vendor change or a policy shift, check which claims it touches.

Watch the absolutes. "Zero tolerance", "we remove all" and "never" are hard to prove and easy to disprove with one screenshot. Say what you do and how: "we use automated detection and human review to find and remove..." is a claim you can stand behind. In the incident tabletop, a "zero tolerance" statement with no details leads the reporter to note that you didn't describe any changes.

The same applies inside the company. Internal documents can end up in court, as they did in New Mexico. The answer isn't to stop writing risks down. An unrecorded risk is worse. Write every risk with the decision that was made about it and the reason, so the record shows a company that saw the risk and acted. Transparency reports and user notices need the same consistency, and [chapter 17](17-transparency-reports-and-notices.md) covers them.

### 6. Work with Legal: who decides what, and privilege

T&S and Legal work best when the split of decisions is written down. One split that works: Legal says what the law requires and how much legal risk is acceptable. T&S decides how to meet it in practice, and owns the policy line wherever the law leaves room. If policy sits inside Legal, or in a team of its own, the lines move; what matters is that everyone knows where they are.

| Decision | Decides | Consulted |
|---|---|---|
| What the rules are and how they're enforced | T&S | Legal, Product |
| What the law requires, and how much legal risk is acceptable | Legal | T&S |
| Whether a launch goes ahead with a known risk | The product owner, or the executive who owns safety risk for the most serious | T&S, Legal |
| What the company says in public about safety | Comms | T&S for accuracy, Legal for risk |
| Reports to NCMEC and other mandatory reports | Trained T&S specialists | Legal |
| Answers to legal process and regulators | Legal | T&S supplies the data |

When T&S and Legal disagree, the disagreement goes to the executive who owns safety risk, with both views written down. [Chapter 12](12-severe-harm-escalations.md) covers who decides in the first hour of a severe case.

**Privilege.** In the US, attorney-client privilege protects confidential communications with lawyers for the purpose of legal advice, and other countries have their own versions. It doesn't protect the underlying facts, a point the US Supreme Court made in [Upjohn Co. v. United States](https://www.law.cornell.edu/supremecourt/text/449/383) (1981). In practice:

- Ask Legal at the start whether an investigation, audit or risk assessment should be run at their direction.
- Keep legal advice separate from operational records. Incident logs, metrics and case records kept in the ordinary course of business are facts, and generally aren't privileged. Material prepared at Legal's direction may be protected, so let Legal decide which is which.
- Don't stamp everything "privileged". The label doesn't make it so, and overusing it weakens the claim for the documents that need it.
- Privilege rules differ between countries, and in some the advice of in-house lawyers is protected less. Ask Legal what's protected where.

At an early stage, this is outside counsel on call and a short list of questions that must go to a lawyer. A growing team has a named lawyer who knows the product. At scale, there are dedicated lawyers for regulators and law-enforcement requests.

### 7. Report to executives and the board

What gets measured gets resourced. If leadership only sees activity (removals, reports actioned, automation rate), the program will be judged like a cost center by its throughput, and it will optimize for activity.

Report operational and outcome metrics side by side, and say so when they disagree. Operational metrics show the machine is running. Outcome metrics show it's working. The questions leadership should hear answered:

- Is exposure to severe harm going down?
- After enforcement, do bad actors stop, or come back on new accounts?
- Are we catching high-risk behavior earlier?
- What are appeals telling us about where policy or automation is wrong?

It takes discipline to walk into a business review and say, "Our numbers are up, and I'm not convinced we're safer." That's the conversation that earns credibility and directs investment to the right places.

Add the items only leadership can act on: accepted risks due for their revisit, incidents and the actions from their reviews, regulatory exposure, and what you need. Keep counts that rise with volume (total removals, reports received, accounts banned, headcount) off the executive slide. The [metrics framework](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/running-the-program.md) sets out one rhythm that works (weekly, monthly and quarterly), and [chapter 11](11-measuring-what-matters.md) covers the metrics.

The board needs safety risk on the same footing as other major risks: the top risks and their trend, the most serious accepted risks, major incidents, and regulatory and litigation exposure. At an early stage, that may be one slide at each board meeting. At scale, it's a standing report from the executive who owns safety risk.

## Mistakes to avoid

- **Arriving the week before launch.** Get into design review, when changing a default is an edit rather than taking something away.
- **Reviewing every launch the same way.** Full reviews for the four high-risk triggers, a checklist for the rest, and answers in days.
- **Saying no without options.** Rank the safeguards, name owners, and say what must ship before launch and what can follow.
- **Arguing about a safeguard forever.** Agree exit criteria up front, and decide on the date with the data.
- **Letting risk be accepted by silence.** The product owner signs off in writing, with a date. The most serious risks go to the executive who owns safety risk.
- **Publishing claims enforcement can't back.** Keep a claims register, avoid absolutes, and recheck claims when enforcement changes.
- **Stamping everything "privileged".** Ask Legal what should be run under privilege, and keep facts in operational records.
- **Reporting activity as success.** Put outcomes next to operations, and say when they disagree.

## Start from this template

**Launch review triggers.** Answer before design review. Any "yes" means a full pre-mortem.

| Does the launch... | Yes or no |
|---|---|
| Let strangers contact each other? | |
| Move money or items between users? | |
| Expose location? | |
| Change what minors can do? | |

**Accepted risk sign-off.** One per accepted risk, kept in one register.

| Field | Entry |
|---|---|
| Launch and risk | |
| Likely harm, and who it falls on | |
| Safeguards considered, and why they're not shipping now | |
| Signed off by (product owner) and date | |
| Escalated to the executive who owns safety risk? | |
| Date to revisit | |
| What would trigger an earlier review | |

**Exit criteria for a costly safeguard.** Agree it with the product owner before launch.

| Safeguard | Metric it costs | What it should prevent, and how we'll measure it | Loosen if | Tighten if | Decide on (date), by (name) |
|---|---|---|---|---|---|
| | | | | | |

**Public safety claims register.** Recheck whenever enforcement changes.

| Claim, as published | Where it appears | Evidence behind it | Owner | Last checked |
|---|---|---|---|---|
| | | | | |

## Do it with

- **[Abuse pre-mortem](https://stevenmacchia.com/ts-workbench/#premortem)**: Profile a product and see how it will be misused before launch. [Open content](https://github.com/stevenmacchia/abuse-premortem)
- **[Metrics framework](https://stevenmacchia.com/ts-workbench/#metrics)**: 36 metrics with formulas, measurement steps and SQL, and a one-pager for leadership. [Open content](https://github.com/stevenmacchia/ts-metrics-framework)
- **[Program maturity model](https://stevenmacchia.com/ts-workbench/#maturity)**: Rate the program across eight areas and get a roadmap leadership can follow.
- **[The special-treatment leak](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vip.md)**: A journalist has screenshots showing softer enforcement for high-profile accounts. Rehearse the statement, and the fix.
- **[Violating-content prevalence](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/violating-content-prevalence.md)** (metric): out of everything people see, how much breaks your rules. The outcome leadership should see first.
- **[Churn after toxic exposure](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/churn-after-toxic-exposure.md)** (metric): whether people leave after they've been abused, which puts safety on the retention dashboard.

## Further reading

From Steven's writing:

- **[Run the abuse pre-mortem at design review](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-safetybydesign-productmanagement-share-7511792474445750272-3rLV/)** (Oct 2, 2026): At design review, changing a default is a quick edit. After launch it means taking something away. T&S earns the invite by being selective and fast, and accepted risks get an owner and a date.
- **[The era of voluntary child safety is ending](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-contentmoderation-onlinesafety-share-7510666169993805824-VI4v/)** (Sep 29, 2026): India's push for age checks, Florida's case against OpenAI, Copilot data labeling, TikTok's Alabama settlement and Meta's New Mexico verdict. The question has moved from "do you have a policy?" to "can you prove it works?"
- **[You can't moderate your way out of a systems problem](https://www.linkedin.com/feed/update/urn:li:activity:7506790883938295809/)** (Sep 18, 2026): Treating Trust & Safety mainly as an operations function is a mistake. Reputation, history, age and behavior signals belong in one risk model, automation needs clear limits, and safety belongs in the product architecture from the start.

Outside sources:

- **[eSafety Commissioner: Safety by Design](https://www.esafety.gov.au/industry/safety-by-design)**: Australia's regulator on building safety in from the start, with principles and tools for companies of every size.
- **[New Mexico Department of Justice: verdict against Meta](https://nmdoj.gov/press-release/new-mexico-department-of-justice-wins-landmark-verdict-against-meta/)**: the March 2026 jury finding on misleading consumers about platform safety.
- **[UK Online Safety Act, section 9](https://www.legislation.gov.uk/ukpga/2023/50/section/9)**: the illegal content risk assessment duty, including before significant changes to a service.
- **[EU Digital Services Act](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)**: Article 34 requires very large platforms to assess risks before deploying high-impact features.
- **[Upjohn Co. v. United States](https://www.law.cornell.edu/supremecourt/text/449/383)**: the US Supreme Court case on privilege for communications with a company's lawyers.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
