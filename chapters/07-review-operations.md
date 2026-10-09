# 7. Standing up review operations

> **How do you build a review operation that's fast, consistent and affordable?**

*Part 2: Build* · [Contents](../README.md) · [← 6. Child safety and age assurance](06-child-safety-and-age-assurance.md) · [8. Hiring and structuring the team →](08-hiring-and-structuring-the-team.md)

## In one minute

- **Decide what people decide.** Automate as far as the evidence supports. Where a wrong decision can't be reversed or someone's safety is at risk, automation prepares the case and a person closes it.
- **Work the queue by severity, not arrival order.** Give every item a severity tier when it comes in, then route it by reach, language, content type and who reported it.
- **Set response times you can keep.** Measure for a few weeks first, then set a target per tier and report the slow tail, not the average.
- **Plan capacity from the work.** Hours of work divided by the hours a reviewer really spends on the queue gives you headcount. Then check every shift, time zone and language is covered.
- **When cases outnumber reviewers, protect first and respond in proportion.** Protective actions stay automatic and the queue is worked by risk. In a spike, slow down new accounts instead of locking the room.
- **The mistake to avoid:** judging the operation by how many decisions it made or how many it automated. Judge it by whether the most serious cases were decided quickly and correctly.

## Why it matters

Detection only matters if someone acts in time. The review operation is where policy turns into decisions, and every weakness in it lands on users: a threat to life waiting behind spam, reviewers applying last month's guidance, an overnight gap where nobody can make the hard call. When capacity drops, shortcuts follow. In 2020, with human review capacity greatly reduced by the pandemic, YouTube relied more on automation: it removed more than twice as many videos as in the previous quarter, and the share of appealed videos it reinstated rose from 25% to 50% ([YouTube Official Blog](https://blog.youtube/inside-youtube/responsible-policy-enforcement-during-covid-19/)).

Regulators now look at the operation itself, not just the policy. In the UK, Ofcom's [illegal content codes of practice](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/statement-protecting-people-from-illegal-harms-online) recommend that every user-to-user service has a content moderation function that reviews suspected illegal content and takes it down swiftly. For large services (more than 7 million monthly active UK users) and multi-risk services (broadly, those at medium or high risk for two or more kinds of illegal harm), they also recommend performance targets, a policy for prioritizing what gets reviewed, enough resources to meet demand, and training for moderators. In the EU, the Digital Services Act ([Regulation (EU) 2022/2065](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)) requires hosting services to handle notices in a "timely, diligent, non-arbitrary and objective manner" (Article 16), online platforms to give trusted flaggers' notices priority (Article 22), and complaints to be decided under the supervision of qualified staff, not solely by automated means (Article 20). Micro and small platforms are exempt from Articles 20 and 22 unless they've been designated very large (Article 19). The question isn't whether you have reviewers. It's whether you can show they decide the right things first.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | One review tool, a severity tier on every item, a written target for the most severe tier, automatic protective actions such as hash matching, and a named person on call for child safety and threats to life. | Queues by severity and language, targets for every tier, a capacity plan refreshed every quarter, a vendor for volume or languages with an in-house core for severe cases, a 24-hour on-call rotation, and a written process for guidance changes. | Several vendors in different regions, a continuity plan tested twice a year, automation that gains or loses scope based on overturn rates, a surge plan that adds reviewers within hours, and targets and prioritization written down for regulators. |
| **What you can show** | Time to action on the most severe tier. The age of the oldest item in each queue. | Response-time attainment by tier, counting items still open, next to quality scores. Backlog age by queue. Who acknowledged the last guidance change, and how fast. | Cost per decision next to quality, overturn rate by enforcement source, time to act on spike alerts, and the result of the last continuity test. |

## How to do it

### 1. Draw the line between automated and human decisions

Before you design a single queue, decide what people decide. That choice sets your headcount, your costs and how much harmful material your reviewers see.

Automation rate is a useful efficiency metric, but it isn't a measure of maturity. It counts the decisions people didn't have to make, not whether those decisions were right. The goal is to automate as much as the evidence supports. A classifier score can't make that call alone. The system should also weigh severity, the user's history, behavior signals, past enforcement, reputation, age-related risk and the cost of being wrong.

