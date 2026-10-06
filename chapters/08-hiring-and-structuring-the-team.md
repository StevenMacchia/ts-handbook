# 8. Hiring and structuring the team

> **Who do you hire, in what order, and where should the team report?**

*Part 2: Build* · [Contents](../README.md) · [← 7. Standing up review operations](07-review-operations.md) · [9. Choosing vendors and tools →](09-choosing-vendors-and-tools.md)

## In one minute

- **Hire for your risks, not an org chart.** The harms your product invites decide which skills you need first. For a long time, one person will cover several roles, so write down who wears which hat.
- **Make the first hire someone who can write a rule, run a queue and handle an escalation.** Then add operations, investigations, data and engineering in the order your risks call for. Support for anyone who sees harmful content comes before any of them.
- **Report where you can be heard before launch, and can't be overruled quietly.** That usually means Product or the executive level, not Operations. Every reporting line has a trade-off, so whichever you pick, name the executive who owns safety risk and write down who decides what.
- **Interview for judgment, not knowledge of the rules.** Give candidates a case with no clean answer. Listen for what they'd want to know, what they'd do now that can be undone, and how they'd explain the decision later.
- **Treat vendor staff as part of the team.** Same guidance, same calibration, same wellbeing standards, and career paths that don't run only through the worst queues.
- **The mistake to avoid:** hiring a large review team before anyone owns policy, data and escalations. Reviewers can only be as consistent as the rules and the system around them.

## Why it matters

Many Trust & Safety teams start by accident. Someone in support starts handling the worst reports, a founder makes the hard calls at night, and an engineer adds a ban button. That works until it doesn't: decisions depend on who handled the case, nobody owns the thresholds, and the person making 2am calls burns out or leaves with everything they knew.

Regulators now expect named accountability. In the UK, Ofcom's [illegal content codes of practice](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/statement-protecting-people-from-illegal-harms-online) recommend that every user-to-user service names a person accountable to its most senior governance body for complying with its illegal content duties and its reporting and complaints duties. In the EU, the Digital Services Act requires very large online platforms and search engines to set up a compliance function that is independent of their operational functions, with a head who reports directly to the management body ([Article 41](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). How you structure the team is now part of how you show you're in control of the risk.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A safety lead who owns policy, the queue and escalations, a vendor or part-time reviewers, outside counsel you can call, a clinical partner for anyone who sees harmful content, and a named executive who owns safety risk. | Separate leads for policy and operations, an investigator for severe harm, an analyst who owns safety metrics, engineers assigned to safety tooling, a legal or compliance partner, and vendor staff calibrated with the in-house team. | Specialist teams by harm area and region, a compliance function where the law requires one, a wellbeing lead, written career levels for reviewers, specialists and managers, and workforce planning tied to the risk assessment. |
| **What you can show** | A one-page list of who decides what. Every person who reviews harmful content has support. | An owner for every policy area, threshold and legal duty. Quality and attrition reported for in-house and vendor teams on the same page. | The accountability regulators expect, written down. How many leads and specialists came up from the review team. Attrition by team and exposure level. |

## How to do it

### 1. Start from your risks

The harms your product invites decide which skills you need first, so start from your risk assessment ([chapter 2](02-know-your-risks.md)), not a template org chart. A few product traits change the first specialist hire more than anything else:

| If your product... | You'll need early |
|---|---|
| Lets strangers talk to each other, especially if children use it | Child safety investigation, trained reviewers and a restricted escalation path |
| Moves money or items between users | Fraud and scam investigation, and access to payments data |
| Hosts uploads at scale | Operations and vendor management, and hash matching for known illegal images |
| Shares or exposes location | Investigation of stalking and real-world threats, with a route to the authorities |
| Generates content with AI | Policy that can be turned into prompts and evaluations, and people who can attack your own model |
| Serves users in the EU or UK, or many children | A legal or compliance partner who maps each duty to an owner |

Early on, one person covers several of these. That's fine, as long as you write down which hats each person wears. A gap is only dangerous when nobody knows it's there.

### 2. Know the roles

These are the roles a mature team ends up with. At first they're responsibilities, not job titles.

