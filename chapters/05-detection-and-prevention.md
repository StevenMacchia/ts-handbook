# 5. Detection and prevention

> **How do you find harm before users have to report it, and stop it before it happens?**

*Part 2: Build* · [Contents](../README.md) · [← 4. Writing policy and an enforcement ladder](04-writing-policy.md) · [6. Child safety and age assurance →](06-child-safety-and-age-assurance.md)

## In one minute

- **Layer your detection.** User reports, rules, hash matching, classifiers, language models and behavior signals each catch what the others miss. Know which layers cover each of your top harms.
- **Detect patterns, not messages.** Grooming, raids and scams build over days or weeks. Watch the account or the relationship over time, and let the response build as signals stack: log it, add friction, then restrict and send it to a trained reviewer.
- **Prevent before you remove.** Safer defaults, rate limits and limits on new accounts stop most harm before anything needs reviewing, and most users never feel them.
- **Set thresholds from data, then keep checking them.** Test against past confirmed cases and false alarms, and revisit every quarter, because offenders learn what triggers friction.
- **Watch rates, not volume.** When one category's rate climbs while volume is normal, something coordinated is usually happening.
- **The mistake to avoid:** waiting for users to report. Children rarely report, and much of the worst harm happens where nobody else is watching.

## Why it matters

A lot of harmful content is never reported. Children rarely report what happens to them. Victims of a pile-on are outnumbered. Offenders who groom or scam move their targets to another app as fast as they can, so by the time anyone reports, the harm has often moved somewhere you can't see. If user reports are your only detection, you'll find harm late, and you'll only find the kinds people choose to report.