Those inputs set the response:

| When | Response |
|---|---|
| The evidence is clear | Automated enforcement |
| The evidence is less certain | Friction, lower distribution or limits, not removal |
| A decision isn't supportable yet | Collect more signals before anyone acts |
| An error would cost too much | Human review |

One high-confidence score can describe a credible threat, hyperbole between friends or a survivor telling their own story. The score is the same. The right action isn't. That's why decisions on child safety, credible threats, exploitation and self-harm can't rest on model confidence alone yet.

My default: where a wrong decision can't be reversed, or a user's safety is at risk, a human owns the call. Automation prepares the case and a person closes it.

Automation also has to earn its scope. It doesn't expand into a policy area until its appeal overturn rate there is at or below human review's, and every model or threshold change gets a baseline before launch and a check after. [Chapter 10](10-quality-calibration-and-appeals.md) and [chapter 18](18-ai-in-trust-and-safety.md) cover how. Write down where the line sits for each policy area. In the EU, the statement of reasons you send a user must say, where applicable, whether automated means were used to take the decision (DSA Article 17).

The line changes the job. As clear-cut cases move to automation, what's left for people is harder and often more disturbing. Handle times rise, and each hour in the queue can carry more exposure to harm. Plan for that in staffing, training and support ([chapter 14](14-moderator-wellbeing.md)), or the efficiency gain comes back as mistakes and people leaving.

### 2. Build queues by severity, and route by what each case needs

A queue in arrival order fails the first time a threat to life sits behind a pile of spam. Rank by severity instead.

Give every item a severity tier when it comes in. A starting point:

| Tier | What goes in |
|---|---|
| 1 | Imminent risk to someone's life or safety, child sexual exploitation, grooming, credible threats |
| 2 | Harm to a specific person that's still happening: targeted harassment, scams in progress, shared private images |
| 3 | Serious rule-breaking with no one in immediate danger: hate, graphic content, impersonation |
| 4 | Low-harm content: spam, mild insults, off-topic posts |

Tier 1 cases leave the normal queue for the severe-harm path in [chapter 12](12-severe-harm-escalations.md). Within a tier, route by what the case needs:

- **Reach.** Content that's spreading fast or streaming live moves up.
- **Language.** Send it to someone who reads the language natively, not through machine translation.
- **Content type.** Video, live audio, images and long chat histories need different tools, training and handle times.
- **Who reported it.** In the EU, online platforms other than micro and small ones must give priority to notices from DSA trusted flaggers (Articles 19 and 22). Reports from your own detection, from a parent or from law enforcement may each need their own path.
- **Who it's about.** Cases involving a child or a user at risk go to trained reviewers on a restricted path ([chapter 6](06-child-safety-and-age-assurance.md)).

For large or multi-risk services, Ofcom's codes recommend the same thinking: a prioritization policy that weighs how many people could encounter the content, how severe the harm could be, and how likely it is to be illegal, including whether a trusted flagger reported it.

Keep queues few. Each needs trained people, cover on every shift and its own target, so split one only when the skill, the tool or the target is different.