| Role | What they own | You need it covered when |
|---|---|---|
| **Policy** | The written rules, internal guidance for reviewers, the enforcement ladder and the change log ([chapter 4](04-writing-policy.md)) | Decisions depend on who handles the case |
| **Operations** | Queues, response-time targets, capacity, vendors and getting guidance changes to every reviewer ([chapter 7](07-review-operations.md)) | There's more review than one person can do, or you sign a vendor |
| **Investigations** | Networks of accounts, severe harm cases, evidence, referrals to law enforcement and cross-platform signal sharing ([chapter 12](12-severe-harm-escalations.md)) | You see repeat offenders, organized abuse or child safety cases |
| **Data** | Metrics, thresholds, prevalence sampling and the analysis that shows safety's effect on retention ([chapter 11](11-measuring-what-matters.md)) | You need to set a threshold from evidence or prove the program works |
| **Engineering** | Review tooling, detection, logging and the safety features inside the product ([chapter 5](05-detection-and-prevention.md)) | Your tools limit what you can do, for example when banning is the only lever |
| **Legal liaison or compliance** | Each legal duty mapped to an owner, reporting duties, and requests from regulators and law enforcement ([chapter 16](16-regulation-and-compliance.md)) | A safety law applies to you, or a regulator writes |
| **Wellbeing** | Exposure limits, counseling, support tools and wellbeing standards for vendors ([chapter 14](14-moderator-wellbeing.md)) | Anyone reviews harmful content: from day one, usually as a contracted clinical partner first |

Data and engineering are easy to borrow and hard to keep. A data analyst on loan for a quarter can build a dashboard. Nobody on loan owns a threshold. If the program has to prove it works, someone has to own the numbers. Since every threshold decision gets tested the day a regulator, a parent or a court asks why a specific account was or wasn't restricted, that someone needs to be on your team, or permanently assigned to it.

### 3. Choose the order of your first five hires

There's no single right order: it's a choice your risks should make. For a consumer product where users can contact each other, one order that works well is:

1. **A Trust & Safety lead.** A generalist who can write a policy, run a queue, handle a severe escalation and explain a trade-off to an executive. Not a pure specialist: in the first year they'll do all of it. [Chapter 3](03-the-first-90-days.md) covers what they do first.
2. **An operations lead or senior reviewer.** Someone who builds the queues, targets and vendor relationship, so the lead isn't the queue.
3. **An investigator for severe harm.** Trained in your highest risk, whether that's child safety, threats or organized fraud, and in preserving evidence and meeting reporting duties.
4. **A data analyst.** At least half dedicated, owning the metrics and the evidence behind every threshold.
5. **A safety engineer.** Or an engineer assigned for a long stretch, who owns the review tooling and builds safety features into the product.

Then a policy specialist and a legal or compliance partner, as your markets and laws demand.

Other orders are just as defensible, depending on what you face first:

- **Engineer earlier** when safety tooling and product changes would do more than headcount, for example when reviewers are slowed by poor tools or the biggest risks can be designed out.
- **Investigator before operations** when severe harm can't wait and a vendor can cover queue volume at first.
- **Data earlier** when leadership needs proof before it will invest, or when you can't yet tell which harms are growing.

Change the order when your risks are different. A marketplace or payments product is likely to need a fraud investigator before an operations lead. An AI product needs policy and evaluation skills early. A product launching in the EU or UK, or built for children, may need compliance help before an analyst, even if it's shared with Legal.

Some things are better bought than hired at first: review volume and language coverage from a vendor, outside counsel for unusual legal questions, open-source tools such as ROOST's [Coop](https://github.com/roostorg/coop), and a clinical partner for wellbeing. Put the clinical partner in place before anyone starts reviewing harmful content, not after the first person struggles.

### 4. Decide where the team reports

