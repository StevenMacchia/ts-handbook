# 10. Quality, calibration and appeals

> **How do you know decisions are right, and fix them when they aren't?**

*Part 3: Run* · [Contents](../README.md) · [← 9. Choosing vendors and tools](09-choosing-vendors-and-tools.md) · [11. Measuring what matters →](11-measuring-what-matters.md)

## In one minute

- **Check a random sample of decisions, with checkers who are independent.** Experts re-review decisions blind, and they're calibrated against each other before they judge anyone else.
- **Calibrate against one answer key.** On a regular rhythm, weekly for many teams, walk through the cases where reviewers and experts disagreed, fix the guidance, and measure agreement by queue, vendor and policy area.
- **Treat appeals as a real second look.** A different reviewer, a response target, and an answer the user can understand. In the EU, the Digital Services Act makes this a legal duty for online platforms.
- **Read overturns by policy area, enforcement source and market.** They're the early warning that automation or guidance has drifted, often weeks before anything else. Automation expands only where its overturn rate is at or below human review.
- **When an area runs high, review the guidance before the reviewers.** If many people make the same mistake, the rule is usually the problem.
- **The mistake to avoid:** reading a low overturn rate as proof you're right. Nobody appeals the harm you missed, and where few people appeal, a low rate can hide a lot of errors.

## Why it matters

Every enforcement decision touches someone's speech, income or safety. Wrong removals push good users away, usually in silence: most people who are actioned by mistake never appeal, they just leave. Wrong calls the other way leave harm in place. And as more decisions move to automation, errors can grow quickly before anyone notices. In 2020, when YouTube had far less human review capacity because of COVID-19 and relied more on automated systems, it removed more than double the number of videos it had removed the quarter before, and the share of appealed videos that were reinstated rose from 25% to 50% ([YouTube, August 2020](https://blog.youtube/inside-youtube/responsible-policy-enforcement-during-covid-19/)). The appeals showed what the removal numbers didn't.

Appeals are also a legal duty in some places. The EU's Digital Services Act requires online platforms to run an internal complaint-handling system ([Article 20](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)) and lets users take disputes to certified out-of-court bodies ([Article 21](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). Quality and appeals are how you know your decisions are right, and how you show it.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A lead who re-reviews a few random decisions per reviewer each week, an appeal option on every action, appeals handled by someone other than the original reviewer, and every appeal tagged upheld or overturned. | A quality team independent of operations, blind expert re-review of a random sample, calibration sessions on a set rhythm (often weekly), appeals in their own queue with a response target, and overturns broken out by policy area, enforcement source and market. | One answer key across every team, vendor and language; written rules for when automation gains or loses scope; a baseline and rollback for every model or threshold change; and complaint handling that meets the Digital Services Act and other laws where they apply. |
| **What you can show** | Overturn rate by month and policy area, and how long appeals wait. | Agreement with experts per queue, vendor and policy area, measured against how often experts agree with each other; overturn rates for automated and human decisions; appeal rates by market. | Every scope change and rollback with the numbers behind it, consistency across languages, and complaints, reversals, decision times and out-of-court outcomes ready for the transparency report. |

## How to do it

### 1. Sample decisions for quality, and keep the checkers independent

Quality assurance (QA) means re-checking a sample of past decisions to see whether they were right. Three choices decide whether it tells you the truth.

**How much.** Different methods work, and the right one depends on what you need to know. A flat number per reviewer, for example 20 to 30 checks a month, is enough to see each person's trend without burying the QA team; fewer, and one bad day swings the number. Sizing by risk puts more checks on severe queues and new reviewers and fewer on low-risk ones. A share of volume, for example 2 to 5% of decisions per queue, keeps the sample in step with workload. If you need a precise rate for a whole queue or vendor, size the sample with the method on the [QA agreement rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/qa-agreement-rate.md) page.

**From where.** Draw at random within each queue, vendor and policy area, so small areas aren't drowned out by big ones. Sample automated decisions as well as human ones. Include decisions to leave something up, not only decisions to remove it, or QA will only ever find over-enforcement.

**Who checks the checkers.** Experts re-label each sampled decision blind, without seeing the original call or who made it. Before they judge anyone, have the experts label the same set and measure how often they agree with each other. That's your ceiling. If experts agree 95% of the time, a vendor at 94% is near the limit and a vendor at 86% has a training gap.

Keep quality independent of the operations team it measures. If the people being measured choose the sample, the number will always look great.

