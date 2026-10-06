# 19. Budgets, roadmaps and making the case

> **How do you get the people and money the program needs?**

*Part 4: Scale and govern* · [Contents](../README.md) · [← 18. AI in Trust & Safety](18-ai-in-trust-and-safety.md)

## In one minute

- **Know your cost drivers before Finance models them for you.** People, vendors and tools each have a driver: volume, handle time, hours of coverage, languages and the mix of severities. Change the driver and the cost moves.
- **Don't let the program be judged by throughput.** Removals and decisions per hour show the machine is running, not that it's working. Report outcomes next to operations, and say so when they disagree.
- **Make the revenue case with your own data, cut correctly.** In raw retention data, harassed users look like your best-retained users. A matched cohort shows what exposure costs, and Finance's own numbers turn that into money.
- **Tie every ask to a roadmap leadership can follow.** Rate the program area by area against the target for your stage, close the biggest gaps first, and name the risk and the metric behind each ask.
- **Plan the cuts before a tight year forces them.** Know what you'd cut first, what you never cut, and who signs off on the risk each cut accepts.
- **The mistake to avoid:** defending the budget with volume. When volume is the argument, efficiency becomes the only question, and the program gets judged as a cost center.

## Why it matters

What gets measured gets resourced. When a program is rewarded for activity, it optimizes for activity, and when it asks for money with activity, the answer is usually a question about doing the same work more cheaply. Activity numbers almost always go up and to the right, so on a budget slide the program looks like a growing cost with no visible return.

The return is real, but it hides. In raw retention data, harassed players often look like some of the best-retained users, because they chat more, queue more and play longer, so they run into more abuse. A team that stops there concludes toxicity doesn't hurt retention, and the safety budget conversation ends before it starts. Players say otherwise: in a 2023 Take This report based on a Nielsen poll of 2,328 teens and adults in North America, 61% said they had at least once decided not to spend money in a game because of how other players treated them ([Take This, 2023](https://www.takethis.org/wp-content/uploads/2023/08/ToxicGamersBottomLineReport_TakeThis.pdf)). But surveys rarely move a budget. A company's own data does, if it's cut correctly.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A one-page view of what you spend on people, vendors and tools, updated monthly; a short list of top risks and what covers each; one outcome metric shown next to the operational ones; and a regular update to the founders or executive team. | A cost model with its drivers and a capacity forecast; safety exposure as a cut on the retention dashboard and a first matched-cohort retention analysis, both owned jointly with the data team; a roadmap by maturity area with an owner, a cost and a metric on every line; a quarterly executive review; and a cut plan agreed in advance. | A matched-cohort retention analysis every quarter; an investment case for every major ask, reviewed afterwards against what it promised; a budget tied to the risk register and to legal duties; and accepted risks signed off at the right level. |
| **What you can show** | Cost per decision by queue next to QA agreement, the share of new users whose early sessions include an actioned incident, and what last quarter's spending changed. | 7- and 30-day return for exposed new users against a matched group, translated into revenue at risk; maturity ratings against stage targets each quarter; and whether last quarter's asks delivered. | Revenue at risk from exposure as a trend; outcome metrics that moved after specific investments; every legal duty funded and owned; and a record of accepted risks and what became of them. |

## How to do it

### 1. Build a cost model you can explain

Finance will model the program whether or not you do. Build the model first, so the drivers are yours. Split the spend into a few lines, and for each one name what drives it and what you can change:

| Cost | What drives it | Levers you control |
|---|---|---|
| In-house people: reviewers, investigators, policy, data and engineering | Volume times handle time, divided by productive hours; hours of coverage, including round-the-clock cover for the most severe harms; the number of languages | Detection and routing that send cases to the right queue, friction that prevents harm before anyone reviews it, and clearer guidance that cuts handle time |
| Vendors: review staffing, AI moderation, age assurance, translation | Price per decision or per hour, minimum commitments, surge terms, and wellbeing and quality standards | Contract terms, price adjusted for quality, and consolidating overlapping vendors |
| Tools and infrastructure | Classifiers, hash matching, case management and compute | Free and open-source tools, and building only what's specific to you |
| Compliance | Risk assessments, transparency reports, audits and legal advice | Logging that turns a report into a query rather than a project ([chapter 17](17-transparency-reports-and-notices.md)) |

The unit that ties the lines together is [cost per decision](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/cost-per-decision.md): the fully loaded cost of review divided by the decisions made, by queue and vendor. Never show it alone. Optimizing it on its own lowers quality, so put it next to QA agreement on every slide. In the metrics framework's worked example, one vendor costs $0.38 a decision against another's $0.52, but agrees with expert reviewers 8 points less often, and rework and appeals make the cheaper vendor the more expensive choice.