Every option has trade-offs, but I have a view. Trust & Safety should report into Product or directly to the executive level, and work across every team: Product, Engineering, Legal, Operations, Support and Comms. Making safety a function of Operations is a mistake, and I've written about why: [You can't moderate your way out of a systems problem](https://www.linkedin.com/feed/update/urn:li:activity:7506790883938295809/). At scale, you can't moderate your way out of a systems problem. Under Operations, safety gets judged on throughput and cost per ticket, and the work that prevents harm, policy, detection and getting into design reviews, gets starved. Here are the options, with their trade-offs:

| Reports into | Strengths | Risks | Works best when |
|---|---|---|---|
| **Product** | In the room at design review, with access to engineers and roadmaps | Safety competes with growth goals set by the same leader, and safeguards that cost a feature its metric get traded away | The product leader has safety outcomes in their own goals |
| **Legal** | Regulatory weight, close to reporting duties and law enforcement | Drifts toward the legal minimum and away from product decisions | You're heavily regulated, or building out compliance fast |
| **Operations or support** | Process discipline, vendor management and cost control | Judged on throughput and cost per ticket, like a cost center, with policy and detection starved | The work is mostly high-volume review, and risk ownership sits elsewhere |
| **CEO or COO** | Authority, fast escalation and a clear signal that safety matters | Little executive time, and distance from daily product work | Safety is core to the business, or you're rebuilding trust after a crisis |

Whichever you choose, three things matter more than the box on the org chart:

- **Name the executive who owns safety risk**, and give the Trust & Safety lead a direct line to them for escalations, whatever the reporting line.
- **Write down decision rights.** Who can change a policy, move a threshold, report to law enforcement, approve a public statement, or accept a known risk at launch. When a launch goes ahead with a known risk, the person who owns the product outcome signs off, with a date to revisit. Trust & Safety makes sure the risk is in front of them, and takes it to the executive who owns safety risk when it's too serious for one person. [Chapter 15](15-working-with-product-legal-and-leadership.md) has one split of decisions with Legal and Comms.
- **Keep the team out of a throughput-only scorecard.** If your leader judges you on tickets closed and cost per ticket, report outcomes beside them ([chapter 11](11-measuring-what-matters.md)), or the program will be run as a cost center.

Revisit the reporting line when you change stage. What suited five people may not suit fifty.

### 5. Interview for judgment

Most Trust & Safety work is a decision made with incomplete information, under time pressure, that someone will question later. Interview for that, not for knowledge of your rules, which anyone can learn.

- **Use a case, not trivia.** Give a short written scenario with no clean answer: an account that's probably a minor on an adult feature, a report that could be a credible threat or a joke, a top creator breaking a rule. A decision from the [incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop) works well.
- **Add a fact halfway through.** Good candidates change their answer when the evidence changes, and explain why.
- **Score against a rubric agreed before the interviews**, with at least two interviewers scoring separately.
- **For reviewer roles, use a work sample.** A set of cases near the line, ten for example, with your written guidance open. You're testing how they read guidance, not what they remember.
- **Test languages in the language**, with a native speaker.
- **For leadership roles, hand them a quarter where the numbers went up.** The answer you want sounds like "Our numbers are up, and I'm not convinced we're safer," followed by what they'd check.

You don't need graphic material to test judgment, so leave it out of interviews. But tell candidates plainly what the job involves, what they may see, and what support exists, before they accept.

### 6. Build career paths, so people can grow without staying in the worst queues

Expertise in this work is slow to build and quick to lose. Every leaver takes their training and judgment with them. Career paths are how you keep it.

- **Make the paths visible.** Which ones you can offer depends on your size. Common ones: reviewer to quality and calibration specialist, to harm-area specialist, to investigator. Reviewer to lead, to operations manager. Sideways into policy, data, vendor management or product.
- **Offer a specialist track.** Pay and titles for expertise, such as child safety investigation or a language market, without forcing people to manage.
- **Never make the worst queue the only route up.** Time on high-exposure queues should be limited and rotated, and promotion shouldn't depend on staying there ([chapter 14](14-moderator-wellbeing.md)).
- **Pay for scarce skills.** Languages, investigation and engineering that understands abuse are hard to hire, so pay to keep them.
- **Write down the levels.** What's expected at each one, so promotion doesn't depend on who your manager is.

Track attrition by team and exposure level, using the [attrition and wellness-support usage](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/attrition-and-wellness-support-usage.md) metric. If people leave high-exposure queues much faster than others, the problem is the work design, not the hiring.

### 7. Treat vendor staff as part of the team

Where you use a vendor, its reviewers may make most of the decisions your users actually experience. If they're treated as a ticket count, the quality shows it.

- **Same guidance, at the same moment.** A change reaches vendor teams when it reaches yours, not a week later through an account manager ([chapter 7](07-review-operations.md)).
- **Same calibration.** Vendor reviewers join the same calibration sessions, and their quality is measured the same way as yours.
- **Same escalation paths.** A vendor reviewer who finds a child at risk at 3am reaches your on-call specialist as fast as an employee would.
- **Same wellbeing standards**, written into the contract and checked ([chapter 14](14-moderator-wellbeing.md)).
- **A way to flag what they see.** Vendor reviewers may spot a new abuse pattern before anyone else. Give them a route to report it, and tell them what happened.
- **Least access, logged.** Give each reviewer access only to what the case needs, log every lookup, and get audit rights in the contract. The tabletop scenario [The DMs nobody reported](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/insider.md) shows why.

How you treat vendor staff in a crisis shapes quality afterwards. If a site goes dark, keep paying, ask how you can help, and expect experienced people back sooner. [Chapter 9](09-choosing-vendors-and-tools.md) covers choosing and contracting vendors.

## Mistakes to avoid

- **Hiring reviewers before anyone owns policy.** Write the rules and the escalation path first, or a larger team just makes inconsistent decisions faster.
- **Making the first hire a narrow specialist.** The first lead needs to write policy, run a queue and handle escalations. Add specialists second.
- **Borrowing data and engineering indefinitely.** Somebody on your team has to own the numbers and the tools.
- **Reporting into a line that measures only throughput.** Report outcomes beside activity, or the program will be run as a cost center.
- **Leaving safety risk without an executive owner.** Name one, and write down who decides what.
- **Interviewing for knowledge of the rules.** Test judgment with a case that has no clean answer.
- **Making the worst queue the path to promotion.** Rotate exposure and offer a specialist track.
- **Treating vendor reviewers as a ticket count.** Same guidance, calibration, escalation and wellbeing as your own team.
- **Waiting for scale to arrange wellbeing support.** Put a clinical partner in place before the first person reviews harmful content.

## Start from this template

**Who wears which hat.** Fill it in today, and again on a regular rhythm, every quarter for example.

| Role | Who covers it now | Share of their time | Biggest gap | Hire, buy or borrow, and by when |
|---|---|---|---|---|
| Policy | | | | |
| Operations | | | | |
| Investigations | | | | |
| Data | | | | |
| Engineering | | | | |
| Legal liaison or compliance | | | | |
| Wellbeing | | | | |

**Decision rights.** Agree it with your executive sponsor and Legal.

| Decision | Who proposes | Who decides | Who must be consulted | Where it's recorded |
|---|---|---|---|---|
| New or changed policy | | | | |
| Threshold change | | | | |
| Accepting a known risk at launch | | | | |
| Report to law enforcement | | | | |
| Public statement about an incident | | | | |

**Judgment interview scorecard.** Score each separately on a short scale, for example 1 to 4, before you discuss the candidate: asks for the facts that matter; separates what to do now from what to decide later; weighs harm against fairness and privacy; changes their answer when the evidence changes; explains the decision so a user or regulator could follow it; knows when to escalate.

## Do it with

- **[Program maturity](https://stevenmacchia.com/ts-workbench/#maturity)**: Rate the program in eight areas against the targets for your stage, and get a phased roadmap. [Open content](https://github.com/stevenmacchia/ts-maturity-model)
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Use a scenario's decisions as interview cases, and rehearse [The DMs nobody reported](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/insider.md) (a contractor on the review team misusing access).
- **[Vendor scorecard](https://stevenmacchia.com/ts-workbench/#vendors)**: Choose a moderation vendor on evidence, with reviewer wellness as a minimum. [Open content](https://github.com/stevenmacchia/moderation-vendor-scorecard)
- **[QA agreement rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/qa-agreement-rate.md)** (metric): how often in-house and vendor reviewers make the same call an expert would, measured the same way for both.
- **[Attrition and wellness-support usage](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/attrition-and-wellness-support-usage.md)** (metric): whether you're keeping the people who keep users safe, by team and exposure level.

## Further reading

From Steven's writing:

- **[You can't moderate your way out of a systems problem](https://www.linkedin.com/feed/update/urn:li:activity:7506790883938295809/)** (Sep 18, 2026): Treating Trust & Safety mainly as an operations function is a mistake. Reputation, history, age and behavior signals belong in one risk model, automation needs clear limits, and safety belongs in the product architecture from the start.

Outside sources:

- **[Ofcom: protecting people from illegal harms online](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/statement-protecting-people-from-illegal-harms-online)**: the UK illegal content codes, including the governance and accountability measures.
- **[The Digital Services Act](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)**: Article 41 sets out the compliance function very large platforms and search engines must have.
- **[TSPA: Key Functions and Roles](https://www.tspa.org/curriculum/ts-curriculum/functions-roles/)**: the Trust & Safety Professional Association's guide to the common functions in a Trust & Safety team and the job titles in each.
- **[TSPA: Careers in Trust & Safety](https://www.tspa.org/careers/)**: guidance for people moving into the field, with common questions, job-search advice and learning resources.
- **[Digital Trust & Safety Partnership: Best Practices Framework](https://dtspartnership.org/best-practices/)**: industry commitments, including accountable roles for policy and operations and investment in the wellness of teams handling sensitive material.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
