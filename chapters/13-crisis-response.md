# 13. Crisis response

> **When something goes badly wrong in public, who decides what, and how fast?**

*Part 3: Run* · [Contents](../README.md) · [← 12. Severe harm escalations](12-severe-harm-escalations.md) · [14. Moderator wellbeing →](14-moderator-wellbeing.md)

## In one minute

- **Agree severity levels, and who can declare an incident, before you need them.** Anyone can raise the alarm. One named role (often the on-call lead) declares, and the level decides who gets pulled in.
- **Give one person the decisions.** An incident lead runs the response. Product, Engineering, Legal and Comms each have a named role, and someone keeps the timeline.
- **In the first hour: contain, preserve, decide, communicate.** Slow the spread, keep the evidence, make the bigger calls once you have the facts, and say only what your enforcement backs up.
- **Respond in proportion.** For a raid, alert on the rate of a harm category and slow down the few hundred accounts involved, instead of locking out thousands of people.
- **Rehearse before it's real, and review after.** Run tabletop exercises on a regular cadence (for example twice a year), and hold a blameless review after every major incident.
- **The mistake to avoid:** treating a written plan as a ready one. A plan nobody has rehearsed fails on its first Saturday night.

## Why it matters

A crisis moves faster than case-by-case review. When the Christchurch attack was live-streamed in March 2019, the video was viewed fewer than 200 times during the broadcast and about 4,000 times before Facebook removed it. Nobody reported it while it was live. In the first 24 hours, Facebook removed about 1.5 million copies, and more than 1.2 million of them were blocked at upload ([Meta, Update on New Zealand](https://about.fb.com/news/2019/03/update-on-new-zealand/)). Most of the work that day was done by systems, not reviewers: matching that blocked copies at upload, and sharing hashes of the videos with other companies through the Global Internet Forum to Counter Terrorism (GIFCT). GIFCT's members then built an [Incident Response Framework](https://gifct.org/incident-response/) so that the next response would be coordinated from the start.

Regulators expect the same readiness. Under the EU's Digital Services Act, when extraordinary circumstances lead to a serious threat to public security or public health, the European Commission can, on a recommendation from the European Board for Digital Services, require very large online platforms and search engines to assess and act on how their services contribute to it ([Article 36](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). If a crisis involves a personal data breach, the controller must notify the data protection authority without undue delay, and where feasible within 72 hours of becoming aware of it, unless the breach is unlikely to put people's rights and freedoms at risk ([GDPR, Article 33](https://eur-lex.europa.eu/eli/reg/2016/679/oj)). The [program maturity model](https://github.com/stevenmacchia/ts-maturity-model/blob/main/maturity-model.md) holds even early-stage teams to a written playbook, severity levels, an on-call rota and named roles, because the harm is the same whatever your size.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A one-page playbook: what counts as an incident, three severity levels, who can declare one, a contact list for Legal, Comms, Engineering and law enforcement, a phone that rings for Sev 1, and holding statements ready to adapt. | Named incident roles and an on-call rota, alerts on the rate of each harm category, levers you can pull in minutes, regulator notification templates, regular tabletop exercises (for example twice a year), and a blameless review with tracked actions after every major incident. | Incident command that works across regions and languages, drills that include executives, playbooks for elections, AI-generated content and coordinated attacks, membership of cross-industry incident protocols, and lessons fed into risk assessments. |
| **What you can show** | An incident log with timestamps for every Sev 1 and Sev 2. | Time from first signal to a declared incident. Time from alert to action. The share of alerts that turned out to be real coordination. Review actions closed on time. | Time to detect emerging trends, harmful reach before action during incidents, drill results, and every public statement checked against enforcement data. |

## How to do it

### 1. Agree severity levels, and who declares an incident

An incident is anything that causes or threatens serious harm to people, spreads faster than normal operations can handle, or will draw in the press, regulators or law enforcement. A three-level scheme like the one below works for many teams. Others use more levels, when they need finer steps in who gets pulled in; fewer levels are easier to apply under pressure. Whichever you choose, everyone should read the levels the same way:

| Level | What it looks like | Examples from the incident tabletop | Who is pulled in |
|---|---|---|---|
| Sev 1 | Serious harm to people is happening or imminent, or harm is spreading faster than you can contain it | A dangerous challenge spreading among teens; a harassment campaign that posts a streamer's home address; a fake image made with your model going viral before an election | Incident lead, operations, Legal, Comms, the Product and Engineering owners, and an executive |
| Sev 2 | Serious harm or a serious failure, with hours or days to respond | A journalist with evidence that high-profile accounts get softer enforcement; 40,000 fake accounts overnight; a vendor site that handles most of your review going offline | Incident lead, with Legal and Comms as needed |
| Sev 3 | A known risk with a deadline that needs a coordinated plan | A new law that applies to you in 90 days | An owner and a plan |

Then set three rules. Anyone can raise the alarm. One named role declares the incident and its level: often the on-call lead, though some teams let any trained incident lead declare. And declaring early is better than declaring late: you can always downgrade, but you can't get back the hours lost before anyone was in charge.

Single severe cases, such as a child in danger or a threat to life, follow [chapter 12](12-severe-harm-escalations.md). They become incidents when they spread, repeat or go public.

### 2. Name the roles, and give one person the decisions

Incidents often go wrong in familiar ways: too many people deciding, nobody writing it down, and two teams changing the same settings at once. Borrow the fix from engineering incident command ([Google SRE book, Managing Incidents](https://sre.google/sre-book/managing-incidents/)) and give every role a name:

| Role | What they own |
|---|---|
| Incident lead | Priorities, decisions and who does what. Runs the response rather than doing the hands-on work. |
| Operations lead | Enforcement actions, queues and reviewers. The only person changing enforcement settings during the incident. |
| Product and Engineering | Product levers: feature limits, rate limits, rollbacks and data pulls. |
| Legal | Legal duties, notifications to regulators and law enforcement, evidence and privilege. |
| Comms | Statements to users, press and partners, with every fact checked with the operations lead. |
| Scribe | The timeline: what was known, decided and done, and when. |
| Executive sponsor | Trade-offs above the incident lead's authority, such as turning off a revenue feature, and keeping leadership informed. |

At an early stage, one person may hold several roles. Write down who holds which anyway. A growing team needs a rota of trained incident leads, so the role doesn't fall to whoever is most senior and awake. At scale, add regional leads and written handoffs, so a response can pass between time zones without losing the thread.

When the incident lead changes, say so in the incident channel. Everyone should always know who decides.

### 3. The first hour: contain, preserve, decide, communicate

All four matter, and none of them can wait for a meeting. Run them in this order, with one person in charge of the whole, because each one protects the next.

**Contain.** Slow the spread before you settle every policy question. In [The breath-hold challenge](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/challenge.md), the strongest first move restricts the hashtag and related searches, adds a safety interstitial and starts a targeted sweep. Removing every video that uses the hashtag silences the news reports and parents' warnings too, and over-removal becomes a second incident. Contain distribution first (search, hashtags, recommendations, sharing), then refine enforcement. When volume outruns reviewers, auto-action clear copies with near-duplicate matching and review the rest by reach, not by arrival time.

**Preserve.** Before anything is deleted, keep the content, the account data and the logs. Investigators, regulators and your own review will need them. Anything involving a child follows [chapter 12](12-severe-harm-escalations.md). If the incident is inside your own walls, such as a reviewer misusing access, cut the access first and preserve the logs, as in [The DMs nobody reported](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/insider.md).

**Decide.** Establish the facts before the big calls. In [The special-treatment leak](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vip.md), the only job in the first hours is finding out what actually happened. Anything said before then becomes the next story. Then the incident lead decides with the options and their costs in front of them: who is protected, who pays, and for how long. Every emergency measure gets an end date when it's switched on.

**Communicate.** Internal first: a short update at fixed times, with what's known, what's been done, what's next and who decides. Then users, press and regulators (step 5).

### 4. Coordinated attacks and raids: alert on rate, slow down the few hundred

In a raid, a group floods a room, a match or a creator's stream with abuse. Raids are easy to miss in raw numbers, because volume swings with everything that happens on the platform.

Rates hold steadier than volume. On a busy night, volume goes up and a category's rate usually stays put. So use rates as baselines. If one category's rate climbs while volume is normal, that usually means something coordinated: a raid, or a group targeting one player.

I'd set up an alert on that rate. Something simple works to start: if a category sits well above its usual level for that hour for 15 minutes or so, page whoever's on call.

When it fires, respond in proportion. Locking the room or turning off chat in the middle of a big event punishes thousands of people for what a few hundred accounts are doing. Raids often lean on new accounts. If most of the accounts involved are new, I'd start by slowing down posting for accounts less than a week old. That targets them and leaves everyone else alone. Keep the friction where the attack is: a platform-wide limit on all new accounts stops thousands of real newcomers too, and offenders switch to older accounts. Before a big launch or event, get this response approved in advance, so the on-call lead isn't hunting for sign-off at 2am ([chapter 15](15-working-with-product-legal-and-leadership.md)).

| What you see | First response | Not this |
|---|---|---|
| A category's rate well above its usual level for that hour, for about 15 minutes | Page on-call, and look at who is posting | Waiting for user reports |
| A confirmed raid on a room, match or creator | Slow posting for accounts under a week old in that space, limit new accounts joining it, tighten filters there | Locking the room, or turning off chat for everyone |
| Organizers identified | Ban the organizing accounts and the accounts linked to them, and share them with the platform where they organize | Banning only the accounts that sent the messages |

Raids are usually organized somewhere else. In [The swatting threat](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/swatting.md), the attackers coordinate in a server on another chat platform, and sharing the organizing accounts with that platform's trust and safety team is what collapses the campaign. When fake accounts get past sign-up checks, as in [The sock puppet surge](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/bots.md), limit what new accounts can do until they behave like real users.

To know if it's working, I'd look at how fast the team acts once an alert goes off, and how many alerts turn out to be real coordinated activity. If most of them end up being a reaction to something in the game, the threshold is set too low.

At an early stage, a daily chart of rates by category and one lever you can pull by hand are enough. A growing team automates the alert for each category. At scale, baselines need to be set by market and language, because what's normal differs between them. [Chapter 5](05-detection-and-prevention.md) covers detection in more depth.

### 5. Talk to users, press and regulators

**Have a holding statement ready.** A short, factual statement buys time without saying anything you'll regret: what you're seeing, what you've done, what people can do, and when you'll update. Write templates before you need them.

**Say quickly what you know, and nothing you don't.** "No comment" becomes the headline. Calling an incident "isolated and rare" before you know it is makes the next report worse. Denying something that turns out to be true makes the denial the story.

**Match what enforcement actually does.** Public safety claims are evidence, so every number and every claim in a statement comes from the operations lead, not from a version that sounded right. [Chapter 15](15-working-with-product-legal-and-leadership.md) covers keeping Comms and enforcement in step.

**Share outcomes, not methods, while it's live.** Publishing exactly how your detection works helps the people evading it. Say what you removed and what changed, and explain methods once the incident is over.

**Tell the people affected first.** Contact anyone who may be in physical danger before anyone else, then everyone affected. Keep their identities private: a school can warn families about a sextortion campaign without naming the students targeted.

**Know your notification duties before the incident.** A personal data breach can start a 72-hour clock under the GDPR. Threats to life can bring a duty to inform law enforcement under the Digital Services Act ([chapter 12](12-severe-harm-escalations.md)). Very large platforms can be required to act under the Commission's crisis response mechanism. Keep the duties, the contacts and the templates in the playbook, owned by Legal.

**Never make a front-line employee the explanation** for a systemic gap. Own the failure, explain why the process exists, and say what will change.

### 6. Keep the rest of the program running

Incidents pull attention, and the quiet queues pay for it.

- **Never pull staff off your highest-severity queues** to cover a louder incident. In The breath-hold challenge, moving reviewers off child safety clears the trend queue and misses the child-safety targets overnight.
- **Triage by severity when capacity drops.** In [The empty review floor](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vendor.md), a typhoon takes out 60% of reviewers. The strongest call moves everyone left onto child safety and threats, pauses low-severity work, automates only clear-cut, low-harm cases with spot checks, and tells people about the delays. [Chapter 7](07-review-operations.md) covers planning for this before it happens.
- **Run shifts.** A long incident needs handoffs, not heroes. People who handled harmful material during it need a debrief and time away from the worst queues ([chapter 14](14-moderator-wellbeing.md)).
- **End emergency measures on purpose.** Measures left in place indefinitely start catching people they were never meant for. Review each one on its end date: keep it as policy, change it, or switch it off.

### 7. Review blamelessly, and turn lessons into changes

Every Sev 1 and Sev 2 gets a blameless review: what in the system failed, not who to blame, on the assumption that everyone acted in good faith with what they knew at the time ([Google SRE book, Postmortem Culture](https://sre.google/sre-book/postmortem-culture/)). People only report problems openly when they don't expect to be blamed for them.

Start with the timeline. Record three timestamps: when the first related item appeared, when the first internal signal fired (a report spike, an alert, an analyst's note), and when the incident was formally triaged. The gap between signal and triage is usually the fastest to fix, because it's about alerting and on-call, not detection.

Then turn findings into a short list of changes, each with an owner and a date, and track them to closure. Good changes are concrete: a trend added to a watchlist, a default changed for teens, a new lever for new accounts, an audit right added to a vendor contract. A review that ends with "be more careful" changes nothing.

Brief executives with numbers: how long the harm ran, how many people it reached, what it cost, and what will be different next time. Watch two numbers across reviews: the share of actions closed on time, and how often the same kind of incident comes back.

### 8. Rehearse with tabletop exercises before it's real

A tabletop exercise walks a team through an incident as it unfolds, with timed decisions and no real users at risk. It's where you find out that nobody knows who calls the police, or that Comms is on a flight.

How often to run one depends on how fast your risks and your team change. Twice a year, with executives in at least one, is a cadence that works for many teams. Pick scenarios that match your product and your risks. The [incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop) has 43 scenarios across eight company types, each with four timed decisions, the consequence of every choice and the law behind it. Run it live with roles and a timer, and leave with an after-action report and owned actions.

Rehearse the hard conditions, not the easy ones: a Saturday night, the incident lead unreachable, the vendor down, a journalist's deadline in three hours. Rotate who plays incident lead, so more than one person has done it before the real thing.

At an early stage, a short exercise with the founders and the first safety hire exposes the biggest gaps. A growing team runs them regularly, with every role taking part. At scale, drills include executives and run across regions.

## Mistakes to avoid

- **Declaring late.** Declare early and downgrade later. The hours before anyone is in charge are the expensive ones.
- **Deciding by committee.** One incident lead decides. Everyone else advises and acts within their role.
- **Locking the room for a raid.** Slow down the few hundred accounts involved, and leave everyone else alone.
- **Removing everything that mentions the trend.** Contain distribution first, and protect news reports and warnings.
- **Pulling reviewers off child safety to cover the louder incident.** Keep your highest-severity queues staffed whatever else is happening.
- **Speaking before you have the facts.** Say what you know and what you're doing, and only what enforcement backs up.
- **Leaving emergency measures on.** Give every measure an end date and review it.
- **Blaming a person.** Look for what in the system failed, and fix that.

## Start from this template

**Severity levels.** Fill in with examples from your own product, and agree them with Legal and Comms.

| Level | What it looks like on your product | Who can declare | Who is pulled in | Update cadence |
|---|---|---|---|---|
| Sev 1 | | | | |
| Sev 2 | | | | |
| Sev 3 | | | | |

**Incident roles.** Keep it current, and test the numbers.

| Role | Name | Backup | How to reach them out of hours |
|---|---|---|---|
| Incident lead | | | |
| Operations lead | | | |
| Product and Engineering | | | |
| Legal | | | |
| Comms | | | |
| Scribe | | | |
| Executive sponsor | | | |

**Holding statement.** Adapt it in minutes, and check every fact with the operations lead.

> We're aware of [what is happening]. Since [time], we have [what you've done]. If you [are affected in this way], [what to do, and where to get help]. We'll share an update by [time].

**Post-incident review.** One page, within days of the incident closing.

| Section | What goes in it |
|---|---|
| Timeline | First appearance, first internal signal, formal triage, containment, resolution |
| Impact | Who was harmed or exposed, how many people it reached, and for how long |
| What worked | Levers, people and processes that helped |
| What failed in the system | Gaps in detection, defaults, staffing, tools or communication, not people |
| Actions | Each change, with an owner and a date |
| Follow-up | When the actions will be checked, and by whom |

## Do it with

- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Rehearse a crisis, with a lesson and the law behind every call. [Open content](https://github.com/stevenmacchia/incident-tabletop)
- **[The breath-hold challenge](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/challenge.md)**: A dangerous trend spreads among teens on a Friday evening. Contain it without silencing the people warning against it.
- **[The swatting threat](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/swatting.md)**: Hundreds of new accounts raid a streamer's matches, and the campaign escalates to their home address.
- **[The special-treatment leak](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vip.md)**: A journalist has screenshots and a 24-hour deadline. Establish the facts before you say anything.
- **[The empty review floor](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vendor.md)**: A typhoon takes out most of your review capacity for a week.
- **[Program maturity model](https://stevenmacchia.com/ts-workbench/#maturity)**: Rate your crisis response against the five levels, and get the next steps.
- **[Time to detect emerging trends](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-detect-emerging-trends.md)** (metric): how long a new kind of abuse runs before anyone formally triages it, filled in at every post-incident review.
- **[Time to action by severity (p90)](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-action-by-severity-p90.md)** (metric): whether the most serious cases are handled fastest, including the slow tail.
- **[Harmful reach before action](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/harmful-reach-before-action.md)** (metric): how many people saw harmful content before you acted, which links speed to harm.

## Further reading

From Steven's writing:

- **[Launch week is the hardest test a safety program gets](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-safetybydesign-productmanagement-share-7512980609300930560-Azbb/)** (Oct 5, 2026): Most of what goes wrong in launch week is decided before day one. Pre-approve friction for new and unverified accounts, triage by severity, watch the rate of abuse rather than raw counts, and agree with product how much friction you'll accept, then review it after week one.
- **[Watch the rate, not the volume](https://www.linkedin.com/posts/stevenmacchia_kenzie-wilson-at-stream-published-a-super-ugcPost-7511811574127312896-HAsd/)** (Oct 2, 2026): In live sports chat, volume swings hard while the rate of abusive content tends to hold steady. Alert on rate jumps to spot raids, and slow down new accounts instead of locking the room.

Outside sources:

- **[Google SRE book: Managing Incidents](https://sre.google/sre-book/managing-incidents/)**: incident command roles from engineering, which carry over well to safety incidents.
- **[Google SRE book: Postmortem Culture](https://sre.google/sre-book/postmortem-culture/)**: how blameless reviews work, and why they get problems reported.
- **[Meta: Update on New Zealand](https://about.fb.com/news/2019/03/update-on-new-zealand/)**: how the Christchurch video spread in its first 24 hours, and what blocked it.
- **[GIFCT: Incident Response Framework](https://gifct.org/incident-response/)**: how member companies coordinate when an attack has an online dimension.
- **[EU Digital Services Act](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)**: Article 36 sets out the crisis response mechanism for very large platforms.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
