# 11. Measuring what matters

> **Is the program making people safer, and how would you prove it?**

*Part 3: Run* · [Contents](../README.md) · [← 10. Quality, calibration and appeals](10-quality-calibration-and-appeals.md) · [12. Severe harm escalations →](12-severe-harm-escalations.md)

## In one minute

- **Report outcomes next to operations, and say so when they disagree.** Removals and automation rate show the machine is running. Exposure to harm, repeat offending and prevented contact show it's working.
- **Adopt metrics a few at a time.** One order that works: north stars, then health metrics, then diagnostics. Each needs an owner, a target band and a meeting that looks at it on a schedule.
- **Measure exposure with a random sample of what users see.** Prevalence sampling is the only way to count the harm nobody reported.
- **Pair appeals with prevalence.** Overturned appeals show what you over-enforced. Sampling shows what you missed.
- **Prove the retention case with a matched cohort.** In raw data, harassed users can look like your best-retained users, because they're your most engaged ones.
- **The mistake to avoid:** celebrating a jump in removals. 40% more could mean better detection, more harm, or good users caught by mistake.

## Why it matters

What gets measured gets resourced. When a program is rewarded for activity, it optimizes for activity: more removals, more reports closed, a higher automation rate. Those numbers are easy to produce and almost always go up and to the right. None of them says whether users are safer, so a safety team measured only by throughput gets judged like a cost center.

