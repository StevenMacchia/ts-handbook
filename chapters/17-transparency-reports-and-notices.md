# 17. Transparency reports and enforcement notices

> **How do you explain your decisions to users and the public?**

*Part 4: Scale and govern* · [Contents](../README.md) · [← 16. Regulation and compliance](16-regulation-and-compliance.md) · [18. AI in Trust & Safety →](18-ai-in-trust-and-safety.md)

## In one minute

- **Tell people what you did, why, and what they can do about it.** A good notice names the action, the specific rule, the facts, whether automation was involved and how to appeal, in words a 12-year-old could follow.
- **Send a notice for every restriction, not just removals.** Demotions, demonetization, suspensions and held payments count too, and they're where programs usually fall short.
- **Log for the report from the first decision.** A transparency report is a query over your decision logs. If a field was never logged, nobody can rebuild it at the deadline.
- **Publish on the required template and schedule, and say what the numbers mean.** A report that only counts removals tells readers how busy you were, not whether anyone is safer.
- **Keep notices, reports and public claims consistent with what enforcement actually does.** Every public safety claim is evidence, and someone will test it.
- **The mistake to avoid:** a templated notice that names no specific rule or fact. Users can't act on it, appeals pile up, and in the EU it's unlikely to meet what Article 17 asks for.

## Why it matters

A user who doesn't know why they were actioned can't fix their behavior, can't make a good appeal and has no reason to trust the next decision. Notices are also the part of enforcement most users ever see, so they shape what people believe about your rules.