> **Story.** In my experience, the first thing to break as volume grows is the tooling, before headcount. Reviewers end up jumping between too many systems, and the context for a decision gets lost between them. Before you add reviewers, put what a reviewer needs for a case in one place: the content, the account's history, past actions and reports, and the guidance that applies. Open-source consoles such as ROOST's [Coop](https://github.com/roostorg/coop) are built around that idea.

### 3. Set response-time targets you can keep

A response-time target, sometimes called an SLA (service-level agreement), is a promise to users, to leadership and sometimes to a regulator.

1. **Measure before you commit.** Run for, say, six to eight weeks first. Early targets are guesses.
2. **Write one target per tier, and store it as a table.** Not in people's heads.
3. **Fix when the clock starts.** The first report or detection on that item, whichever came first.
4. **Report the median and the p90.** The p90 is the time 90% of cases beat. Averages hide the slow tail, and the slow tail is where incidents come from.
5. **Count items still open past their target as misses.** Otherwise a growing backlog makes your attainment look better.
6. **Pair every target with a quality check.** Teams hit targets by rushing. Put the share of decisions an expert agrees with next to every speed number.

Read the p90 before you hire. A fast median with a slow p90 often means overnight reports wait for the morning shift. The fix is often on-call cover, not more reviewers.

For large or multi-risk services, Ofcom's codes recommend performance targets covering at least the time taken to act and the accuracy of decisions. [Time to action by severity](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-action-by-severity-p90.md) and [SLA attainment](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/sla-attainment.md) have the formulas and starter queries.

### 4. Plan capacity from the work

Capacity planning tells you how many reviewers you need, on which shifts, to hit your targets. It takes five inputs.

| Input | What it means | Where to get it |
|---|---|---|
| **Volume** | Items that need a human decision, per queue, by hour of the week | Your case tool, projected from the trend and known events such as launches and holidays |
| **Handle time** | Average minutes per decision, including reading context and writing notes | Case tool timestamps, per queue |
| **Productive hours** | Hours a reviewer actually spends working the queue | Paid hours minus shrinkage |
| **Shrinkage** | Paid time not spent on the queue: breaks, training, calibration, team meetings, wellbeing time, leave and sickness | Your rota and HR records |
| **Coverage** | The hours, days, time zones and languages each queue must be staffed, whatever the volume | Your response-time targets |

Then the arithmetic, for each queue:

1. **Hours of work** = volume × handle time in minutes ÷ 60.
2. **Productive hours per reviewer** = paid hours × (1 − shrinkage).
3. **Reviewers for the work** = hours of work ÷ productive hours per reviewer.
4. **Reviewers for coverage** = hours that need someone on the queue ÷ productive hours per reviewer.
5. **Plan for the larger of the two**, and leave room for spikes.

A worked example, with made-up numbers to show the arithmetic. A queue gets 6,000 items a week at 3 minutes each: 300 hours of work. Reviewers are paid for 40 hours and lose a quarter of that to shrinkage, so each gives 30 productive hours. You need 10 reviewers for the work. Now take a small tier 1 queue: 600 items a week at 6 minutes is 60 hours, or 2 reviewers. But tier 1 needs someone on it at every hour of the week: 168 hours ÷ 30 is 6 reviewers to keep one seat filled. Here coverage sets the number, not volume. That's the point to cross-train, combine small queues on a shift, or hand overnight cover to a team in another time zone (follow-the-sun).

Measure your own handle time and shrinkage: they vary widely, and a borrowed number will be wrong for you. Then:

- **Plan by block of the week, not the weekly total.** Volume follows when your users are online, and a weekly average hides the evening that breaks your targets.
- **Don't plan for everyone to be busy every minute.** A team planned at full stretch has no slack for a spike, a guidance change or a case that takes an hour.
- **Re-measure after every automation change.** When automation takes the easy cases, handle time on what's left goes up.

For large or multi-risk services, Ofcom's codes make the same link: resource the function to meet your targets, allowing for events that drive sudden demand and for your users' languages. Forecast from volume trends, quarterly for example. Between forecasts, watch [backlog age](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/backlog-age.md). When the oldest items keep getting older while the queue's size stays flat, reviewers may be picking the easy items first, and you can see a capacity problem coming before your targets collapse.

### 5. When cases outnumber reviewers, protect first and respond in proportion

Some weeks, flagged cases will outnumber reviewers: a launch, a raid, a news event, a vendor site going dark. Decide what happens before it does, and tell leadership in advance what will wait.

- **Protective actions stay automatic.** Actions that limit harm and can be undone, such as restricting contact, limiting reach or adding friction, keep running without waiting for a person. Final, hard-to-reverse decisions wait. In child safety, a restricted account waiting a day for review is a cost worth paying.
- **The queue is worked by risk.** Each harm area needs a written order. For flagged contact between adults and minors, that means requests to move to another app first, then cases involving children under 13.
- **Severe queues keep their people.** Never pull reviewers off child safety or threats to cover a louder incident.
- **Low-severity backlog gets automated with checks.** Where models score clear-cut, low-harm cases with high accuracy, let them decide, spot-check the results, and tell users their reports are delayed.

Not every spike is organic. When one category's rate climbs while volume is normal, something coordinated is usually happening: a raid, or a group targeting one person. An alert on that rate pages on-call before the queue backs up ([chapter 5](05-detection-and-prevention.md) covers setting it and judging it).

Then respond in proportion. Locking the room punishes thousands of people for what a few hundred accounts are doing. Check how many of the accounts involved are new. If most are, I'd start by slowing down posting for accounts less than a week old. That targets them and leaves everyone else alone. [Chapter 13](13-crisis-response.md) covers spikes that become incidents.

### 6. Decide what to keep in-house and what to send to a vendor

Most operations mix in-house and vendor teams. One common split:

| Keep close | Good to send to a vendor |
|---|---|
| Policy and the guidance itself | High-volume queues with clear, stable guidance |
| Escalations, severe harm and contact with law enforcement | Languages and markets you can't hire for |
| Child safety investigations, on a restricted path | Overnight and weekend cover |
| The experts who calibrate everyone else | Extra capacity for spikes |
| Cases that need wide access to private user data | Work you can describe fully in written guidance |

[Chapter 9](09-choosing-vendors-and-tools.md) covers choosing the vendor on evidence, piloting it on your own past cases and writing the contract.

Plan for the vendor going dark. One vendor at one site is a single point of failure. Once you can, spread work across sites or vendors in different regions, keep an in-house core for severe cases, and test the continuity plan, for example twice a year.

Vendor reviewers are part of your safety system: same guidance at the same time, same calibration sessions, same wellbeing standards ([chapter 14](14-moderator-wellbeing.md)). Give them access only to what each case needs, and log every lookup ([chapter 8](08-hiring-and-structuring-the-team.md)).

### 7. Write down who makes the hard calls, including at 2am

Every tier of escalation needs written decision rights: what it can decide without asking anyone.

| Tier | Who | Decides | Escalates when |
|---|---|---|---|
| Front line | Reviewer, in-house or vendor | Clear cases under written guidance | The guidance doesn't fit, or the case is tier 1 |
| Specialist or shift lead | A trained specialist, or the lead on shift | Hard cases in their area, and protective restrictions | Law enforcement, a legal duty, the press or a high-profile account may be involved |
| On-call manager | A named person on a rotation, with a named backup | Emergency referrals and disclosures to law enforcement, and emergency measures on a feature | It needs a product change, a public statement or legal sign-off |
| Leadership | Head of Trust & Safety, with Legal and Comms | Public statements, legal positions, accepting a serious risk | |

The operational point: nobody on shift should have to wonder at 2am whether they're allowed to act. At an early-stage company the rotation might be two people. Write it down anyway, and give the on-call person a number that works, a written protocol, and the authority to act on anything the protocol covers without waking an executive. A protocol that only works because the right person happened to be online on a Saturday night isn't a protocol.

Severe harm has its own path. Child sexual exploitation, a life at risk and emergency requests from police follow the tiers in [chapter 12](12-severe-harm-escalations.md), which sets out who is paged, which calls only trained people make, and how to test the rota out of hours.

### 8. Get a guidance change to every reviewer within hours, and check it landed

Guidance changes constantly. An operation that takes a week to absorb a change is applying old rules for a week.

1. **One owner writes the change note.** What changed, when it takes effect, why, two or three examples on each side of the line, and what to do with items already in the queue.
2. **Send it to in-house and vendor teams at the same moment**, through the leads on every shift, not through a chat thread.
3. **Ask every reviewer to acknowledge it**, and track who hasn't, shift by shift.
4. **Check understanding before it counts.** A handful of test cases near the line shows whether people read it the way you meant.
5. **Sample the changed area for the first week.** Compare quality scores before and after.
6. **Watch appeals in that area.** When overturns stay high, review the guidance before you review reviewer performance.
7. **Record it in the change log**, so you can show which rules applied on which day.

Measure two things: time from decision to every reviewer on duty acknowledging it, and agreement with experts on the changed area in the first week. For large or multi-risk services, this is also how you show that the training and materials Ofcom's codes recommend for moderators are working. [Chapter 4](04-writing-policy.md) covers writing the guidance, and [chapter 10](10-quality-calibration-and-appeals.md) covers calibration.

## Mistakes to avoid

- **Working the queue in arrival order.** Give every item a severity tier when it comes in, and rank by it.
- **Measuring automation by its rate.** Judge it on decision accuracy, cost per decision and appeal overturns, and on whether reviewer time goes where judgment matters most.
- **Setting targets before you have a baseline.** Measure first, then commit, and count open items past their target as misses.
- **Planning capacity on paid hours.** Subtract shrinkage, and check coverage for every shift, time zone and language.
- **Locking the room in a spike.** Slow down new accounts and leave everyone else alone.
- **Pulling people off severe queues for a louder incident.** Child safety and threats keep their reviewers.
- **Leaving the 2am call to whoever is online.** Name the on-call person and their backup, and write down what they can decide.

## Start from this template

**Queue sheet.** One row per queue. Review it every quarter.

| Queue | Severity tier | What goes in | Who reviews | Target (p90) | Hours covered | Automatic protective action | Escalates to |
|---|---|---|---|---|---|---|---|
| | 1 | | | | Around the clock | | |
| | 2 | | | | | | |
| | 3 or 4 | | | | | | |

**Capacity sheet.** Fill in one row per queue with your own measurements, then staff to the larger of the two reviewer counts.

| Queue | Items per week | Handle time (minutes) | Hours of work | Productive hours per reviewer | Reviewers for the work | Hours needing cover | Reviewers for coverage | Plan |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

**Guidance change note.** What changed; effective from (date, time and time zone); why; examples that now break the rule; examples that still don't; what to do with items already in the queue; who to ask; acknowledge by; date of the quality check on the changed area.

## Do it with

- **[Vendor scorecard](https://stevenmacchia.com/ts-workbench/#vendors)**: Choose a moderation vendor on evidence: weighted criteria, rubrics, minimums and RFP questions. [Open content](https://github.com/stevenmacchia/moderation-vendor-scorecard)
- **[Time to action by severity (p90)](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-action-by-severity-p90.md)** (metric): how fast you act on each severity tier, including the slow tail where incidents come from.
- **[SLA attainment](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/sla-attainment.md)** (metric): the share of items decided within their tier's target, counting items still open as misses.
- **[Backlog age](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/backlog-age.md)** (metric): how old the unreviewed items in each queue are, your early warning for a capacity problem.
- **[Cost per decision](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/cost-per-decision.md)** (metric): what each decision really costs, by queue and vendor, always shown next to quality.
- **[QA agreement rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/qa-agreement-rate.md)** (metric): how often reviewers make the same call an expert would, the guardrail on every speed and cost number.
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Rehearse [The empty review floor](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vendor.md) (most review capacity lost for a week) and [The post six friends saw](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/emergency.md) (a self-harm emergency late on a Saturday).

## Further reading

From Steven's writing:

- **[Watch the rate, not the volume](https://www.linkedin.com/posts/stevenmacchia_kenzie-wilson-at-stream-published-a-super-ugcPost-7511811574127312896-HAsd/)** (Oct 2, 2026): In live sports chat, volume swings hard while the rate of abusive content tends to hold steady. Alert on rate jumps to spot raids, and slow down new accounts instead of locking the room.
- **[Grooming is a pattern, not a message](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-childsafety-onlinesafety-share-7511067864448237568-k7h4/)** (Sep 30, 2026): Responses build as signals stack on adult-to-minor contact, with thresholds tested on past cases, a queue worked by risk, privacy limits agreed up front, and four numbers that show it works.
- **[Automation rate isn't a measure of maturity](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-contentmoderation-responsibleai-share-7507791297672486913-jc9j/)** (Sep 21, 2026): Automate as much as the evidence supports. Where a wrong decision can't be reversed or someone's safety is at risk, automation prepares the case and a person closes it.

Outside sources:

- **[Ofcom: protecting people from illegal harms online](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/statement-protecting-people-from-illegal-harms-online)**: the UK illegal content codes, including what they expect of a content moderation function.
- **[The Digital Services Act](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)**: the EU rules on notices, trusted flaggers, statements of reasons and complaints.
- **[ROOST: Coop](https://github.com/roostorg/coop)**: a free, open-source review console with queues, routing and hash matching.
- **[TSPA: Content Moderation and Operations](https://www.tspa.org/curriculum/ts-fundamentals/content-moderation-and-operations/)**: the Trust & Safety Professional Association's curriculum on setting up moderation teams, quality, appeals and metrics.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
