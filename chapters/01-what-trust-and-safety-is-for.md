# 1. What Trust & Safety is for

> **What is this function for, and how do you know it's working?**

*Part 1: Before the first hire* · [Contents](../README.md) · [2. Know your risks →](02-know-your-risks.md)

## In one minute

- **Trust & Safety has four jobs.** Keep people from harm, make fair decisions fast, meet your legal duties, and keep users' trust that the first three are happening. Write them down before you build anything.
- **Draw the borders on purpose.** Security, fraud, legal, support and integrity teams all touch the same problems. Give every seam between them an owner, or the worst cases land with nobody.
- **Treat safety as a retention and revenue question.** In raw data, harassed users can look like your best-retained users, because the most engaged people run into the most abuse. A matched cohort shows the real cost.
- **Report outcomes next to operations.** Operational metrics show the machine is running. Outcome metrics show it's working. Report both, and say so when they disagree.
- **Hold a point of view.** This handbook rests on [ten principles](../README.md#what-this-handbook-believes). Use them to settle the arguments you'll have every week.
- **The mistake to avoid:** judging the program by how much it removes. More removals can mean better detection, more harm, or more good users caught by mistake.

## Why it matters

Any product where people meet, talk, trade or create will be misused by some of them. Trust & Safety (T&S) is the function that decides what's allowed, finds what isn't, acts on it, and answers for those decisions.

Without a clear purpose, the function drifts into one of two shapes. It becomes a support queue that reacts to whatever gets reported, or a removal machine judged by throughput. Neither can tell leadership whether users are safer.

The cost shows up in the business, not just in user harm. In a 2023 white paper from Take This, using survey data Nielsen collected from 2,328 players in North America, 61% said they had at least once decided not to spend money in a game because of how other players treated them, and 60% had quit a match or a game because of harassment or hate ([Take This, Toxic Gamers Are Alienating Your Core Demographic](https://www.takethis.org/wp-content/uploads/2023/08/ToxicGamersBottomLineReport_TakeThis.pdf)).

Parts of the job are also law now. In the EU, the Digital Services Act requires hosting services to let anyone flag illegal content (Article 16) and to explain each restriction to the user with a statement of reasons (Article 17) ([Regulation (EU) 2022/2065](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). In the UK, the Online Safety Act requires user-to-user services to assess the risk of illegal content on their service ([section 9](https://www.legislation.gov.uk/ukpga/2023/50/section/9)) and to let users report it easily ([section 20](https://www.legislation.gov.uk/ukpga/2023/50/section/20)). The question has moved from "do you have a policy?" to "can you prove it works?"

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A one-page statement of what T&S is for and what it owns, a named owner for each seam with security, fraud, legal and support, a log of every report and decision, and one outcome number next to the activity counts. | A charter agreed with Product, Legal and Security, a scorecard that pairs operational and outcome metrics, safety exposure as a standard cut on the retention dashboard, and a quarterly review with leadership. | A charter tied to your legal duties and risk assessments, a target, an owner and a trend for every metric, safety metrics as a required input to launch and business reviews, and a written record behind every threshold. |
| **What you can show** | Who owns each kind of harm. Time to action on the most severe reports. One rough outcome number, such as a weekly labeled sample of what users see. | How much of what users see breaks the rules, with a confidence interval. 7- and 30-day return for users exposed to harm against a matched group. How often appeals overturn decisions, by policy. | Whether exposure to severe harm is falling, whether bad actors come back after enforcement, how early high-risk behavior is caught, and what harm costs in retention, with public reporting that matches what enforcement does. |

## How to do it

### 1. Write the job down on one page

Most T&S teams can list what they do. Fewer can say what it's for. Start with four jobs:

| Job | What it means | How you'd know it's happening |
|---|---|---|
| Keep people from harm | Prevent, find and stop abuse between users, with the most effort on the most severe harms | Exposure to severe harm goes down, and high-risk behavior is caught earlier |
| Make fair decisions fast | Apply clear rules the same way every time, act fastest on the worst cases, and fix mistakes | Time to action on severe cases, appeal overturn rate, good users wrongly actioned |
| Meet your legal duties | Report what the law says to report, keep the records, and answer regulators and law enforcement | Every duty has an owner, a process and evidence |
| Keep users' trust | People can report, get an answer, understand decisions, and feel safe enough to stay | Users who say they feel safe, and retention of people who were targeted |

The jobs sometimes pull against each other. Speed can cost fairness, and a cautious legal reading can slow protection. Decide in advance which one wins where. One rule this handbook holds to: where a wrong decision can't be reversed or someone's safety is at risk, automation can prepare the case, but a person closes it.

Usually the T&S lead writes the page and an executive sponsor signs it, which in a small company may be a founder. It's done when a product manager, a lawyer and a support lead can each say what T&S does, and what it doesn't.

### 2. Draw the borders with neighboring teams

T&S shares edges with at least five other functions. The names vary by company, so describe the work, not the org chart. Where the lines fall varies too, so treat the splits below as a common starting point, not the only one:

| Team | What it usually owns | Where it meets T&S | What to write down |
|---|---|---|---|
| Security | Attacks on your systems and data: breaches, vulnerabilities, misuse of internal access | Account takeover, scraping, staff looking up user data | Security owns the breach. T&S owns what was done to users through the stolen accounts. |
| Fraud and payments risk | The company's own losses: stolen cards, chargebacks, promotion abuse | Scams where one user tricks another into paying | Who owns a scam that starts in chat and ends in a payment |
| Legal | Reading the law, legal process, privilege | Reporting duties, law enforcement requests, regulator questions | Legal makes the legal call. T&S runs the process, including outside office hours. |
| Customer support | First contact with users | Reports that arrive as tickets, appeals, users angry after enforcement | Support routes and explains. T&S decides. |
| Integrity | Varies most: often fake accounts, coordinated manipulation, spam and misinformation. At some companies it's another name for T&S. | Bots, coordinated campaigns, fake engagement | Whether integrity is a separate team, and who owns coordinated abuse |

The rule: every harm in your risk register ([chapter 2](02-know-your-risks.md)) has exactly one owner. Shared work is fine. Shared ownership means nobody is accountable when it goes wrong.

The T&S lead writes the table with each partner team. It's done when each partner has agreed to it and the on-call list matches it.

### 3. Make the safety case with your own data

Pull raw retention data at most game studios and harassed players look like some of the best-retained users. They chat more, queue more and play longer, so they run into more abuse. A team that stops there concludes toxicity doesn't hurt retention, and the safety budget conversation ends before it starts.

Industry surveys like the one above help, but they rarely move a budget. Your own data does, if it's cut correctly. The cut that works is a matched cohort: new users who were the target of an actioned incident in their early sessions, compared on 7- and 30-day return with similar new users who weren't. Without the matching, the analysis measures engagement instead of harm.

The same blind spot affects enforcement on high-value users. Banning a top spender hits the revenue report the next day. The players they drove away stay invisible unless someone builds the cohort.

[Chapter 11](11-measuring-what-matters.md) covers how to build the cohort, what to match on for your kind of product and the numbers worth tracking. [Chapter 19](19-budgets-roadmaps-and-making-the-case.md) turns the result into a budget case.

### 4. Separate the machine from the outcome

If your team took down 40% more harmful content last quarter than the quarter before, is that good news? You don't know yet. Detection may have improved. Harm on the platform may have grown. Or automation got more aggressive, and legitimate users are paying for it. Volume alone can't tell you which.

Most T&S reporting measures how much work the system does, because those numbers are easy to produce and they almost always go up. But what gets measured gets resourced. A program rewarded for activity optimizes for activity.

| Operational metrics: the machine is running | Outcome metrics: it's working |
|---|---|
| Items removed | Is exposure to severe harm going down? |
| Reports actioned | After enforcement, do bad actors stop, or come back on new accounts? |
| Automation rate | Are we catching high-risk behavior earlier? |
| Time to decision | What do appeals say about where our policy or automation is wrong? |

You need both columns. Operational metrics tell you where the process is breaking this week. Outcome metrics tell you whether any of it matters.

Some numbers don't belong on an executive slide on their own. Total items removed rises with volume and with over-enforcement. Reports received measures how easy reporting is as much as how much harm exists. Automation rate counts the decisions people didn't make, not whether they were right. Accounts banned is easy to inflate with throwaway spam accounts. The [running the program](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/running-the-program.md) guide lists the rest.

### 5. Report both, and say when they disagree

A metric only changes behavior when a named meeting looks at it on a schedule. One rhythm that works:

- **Weekly operations review:** this week's problems. Time to action, backlog, quality, reports.
- **Monthly health review:** trends and owners. Detection, appeals, repeat offending, harm rates by area.
- **Quarterly executive review:** outcomes, risk and investment. Exposure to harm, retention, legal readiness.

A small team might fold the first two into one meeting, and a live product with fast-moving harms might watch some numbers daily. What matters is that every metric has a meeting that reads it.

Put operational and outcome numbers on the same page, and read them together. When they disagree, say so. It takes discipline to walk into a business review and say, "Our numbers are up, and I'm not convinced we're safer." That's the conversation that earns credibility, sends investment to the right places, and keeps T&S from being judged like a cost center measured by throughput.

Know the limits of each signal. Appeal overturns only measure over-enforcement, because nobody appeals the harm you missed, so pair them with a random sample of what users actually see. Measure for a while before you commit to a target, for example six to eight weeks, because early targets are guesses.

Keep what the company says in public in line with what enforcement actually does. Public safety claims are evidence in litigation. [Chapter 11](11-measuring-what-matters.md) covers measurement in depth, and [chapter 15](15-working-with-product-legal-and-leadership.md) covers reporting to executives and the board.

### 6. Use the principles to settle arguments

This handbook takes positions. The [ten principles](../README.md#what-this-handbook-believes) are listed in full in the README, each with the post it comes from. Every chapter holds to them. In practice, each one answers an argument you'll have:

| The argument | The principle that answers it | Where to go deeper |
|---|---|---|
| "Removals are up 40%. Good quarter?" | 1. Measure impact, not activity | [Chapter 11](11-measuring-what-matters.md) |
| "Can we automate this whole policy area?" | 2. Automate as far as the evidence supports, and 3. Automation earns its scope | [Chapter 18](18-ai-in-trust-and-safety.md), [chapter 10](10-quality-calibration-and-appeals.md) |
| "Each message looked fine on its own." | 4. Harm is a pattern, not a message | [Chapter 5](05-detection-and-prevention.md) |
| "Should we lock the whole room?" | 5. Put friction where the risk is | [Chapter 5](05-detection-and-prevention.md), [chapter 13](13-crisis-response.md) |
| "We banned them. Case closed?" | 6. A ban is one move, not a closed case | [Chapter 12](12-severe-harm-escalations.md) |
| "Do we really need age checks?" | 7. Age assurance is the foundation | [Chapter 6](06-child-safety-and-age-assurance.md) |
| "Product ships DMs next month. Can you look at it?" | 8. Get in at design review, and earn the invite | [Chapter 2](02-know-your-risks.md), [chapter 15](15-working-with-product-legal-and-leadership.md) |
| "A regulator asks why this account wasn't restricted." | 9. Be able to prove it works | [Chapter 16](16-regulation-and-compliance.md) |
| "Finance asks what safety returns." | 10. Safety is a retention and revenue question | [Chapter 19](19-budgets-roadmaps-and-making-the-case.md) |

Of the ten, the one I've found hardest to hold to is that automation earns its scope. The pressure to automate usually runs ahead of the evidence, so agree the rules for expanding automation before that pressure arrives ([chapter 18](18-ai-in-trust-and-safety.md)).

Agree the principles with your leadership early, while nothing is on fire. A principle everyone signed up to in a calm week is far easier to apply in the middle of an incident than one you have to argue for on the spot.

### 7. Know which outcomes you're aiming at

Every later chapter ends its "What you can show" row with numbers. They roll up to a short list of outcomes, each with a metric page in the [T&S Metrics Framework](https://github.com/stevenmacchia/ts-metrics-framework):

| Outcome | Metrics that show it |
|---|---|
| Less exposure to harm | [Violating-content prevalence](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/violating-content-prevalence.md), plus the north star for your kind of product, such as [toxicity per 1,000 match-hours](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/toxicity-per-1-000-match-hours.md) or the [unsafe-contact rate for minors](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/unsafe-contact-rate-for-minors.md) |
| The worst cases handled fastest | [Time to action by severity (p90)](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-action-by-severity-p90.md), [time to report child sexual exploitation](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-report-child-sexual-exploitation.md) |
| Fair decisions | [Appeal overturn rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/appeal-overturn-rate.md), [good users wrongly actioned](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/good-users-wrongly-actioned.md) |
| Harm caught earlier | [Proactive detection rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/proactive-detection-rate.md), and contact prevented before it happens |
| Bad actors stop | [Repeat-offender rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/repeat-offender-rate.md) |
| Users feel safe and stay | [Users who feel safe](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/users-who-feel-safe.md), [churn after toxic exposure](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/churn-after-toxic-exposure.md) |
| Legal duties met, with evidence | [Statement-of-reasons coverage](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/statement-of-reasons-coverage.md), [systemic-risk assessment currency](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/systemic-risk-assessment-currency.md) |

You don't need all of them at once. An early team picks the one north star that fits its product and tracks time to action on the most severe cases. If you can only track one number from day one, [chapter 11](11-measuring-what-matters.md) makes the case for harmful reach before action. A growing team adds decision quality and repeat offending. A team at scale or under regulation tracks all seven, each with a target and an owner.

## Mistakes to avoid

- **Judging the program by removals.** Volume can't tell better detection from more harm or over-enforcement. Report an outcome next to every activity number.
- **Leaving the borders unwritten.** When two teams think they share a harm, nobody owns it. Give every harm and every cross-team request one owner, in writing.
- **Stopping at raw retention data.** Harassed users look engaged because they are. Compare them with a matched group before you conclude anything.
- **Treating automation rate as maturity.** It counts the decisions people didn't make, not whether they were right. Judge automation on decision accuracy, cost per decision and appeal overturn rate.
- **Smoothing over numbers that disagree.** If activity is up and outcomes aren't, say so in the review. It's the conversation that earns credibility.
- **Promising more in public than enforcement does.** Public safety claims are litigation evidence. Have T&S check every safety claim before Comms makes it.
- **Running T&S only as a queue.** Waiting for reports leaves you blind to the harm nobody reports, and much of it never is. Get into design review ([chapter 2](02-know-your-risks.md)) and measure what users actually see.

## Start from this template

**One-page T&S charter.** Fill in each row, then have your executive sponsor, Product, Legal and Security agree to it.

| Section | What to write |
|---|---|
| Why we exist | The four jobs, in your words, and which one wins when they conflict |
| What we own | The harms and decisions T&S owns end to end |
| What we don't own | The neighboring work, and the team that owns it |
| Decisions we make alone | For example: removing content under a written policy, suspending an account |
| Decisions we make with others | For example: reporting to law enforcement with Legal, public statements with Comms |
| Outcomes we report | One north star, time to action on severe cases, and one decision-quality number |
| Who we answer to, and how often | The executive sponsor, and the weekly, monthly and quarterly reviews |

**Seams table.** One row for each harm or request that crosses teams.

| Harm or request | Partner team | What T&S does | What the partner does | Who decides | Who's on call |
|---|---|---|---|---|---|
| Account takeover | Security | | | | |
| Scam that ends in a payment | Fraud | | | | |
| Law enforcement request | Legal | | | | |
| Appeal that arrives through support | Support | | | | |
| Coordinated fake accounts | Integrity or Security | | | | |

**Metrics pair.** For every operational number you report, name the outcome it should move and the number that keeps it honest.

| Operational number | Outcome it should move | Read it with |
|---|---|---|
| Items removed | Violating-content prevalence | Appeal overturn rate |
| Time to decision | Harmful reach before action | QA agreement rate |
| Accounts banned | Repeat-offender rate | Appeal overturn rate |
| Reports received | User-report rate, by reason | Violating-content prevalence |
| Automation rate | Precision by policy area | Appeal overturn rate |

## Do it with

- **[North star metrics](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/README.md)**: The outcomes to measure first, with the question each one answers.
- **[Demo company](https://stevenmacchia.com/ts-workbench/#demo)**: See every tool filled in for a fictional app.
- **[Metrics framework](https://stevenmacchia.com/ts-workbench/#metrics)**: Pick your platform and stage, and build a scorecard that puts outcomes next to operations. [Open content](https://github.com/stevenmacchia/ts-metrics-framework)
- **[Churn after toxic exposure](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/churn-after-toxic-exposure.md)** (metric): the retention gap between users who were targeted and matched users who weren't.
- **[Violating-content prevalence](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/violating-content-prevalence.md)** (metric): out of everything people see, how much breaks your rules.
- **[Running the program](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/running-the-program.md)**: Which meeting looks at which metric, how to set targets, and the numbers to keep off the executive slide.

## Further reading

From Steven's writing:

- **[Harassed players look like your best-retained users](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-gamedev-userretention-share-7511499525035847680-wRsb/)** (Oct 1, 2026): Raw retention data hides the cost of toxicity because harassed players are the most engaged. A matched cohort shows it, and safety exposure belongs on the retention dashboard.
- **[Activity is easy to measure. Impact is harder.](https://www.linkedin.com/posts/stevenmacchia_if-your-team-took-down-40-more-harmful-content-share-7508565523224432642-JJno/)** (Sep 23, 2026): A 40% jump in removals could mean better detection, more harm or over-enforcement. Report outcome metrics next to operational ones, and tell leadership when they disagree.
- **[You can't moderate your way out of a systems problem](https://www.linkedin.com/feed/update/urn:li:activity:7506790883938295809/)** (Sep 18, 2026): Treating Trust & Safety mainly as an operations function is a mistake. Reputation, history, age and behavior signals belong in one risk model, automation needs clear limits, and safety belongs in the product architecture from the start.

Outside sources:

- **[TSPA: Trust & Safety Fundamentals](https://www.tspa.org/curriculum/ts-fundamentals/)**: the Trust & Safety Professional Association's free curriculum, from policy and operations to law enforcement and safety by design.
- **[Digital Trust & Safety Partnership: Best Practices Framework](https://dtspartnership.org/best-practices/)**: five industry commitments covering product development, governance, enforcement, improvement and transparency.
- **[Take This: Toxic Gamers Are Alienating Your Core Demographic](https://www.takethis.org/wp-content/uploads/2023/08/ToxicGamersBottomLineReport_TakeThis.pdf)**: the 2023 white paper, with Nielsen data, on how harassment changes what players spend and whether they stay.
- **[European Commission: the Digital Services Act](https://digital-strategy.ec.europa.eu/en/policies/digital-services-act)**: a plain-language overview of the EU's rules on reporting, explaining decisions and appeals.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
