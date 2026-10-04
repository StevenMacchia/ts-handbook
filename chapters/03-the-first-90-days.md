# 3. The first 90 days

> **You're the first safety hire. What do you do first?**

*Part 1: Before the first hire* · [Contents](../README.md) · [← 2. Know your risks](02-know-your-risks.md) · [4. Writing policy and an enforcement ladder →](04-writing-policy.md)

## In one minute

- **Spend the first two weeks learning how safety works today.** Read the support tickets, the rules, the tools and the data, and find out who actually makes the decisions.
- **Close the gaps that can't wait.** Child safety reporting, a plan for threats to life that works at 2 a.m., and a way for every user to report. These come before anything else.
- **Write the minimum policy and enforcement path one or two people can run.** Short rules for your top harms, a small ladder of actions, an appeal route, and a log of every decision.
- **Track a few numbers from the start, including at least one outcome.** Time to act on the worst cases tells you the machine is running. A weekly sample of what users see tells you whether it's working.
- **End the 90 days with a 12-month plan leadership can say yes to.** For an early-stage program, that means level 2 in every area of the program, and level 3 in crisis response, compliance and reviewer wellbeing.
- **The mistake to avoid:** spending the first quarter on a perfect taxonomy, a big vendor contract or custom tooling while nobody is on call for the worst case.

## Why it matters

The first safety hire walks into a long list. Users want reports answered. Product wants launches reviewed. Leadership wants to know how big the problem is. It's easy to spend three months reacting to whatever is loudest.