Capacity is the biggest driver, and it's forecastable from volume trends ([chapter 7](07-review-operations.md)). Before you ask for headcount, check the levers that reduce volume or handle time. Free tools such as those from ROOST can cover hash matching and review workflow without a license fee ([chapter 9](09-choosing-vendors-and-tools.md)).

By stage: an early team divides each vendor invoice by the decisions it covered, and tracks people and tools in a spreadsheet. A growing team builds the model with Finance and forecasts on Finance's planning cycle, quarterly for example. At scale, every queue and vendor has a cost per decision, a quality number and a forecast, owned by T&S operations with Finance.

### 2. Stop being judged by throughput

If your team took down 40% more harmful content last quarter than the quarter before, is that good news? You don't know yet. It could mean detection improved, harm grew, or automation got more aggressive and legitimate users are paying for it. Volume can't tell you which, and a budget argued on volume invites one response: do the same volume for less.

Keep these off the executive slide: total items removed, reports received, automation rate on its own, moderator headcount and accounts banned. Each can rise for good or bad reasons, and none says what users experience. Automation rate is an efficiency metric, not a measure of maturity. It counts the decisions people didn't make, not whether they were right.

Lead with the outcome questions instead:

- Is exposure to severe harm going down?
- After enforcement, do bad actors stop, or come back on new accounts?
- Are we catching high-risk behavior earlier?
- What are appeals telling us about where our policy or automation is wrong?

Then frame the budget the same way. "Child safety: 12 reviewers" is a cost line. "Child safety: unsafe contact per 10,000 young users, down from last quarter, and what it takes to keep it falling" is an outcome with a price. [Chapter 11](11-measuring-what-matters.md) covers the metrics.

Report operational and outcome numbers side by side, and say so when they disagree. It takes discipline to walk into a business review and say, "Our numbers are up, and I'm not convinced we're safer." That's the conversation that earns credibility, directs investment to the right places and keeps Trust & Safety from being judged like a cost center measured by throughput.

### 3. Make the revenue case with a matched cohort

Start from the matched-cohort retention analysis in [chapter 11](11-measuring-what-matters.md): exposed new users compared on 7- and 30-day return with similar users who weren't exposed. That chapter and the [churn after toxic exposure](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/churn-after-toxic-exposure.md) page cover how to build it, what to match on and the numbers worth tracking. A rough comparison, such as people who reported harassment against everyone else, can tell you where to look. A budget case needs the matched version.

Then turn the gap into money, using Finance's numbers rather than your own:

1. **Users lost.** The retention gap times the number of exposed new users each month.
2. **Revenue at risk.** Users lost times the value of a retained user, from the same figures Finance reports to the board.
3. **Skipped spending.** The difference in spend between exposed users and their matched group over the same window.

Here's an illustration of the arithmetic, from the metrics framework's worked example: exposed players retain at 52% after 30 days against 61% for matched players. A 9-point gap across 20,000 exposed players a month is about 1,800 players a month, and Finance can put a value on each one.

Be honest about what it is. Present revenue at risk as a range, and call it an association unless you've run a proper causal analysis. An overclaimed number is the fastest way to lose the room the second time.

Once safety exposure is a standard cut on the retention dashboard ([chapter 11](11-measuring-what-matters.md)), the revenue case is updated every month without anyone having to argue for it.

### 4. Count the players a top spender drives away

The same blind spot affects enforcement on high-value users. Banning a top spender hits the revenue report the next day. The players they drove away stay invisible unless someone builds the cohort.

So build it before the argument starts:

- When a high-value account is up for enforcement, pull the users it targeted in confirmed incidents over a set window.
- Compare their return and spend afterwards against matched users who weren't targeted.
- Put both numbers in the decision record: the account's own revenue, and the return and spend gap among the people it targeted.

The cohort completes the revenue argument. It doesn't change the rule. Enforcement follows the same policy for every account, because consistency means the same penalty rules for everyone. If someone wants an exception for a spender, the question goes to the executive who owns safety risk, with both numbers in front of them.

### 5. Build a roadmap leadership can follow