By stage: an early team can start with a lead re-reviewing a handful of random decisions per reviewer each week, for example five, in a shared spreadsheet. A growing team needs a quality function the operations team doesn't control: its own reporting line is one way to get that. At scale, quality covers every vendor and language with native-speaker experts.

### 2. Run calibration sessions, and measure agreement

A calibration session is a meeting where reviewers and experts decide the same cases and compare answers, so everyone applies the rules the same way. How often depends on volume and how fast guidance changes. Weekly is a common starting point.

Bring the cases where QA found disagreement. For each one, ask a single question: did the reviewer miss something the guidance covers, or is the guidance unclear? Reviewer misses become coaching. Unclear guidance becomes a rewrite, and the agreed answer goes into a shared answer key.

Use one answer key for everyone: your own reviewers, every vendor and every language. Two teams with two answer keys will drift apart, and users will get different decisions depending on which queue their case lands in. When policy changes, recalibrate before the change goes live, not after the first wave of mistakes ([chapter 7](07-review-operations.md) covers getting guidance out fast).

Report agreement per queue, vendor and policy area. Then check [consistency across languages and markets](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/consistency-across-languages-and-markets.md): enforcement gaps usually show up first in the languages with the fewest resources, and machine-translated QA isn't reliable enough to find them.

### 3. Design appeals: who reviews, how fast, and what users are told

An appeal is a request to look at a decision again. Design it as a real second look, not a formality.

| Choice | Default |
|---|---|
| **Who can appeal** | Anyone whose content or account you acted on, and people who reported something you left up. In the EU, online platforms must offer both. |
| **Who reviews** | Someone who wasn't involved in the first decision, with the training to decide it. Where a wrong decision can't be reversed or someone's safety is at risk, a person makes the call, not a model. |
| **How fast** | A response target you publish and meet, with the fastest times for decisions that cost people the most: account bans, lost income, a business shut out. |
| **What users are told** | Which rule applied, what was decided, why, and what else they can do next. |
| **What happens on an overturn** | Restore the content or account, remove the strike, undo any knock-on limits, and send the case to the quality team as a training case. |

Tell users enough to understand the decision and act on it. The same notice discipline applies here as for the first decision ([chapter 17](17-transparency-reports-and-notices.md)). An appeal answered with a template that doesn't say why teaches users the process is for show.