Some of the list can't wait, whatever the company's size. In the US, a provider that obtains actual knowledge of facts or circumstances indicating apparent child sexual abuse material, child sex trafficking or online enticement of a child must report it to NCMEC's CyberTipline as soon as reasonably possible ([18 U.S.C. § 2258A](https://www.law.cornell.edu/uscode/text/18/2258A)). In the EU, every hosting service must let people flag illegal content (Digital Services Act, Article 16) and must promptly tell the police when it suspects a crime that threatens someone's life or safety (Article 18) ([Regulation (EU) 2022/2065](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). In the UK, a user-to-user service in scope of the Online Safety Act that launches today has three months from its first day to complete its first illegal content risk assessment ([Online Safety Act, Schedule 3, paragraph 3](https://www.legislation.gov.uk/ukpga/2023/50/schedule/3)), and Ofcom can fine a provider up to £18 million or 10% of qualifying worldwide revenue, whichever is greater ([Schedule 13, paragraph 4](https://www.legislation.gov.uk/ukpga/2023/50/schedule/13/paragraph/4)).

That's why the [program maturity model](https://github.com/stevenmacchia/ts-maturity-model/blob/main/maturity-model.md) holds even the smallest teams to a higher bar in three areas: crisis response, regulatory readiness and reviewer wellbeing. The harm is the same whatever your size.

The first safety hire can arrive at any stage. The table below shows where to be by day 90 at each. The day ranges in the steps are one way to pace the work, not a fixed schedule: someone who arrives mid-crisis, or to a strong support team, will shorten some windows and stretch others.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A named owner and an on-call route for child safety and threats to life, reporting on every surface where users meet, hash matching and CyberTipline registration if you host images or video and US law applies, short community guidelines, a small enforcement ladder, an appeal route, and a log of every report and decision. | All of that, plus severity tiers with response targets, written escalation paths to Legal, Comms and leadership, internal guidelines for the top harms, a crisis playbook with an on-call rotation, exposure limits and counseling for everyone who reviews, and a list of the laws that apply with an owner for each. | An obligations map that links each legal duty to an owner, a process and the evidence you keep, an inventory of vendors, tools and contracts, round-the-clock cover for the most severe harms, and a quarterly scorecard. |
| **What you can show** | Time to action on the most severe reports. A first outcome number from a weekly sample. Ratings for the eight areas of the program. A 12-month plan leadership has agreed. | Time to action by severity tier, at the 90th percentile. A sample-based estimate of how much of what users see breaks the rules. Ratings against level 3 targets. A hiring and vendor plan backed by volume data. | Risk assessments that are current. Evidence for every legal duty. Ratings against level 4 targets with a phased roadmap. A scorecard leadership reviews every quarter. |

## How to do it

### 1. Days 1 to 14: learn how safety works today

Before you change anything, find out what's already there. Much of it will be informal: a support agent who handles the scary tickets, a founder who makes ban decisions, a channel where edge cases get settled.

| Question | Where to look | What a red flag looks like |
|---|---|---|
| What are users reporting, and what happens next? | A sample of recent support tickets about abuse, safety, scams and bans | Reports that sat for days, or were closed without a decision |
| What are the rules today? | Terms of service, community guidelines, internal notes, chat threads | Rules nobody wrote down, or that two people apply differently |
| What can the tools do? | Your admin console and ticketing tool | No way to act on an account, only on content. No record of who did what. |
| What data exists? | Product analytics, ticket exports, any enforcement logs | No timestamp for when a report arrived, and no field for where it came from |
| Who decides today? | Ask: who bans a user, who answers the police, who gets called at 2 a.m., who talks to the press? | "It depends who's around" |
| Where do you operate, and which laws apply? | Your markets, your user ages, and whether you host images, video or messages | Nobody owns regulatory questions |

Two exercises make this faster. Run the [abuse pre-mortem](https://stevenmacchia.com/ts-workbench/#premortem) on the product as it is today to get a ranked risk picture ([chapter 2](02-know-your-risks.md)). Then rate the program honestly with the [maturity model](https://stevenmacchia.com/ts-workbench/#maturity): for each of eight areas, pick the highest level where every statement is true today. Level 1 is reactive: handled case by case, by whoever is around. Don't round up.

The output is a one-page map of how safety works today and a short list of gaps, ranked by how much harm they could cause. Share it with your manager by the end of week two. It's the baseline everything else is measured against.

### 2. Days 1 to 30: close the gaps that can't wait

My default when building from scratch: close the worst gaps first. Learning how everything else works runs alongside it, but a missing reporting path for child safety or threats to life can't wait for the listening tour to finish.

Three gaps come before everything else, because the harm they allow can't be undone.

**Child safety reporting.** If you host images or video, match uploads against hashes of known child sexual abuse material (CSAM). A hash is a digital fingerprint that lets you spot a known image without anyone looking at it. You don't need to build this. Microsoft's [PhotoDNA](https://www.microsoft.com/en-us/photodna) is free for qualified organizations, and ROOST's open-source [Coop](https://roost.tools/coop/) offers a free workflow for hash matching, review and CyberTipline reporting. If US law applies to you, register with NCMEC before you need it. Registered providers get a secure reporting route that lets them submit the images and video with their reports ([NCMEC transparency report](https://www.missingkids.org/content/dam/missingkids/pdfs/OJJDP-NCMEC-Transparency-CY-2023-Report.pdf)). A completed report is treated as a request to preserve its contents for one year ([§ 2258A(h)](https://www.law.cornell.edu/uscode/text/18/2258A)). Set up a restricted escalation path so only trained people handle these cases. [Chapter 6](06-child-safety-and-age-assurance.md) and [chapter 12](12-severe-harm-escalations.md) go deeper, and [chapter 16](16-regulation-and-compliance.md) covers duties outside the US.

**Threats to life.** Write an imminent-risk protocol: show crisis resources to the person at risk, escalate to whoever is on call, and refer to emergency services with the information you hold. Then write an emergency disclosure procedure for when the police call: verify who's asking, share only what's needed to find the person, and document the decision. US law allows a provider to disclose data to a government entity without delay when it believes in good faith that an emergency involving danger of death or serious physical injury requires it ([18 U.S.C. § 2702(b)(8) and (c)(4)](https://www.law.cornell.edu/uscode/text/18/2702)). When the threat comes from a possible crime, such as a threat to kill or a planned attack, Article 18 of the Digital Services Act requires hosting services in the EU to inform the police promptly. A protocol isn't real until someone is reachable outside office hours, knows the steps, and has practiced them. Even with two people, set up an on-call rotation.

**A way for every user to report.** Put reporting on every user, message, post and listing, with reasons that match your rules. Make sure blocking stops all contact. The UK's Online Safety Act requires user-to-user services to let users report illegal content easily ([section 20](https://www.legislation.gov.uk/ukpga/2023/50/section/20)), and the DSA requires a notice mechanism for illegal content (Article 16). In the US, if you're a covered platform under the TAKE IT DOWN Act, which the FTC says can include social media, messaging, image or video sharing and gaming platforms, you must give people a way to request removal of intimate images shared without their consent, and remove them within 48 hours of a valid request, making reasonable efforts in the same 48 hours to find and remove known identical copies (Section 3, enforced since May 19, 2026) ([FTC guidance](https://www.ftc.gov/business-guidance/resources/complying-take-it-down-act)). In the UK, since 29 June 2026, user-to-user services must also give people an easy way to report intimate image content ([section 20A](https://www.legislation.gov.uk/ukpga/2023/50/section/20A)).

You own all three. You'll need an engineer for reporting and hash matching, and Legal for the reporting duties. Each gap is closed when you've tested its path end to end, including once outside office hours. The [incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop) has a scenario for exactly this test.

### 3. Days 15 to 45: write the minimum policy and an enforcement path two people can run

You don't need a full policy library yet. You need rules for your most serious harms that you and one other person can apply the same way.

**Rules.** Write community guidelines that cover your top harms from the pre-mortem, with examples of what crosses the line. Name one owner for each policy area, even if it's you for all of them. Keep internal notes on edge cases in one place, with a change log, so the next person can see what was decided and why. [Chapter 4](04-writing-policy.md) covers how to write a rule.

**Severity tiers.** Sort every report into a tier at intake. Tier 1 is imminent harm and child safety. The lowest tier is low-harm spam. Set a target time to act for each tier, and make sure tier 1 goes to the on-call person, not the queue.

**A small enforcement ladder.** Most cases need one of a few actions. Who can take each is a choice, and this split works for a small team:

| Action | When to use it | Who can take it |
|---|---|---|
| Warn | A first, low-harm breach | Anyone reviewing |
| Remove the content | Content that breaks a rule | Anyone reviewing |
| Limit a feature | Misuse of one feature, such as messaging or gifting | Anyone reviewing |
| Suspend | Repeated or serious breaches | Anyone reviewing, with a note |
| Ban | Severe harm, or repeated breaches after a suspension | The T&S lead |
| Report to the authorities | CSAM, child sex trafficking, enticement, threats to life | The T&S lead, with Legal |

Where a wrong decision can't be reversed or someone's safety is at risk, a person owns the call. Automation can prepare the case, but it doesn't close it.

**Appeals and notices.** Let users appeal every action on their account or content, and have someone other than the original decider look at it. With two people, that's the other person. Tell users which rule they broke, what you did and how to appeal. In the EU, the DSA requires a statement of reasons when you restrict content or an account because it's illegal or breaks your terms, with narrow exceptions ([Article 17](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). Spot-check a small sample of decisions every week. [Chapter 10](10-quality-calibration-and-appeals.md) builds this into a quality program.

**The people doing the reviewing.** That may be you. Give everyone who reviews harmful content access to confidential counseling, tell them what they'll see before they start, and set daily limits on exposure to the worst material. Turn on blurring and grayscale in the review tool by default if it has them. These are level 3 targets even for an early team ([chapter 14](14-moderator-wellbeing.md)).

### 4. Days 15 to 60: start logging and measuring, including one outcome

Many teams can't measure well later because a timestamp or a source field was never logged. Fix that first. Log every report, decision and action with a timestamp. The two fields teams most often forget are when you first saw the problem, by report or detection, and where it came from: a user report, proactive detection or automation. The [data to log](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/data-to-log.md) guide lists the fields.

Then start with a handful of numbers:

| Number | What it tells you | Type | Without a data team |
|---|---|---|---|
| [Time to action by severity](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-action-by-severity-p90.md), at the median and 90th percentile | Whether the worst cases are handled fastest | Operational | Export created and closed times from your ticketing tool |
| [Time to report child sexual exploitation](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-report-child-sexual-exploitation.md) | Whether required reports go out quickly and complete | Compliance | Track every case individually, with Legal |
| [User-report rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/user-report-rate.md) | Reports per 1,000 daily active users, by reason | Early warning | Note every change to the reporting flow on the chart, because it moves this number on its own |
| [Violating-content prevalence](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/violating-content-prevalence.md) | How much of what users see breaks your rules | Outcome | Each week, pull a random sample of views, for example 200, and have two people label them in a spreadsheet |

The last one is the outcome. A weekly sample that size is imprecise, but it measures what users actually see, not how busy you are. If your product has a better north star, such as [toxicity per 1,000 match-hours](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/toxicity-per-1-000-match-hours.md) for a game or the [unsafe-contact rate for minors](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/unsafe-contact-rate-for-minors.md) for a product young people use, track that instead.

Measure for several weeks, for example six to eight, before you commit to a target. Early targets are guesses, and by day 90 you'll have just enough history to set honest ones. Keep total items removed and accounts banned off the leadership update unless they sit next to an outcome. [Chapter 11](11-measuring-what-matters.md) builds the full scorecard.

### 5. Days 60 to 90: rate the program and write a 12-month plan

Rerun the [maturity model](https://stevenmacchia.com/ts-workbench/#maturity) and compare it with your week-two baseline. Then set targets for your stage:

| Stage | Target |
|---|---|
| Early | Level 2 in every area, and level 3 for crisis response, regulatory readiness and team wellbeing |
| Growing | Level 3 in every area |
| At scale or regulated | Level 4 in every area |

The roadmap moves one level at a time, with two concrete steps per level. Start with the biggest gaps. When gaps are the same size, the maturity model starts with crisis response, then regulatory readiness, then detection and prevention. That order suits most early programs, but it's a choice: a product with little regulatory exposure yet, or one where detection is the gap users feel most, may reorder. For an early-stage program, a year often looks like this:

| When | Focus | Steps from the [roadmap](https://github.com/stevenmacchia/ts-maturity-model/blob/main/roadmap-steps.md) |
|---|---|---|
| Months 1 to 3 | The gaps that can't wait | Reporting where users meet, CSAM hash matching and reporting, an imminent-risk protocol and on-call, community guidelines, appeals, logging |
| Months 4 to 6 | Level 3 where size doesn't matter | A crisis playbook with severity levels, roles and on-call; holding statements and regulator templates; each legal duty mapped to an owner, a process and evidence; daily exposure limits and blurring by default |
| Months 7 to 9 | Level 2 everywhere else | Block lists for the words and links behind your top harms, a named owner and target time for the review queue, weekly spot-checks, a simple dashboard for volume and response time |
| Months 10 to 12 | A start on level 3 where risk is highest | A queue ranked by severity, a weekly quality sample, a scorecard reviewed with leadership every quarter, and a first tabletop exercise |

Leadership says yes to plans they can check. For each line, name the ask (people, engineering time or money), the risk it reduces from the pre-mortem, and the number that will show it worked. Report operational and outcome numbers side by side. Take a snapshot of the maturity ratings each quarter, so progress is visible without a long explanation. [Chapter 8](08-hiring-and-structuring-the-team.md) covers who to hire next, and [chapter 19](19-budgets-roadmaps-and-making-the-case.md) covers making the budget case.

### 6. Put off what can wait

Saying no is part of the plan. These feel productive and can wait:

| Put off | Why it can wait | Do this instead | Come back to it when |
|---|---|---|---|
| A perfect harm taxonomy | Labels don't protect anyone, and you'll rewrite it once you've seen real cases | A short list of policy areas that matches your top risks, such as the eight harm areas in the [coverage radar](https://stevenmacchia.com/ts-workbench/#coverage) | You have a second review team, or need categories for transparency reporting ([chapter 17](17-transparency-reports-and-notices.md)) |
| A large vendor contract | You can't write terms on quality, speed and wellbeing until you know your volumes, handle times and error rates | A small pilot on your own past cases, or a short contract you can leave | You have a baseline of volume and quality data ([chapter 9](09-choosing-vendors-and-tools.md)) |
| Custom tooling | You don't yet know the workflow you'd be building for | Your ticketing tool and free tools, such as PhotoDNA, and ROOST's Coop for review and Osprey for rules | The workflow is stable and the tool is the bottleneck |
| Broad automation | Automation earns its scope. It expands into an area only when its appeal overturn rate is at or below human review. | Automate what's clear-cut and protective, such as hash matches and rate limits, and keep people on decisions that can't be undone | You have an overturn baseline for human decisions ([chapter 18](18-ai-in-trust-and-safety.md)) |

## Mistakes to avoid

- **Starting with the taxonomy.** It feels like progress and protects nobody. Close the three gaps first, and use a short list of policy areas until real cases show you what you need.
- **Leaving the worst cases to whoever is online.** A threat to life on a Saturday night needs a named person, a protocol and practice. Set up on-call in the first month, even with two people.
- **Signing a big vendor contract in month one.** You don't know your volumes or error rates yet. Pilot on your own past cases and keep the first contract short.
- **Building custom tools first.** Use your ticketing tool and free, open-source tools until the workflow settles.
- **Reporting only activity.** Pair time to action with at least one outcome, even a small weekly sample labeled in a spreadsheet.
- **Keeping decisions in your head.** Log every decision and every rule change from day one. One day someone will ask why a specific account was or wasn't restricted, and you'll need the record.
- **Reviewing harmful content with no limits because you're the only one.** Exposure limits, counseling and blurring apply to the first hire too.

## Start from this template

**90-day plan on a page.** Share it with your manager in week one, and report against it every two weeks.

| Window | Goal | Done when |
|---|---|---|
| Days 1 to 14 | Learn how safety works today | One-page map of today's rules, tools, data and decision-makers, a pre-mortem risk picture, and baseline maturity ratings |
| Days 1 to 30 | Close the gaps that can't wait | Child safety reporting, the imminent-risk protocol and user reporting each tested end to end, including once outside office hours |
| Days 15 to 45 | Minimum policy and enforcement | Community guidelines for the top harms, severity tiers with target times, an enforcement ladder, appeals, and exposure limits for reviewers |
| Days 15 to 60 | Measure | Every report and decision logged with timestamps and source, time to action by tier, and one outcome number each week |
| Days 60 to 90 | Plan | Maturity ratings against your stage's targets, and a 12-month roadmap with an ask, a risk and a number for each line |

**Severe-case card.** One per situation. Pin it where the on-call person will see it.

| Situation | First action | On call | Escalate to | Duty and deadline |
|---|---|---|---|---|
| Apparent child sexual abuse material | Remove, preserve, restrict access to trained reviewers | | Legal | CyberTipline report as soon as reasonably possible (US) |
| An adult enticing a child | Restrict contact, preserve the history | | Legal, and the police if a child is in danger | CyberTipline report (US) |
| Someone at imminent risk of suicide or self-harm | Show crisis resources, refer to emergency services | | Legal for any data disclosure | Your imminent-risk protocol |
| A credible threat to kill or hurt someone else | Preserve, restrict the account, refer to the police | | Legal | Inform the police promptly when you suspect a crime threatening life or safety (EU, DSA Article 18) |
| A police request for data in an emergency | Verify the requester, share the minimum, document it | | Legal | Your emergency disclosure procedure |
| An intimate image shared without consent | Remove it, and make reasonable efforts to remove known identical copies | | | Within 48 hours of a valid request (US, TAKE IT DOWN Act) |

**12-month roadmap.** One row per area of the program.

| Area | Level today | Target for your stage | Next two steps | Owner | When |
|---|---|---|---|---|---|
| Policy and standards | | | | | |
| Detection and prevention | | | | | |
| Review operations | | | | | |
| Quality and appeals | | | | | |
| Crisis response | | | | | |
| Metrics and reporting | | | | | |
| Regulatory readiness | | | | | |
| Team wellbeing | | | | | |

## Do it with

- **[Program maturity](https://stevenmacchia.com/ts-workbench/#maturity)**: Rate the program in eight areas against the targets for your stage, and get a phased roadmap. [Open content](https://github.com/stevenmacchia/ts-maturity-model)
- **[Abuse pre-mortem](https://stevenmacchia.com/ts-workbench/#premortem)**: Profile a product and see how it will be misused before launch. [Open content](https://github.com/stevenmacchia/abuse-premortem)
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Test your imminent-risk protocol with [The post six friends saw](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/emergency.md), a threat to life late on a Saturday followed by a police request without a warrant.
- **[Steps to the next level](https://github.com/stevenmacchia/ts-maturity-model/blob/main/roadmap-steps.md)**: Two concrete steps for moving each area of the program up each level.
- **[Data to log](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/data-to-log.md)**: The event logs every metric depends on, and the fields teams most often forget.
- **[Time to action by severity (p90)](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-action-by-severity-p90.md)** (metric): whether the most serious problems are handled fastest, including the long tail where incidents come from.
- **[Time to report child sexual exploitation](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-report-child-sexual-exploitation.md)** (metric): how quickly, and how completely, required reports reach the authorities.
- **[Violating-content prevalence](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/violating-content-prevalence.md)** (metric): out of everything people see, how much breaks your rules. Your first outcome number.

## Further reading

Outside sources:

- **[NCMEC CyberTipline](https://www.missingkids.org/gethelpnow/cybertipline)**: where US providers and the public report child sexual exploitation.
- **[ROOST: Coop](https://roost.tools/coop/)**: a free, open-source review console with hash matching and CyberTipline reporting built in.
- **[Microsoft PhotoDNA](https://www.microsoft.com/en-us/photodna)**: hash matching for known child sexual abuse imagery, free for qualified organizations.
- **[FTC: Complying with the TAKE IT DOWN Act](https://www.ftc.gov/business-guidance/resources/complying-take-it-down-act)**: what covered platforms must do about intimate images shared without consent.
- **[Ofcom: Check how to comply with the illegal content rules](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/check-how-to-comply-with-the-illegal-content-rules)**: the UK regulator's interactive tool for the illegal content risk assessment and safety duties.
- **[TSPA: Trust & Safety Fundamentals](https://www.tspa.org/curriculum/ts-fundamentals/)**: a free curriculum covering policy, operations, law enforcement, data and safety by design.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