Regulators now require both halves of the explanation. The EU's Digital Services Act (DSA) requires hosting services to give a clear and specific statement of reasons for every restriction ([Article 17](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). Online platforms, other than micro and small enterprises (Article 19), must also send each one to a public database run by the European Commission (Article 24(5)), and most services must publish a transparency report at least once a year (Article 15). Transparency duties are enforced: the Commission's [first DSA non-compliance decision](https://digital-strategy.ec.europa.eu/en/news/commission-fines-x-eu120-million-under-digital-services-act), a €120 million fine against X in December 2025, covered, among other things, an advertising repository that fell short of the DSA's transparency requirements and a failure to give researchers access to public data. And what you say publicly is tested against what you do. In March 2026, a New Mexico jury found Meta liable under the state's consumer protection law for [misleading consumers about the safety of its platforms](https://nmdoj.gov/press-release/new-mexico-department-of-justice-wins-landmark-verdict-against-meta/).

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A notice for every removal and account action that names the rule and the appeal route, a decision log with policy, action, source and timestamps, and, if the DSA applies and you're not a micro or small enterprise, a yearly report. | A notice for every restrictive action, including demotions; templates for each policy in plain language and every supported language; automation disclosed; statements of reasons sent to the DSA database if you're an online platform; and a yearly report built from the logs. | Six-monthly reports if you're a very large platform, with moderation staff and accuracy by language; Ofcom's transparency notice met if you're a categorised UK service; and every public safety claim reviewed by T&S before it's published. |
| **What you can show** | Statement-of-reasons coverage for removals and suspensions, and a regular sample of notices checked against a checklist. | Coverage by type of action, appeal and overturn rates for each notice template, and a report whose numbers reconcile with your internal dashboards. | Reports that reconcile with the DSA database and your dashboards, a readable summary that says what changed and why, and a register tracing every public claim to a metric and an owner. |

## How to do it

### 1. Decide which actions need a notice

Start with a list of every action your systems can take against a user or their content, then mark which ones need a notice. Under the DSA, a hosting service owes a statement of reasons for any of these restrictions, when it acts because content is illegal or breaks its terms ([Article 17(1)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)):

- Restricting the visibility of content, including removing it, disabling access to it or demoting it.
- Suspending, ending or otherwise restricting monetary payments.
- Suspending or ending the service, in whole or in part.
- Suspending or closing the account.

The duty applies whenever you know the user's electronic contact details, at the latest from the moment the restriction starts, however it was triggered. It doesn't apply to deceptive high-volume commercial content (Article 17(2)).

The people who report content are owed an answer too. A hosting service must tell the person who sent a notice of illegal content what it decided and how they can seek redress, and say if it used automated means (Article 16(5) and (6)). In the UK, the Online Safety Act requires complaints procedures that cover content taken down, warnings, suspensions and bans where the provider acted because it considered the content illegal (or, on services likely to be used by children, harmful to them), and content restricted by proactive technology in a way the user thinks breaks the terms of service ([section 21](https://www.legislation.gov.uk/ukpga/2023/50/section/21)), so users need to know an action happened in order to complain about it.

Where no law requires a notice, sending one is a choice, and usually the better one: it's cheaper than the appeals and support tickets that follow silence. If you hold one back, make that a decision, not a gap. Log every action whether or not a notice goes out, with a field that records whether it did.

By stage: an early team covers removals and account actions first. A growing team wires demotions, reduced visibility and monetization into the same notice system, because that's where coverage gaps usually hide. At scale, every action type has a notice template and a coverage number.

### 2. Write notices people can understand and act on

If a notice does only one thing, it should name the exact rule and what the person did that broke it. Everything else builds on that.

The DSA lists what a statement of reasons must contain ([Article 17(3)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). Each element has a plain-language version a user can act on:

| DSA element | In the notice | What good looks like |
|---|---|---|
| (a) What you did, its territorial scope and duration | What happened to their content or account, and for how long | "We removed three of your comments. This counts as a warning, and nothing else about your account has changed." |
| (b) The facts, and whether it followed a notice or your own detection | What they did, and when | The date, the content and the pattern, without other people's personal data |
| (c) Use of automated means | Whether a tool detected it, decided it, or both | "An automated tool flagged the comments, and a person on our team made the decision." |
| (d) The legal ground, if you acted on illegal content | Which law, and why the content breaks it | The law named, in one plain sentence |
| (e) The contractual ground, if you acted under your terms | Which rule, and why the content breaks it | The policy and section, not "our community guidelines" |
| (f) Redress | How to appeal, the deadline and what happens next | Where to appeal, by when, who decides and how fast; in the EU, the courts, and out-of-court dispute settlement where it applies (online platforms) |

The information must be clear, as precise and specific as the circumstances allow, and enough for the user to use their options for redress (Article 17(4)). Templated reasons that don't name the specific policy don't meet that bar.

A few rules make notices work in practice:

- **Write one template per policy, with slots for the facts.** A generic "you broke our rules" template is fast to build and useless to receive.
- **Keep it short and plain.** Aim for a length and reading level your youngest users can follow, for example under 220 words at about age 12, with no threats and no unexplained legal terms. Add a one-line version for a push notification.
- **Be honest about automation.** If a classifier made the decision alone, say so. If a person reviewed it, say that.
- **Handle self-harm with care.** If the content was about suicide or self-harm, be supportive and point to help, without lecturing.
- **Have a person approve every template,** and review templates whenever the policy behind them changes.

The [enforcement notice writer](https://stevenmacchia.com/ts-workbench/#notice) writes a notice from a decision and checks it against these elements. One split of ownership that works: Policy owns the wording, Legal checks the legal grounds, and Operations owns the templates in the tool.

### 3. Connect every notice to an appeal

A notice without a working appeal route is a dead end. On online platforms, the DSA requires an internal complaint system that's free, electronic and open for at least six months after the user is told of the decision ([Article 20(1) and (2)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). Complainants must get a reasoned decision and be told about out-of-court dispute settlement (Article 20(5)), and complaint decisions must be supervised by qualified staff, not made solely by automated means (Article 20(6)). [Chapter 10](10-quality-calibration-and-appeals.md) covers designing the appeal itself.

Put the appeal link in every notice, and measure each template. A template with a high appeal rate and a high overturn rate is telling you something: the rule is unclear, the facts in the notice are wrong, or automation has drifted. When an area stays high, review the guidance before reviewer performance. The appeal decision needs the same discipline as the first notice: a template that doesn't say why teaches users the process is for show.

### 4. Log for the report from the first decision

A transparency report is a query over your decision logs. Most teams that struggle with the report didn't log a field they now need, and you can't add it after the fact. Map each part of the report to the data behind it:

| What the DSA report asks for | Article | What you need to have logged |
|---|---|---|
| Orders from EU authorities, by type of illegal content and Member State, and the median time to confirm receipt and act | 15(1)(a) | Each order with its source, type, country, received and actioned times |
| Notices of illegal content, by type, how many came from trusted flaggers, whether you acted under the law or your terms, how many were handled by automated means, and the median time to act | 15(1)(b) | Each notice with its source type, category, basis for action, automation flag and timestamps |
| Moderation on your own initiative, including automated tools, training for moderators, and the measures taken, by type of content, detection method and type of restriction | 15(1)(c) | Each decision with its policy, action, source, detection method and timestamps |
| Complaints: the basis, the decisions, the median time and how many were reversed | 15(1)(d) | Each appeal joined to its original decision, with outcome and timestamps |
| Automated moderation: what it's used for, indicators of accuracy and possible error rates, and safeguards | 15(1)(e) | Model and version on each decision, and quality samples that measure accuracy |
| For online platforms, out-of-court disputes and their outcomes, and suspensions for misuse | 24(1) | Disputes and suspensions, each with its type and outcome |

Very large platforms add the people they dedicate to moderation in each official EU language, those people's qualifications, training and support, and accuracy indicators broken down by language ([Article 42(2)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)).

The [data to log](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/data-to-log.md) guide lists the fields. The two most often forgotten are the source of each decision (automated, proactive or a user report) and the time the item was first reported or detected. Accuracy indicators need quality sampling, so if you don't sample decisions yet, start before you have to report ([chapter 10](10-quality-calibration-and-appeals.md), [chapter 11](11-measuring-what-matters.md)).

### 5. Publish on the required template and schedule

Under the DSA, the [Commission's Implementing Regulation (EU) 2024/2835](https://eur-lex.europa.eu/eli/reg_impl/2024/2835/oj) sets the format and the calendar:

- **Templates.** The Commission's CSV or XLSX templates apply from 1 July 2025, and the first reports using them were published in February 2026.
- **Periods.** Most services report on the calendar year. Very large platforms report every six months, January to June and July to December.
- **Deadline.** Publish within two months of the end of each period.
- **Retention.** Keep each report, and every published version, publicly available for at least five years.

Micro and small enterprises are exempt from the report unless they're very large platforms (Article 15(2)). Online platforms other than micro and small enterprises (Article 19) must also publish their average monthly active users in the EU at least every six months (Article 24(2)), and submit every statement of reasons to the Commission's DSA Transparency Database without undue delay, with no personal data in it (Article 24(5)). The Commission [explains how the database works](https://digital-strategy.ec.europa.eu/en/policies/dsa-brings-transparency).

Other regimes set their own terms. In the UK, Ofcom gives each categorised service a transparency notice every year that specifies what to report, in what format and by when, and the information must be complete and accurate in all material respects ([Online Safety Act, section 77](https://www.legislation.gov.uk/ukpga/2023/50/section/77)). In Australia, the eSafety Commissioner can require services to report on how they meet the Basic Online Safety Expectations ([Online Safety Act 2021, sections 49 and 56](https://www.legislation.gov.au/C2021A00076/latest/text)).

The template is the floor. Add a readable summary on top: what the main numbers mean, what changed since the last report and why, and where you think you got things wrong. Put outcomes next to activity. If removals rose 40%, say whether that's better detection, more harm or more good users caught by mistake, and how you know. A report that only counts removals tells readers how busy you were, not whether anyone is safer.

The [transparency report builder](https://stevenmacchia.com/ts-workbench/#transparency) lays out the DSA report section by section for your type of service, with a completeness check.

### 6. Reconcile the numbers before anyone else does

Your statements of reasons sit in a public database. Your report is public. Your dashboards go to leadership. Researchers, journalists and regulators can compare the first two, and they'll ask why they differ.

Reconcile before you publish:

- **Agree definitions once.** Decide whether you count actions, items or accounts, when the clock starts, and what counts as automated. Write them down and keep them stable. If one has to change, say so in the report and restate the trend.
- **Use one source of truth.** The report, the database submissions and the leadership dashboard should all come from the same decision log, not three separate pipelines.
- **Sample the notices, not just the counts.** On a regular cadence, monthly for example, check a sample of statements against the Article 17 elements, not just whether one was sent. How many depends on your volume: for example 100 once you have it, or 25 against a four-point checklist for an early team.
- **Break coverage down by action type.** A program can send statements for 99% of removals and 40% of demotions because demotions were never wired to the notice system. The total hides it. The breakdown shows it.

When you find a gap, publish it with the fix and a date rather than smoothing it over. A known gap with a remediation plan is easier to defend than a figure that later turns out to be wrong.

### 7. Keep public claims tied to what enforcement does

Public safety claims are evidence. Blog posts, press statements, app store descriptions, advertising, executive testimony and answers to journalists can all be compared with what your enforcement data shows. In the US, the FTC Act prohibits deceptive acts or practices in commerce ([15 U.S.C. § 45](https://www.law.cornell.edu/uscode/text/15/45)), and state consumer protection laws do the same. What Comms says has to match what enforcement actually does.

Make that a process, not a hope:

- **Keep a claims register.** Every public safety claim, the metric or fact behind it, its owner and the date it was last checked.
- **Give T&S sign-off on safety claims** before they're published, the same way Legal signs off on legal claims.
- **Avoid absolutes you can't show.** "We remove all harmful content" and "zero tolerance" invite the question of how you know. Say what you do and how well, with the number.
- **Recheck claims when the numbers change.** A claim that was true last year may not be after a policy change, a vendor switch or a cut in review capacity.
- **Apply the rules the same way to everyone.** The DSA requires providers to apply and enforce their terms in a diligent, objective and proportionate manner ([Article 14(4)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). An extra review step for high-reach accounts is easier to defend under that standard than an exemption from the rules, though how it applies is ultimately a question for Legal and regulators. Describe any special review program in your report before someone else describes it for you.

[Chapter 15](15-working-with-product-legal-and-leadership.md) covers working with Comms and Legal on public statements, and [chapter 13](13-crisis-response.md) covers what to say when something has gone wrong.

## Mistakes to avoid

- **Notices that only say "you broke our rules."** Name the specific policy, the facts and the way to appeal.
- **Covering removals but not demotions or monetization.** Wire every restrictive action to the notice system, and measure coverage by action type.
- **Hiding automation.** Say when a tool detected or decided, and be ready to show its accuracy.
- **Building the report by hand at the deadline.** Log the fields from the first decision, and generate the report from the same log as your dashboards.
- **Publishing numbers without saying what they mean.** Add a summary that puts outcomes next to activity and names what you got wrong.
- **Letting the report, the database and the dashboard disagree.** Agree definitions once, use one source, and reconcile before you publish.
- **Making public claims enforcement can't back.** Trace every claim to a metric and an owner, and recheck it when the numbers move.

## Start from this template

**Enforcement notice.** One per policy. Fill the slots from the decision record, and keep the body short (for example under 220 words).

| Part | What to write |
|---|---|
| Subject | What happened, in under 70 characters |
| What we did | The action, what it means for the account and how long it lasts |
| Why | The specific rule or law, with section, and the facts: what, where and when |
| How we decided | Whether automated tools detected it, decided it, or both, and whether a person reviewed it |
| What you can do | How to appeal, the deadline, who decides and how fast; in the EU, out-of-court dispute settlement and the courts |
| Short version | Under 160 characters, for a push notification |

**Transparency report data map.** One row per section of the report, filled in well before the first deadline (a quarter ahead, for example). The owners shown are examples; use whoever holds that data on your team.

| Report section | Article | Source table and fields | Owner | Logged since | Gaps and fix date |
|---|---|---|---|---|---|
| Orders from authorities | 15(1)(a) | | Legal operations | | |
| Notices of illegal content | 15(1)(b) | | T&S operations | | |
| Own-initiative moderation | 15(1)(c) | | T&S operations | | |
| Complaints and reversals | 15(1)(d) | | Quality | | |
| Automated tools and accuracy | 15(1)(e) | | Detection | | |

**Claims register.** One row per public safety claim: the claim as published, where it appeared, the metric or fact behind it, its current value, the owner, the date last checked and the date to recheck.

## Do it with

- **[Enforcement notice writer](https://stevenmacchia.com/ts-workbench/#notice)**: Write a notice checked against what an EU statement of reasons must include. [Open content](https://github.com/stevenmacchia/ts-ai-assistants)
- **[Transparency report builder](https://stevenmacchia.com/ts-workbench/#transparency)**: Build a DSA transparency report section by section, with a completeness check. [Open content](https://github.com/stevenmacchia/ts-ai-assistants)
- **[Statement-of-reasons coverage](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/statement-of-reasons-coverage.md)** (metric): the share of restrictive actions that come with a compliant explanation, broken down by type of action.
- **[Appeal overturn rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/appeal-overturn-rate.md)** (metric): how often appealed decisions are reversed, which shows which rules and notices users can't follow.
- **[Illegal-content notice handling time](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/illegal-content-notice-handling-time.md)** (metric): how fast formal notices of illegal content get a decision, the median time the DSA report asks for.
- **[Data to log](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/data-to-log.md)**: The event logs every report and metric depends on.
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Rehearse [The special-treatment leak](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vip.md) (a journalist asks why high-profile accounts get softer enforcement).

## Further reading

From Steven's writing:

- **[What I'm reading: Ofcom and Instagram Instants, Ofcom's data demands in court, and Roblox in Kansas](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-onlinesafety-share-7513201109180813312-FxKX/)** (Oct 6, 2026): Ofcom is investigating whether Meta risk-assessed Instagram Instants before launch, and Meta, TikTok and X are challenging Ofcom's demands for moderation data in court. Kansas settled with Roblox for more than $10 million plus age checks and age-grouped chat, and OpenAI's own tests show its new EU text watermark weakens when 10% of the words are swapped.

Outside sources:

- **[Regulation (EU) 2022/2065, the Digital Services Act](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)**: the official text. Article 17 covers statements of reasons, and Articles 15, 24 and 42 cover transparency reports.
- **[Implementing Regulation (EU) 2024/2835](https://eur-lex.europa.eu/eli/reg_impl/2024/2835/oj)**: the templates, reporting periods and deadlines for DSA transparency reports.
- **[European Commission: How the Digital Services Act enhances transparency online](https://digital-strategy.ec.europa.eu/en/policies/dsa-brings-transparency)**: the Commission's guide to the report templates and the Transparency Database.
- **[Online Safety Act 2023, section 77](https://www.legislation.gov.uk/ukpga/2023/50/section/77)**: the UK's transparency reporting duty for categorised services.
- **[The Santa Clara Principles](https://santaclaraprinciples.org/)**: civil society's standards for numbers, notice and appeal in content moderation.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