The [appeal reviewer](https://stevenmacchia.com/ts-workbench/#appeal) gives a structured second opinion: it breaks the rule into the elements that must all be true, tests each against the facts, and weighs the user's arguments. A person makes the final call.

### 4. Meet your legal duties for complaints and appeals

Some laws set minimum standards for appeals. Two matter most for many services.

**The EU Digital Services Act** applies these duties to online platforms, with an exception for micro and small enterprises unless they're designated as very large online platforms ([Article 19](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)).

- **Internal complaint handling ([Article 20](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)).** Users, and people who submitted a notice, must be able to complain electronically and free of charge for at least six months from the day they're told about a decision. That covers decisions whether or not to remove content or restrict its visibility, to suspend or end the service or the account, or to restrict the ability to make money from content. Complaints must be handled in a timely, non-discriminatory, diligent and non-arbitrary way. Where a complaint shows the decision was wrong, the platform must reverse it without undue delay. It must tell the complainant its reasoned decision, and that out-of-court dispute settlement is available. The decision must be taken under the supervision of appropriately qualified staff, not solely by automated means.
- **Out-of-court dispute settlement ([Article 21](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)).** Users can take a dispute to any out-of-court dispute settlement body certified by a national Digital Services Coordinator, including complaints the internal system didn't resolve. Both sides must engage in good faith, but the body can't impose a binding settlement, and users can still go to court at any stage. The body must make its decision available within 90 calendar days of receiving the complaint, or up to 180 days for highly complex disputes. If it decides for the user, the platform pays the body's fees and reimburses the user's reasonable expenses. If it decides for the platform, the user doesn't have to pay the platform's costs unless they acted in manifest bad faith. The European Commission publishes [the list of certified bodies](https://digital-strategy.ec.europa.eu/en/policies/dsa-out-court-dispute-settlement).
- **Misuse ([Article 23](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)).** After a prior warning, platforms must suspend for a reasonable period the processing of notices and complaints from people who frequently submit manifestly unfounded ones, deciding case by case and setting out the policy in their terms and conditions.
- **Reporting ([Articles 15 and 24](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)).** Your complaint and out-of-court dispute numbers go into the transparency report. [Chapter 17](17-transparency-reports-and-notices.md) sets out what the report must include and the fields to log for it.

**The UK Online Safety Act** requires regulated user-to-user services to operate a complaints procedure that is easy to access, easy to use (including by children) and transparent ([section 21](https://www.legislation.gov.uk/ukpga/2023/50/section/21)). Relevant complaints include users whose content was taken down as illegal, users warned, suspended or restricted because of content the provider considered illegal, and users who think proactive technology was used against their content in a way the terms of service don't allow. The policies and processes for handling complaints have to be set out in the terms of service.

Other markets have their own rules. Map what applies to you with Legal ([chapter 16](16-regulation-and-compliance.md)), and log every appeal with timestamps, so the numbers these laws ask for come straight from your data.

### 5. Break overturns out where they'll show drift

The appeal overturn rate is the share of decided appeals where the original decision was reversed. One overall number tells you little. Broken out, it's one of the best early-warning signals you have.

Join every appeal to its original decision, so you know the policy, the enforcement source (automated, proactive human review or a user report), the reviewer, the vendor, the market and the model version. Then read overturns by:

- **Policy area**, to find where guidance is unclear.
- **Enforcement source**, to see where automated decisions hold up worse than human review.
- **Market and language**, to see where context is getting lost.
- **Model version**, to see whether a model has drifted.

Overturns often show drift weeks before anything else does. If automated removals in one area are overturned several times as often as human removals in the same area, that threshold is too aggressive. Track the appeal rate (appeals divided by actions) next to it, and review both in the monthly health review. The [appeal overturn rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/appeal-overturn-rate.md) page has the formula, the steps and a starter query.

### 6. Govern automation with overturn rates

Overturn data is something you can govern with. These are the rules I'd put in place:

- **Automation doesn't expand into a new policy area until its overturn rate is at or below human review** in that area.
- **Every model or threshold change gets an overturn baseline before launch and a check an agreed number of weeks after.** If the rate moves past an agreed limit, the change rolls back.
- **Decide in advance what earns automation more scope, and what takes it away.** Write it down before the launch, not after the results.

Overturns aren't the only gate. Pair them with precision from blind sampling, because appeals arrive slowly and only from people who chose to appeal ([precision and recall by policy area](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/precision-and-recall-by-policy-area.md)). Record every scope change and rollback with the numbers behind it and the name of the person who signed it off. When a regulator or a court asks why automation made a decision, that record is the answer.

The same rules apply to tools you buy ([chapter 9](09-choosing-vendors-and-tools.md)). [Chapter 18](18-ai-in-trust-and-safety.md) covers where automation should stop.

### 7. When an area runs high, review the guidance first

When a policy area stays above its overturn target, the first thing reviewed is the guidance itself, before anyone looks at reviewer performance.

The reason is simple. One reviewer getting a case wrong is a training problem. Many reviewers getting the same kind of case wrong is a guidance problem. Pull a sample of recent overturns in the area and ask, for each one: did the reviewer apply the guidance as written?

- **If yes,** the guidance produced the wrong answer. Rewrite it, test the rewrite on the overturned cases, and recalibrate ([chapter 4](04-writing-policy.md) covers writing rules people can apply).
- **If no,** look for a pattern. One reviewer, one vendor, one language or one shift points to training, staffing or translation, not to the rule.

Check the appeal decisions too. Appeal reviewers make mistakes, and if they're inconsistent, the overturn rate measures them rather than the original decisions. Put a sample of appeal decisions through the same blind QA.

### 8. Know what appeals can't tell you

Appeal data is useful and incomplete. Read it with its limits in mind.

- **It only measures over-enforcement.** Nobody appeals the harm you missed. Pair overturns with prevalence sampling, a random sample of what users actually see, which shows under-enforcement ([chapter 11](11-measuring-what-matters.md)).
- **Appeal rates vary by market.** Language, awareness and trust all change how often people appeal. A low overturn rate where few people appeal isn't automatically good news.
- **Most people actioned by mistake never appeal.** They leave. Estimate [good users wrongly actioned](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/good-users-wrongly-actioned.md) from QA error rates as well as overturns, and follow what happens to those users next.
- **The people who appeal aren't a random sample.** Some groups appeal far more than others, so overturns tell you where to look, and QA tells you how big the problem is.

## Mistakes to avoid

- **Letting operations choose its own QA sample.** Draw it at random, and have an independent team score it blind.
- **Judging reviewers against experts who don't agree with each other.** Measure expert-to-expert agreement first, and treat it as the ceiling.
- **Blaming reviewers first when an area runs high.** Review the guidance before reviewer performance.
- **Letting the original reviewer decide the appeal.** A different, trained person takes the second look.
- **Reading overturn rates without appeal rates.** A low overturn rate where few people appeal can hide errors.
- **Expanding automation without a baseline.** Measure before the change, check after, and roll back past an agreed limit.
- **Closing an overturn without learning from it.** Restore what was lost, fix the record, and send the case to the quality team.
- **Treating appeals as your only quality signal.** Pair them with blind QA and prevalence sampling.

## Start from this template

**Quality sampling plan.** One row per queue, vendor or policy area.

| Queue, vendor or policy area | Checks per reviewer per month (or share of volume) | Expert labelers | Expert-to-expert agreement | Target agreement | Owner |
|---|---|---|---|---|---|
| | For example 20 to 30 | | | | |
| | | | | | |

**Automation scope rules.** Agree them before launch, and log every change.

| Policy area | Human overturn rate | Automated overturn rate | Scope today | Expands when | Rolls back when | Owner | Last change, and why |
|---|---|---|---|---|---|---|---|
| | | | | At or below human review for an agreed period | Past the agreed limit after a change | | |
| | | | | | | | |

**Monthly appeals review.** One page for T&S leadership: appeal rate and overturn rate by policy area, enforcement source and market; areas above target, and what was reviewed first; model or threshold changes this month with their before-and-after overturn rates; any rollbacks; and, where the Digital Services Act applies, complaints received, median time to decide, decisions reversed, and out-of-court disputes with their outcomes.

## Do it with

- **[Appeal reviewer](https://stevenmacchia.com/ts-workbench/#appeal)**: Test each element of the rule against the facts of an appeal, with a person making the call. [Open content](https://github.com/stevenmacchia/ts-ai-assistants)
- **[Enforcement notice writer](https://stevenmacchia.com/ts-workbench/#notice)**: Write a notice that tells the user what rule applied and what they can do next, checked against what an EU statement of reasons must include. [Open content](https://github.com/stevenmacchia/ts-ai-assistants)
- **[Compliance readiness](https://stevenmacchia.com/ts-workbench/#dsa)**: Find which Digital Services Act duties apply to your service, article by article, including complaint handling and out-of-court dispute settlement.
- **[QA agreement rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/qa-agreement-rate.md)** (metric): how often front-line decisions match a blind expert re-review, by queue, vendor and policy area.
- **[Appeal overturn rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/appeal-overturn-rate.md)** (metric): the share of decided appeals that reverse the decision, by policy area and enforcement source.
- **[Good users wrongly actioned](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/good-users-wrongly-actioned.md)** (metric): how many legitimate users you hurt by mistake, estimated from QA as well as appeals.
- **[Consistency across languages and markets](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/consistency-across-languages-and-markets.md)** (metric): whether you're as accurate in every language as in your best one.

## Further reading

From Steven's writing:

- **[Appeal overturns: the early warning for automation](https://www.linkedin.com/posts/stevenmacchia_as-more-enforcement-moves-to-automation-share-7508900187977854976-DLyv/)** (Sep 24, 2026): Overturned appeals show drift weeks before anything else. Automation expands only where its overturn rate matches human review, and changes roll back when the rate moves.

Outside sources:

- **[EU Digital Services Act (Regulation 2022/2065)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)**: the official text. Article 20 covers internal complaint handling and Article 21 out-of-court dispute settlement.
- **[European Commission: out-of-court dispute settlement bodies](https://digital-strategy.ec.europa.eu/en/policies/dsa-out-court-dispute-settlement)**: how the bodies work, and the list of certified ones.
- **[UK Online Safety Act 2023, section 21](https://www.legislation.gov.uk/ukpga/2023/50/section/21)**: the duties about complaints procedures for user-to-user services.
- **[The Santa Clara Principles](https://santaclaraprinciples.org/)**: civil society's standards for notice and appeal in content moderation.
- **[TSPA: Metrics for content moderation](https://www.tspa.org/curriculum/ts-fundamentals/content-moderation-and-operations/metrics-for-content-moderation/)**: quality, appeals and time-based metrics, explained.
- **[YouTube: Responsible policy enforcement during COVID-19](https://blog.youtube/inside-youtube/responsible-policy-enforcement-during-covid-19/)**: what happened to removals and appeals when human review capacity fell.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