Law sets a floor here, not a ceiling. In the US, providers that become aware of apparent child sexual abuse material must report it to NCMEC ([18 U.S.C. § 2258A](https://www.law.cornell.edu/uscode/text/18/2258A)), but the same section says it doesn't require you to monitor users or scan content (subsection (f)). Looking for harm is a choice you make, not one the law makes for you. In the UK, Ofcom's [illegal content codes of practice](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/statement-protecting-people-from-illegal-harms-online) recommend perceptual hash matching for known child sexual abuse material on large user-to-user services at medium or high risk of it, on services at high risk with more than 700,000 UK users, and on file-sharing and file-storage services at high risk, whatever their size.

Detection has a cost when it's wrong, too. A system that catches more by acting on more will push up your proactive detection rate while good users pay for it. Detection is only working if it's measured.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | Reporting on every place users meet or post, block lists for the words and links behind your top harms, hash matching of every image and video upload against known child sexual abuse material, rate limits and limits on new accounts, and one owner for detection. | Classifiers for your top harms with measured precision, signals tracked per account and per relationship, responses that build as signals stack, rate-based alerts that page whoever's on call, thresholds tested on past cases with an owner and a change log, and membership of signal-sharing programs you're eligible for. | Detection of networks, not just posts; red teams probing for gaps; thresholds reviewed every quarter; signals shared with and contributed to industry programs; a privacy review for each detection system; and settings tuned for each market's rules. |
| **What you can show** | The share of actioned violations you found before any user report, by policy area. Time from report to action. | Precision and recall per policy area and model version. The share of alerts that turned out to be real coordination. How long new kinds of abuse run before you notice. | Harmful reach before action, time from first signal to protective action, the share of cases caught before the move to another app, and a record of every threshold change with the numbers behind it. |

## How to do it

### 1. Map the detection stack against your harms

No single layer catches everything. Each one has a job and a blind spot:

| Layer | What it catches | Where it falls short |
|---|---|---|
| **User reports** | What users see and care about, with context only they have | Children rarely report. Report volume measures how easy reporting is as much as how much harm exists. Groups can mass-report a target. |
| **Rules** | Known patterns: keywords, bad links, posting velocity. Fast, cheap and easy to explain. | Easy to evade with misspellings, symbols and coded language. |
| **Hash matching** | Copies of known illegal images and video, matched by digital fingerprint | Only finds material that's already known. New material needs other layers. |
| **Classifiers** | New content that looks like what the model was trained on, at scale | Accuracy varies by language and context, and drifts as behavior changes. |
| **Language models** | Rules applied with context, and new policies without new training data | Slower and costlier per item. Need testing before they act ([chapter 18](18-ai-in-trust-and-safety.md)). |
| **Behavior signals** | Accounts, relationships and networks over time: account age, devices, who contacts whom, gifts and payments | Need data, engineering and a privacy review. |

If you host images or video, hash matching is usually the first proactive layer to add, because the lists already exist. A text-only product might start with rules and rate limits instead. Microsoft's [PhotoDNA](https://www.microsoft.com/en-us/photodna) is free to qualified organizations for known child sexual abuse material. Members of GIFCT, the Global Internet Forum to Counter Terrorism, share hashes of terrorist and violent extremist content through its [hash-sharing database](https://gifct.org/hsdb/). [Chapter 9](09-choosing-vendors-and-tools.md) covers choosing tools, including free and open-source ones.

Rate each of your top harms against these layers with the [coverage radar](https://stevenmacchia.com/ts-workbench/#coverage). Usually detection engineering owns the systems and policy owns what they're trying to find, though on a small team that may be one person. You're done when every high-risk harm has at least one layer that doesn't depend on a user report.

### 2. Detect the pattern, not the message

Many serious harms don't show up in a single message. They show up as a sequence:

- **Grooming:** an adult account friends many younger players it has no connection to, gifts currency early, asks about parents, moves to private voice, then pushes for another app ([chapter 6](06-child-safety-and-age-assurance.md)).
- **A raid:** dozens of new accounts post the same kind of abuse in one room within minutes.
- **A scam:** a new account sends first messages to many strangers, builds trust, then asks for money, gift cards or a move off the platform.

Each step can be innocent on its own. Together they're a pattern. Reviewing messages one at a time misses most of it.

So decide what you're watching for each harm. Sometimes it's a single item. Often it's an account, a relationship between two accounts, or a group of accounts acting together. Keep a short signal history for each one, within a retention window you've agreed with Legal, so the third signal can be read next to the first two.

### 3. Let the response build as signals stack

Because each signal is weak on its own, the response should get stronger as signals add up:

| Signals | Response | Who notices |
|---|---|---|
| One | Log it. Nothing visible happens. | Nobody |
| Two or more within a short window | Add friction: rate limits, a safety prompt, no new private channels, limits on gifts or payments | The user |
| The high-risk step after that: a request to move off-platform, for images or for money, or a threat | Restrict the account or the contact, and send the full history to a trained reviewer | A reviewer |

This is the graduated approach in [chapter 4](04-writing-policy.md) applied to detection. Act automatically where the evidence is clear and the action can be undone. Use friction and limits where it's less certain. Gather more signals where you can't support a decision yet. Send it to a person where an error would cost too much.

When flagged cases outnumber reviewers, protective actions stay automatic and the queue is worked by risk. A restricted account waiting a day for review is a cost worth paying ([chapter 7](07-review-operations.md)). [Chapter 6](06-child-safety-and-age-assurance.md) sets out this ladder in full for adult-to-minor contact.

### 4. Prevent before you remove

The protections most likely to work act before any harmful message is sent. They're often cheaper than detection, and most users never notice them:

- **Safer defaults.** Minors' accounts are private, and adults can't message minors they aren't connected to ([chapter 6](06-child-safety-and-age-assurance.md)).
- **Rate limits.** Cap posting, messaging, invites and friend requests, with stricter caps for new accounts.
- **Limits on new accounts.** No links, no messages to strangers and no payouts until an account has built some trust.
- **Friction at the risky moment.** A warning when someone asks for money, gift cards or a move to another app. A prompt before sending something your filters flag.
- **Proportionate responses to spikes.** When a raid hits, slow down the accounts causing it rather than shutting the space for everyone (step 6).

Put friction where the risk is, not everywhere. A limit that hits every user will be removed at the first growth review. A limit that hits new accounts messaging strangers will survive.

These protections are easiest to add before launch, when changing a default is a quick edit to the spec. After launch, it means taking something away from users. That's why the abuse review belongs at design review ([chapter 2](02-know-your-risks.md), [chapter 15](15-working-with-product-legal-and-leadership.md)). And measure what they prevent, such as contact that never happened, not just what you removed.

### 5. Set thresholds from data, and keep them current

Every rule, classifier and signal ladder has a threshold. Set it from evidence, not instinct:

1. **Gather past confirmed cases and past false alarms** for the harm.
2. **Replay the signals** and see where each candidate threshold would have fired.
3. **Pick the point where precision holds and reviewers can keep pace.** A threshold that sends ten times more cases than your team can review isn't protecting anyone.
4. **Write it down:** the threshold, the numbers behind it, the owner and who signed it off. A threshold is policy ([chapter 4](04-writing-policy.md)).
5. **Revisit it every quarter.** Offenders learn what triggers friction and route around it.

Treat every change like a release. Take a baseline before the change, check again a few weeks after, and roll it back if precision or overturns move past a limit you agreed in advance ([chapter 18](18-ai-in-trust-and-safety.md)).

Measure precision on a regular cadence, for example weekly, by having experts re-check a random sample of what each system acted on. Estimate recall by labeling a sample of content the system didn't flag. Report both per policy area and per model version. A blended number hides failures in small, high-severity areas, and a rising proactive detection rate means nothing if precision fell at the same time.

### 6. Use rates as baselines, and alert on the jumps

Volume swings with your audience. A big match, a launch or a holiday can multiply activity several times over in an evening. The rate of a category, such as abuse reports per 1,000 messages or one category's share of enforcement actions, usually holds steadier. So the rate makes a better baseline than the volume.

When volume goes up and the rate stays put, that's a busy night. When one category's rate climbs while volume is normal, something coordinated is usually happening: a raid, or a group targeting one person.

I'd set up an alert on that rate. Something simple works to start: if a category sits well above its usual level for that hour for 15 minutes or so, page whoever's on call.

When it fires, respond in proportion. Locking the room punishes thousands of people for what a few hundred accounts are doing. If most of the accounts involved are new, slowing down posting for accounts less than a week old targets them and leaves everyone else alone.

Judge the alert by two numbers: how fast the team acts once it fires, and how many alerts turn out to be real coordinated activity. If most turn out to be reactions to something that happened in the game or the news, the threshold is too low. For new kinds of abuse that no alert covers yet, track how long they run before you notice, and log it in every incident review ([chapter 13](13-crisis-response.md)).

### 7. Share signals across platforms

Harm that starts on one service often lands on another. Offenders make first contact in a game and move the child to a private messaging app. Nudify apps show the same shape: the image is made on one service, the tool is promoted on another and the harm lands on a third. No single platform sees the whole thing, so the response has to be coordinated across them.

Programs that exist for this:

- **[Lantern](https://technologycoalition.org/programs/lantern/)**, run by the Tech Coalition since 2023, lets qualifying tech companies share signals about online child sexual exploitation and abuse. That includes content signals such as hashes and URLs, and incident signals such as attempts to move conversations with minors off-platform. Financial institutions can join on a receive-only basis.
- **[GIFCT's hash-sharing database](https://gifct.org/hsdb/)** lets member companies match content against hashes of known terrorist and violent extremist material. Members share hashes, not the content.
- **[StopNCII.org](https://stopncii.org/how-it-works/)** lets adults create a hash of their intimate images on their own device, so participating platforms can find and remove matching copies. The image never leaves the device.
- **[Take It Down](https://takeitdown.ncmec.org/)**, from NCMEC, does the same for nude or sexually explicit images taken when the person was under 18.

By stage: an early team matches against the lists these programs provide. A growing team joins the ones it's eligible for. At scale, you contribute signals back. Even before you're eligible, design your case records so you could share well-structured signals later. If you'd rather not build detection infrastructure from scratch, ROOST, a nonprofit, publishes free, open-source tools, including the [Osprey rules engine and Coop review console](https://roost.tools/).

### 8. Set privacy limits before launch

Detection reads people's data, so decide its limits before it runs, not after a complaint:

- **Narrow scope.** Detect where the risk is. For grooming, that means adult-to-minor contact, not every conversation.
- **Metadata before content.** Who contacts whom, how often and from how new an account often tells you enough to add friction. Read message content only when the pattern justifies it.
- **Agreed retention.** Agree with Legal how long signals and evidence are kept, and delete on schedule.
- **Regional rules.** Rules on scanning private messages vary by market, especially in the EU. Check each one before launch.

In the EU, the GDPR's principles of data minimisation and storage limitation ([Article 5(1)(c) and (e)](https://eur-lex.europa.eu/eli/reg/2016/679/oj)) apply to detection data like any other personal data. Processing likely to result in a high risk to people's rights and freedoms needs a data protection impact assessment before it starts (Article 35). For each detection system, write down what it reads, why, who sees the results, how long anything is kept and which markets it runs in. That record is what Privacy and Legal will ask for, and what a regulator will ask for later.

## Mistakes to avoid

- **Relying on user reports.** Add at least one proactive layer for every high-risk harm, starting with hash matching if you host images or video.
- **Reviewing messages one at a time.** Track accounts and relationships over time, and let the response build as signals stack.
- **Treating removal as the only response.** Use friction, rate limits and feature limits where the evidence is weaker, and keep removal for when it's clear.
- **Setting thresholds by instinct.** Test them on past confirmed cases and false alarms, write them down, and revisit them every quarter.
- **Celebrating a rising proactive detection rate on its own.** Read it next to precision. More catches can mean more good users caught by mistake.
- **Alerting on volume.** Alert on the rate of each category for that hour, and judge the alert by how many fires were real.
- **Locking the room.** Slow down the accounts causing the problem instead of punishing everyone in the space.
- **Scanning everything because you can.** Narrow the scope, use metadata first, agree retention and check each market's rules.

## Start from this template

**Detection inventory.** One row per harm. Review it every quarter.

| Harm | Layers in place | What you watch (item, account, relationship, network) | Threshold and owner | Last tested on past cases | Precision | Privacy notes (what it reads, retention, markets) |
|---|---|---|---|---|---|---|
| | | | | | | |

**Signal ladder.** Fill in one for each pattern-based harm, and agree it with Legal and Privacy before launch.

| Signals | Window | Automatic response | Who reviews, and how fast |
|---|---|---|---|
| One | | Log only | No review |
| Two or more | | | |
| The high-risk step | | | |

**Rate alert.** One per category you alert on: the baseline rate for each hour of the week; what counts as "well above" it; how long it has to stay there; who gets paged; the first proportionate response; and, each month, the share of alerts that were real coordination.

## Do it with

- **[Classifier eval](https://stevenmacchia.com/ts-workbench/#eval)**: Build a labeled set of hard cases from a rule, run a classifier against it and see where it fails. [Open content](https://github.com/stevenmacchia/ts-workbench)
- **[Coverage radar](https://stevenmacchia.com/ts-workbench/#coverage)**: Rate five layers of defense for eight kinds of harm, against your products' risk. [Open content](https://github.com/stevenmacchia/harm-coverage-radar)
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Rehearse [The sock puppet surge](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/bots.md) (40,000 new accounts pushing the same line overnight) and [The breath-hold challenge](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/challenge.md) (a dangerous trend spreading on a Friday evening).
- **[Proactive detection rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/proactive-detection-rate.md)** (metric): the share of actioned violations your systems found before any user reported them. Always read it with precision.
- **[Precision and recall by policy area](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/precision-and-recall-by-policy-area.md)** (metric): when your systems act, how often they're right, and how much they miss.
- **[Time to detect emerging trends](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/time-to-detect-emerging-trends.md)** (metric): how long a new kind of abuse runs before you notice it, with the gap from first signal to triage shown on its own.
- **[Harmful reach before action](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/harmful-reach-before-action.md)** (metric): how many people see a violating item before you act on it, which links detection speed to harm.

## Further reading

From Steven's writing:

- **[Launch week is the hardest test a safety program gets](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-safetybydesign-productmanagement-share-7512980609300930560-Azbb/)** (Oct 5, 2026): Most of what goes wrong in launch week is decided before day one. Pre-approve friction for new and unverified accounts, triage by severity, watch the rate of abuse rather than raw counts, and agree with product how much friction you'll accept, then review it after week one.
- **[Watch the rate, not the volume](https://www.linkedin.com/posts/stevenmacchia_kenzie-wilson-at-stream-published-a-super-ugcPost-7511811574127312896-HAsd/)** (Oct 2, 2026): In live sports chat, volume swings hard while the rate of abusive content tends to hold steady. Alert on rate jumps to spot raids, and slow down new accounts instead of locking the room.
- **[Grooming is a pattern, not a message](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-childsafety-onlinesafety-share-7511067864448237568-k7h4/)** (Sep 30, 2026): Responses build as signals stack on adult-to-minor contact, with thresholds tested on past cases, a queue worked by risk, privacy limits agreed up front, and four numbers that show it works.
- **[Nudify apps: harm no single platform sees in full](https://www.linkedin.com/posts/stevenmacchia_nudify-apps-are-a-growing-problem-and-a-share-7510771967986155520-s7TP/)** (Sep 29, 2026): The image is made on one service, the tool promoted on another and the harm lands on a third. That's why cross-platform signal sharing through Lantern matters.
- **[Games are where kids socialize now, and regulators know it](https://www.linkedin.com/posts/stevenmacchia_games-have-become-one-of-the-main-places-share-7510446882154864641-n3PV/)** (Sep 28, 2026): Grooming builds over weeks and usually moves off-platform. Protections that work act earlier and limit who can reach a child. Measure prevented contact, not just removals.
- **[Automation rate isn't a measure of maturity](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-contentmoderation-responsibleai-share-7507791297672486913-jc9j/)** (Sep 21, 2026): Automate as much as the evidence supports. Where a wrong decision can't be reversed or someone's safety is at risk, automation prepares the case and a person closes it.
- **[You can't moderate your way out of a systems problem](https://www.linkedin.com/feed/update/urn:li:activity:7506790883938295809/)** (Sep 18, 2026): Treating Trust & Safety mainly as an operations function is a mistake. Reputation, history, age and behavior signals belong in one risk model, automation needs clear limits, and safety belongs in the product architecture from the start.

Outside sources:

- **[Tech Coalition: Lantern](https://technologycoalition.org/programs/lantern/)**: cross-platform signal sharing about online child sexual exploitation and abuse.
- **[GIFCT: Hash-sharing database](https://gifct.org/hsdb/)**: how member companies share hashes of terrorist and violent extremist content.
- **[StopNCII.org: How it works](https://stopncii.org/how-it-works/)**: on-device hashing so adults can stop intimate images being shared on participating platforms.
- **[NCMEC: Take It Down](https://takeitdown.ncmec.org/)**: the same approach for images taken when the person was under 18.
- **[ROOST](https://roost.tools/)**: free, open-source safety tools, including a rules engine and a review console.
- **[Microsoft PhotoDNA](https://www.microsoft.com/en-us/photodna)**: hash matching for known child sexual abuse imagery, free to qualified organizations.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