Leadership says yes to plans it can check. The [program maturity model](https://github.com/stevenmacchia/ts-maturity-model/blob/main/maturity-model.md) gives you the structure: eight areas (policy, detection and prevention, review operations, quality and appeals, crisis response, metrics and reporting, regulatory readiness and team wellbeing), each rated from 1 (reactive) to 5 (leading).

The model suggests a target for each stage:

| Stage | Target |
|---|---|
| Early | Level 2, and level 3 for crisis response, regulatory readiness and team wellbeing |
| Growing | Level 3 in every area |
| At scale or regulated | Level 4 in every area |

Crisis response, compliance and wellbeing stay at level 3 even for early teams, because the harm is the same whatever your size.

Build the roadmap from the gaps, biggest first. When two gaps are the same size, one order that works is crisis response, then regulatory readiness, then detection and prevention, though your own risks may argue for another. Each level has two concrete [steps to the next level](https://github.com/stevenmacchia/ts-maturity-model/blob/main/roadmap-steps.md), so every line on the roadmap is something specific.

Then check the roadmap against risk. The [harm coverage radar](https://stevenmacchia.com/ts-workbench/#coverage) compares each harm area's risk with its coverage across policy, detection, enforcement, appeals and measurement. Without that view, budget follows whoever argues loudest rather than where the exposure is.

Give each line the same six things: the gap, the step, the owner, the cost, the risk it reduces (from the [abuse pre-mortem](https://stevenmacchia.com/ts-workbench/#premortem) or incident data) and the metric that will show it worked. Legal deadlines go on with their fixed dates ([chapter 16](16-regulation-and-compliance.md)). Keep it short, for example one page in three columns: now, next and later. Take a snapshot of the maturity ratings every quarter, so progress is visible without a long explanation.

### 6. Run the quarterly executive review

A metric only changes behavior when a named meeting looks at it on a schedule. A quarterly executive review, or whatever cadence matches your planning cycle, brings together executives, Legal and Finance to look at outcomes, risk and investment. Send a pre-read, and spend the meeting on decisions.

| Part | What's in it |
|---|---|
| Outcomes | North-star metrics against last quarter and the target band, with ranges |
| Where the numbers disagree | Operational metrics next to outcomes, and what you think explains the difference |
| Retention and revenue | The exposure cohort: retention gap, revenue at risk and the trend |
| Risk | Top risks, accepted risks and what happened to them, and legal duties coming due |
| Roadmap | What shipped, what slipped and why, and the maturity snapshot |
| Asks and decisions | Each ask with the risk it reduces, its cost and the metric that will show it worked |

Set targets carefully. Measure long enough to see the normal range before you commit to a number, for example 6 to 8 weeks. Set a band, not a point, so the gap between "on track" and "off track" is your early warning. Pair every target with a guardrail, and show the uncertainty on anything from a sample.

Close the loop on past asks. Each quarter, show what last year's investments promised and what they delivered, including the ones that didn't work. Nothing earns the next yes like a record of reporting honestly on the last one.

### 7. Plan the cuts before you need them

Tight years come. A team that has already decided what it would cut, and what it never would, makes better choices than one deciding under a deadline. The first column below is an example to adapt to your own risks.

| Cut first | Never cut |
|---|---|
| Response-time targets on low-severity queues: relax them, don't abandon them | Child safety and severe-harm escalation, including round-the-clock cover for the worst harms ([chapter 12](12-severe-harm-escalations.md)) |
| Overlapping tools and vendors, and minimum commitments you don't use | Duties the law requires, such as child sexual abuse reporting, notices and required risk assessments ([chapter 16](16-regulation-and-compliance.md)) |
| Full reviews of low-risk launches, replaced with a short checklist | Reviewer wellbeing: exposure limits and specialist support ([chapter 14](14-moderator-wellbeing.md)) |
| Manual work that automation can take over, only where its overturn rate is at or below human review | Quality sampling and prevalence measurement, because without them you can't see what the other cuts did |
| Reports and dashboards nobody uses | Appeals, because they're how you find out a cut went too far |

Every cut accepts a risk, so treat it like any accepted risk ([chapter 15](15-working-with-product-legal-and-leadership.md)). Write down what it saves, what risk it accepts, the metric to watch and a date to revisit. The person who owns the product outcome signs off, and the most serious risks go to the executive who owns safety risk. If the metric moves past an agreed limit, reverse the cut. A cut that nobody measured is a risk nobody accepted.

## Mistakes to avoid

- **Defending the budget with volume.** Lead with outcomes and risk, and keep volume in the operations review.
- **Showing raw retention data.** Build the matched cohort first, or harassment will look like it improves retention.
- **Claiming causation from a correlation.** Present a range, and call it an association unless you've run a causal analysis.
- **Optimizing cost per decision alone.** Show it next to QA agreement, and count rework and appeals.
- **Asking for headcount without a roadmap.** Tie each ask to a gap, a risk and a metric.
- **Letting a spender's revenue decide enforcement.** Apply the same rules to everyone, with the cohort of the people they drove away in the record.
- **Cutting what lets you see.** Measurement and quality sampling go last, because they show what every other cut did.

## Start from this template

**Investment case.** One page per ask.

| Section | What to write |
|---|---|
| The risk | What harm, to whom and how often, from the pre-mortem or incident data |
| The evidence | Current metric and trend, cohort result and maturity gap |
| The ask | People, money or engineering time, and when |
| Expected effect | Which metric should move, by how much and by when, as a range |
| How we'll know | The metric, its owner and the review date |
| If we don't | The risk accepted, and who accepts it |

**Revenue at risk worksheet.** Fill it in with the data team and Finance.

| Input | Source | Value |
|---|---|---|
| Exposed new users per month | T&S and data | |
| D30 return, exposed against matched | Matched cohort | |
| Users lost per month in association with exposure | Gap times exposed users | |
| Value of a retained user | Finance | |
| Revenue at risk per month, as a range | Users lost times value | |
| Spend gap, exposed against matched | Matched cohort | |

**Cut plan.** One row per cut, agreed before you need it.

| Item | Saving | Risk accepted | Metric to watch | Signed off by | Revisit date |
|---|---|---|---|---|---|
| | | | | | |

## Do it with

- **[Program maturity](https://stevenmacchia.com/ts-workbench/#maturity)**: Rate the program in eight areas against the targets for your stage, and get a phased roadmap. [Open content](https://github.com/stevenmacchia/ts-maturity-model)
- **[Metrics framework](https://stevenmacchia.com/ts-workbench/#metrics)**: 36 metrics with formulas, measurement steps and SQL, and a one-pager for leadership. [Open content](https://github.com/stevenmacchia/ts-metrics-framework)
- **[Vendor scorecard](https://stevenmacchia.com/ts-workbench/#vendors)**: Choose a moderation vendor on evidence: weighted criteria, rubrics, minimums and RFP questions. [Open content](https://github.com/stevenmacchia/moderation-vendor-scorecard)
- **[Harm coverage radar](https://stevenmacchia.com/ts-workbench/#coverage)**: See where each harm area's risk outruns your defenses, so budget follows exposure. [Open content](https://github.com/stevenmacchia/harm-coverage-radar)
- **[Running the program](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/running-the-program.md)**: The weekly, monthly and quarterly review rhythm, target setting, and the numbers to keep off the executive slide.
- **[Churn after toxic exposure](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/churn-after-toxic-exposure.md)** (metric): the retention gap between users targeted by a confirmed incident and matched users who weren't, the starting point for revenue at risk.
- **[Cost per decision](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/cost-per-decision.md)** (metric): the fully loaded cost of each review decision by queue and vendor, always read next to QA agreement.

## Further reading

From Steven's writing:

- **[Harassed players look like your best-retained users](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-gamedev-userretention-share-7511499525035847680-wRsb/)** (Oct 1, 2026): Raw retention data hides the cost of toxicity because harassed players are the most engaged. A matched cohort shows it, and safety exposure belongs on the retention dashboard.
- **[Activity is easy to measure. Impact is harder.](https://www.linkedin.com/posts/stevenmacchia_if-your-team-took-down-40-more-harmful-content-share-7508565523224432642-JJno/)** (Sep 23, 2026): A 40% jump in removals could mean better detection, more harm or over-enforcement. Report outcome metrics next to operational ones, and tell leadership when they disagree.

Outside sources:

- **[Take This: Toxic Gamers Are Alienating Your Core Demographic](https://www.takethis.org/2023/08/research-report-toxic-gamers-are-alienating-your-core-demographic-the-business-case-for-community-management/)**: the 2023 report, with Nielsen data, on how toxicity changes players' spending and play.
- **[TSPA: Setting up content moderation teams](https://www.tspa.org/curriculum/ts-fundamentals/content-moderation-and-operations/setting-up-content-moderation-teams/)**: the Trust & Safety Professional Association on workforce models, capacity planning and cost.
- **[Digital Trust & Safety Partnership: Best Practices Framework](https://dtspartnership.org/best-practices/)**: five industry commitments, including assessing whether your approach to risk is working.
- **[ROOST](https://roost.tools/)**: a nonprofit building free, open-source safety tools, including the Osprey rules engine and the Coop review console.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