The outcomes are real and measurable. In a 2023 Take This report based on a Nielsen poll of 2,328 teens and adults in North America, 61% of players said they had at least once decided not to spend money in a game because of how other players treated them, and 60% had quit a match or a game because of harassment and hate ([Take This, 2023](https://www.takethis.org/wp-content/uploads/2023/08/ToxicGamersBottomLineReport_TakeThis.pdf)). But surveys rarely move a budget. Your own data does, if it's cut correctly.

Regulators are asking too. The EU's Digital Services Act requires every intermediary service except micro and small enterprises to include, in its transparency report, indicators of the accuracy and possible error rate of automated moderation ([Article 15(1)(e)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)), and [chapter 17](17-transparency-reports-and-notices.md) covers the rest of the report. Counting what you did is no longer enough. You need to show whether it was right and whether it worked.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | Every decision logged with its policy, source and timestamps; one north star for your platform, even from a small weekly sample; appeals tagged upheld or overturned; and a monthly one-page review. | Health metrics for detection, decision quality and operations, each with an owner and a target band; prevalence from a properly sized random sample; repeat-offender tracking; a weekly, monthly and quarterly review rhythm; safety exposure as a cut on the retention dashboard; and a first matched-cohort analysis done with the data team. | Diagnostics across languages, markets, emerging trends and people; matched-cohort retention analysis every quarter; safety metrics required in launch and business reviews; and numbers that reconcile with the transparency report and the company's own figures. |
| **What you can show** | Your north star with an honest range, the overturn rate, how fast the most severe cases are handled, and what changed this month. | Prevalence with a 95% confidence interval by policy area, overturns read next to prevalence, the share of new users whose early sessions include an actioned incident, a first estimate of what that exposure costs in return, and outcome and operational metrics side by side on every leadership slide. | A trend, target and owner for every north star, 7- and 30-day return for exposed new users against a matched group, evidence that specific safety changes moved outcomes, and accuracy and error rates for automated tools that hold up in a transparency report or an audit. |

## How to do it

### 1. Separate activity from impact

If your team took down 40% more harmful content last quarter than the quarter before, is that good news? The honest answer is that you don't know yet. It could mean detection improved. It could mean harm on the platform grew. It could mean automation got more aggressive, and legitimate users are paying for it. Volume alone can't tell you which.

Activity metrics measure how much work the system does: removals, reports actioned, automation rate and time to decision. Impact metrics answer four harder questions. Map each one to something you can measure:

| The question | What to measure |
|---|---|
| Is exposure to severe harm going down? | [Violating-content prevalence](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/violating-content-prevalence.md), [harmful reach before action](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/harmful-reach-before-action.md), or your platform's own harm rate |
| After enforcement, do bad actors stop, or come back on new accounts? | [Repeat-offender rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/repeat-offender-rate.md), with ban evasion counted |
| Are we catching high-risk behavior earlier? | [Time to action by severity](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-action-by-severity-p90.md), [time to detect emerging trends](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-detect-emerging-trends.md) |
| What are appeals telling us about where policy or automation is wrong? | [Appeal overturn rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/appeal-overturn-rate.md) by policy area and enforcement source ([chapter 10](10-quality-calibration-and-appeals.md)) |

Some numbers belong in the weekly operations review but not on the executive slide: total items removed, reports received, automation rate on its own, moderator headcount and accounts banned. Each can rise for good or bad reasons, and none says what users experience. The [running the program](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/running-the-program.md) guide explains why.

### 2. Adopt north stars, then health metrics, then diagnostics

If you can track only one number from day one, I'd make it [harmful reach before action](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/harmful-reach-before-action.md): how many people saw something harmful before you acted on it. It ties your speed to the harm people actually experienced, and it's hard to game.

The [metrics framework](https://stevenmacchia.com/ts-workbench/#metrics) sorts 36 metrics into three tiers, in a suggested order of adoption.

| Tier | What it tells you | Examples | Who looks, and when |
|---|---|---|---|
| **North star** | Whether users are actually safer. A few top-level numbers. | Violating-content prevalence, fraud loss rate, toxicity per 1,000 match-hours, unsafe-contact rate for minors, users who feel safe | Executives every quarter, T&S leadership more often |
| **Health** | Whether the system that produces safety is working | Proactive detection, precision and recall, appeal overturn rate, QA agreement, time to action by severity | T&S leadership monthly, operations weekly |
| **Diagnostic** | Why a number moved, and where to look | Churn after toxic exposure, repeat-offender rate, consistency across languages, backlog age, cost per decision | Whoever is investigating, plus a quarterly look |

Pick one or two north stars that fit your platform. A social or user-generated content service usually starts with prevalence. A marketplace or payments product starts with fraud loss. A game starts with toxicity per match-hour. A product used by children adds the unsafe-contact rate for minors ([chapter 6](06-child-safety-and-age-assurance.md)).

Don't adopt everything at once. Each metric page says which program stage it suits, from "early and later" to "mature and later". An early team can run on one north star, the overturn rate, QA agreement, time to action for the most severe cases and proactive detection. Add more only when someone will act on them.

Every metric on the framework names another metric to read it with, because any number can be gamed. A rising proactive detection rate with falling precision means you're catching more innocent content. Keep the pairs together on the same page.

### 3. Measure exposure with prevalence sampling

Prevalence is the share of what users see that breaks a rule. It measures exposure, not effort, and it's the only number that counts harm nobody reported.

The method matters more than the formula, which is on the [violating-content prevalence](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/violating-content-prevalence.md) page:

- **Sample views, not posts.** A post seen a million times should be a million times more likely to be picked.
- **Label blind, against the current policy,** with two labels per item and an expert to break ties.
- **Report a confidence interval every time.** Rare harms need large samples, and a change inside the interval isn't a change.
- **Split by surface and audience.** Report feeds, search and recommendations separately, and what young users see separately from adults.

Ownership varies, but data science often runs the sampling pipeline and Policy the labeling guidelines.

You don't need a data team to start. Pull a random sample of views each week from your logs, 200 for example, and have two people label them in a spreadsheet. It's imprecise, but it's real, and it's more honest than a removal count.

Recall works the same way. To estimate how much your systems miss, label a sample of content nothing flagged, and scale up what you find ([precision and recall by policy area](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/precision-and-recall-by-policy-area.md)).

### 4. Measure what bad actors do next, and what you prevented

Removal is one move. Measure what happens after it, and what never happened because of a safeguard.

**Repeat offending.** Track the share of actions against accounts with a recent prior violation. Split it by the earlier penalty, so you learn which penalties actually change behavior. Link accounts by device, payment and contact signals where your privacy policy allows, or ban evasion will hide your repeat offenders behind new accounts. A ban is one move, not a closed case.

**Earlier detection.** Time to action matters most at the slow end, so report the 90th percentile by severity, not the average. Harmful reach before action ties speed to harm: removing a viral post fast matters more than removing an unseen one fast. Report the tail, because a few viral items usually carry most of the reach.

**Prevention.** Count risky contact prevented alongside content removed. For a product with young users, that means adults found in teen spaces, the unsafe-contact rate per 10,000 young users and the share of cases caught before the move to another app ([chapter 6](06-child-safety-and-age-assurance.md)). Safer defaults and targeted limits stop most harm before anything needs removing, so if you only count removals, your best work is invisible.

### 5. Pair appeals with prevalence

Appeals and prevalence measure opposite errors, so read them together.

Overturned appeals measure over-enforcement. They're the early warning that automation or guidance has drifted. But nobody appeals the harm you missed, so overturns need to sit next to prevalence sampling, which measures under-enforcement. Appeal rates also vary by market, so a low overturn rate where few people appeal isn't automatically good news.

Read the two together:

| Prevalence | Overturns | What it probably means |
|---|---|---|
| Down | Flat or down | Real progress |
| Down | Up | You're catching more, and good users are paying for it |
| Up | Flat or down | Harm is growing, or detection is missing it. Check recall. |
| Flat | Up | Automation or guidance has drifted. Break overturns out by source and policy area. |

Then estimate the people hurt by mistakes. Most users who are wrongly actioned never appeal. They leave. [Good users wrongly actioned](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/good-users-wrongly-actioned.md) estimates them from QA error rates as well as overturns, and follows what happens to them next.

### 6. Show safety's effect on retention with a matched cohort

Pull the raw retention data at most game studios and harassed players look like some of the best-retained users. They chat more, queue more and play longer, so they run into more abuse. A team that stops there concludes toxicity doesn't hurt retention, and the safety budget conversation ends before it starts.

The cut that works is a matched cohort: a comparison group chosen to look like the group you're studying, so the main difference is the thing you're measuring. Take new players whose early sessions included an actioned incident, and compare their 7- and 30-day return against new players with clean sessions, matched on playtime, mode, region and platform. Without the matching, the analysis measures engagement instead of harm.

The same blind spot affects enforcement on high-value users. Banning a top spender hits the revenue report the next day, while the players they drove away stay invisible unless someone builds the cohort.

Numbers worth tracking:

- Share of new players whose first five matches include an actioned incident
- D7 and D30 return (the share still active 7 and 30 days later) for exposed new players against the matched group
- Voice chat opt-out rate in a player's first week

Safety exposure belongs as a standard cut on the retention dashboard, owned jointly by T&S and data teams and reviewed alongside every other churn driver.

A few cautions. Define exposure as being the target of a confirmed incident, not just filing a report. Present the result as a range, and call it an association unless you've run a proper causal analysis. Outside games, match on what drives exposure on your platform, such as audience size on a social app, because larger accounts are targeted more and churn differently. On a dating app, focus on users harassed in their first week, when a bad experience makes people delete the app. With children's data, involve your privacy team and report only aggregates. The [churn after toxic exposure](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/churn-after-toxic-exposure.md) page has the steps and a starter query. [Chapter 19](19-budgets-roadmaps-and-making-the-case.md) turns the result into a budget case.

### 7. Log the data from day one

Most teams can't measure well because a timestamp or a field was never logged. You can't go back and add it later. The [data to log](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/data-to-log.md) guide lists the event logs every metric depends on. The essentials:

- **Every decision** with its policy, severity, action, source (automated, proactive or user report), when the item was first reported or detected, when it was decided, who decided, which vendor and queue, the language, and the views at the time of action. The first-seen time and the source are the two fields teams most often forget.
- **Every automated detection** with its model version and threshold, or you can never compare before and after a model change.
- **Every appeal** joined back to its original decision.
- **A random exposure sample**, labeled.
- **Blind QA re-reviews**, with experts who can't see the original decision.
- **Usage denominators** from the same source the company reports to the board, so your rates reconcile with theirs.

Decide once when each clock starts, at creation, report or detection, and never change it quietly. A silently changed definition breaks every trend line.

If your review console is ROOST's open-source Coop, [running on Coop](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/running-on-coop.md) shows where each field lives and which ones you'll need to log yourself ([chapter 9](09-choosing-vendors-and-tools.md)).

### 8. Run a review rhythm, and tell leadership the truth

A metric only changes behavior when a named meeting looks at it on a schedule. Here is one rhythm that works, which a small team might fold into fewer meetings:

| Meeting | Who | What it's for |
|---|---|---|
| **Weekly operations review** | Operations leads and vendor managers | This week's problems: QA agreement, time to action, response-time targets, backlog, graphic exposure |
| **Monthly health review** | T&S leadership, policy, detection and quality | Trends and owners: harm rates, proactive detection, precision, overturns, repeat offenders, cost per decision |
| **Quarterly executive review** | Executives, legal and finance | North stars, retention impact, risk and investment |
| **Every release** | Model safety and product, for AI features | Whether to ship ([chapter 18](18-ai-in-trust-and-safety.md)) |

Set targets carefully. Measure for several weeks, for example 6 to 8, before you commit to a number. Set a band, not a point, so the gap between "on track" and "off track" is your early warning. Pair every target with a guardrail: a response-time target without a quality floor rewards rushing. Set thresholds by severity, and show the uncertainty on anything from a sample.

Then report operational and outcome metrics side by side, and be willing to say when they disagree. It takes discipline to walk into a business review and say, "Our numbers are up, and I'm not convinced we're safer." That's the conversation that earns credibility, directs investment to the right places and keeps Trust & Safety from being judged like a cost center measured by throughput.

Activity is easy to measure. Impact is harder.

## Mistakes to avoid

- **Leading with removals.** Put outcome metrics first, and keep removal counts in the operations review.
- **Adopting every metric at once.** Start with one or two north stars and a few health metrics, each with an owner and a meeting.
- **Counting items instead of views.** Sample what users see, so popular content counts more.
- **Reporting a sample without its interval.** Show the confidence interval, and don't celebrate a change inside it.
- **Reading retention data raw.** Build a matched cohort, or you'll measure engagement instead of harm.
- **Treating overturns as the whole quality picture.** Pair them with prevalence and recall sampling.
- **Changing a definition quietly.** Write down every change to a metric or a clock, with the date, and restate the trend.
- **Hiding the disagreement.** When the numbers are up and users aren't safer, say so.

## Start from this template

**Leadership one-pager.** One row per outcome question, outcome rows first.

| Question | Metric | This period | Target band | Trend | What we're doing about it |
|---|---|---|---|---|---|
| Is exposure to severe harm going down? | | | | | |
| Do bad actors stop after enforcement? | | | | | |
| Are we catching high-risk behavior earlier? | | | | | |
| What do appeals say about where we're wrong? | | | | | |
| Is the machine running? (operations) | | | | | |

**Matched-cohort brief.** Agree it with the data team before anyone pulls numbers.

| Item | Your answer |
|---|---|
| Exposure: what counts as an actioned incident | |
| Cohort: which new users, and which window | |
| Matched on | Playtime, mode, region and platform, or your platform's equivalents |
| Outcome | D7 and D30 return, plus spend or opt-outs if available |
| Owners | T&S and data, jointly |
| How it will be described | An association, with a range, unless a causal analysis is run |

**Metric register.** One row per metric you adopt.

| Metric | Tier | Owner | Meeting | Target band | Read it with | Definition last changed |
|---|---|---|---|---|---|---|
| | North star | | Quarterly | | | |
| | Health | | Monthly | | | |

## Do it with

- **[Metrics framework](https://stevenmacchia.com/ts-workbench/#metrics)**: 36 metrics with formulas, measurement steps and SQL, and a one-pager for leadership. [Open content](https://github.com/stevenmacchia/ts-metrics-framework)
- **[Running the program](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/running-the-program.md)**: Review rhythm, target setting and vanity metrics to avoid.
- **[Data to log](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/data-to-log.md)**: The event logs every metric depends on.
- **[Program maturity](https://stevenmacchia.com/ts-workbench/#maturity)**: Rate your program's metrics and reporting, and seven other areas, against the targets for its stage. [Open content](https://github.com/stevenmacchia/ts-maturity-model)
- **[Churn after toxic exposure](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/churn-after-toxic-exposure.md)** (metric): the retention gap between users targeted by a confirmed incident and matched users who weren't.
- **[Violating-content prevalence](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/violating-content-prevalence.md)** (metric): out of everything people see, how much breaks your rules, from a random sample of views.
- **[Repeat-offender rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/repeat-offender-rate.md)** (metric): whether people stop after enforcement or keep going, and which penalties deter.
- **[Appeal overturn rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/appeal-overturn-rate.md)** (metric): how often appealed decisions are reversed, read next to prevalence.

## Further reading

From Steven's writing:

- **[What I'd tell myself in year one of Trust & Safety](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-onlinesafety-contentmoderation-share-7513978054688395266-P3DE/)** (Oct 8, 2026): Five lessons from more than ten years in the field: treat safety as a systems problem built into the product, don't treat a ban as a closed case, measure what users experience rather than how busy the team was, let automation earn its scope, and give every risk one named owner.
- **[Harassed players look like your best-retained users](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-gamedev-userretention-share-7511499525035847680-wRsb/)** (Oct 1, 2026): Raw retention data hides the cost of toxicity because harassed players are the most engaged. A matched cohort shows it, and safety exposure belongs on the retention dashboard.
- **[Appeal overturns: the early warning for automation](https://www.linkedin.com/posts/stevenmacchia_as-more-enforcement-moves-to-automation-share-7508900187977854976-DLyv/)** (Sep 24, 2026): Overturned appeals show drift weeks before anything else. Automation expands only where its overturn rate matches human review, and changes roll back when the rate moves.
- **[Activity is easy to measure. Impact is harder.](https://www.linkedin.com/posts/stevenmacchia_if-your-team-took-down-40-more-harmful-content-share-7508565523224432642-JJno/)** (Sep 23, 2026): A 40% jump in removals could mean better detection, more harm or over-enforcement. Report outcome metrics next to operational ones, and tell leadership when they disagree.

Outside sources:

- **[Take This: Toxic Gamers Are Alienating Your Core Demographic](https://www.takethis.org/2023/08/research-report-toxic-gamers-are-alienating-your-core-demographic-the-business-case-for-community-management/)**: the 2023 report, with Nielsen data, on how toxicity changes players' spending and play.
- **[Meta Transparency Center: prevalence](https://transparency.meta.com/policies/improving/prevalence-metric/)**: how one large platform defines prevalence and samples views to measure it.
- **[TSPA: Metrics for content moderation](https://www.tspa.org/curriculum/ts-fundamentals/content-moderation-and-operations/metrics-for-content-moderation/)**: volume, time, quality and appeals metrics, explained.
- **[EU Digital Services Act (Regulation 2022/2065)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)**: the official text. Article 15 sets out what transparency reports must include, including accuracy and error indicators for automated moderation.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
