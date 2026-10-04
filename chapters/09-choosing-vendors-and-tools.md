# 9. Choosing vendors and tools

> **When should you buy, build or use open source, and how do you choose?**

*Part 2: Build* · [Contents](../README.md) · [← 8. Hiring and structuring the team](08-hiring-and-structuring-the-team.md) · [10. Quality, calibration and appeals →](10-quality-calibration-and-appeals.md)

## In one minute

- **Buy what's common, build what's specific to you, and run open source where you have engineers to keep it running.** Hash matching, transcription and extra review capacity are rarely worth building. Your policies, thresholds and the signals only your product has usually are.
- **Score vendors on evidence, not demos.** Weight eight criteria, treat reviewer wellness and security as minimums, and ask every bidder the same questions.
- **Pilot on your own past cases before you sign.** A paid pilot with blind quality checks on your data, hard cases included, tells you more than any sales deck.
- **Put quality, response times, wellbeing, data handling and exit into the contract.** Anything left out becomes a favor you have to ask for later.
- **Govern vendors with the same numbers you use in-house.** Quality agreement, overturn rates and cost per decision, side by side, in a meeting that happens on a schedule.
- **The mistake to avoid:** choosing on price and a polished demo, then finding out about wellness, language gaps and real quality once switching has become expensive.

## Why it matters

Few Trust & Safety teams build everything themselves. They bring in outside help: people to review content, models to score it, services to check ages or match known abuse images. That help shapes what your users experience and what your reviewers go through, and you stay accountable for it. Under the EU's Digital Services Act, a service's transparency report has to describe the training and assistance given to the people who moderate content, and give indicators of accuracy and possible error rates for the automated tools it uses ([Article 15(1)(c) and (e)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). If a vendor handles EU users' personal data on your behalf, the GDPR requires a contract that limits it to your documented instructions, allows audits, and returns or deletes the data when the work ends ([Article 28](https://eur-lex.europa.eu/eli/reg/2016/679/oj)). You can hand over the work. You can't hand over the responsibility.

The options have also changed. ROOST (Robust Open Online Safety Tools), a nonprofit [launched in February 2025](https://www.prnewswire.com/news-releases/leading-technology-companies-and-foundations-back-new-initiative-to-provide-free-open-source-tools-for-a-safer-internet-in-the-ai-era-302371239.html), now publishes free, open-source safety tools, including a review console and a rules engine. "Build or buy" has a third answer, and it needs the same scrutiny as the other two.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A few tools bought or adopted for clear needs (hash matching of known child sexual abuse material if you host images or video, a reporting flow, perhaps one classifier), a short list of decisions you'll never outsource, and a data agreement and exit clause in every contract. | A scored request for proposal for review staffing, a paid pilot on your own cases before any new vendor, contracts with quality floors, response times by severity and wellbeing standards, and a weekly vendor review. | Several vendors across languages and time zones calibrated to one answer key, at least two sites or vendors able to take each critical queue, open-source or in-house parts where they fit, quarterly reviews against the scorecard, audited wellbeing and data access, and an exit plan you've tested. |
| **What you can show** | Why each tool was chosen, what it costs each month, and who owns each vendor relationship. | Quality agreement and cost per decision for each vendor, measured by your own team, and overturn rates by vendor and policy area. | Vendor quality by language and market, how vendors performed in your last surge, wellbeing audit results, and the training, accuracy and error-rate evidence your transparency report needs. |

## How to do it

### 1. Decide what to build, buy or run from open source

Start with the problem, not the product. For each need, ask three questions. Is it specific to your platform, or does every platform have it? Do you have the data, scale or people to do it well? Who will keep it running in two years?

| | Build | Buy | Open source |
|---|---|---|---|
| **Fits when** | The problem is specific to your product: your policies, your behavior signals, your risk scores | The problem is common, and a vendor has data, scale or reach you don't | The problem is common, you want control of the code and data, and you have engineers to run it |
| **Examples** | Rules that use your account history, your enforcement ladder, thresholds for your harms | Review staffing, transcription and translation, age checks, threat intelligence | A review console, a rules engine, hash matching, open safety models |
| **You pay in** | Engineering time, for as long as it runs | Fees, lock-in and less control | Hosting, security reviews, upgrades and engineering time |
| **Watch for** | Rebuilding something you could have bought | A tool your team can't see inside or measure | Calling it free because there's no invoice |

Some things stay with your team whatever you buy. You own the policy, the thresholds, the final call on severe harm, the decision to report to law enforcement ([chapter 12](12-severe-harm-escalations.md)) and the record of what went wrong. A vendor can run a queue. It can't own your risk.

The same goes for AI tools. My default: where a wrong decision can't be reversed, or a user's safety is at risk, a human owns the call. A vendor's model can prepare the case. A person closes it.

An early team usually buys or adopts almost everything and builds almost nothing, because its scarce resource is attention. A growing team starts building the parts that are specific to its harms. At scale, the question becomes how many vendors you can afford to depend on, and what happens when one of them goes dark.

Where you draw the line depends on team size. Some ways it tends to fall:

- **One or two people:** run free and open-source tools where they fit, buy what you can't staff (review volume, languages, hash matching), and spend your own time on policy and the worst cases.
- **A growing team:** buy volume and keep judgment. Vendors handle scale and coverage, while policy, severe escalations and the hardest calls stay in-house.
- **At scale:** own the core, meaning your review tooling, your data and your risk signals, and buy the specialist pieces, such as age assurance or threat intelligence, where a vendor's reach beats yours.

These are starting points, not rules. Revisit the line every year as the team and the tools change.

### 2. Know the kinds of vendor

Each kind of vendor solves a different problem, and each needs a different test.

| Kind | What they do | What to test before you sign |
|---|---|---|
| **Review staffing** | People who review content at scale, from large outsourcing firms or specialist Trust & Safety providers | Agreement with your experts on your policies, wellness protections, native-language coverage, how fast they can add capacity |
| **AI moderation** | Classifiers and language-model tools that score text, images, audio or video, some against a policy you write | Precision and recall on your own hard cases, by policy area and language, and how they tell you about model changes |
| **Transcription and translation** | Turning voice and other languages into text that reviewers and classifiers can read | Accuracy on slang, dialect and your community's own terms, plus speed |
| **Age assurance** | Age estimation, ID checks and parental consent | Error rates around the ages that matter (13, 16 and 18), completion rates and how long data is kept. See [chapter 6](06-child-safety-and-age-assurance.md) |
| **Grooming and child safety detection** | Signals across conversations, and hash matching of known abuse images | Results on your past confirmed cases and false alarms, who sees the material, and how reporting works |
| **Threat intelligence** | Monitoring the spaces where raids, fraud and attacks are planned, and signals about known bad actors | Relevance to your platform, how much warning they give, and how they collect information lawfully |

Each often has a different owner, depending on your team: operations for review staffing, detection engineering for classifiers, and product, legal and privacy together for age assurance. Name the owner before the request for proposal goes out.

### 3. Run a request for proposal that asks for evidence

A request for proposal (RFP) is the document that asks vendors to bid and answer your questions. Write it around the outcomes you need, and ask for evidence rather than assurances.

The [vendor scorecard](https://stevenmacchia.com/ts-workbench/#vendors) scores each vendor from 1 to 5 on eight criteria. These are its default weights:

| Criterion | Weight | The question it answers | Minimum |
|---|---|---|---|
| Decision quality | 20 | Will their reviewers make the same calls your experts would? | |
| Reviewer wellness | 15 | Will they protect the people who look at the worst content? | 3 |
| Language and market coverage | 15 | Can they understand your users in every language and market? | |
| Security and privacy | 15 | Can you trust them with your users' data? | 3 |
| Surge capacity | 10 | Can they scale up fast when something goes wrong? | |
| Cost | 10 | What will it really cost once everything is included? | |
| Reporting transparency | 10 | Will you be able to see how they're really performing? | |
| Tooling and integration | 5 | Will they work inside your tools and share data back? | |

A score of 2 or lower on wellness or security rules a vendor out, whatever its total. Change the weights to fit your program. A regulated service might weight security higher. A service in many markets might weight language coverage higher. Agree the weights before you read any bids, so nobody tunes them toward a favorite.

Ask every bidder the same questions. A few that separate strong vendors from polished ones:

- Will you run a paid pilot on our data with blind quality checks?
- What is the maximum daily exposure to graphic content per moderator?
- Which of our languages do you cover with native speakers, not translation?
- How fast can you add 30% capacity, and what happened in your last surge?
- Can you share decision data back to us through an API?
- Will you share raw quality samples, not just summaries?

The full set is in the [RFP question bank](https://github.com/stevenmacchia/moderation-vendor-scorecard/blob/main/rfp-questions.md). For AI vendors, add questions about how you'll be told before a model or threshold changes, where your data is processed and kept, and whether it's used to train their models.

Have two or three people score each vendor on their own, then compare. Where scores differ by more than a point, talk it through. That's usually where a demo impressed one person and the evidence didn't support it.

### 4. Pilot on your own past cases

A vendor's numbers come from someone else's content and someone else's policies. Before you sign, test them on yours.

**Build the test set from your own decisions.** Include clear violations and clear non-violations, but weight it toward the cases that are hard for you. The Workbench's [classifier eval](https://stevenmacchia.com/ts-workbench/#eval) builds a set from a written rule across ten kinds of case: clear violation, clearly allowed, borderline, counter-speech, context-dependent, adversarial, news and education, hyperbole, off topic and other languages.

**Label it with your experts first.** Have them label the same cases and measure how often they agree with each other. That's the ceiling. No vendor will beat your experts' agreement with each other, so don't set a pass mark above it.

**Set pass marks before you see results.** Agreement or precision per policy area, handle time, and how the vendor escalates cases it isn't sure about.

**For review vendors,** run a paid pilot, give every bidder the same cases, and have your team score the results without knowing which vendor made which call.

**For AI vendors,** look at precision and recall by kind of case, not one blended figure. A blended number hides failures in low-volume, high-severity areas. A single high-confidence score can describe a credible threat, hyperbole between friends or a survivor telling their own story. Check which of those the tool can tell apart.

Sign a data agreement before the first case leaves your systems, and send only what the test needs. Keep child sexual abuse material out of every pilot set. Handling it is tightly regulated ([chapter 12](12-severe-harm-escalations.md)).

### 5. Write the terms that matter into the contract

The contract is where the scorecard becomes enforceable. Legal usually drafts it, but the T&S owner decides what goes in.

| Term | What to write in |
|---|---|
| **Quality** | An agreement floor per policy area, measured by your team on a blind random sample, and what happens when it's missed |
| **Response times** | Targets by severity that match your own, and when the clock starts: at the report or detection, not when a reviewer opens the case |
| **Wellbeing** | Hard daily exposure limits per person, licensed counseling during and after employment, blurring and grayscale by default, attrition reporting and your right to audit. Hold vendors to the same standard as your own team ([chapter 14](14-moderator-wellbeing.md)) |
| **Data handling** | Processor terms where the GDPR applies, managed devices or clean rooms (secured workspaces where data can't be copied or removed), logged access, retention limits, no training on your data without your agreement, and a written process for illegal content |
| **Surge** | How much extra capacity, how fast, and at what price |
| **Reporting** | Decision-level data back to you, raw quality samples, quality misses escalated within an agreed time, and the information your transparency report needs |
| **Change notice** | For AI tools, notice before any model or threshold change, and the version on every result, so you can compare before and after |
| **Exit** | Notice period, help with the handover, return or deletion of your data, and confirmation that your policies, training material and labeled data stay yours |

Two terms need special care. First, wellbeing. Data labeling and AI training review are moderation work too, so labeling vendors get the same standards and escalation paths. Second, illegal content. In the US, the duty to report child sexual exploitation to NCMEC falls on the provider under [18 U.S.C. § 2258A](https://www.law.cornell.edu/uscode/text/18/2258A), so write down exactly what the vendor does when a reviewer finds it, and how fast that reaches your team.

### 6. Manage the budget across several vendors

Price per decision is the number on the invoice, not what a decision costs. The real cost includes rework, appeals, your team's quality checks, vendor management time and tooling. A cheaper vendor whose decisions get overturned twice as often isn't cheaper.

Track [cost per decision](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/cost-per-decision.md) for each vendor and queue, and always show it next to [QA agreement](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/qa-agreement-rate.md). Cost on its own rewards rushing.

Plan for the day a vendor goes dark. The Workbench tabletop [The empty review floor](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vendor.md) starts with a storm closing the site that handles most of your review. Its lessons: agree your priority tiers before you need them, move your in-house team onto the most severe work, and remember that the vendor's reviewers are part of your safety system. How you treat them in a crisis shapes quality afterward.

By stage:

- **Early:** one vendor is fine. Avoid volume minimums you can't hit and paid ramp time you didn't plan for.
- **Growing:** forecast volume by queue, and keep the most severe work, such as child safety and credible threats, with your own team or your strongest vendor.
- **At scale:** make sure every critical queue can be handled by at least two sites or vendors, and that your answer key and training travel with the work.

[Chapter 19](19-budgets-roadmaps-and-making-the-case.md) covers making the case for the money.

### 7. Govern vendors after the contract is signed

Most vendor problems show up after signing, slowly. Catch them with the same numbers you use in-house, in meetings that already exist ([chapter 11](11-measuring-what-matters.md)). One rhythm that works:

- **Weekly:** quality agreement, response times, backlog and graphic exposure hours, per vendor and queue.
- **Monthly:** overturn rates by vendor and policy area, and precision for each AI tool.
- **Quarterly:** a business review that rescores the vendor against the same scorecard you used to choose it. If the scores have slipped, say which ones and what happens next.

Calibrate every team and vendor against one shared answer key ([chapter 10](10-quality-calibration-and-appeals.md)). Send policy changes to vendor reviewers the same day as your own, and give them the same escalation paths. Vendor staff who get guidance a week late will make last week's calls.

Hold AI tools to the same rules as your own automation. A tool doesn't take on a new policy area until its overturn rate is at or below human review. Every model or threshold change gets a baseline before launch and a check after, and rolls back if the rate moves past an agreed limit.

### 8. Use free and open-source tools where you can run them

Open-source tools can give a small team capabilities that used to need a large budget. They also move the work from a vendor's team to yours.

[ROOST](https://roost.tools) publishes free, open-source tools for safety teams:

- **[Coop](https://github.com/roostorg/coop)** is a review console you host yourself: queues, routing, automatic enforcement rules, and appeals that go to a review queue. It includes hash matching through Meta's open-source Hasher-Matcher-Actioner and NCMEC CyberTipline reporting, and it blurs images and video by default, with grayscale and muted video as settings.
- **[Osprey](https://github.com/roostorg/osprey)** is a rules engine and investigation console for real-time events, originally built at Discord to fight spam, abuse, botting and scripting. It's infrastructure you host and maintain, so it suits a team with engineers.
- **The [ROOST Model Community](https://github.com/roostorg/model-community)** works on open safety models with partners, including OpenAI's open-weight gpt-oss-safeguard, which classifies content against a policy you write, and Roblox's Sentinel.
- **[awesome-safety-tools](https://github.com/roostorg/awesome-safety-tools)** is a directory of open-source tools for online safety, maintained by ROOST.

Other free options exist. Microsoft offers [PhotoDNA](https://www.microsoft.com/en-us/photodna), for matching known child sexual abuse images, free to qualified organizations.

Judge open source the same way you judge a vendor. Pilot it on your own cases. Score its security, including who reviews your deployment. Name the engineer who owns upgrades and the person on call when it breaks. "Free" means no license fee, not no cost.

The Workbench connects to some of this. [Running on Coop](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/running-on-coop.md) maps each metric's data to where it lives in Coop, and the [Works with ROOST](https://stevenmacchia.com/ts-workbench/#roost) page turns a pre-mortem into starter Osprey rules and a Coop setup checklist. The Workbench is independent and not affiliated with ROOST.

## Mistakes to avoid

- **Choosing on price and a demo.** Weight the criteria first, set minimums for wellness and security, and score evidence from a pilot.
- **Letting the vendor measure its own quality.** Your team draws the sample and scores it blind.
- **Testing an AI tool on easy cases.** Build the test set from your hard cases, and read results by kind of case, policy area and language.
- **Treating reviewer wellness as the vendor's problem.** Write the same standards you hold your own team to into the contract, and audit them.
- **Signing without an exit.** Agree the notice period, the handover, and the return or deletion of your data before you need them.
- **Putting every critical queue with one vendor.** Keep the most severe work in-house or split across sites, and rehearse losing one.
- **Calling open source free.** Budget for hosting, security and the engineer who keeps it running.
- **Outsourcing the judgment.** Vendors can run queues and models. Your team owns the policy, the thresholds and the calls that can't be undone.

## Start from this template

**Vendor scorecard.** Agree weights before you read bids. Score 1 to 5, and note the evidence for each score.

| Criterion | Weight | Minimum | Vendor A | Vendor B | Evidence |
|---|---|---|---|---|---|
| Decision quality | 20 | | | | |
| Reviewer wellness | 15 | 3 | | | |
| Language and market coverage | 15 | | | | |
| Security and privacy | 15 | 3 | | | |
| Surge capacity | 10 | | | | |
| Cost | 10 | | | | |
| Reporting transparency | 10 | | | | |
| Tooling and integration | 5 | | | | |

**Pilot plan.** Fill it in and get it signed off before any vendor sees a case.

| Item | Your answer |
|---|---|
| Cases: how many, from which period, and how many of each kind | |
| Who labels them, and how often your experts agree with each other | |
| Pass marks per policy area, set in advance | |
| Data agreement signed, and what data leaves your systems | |
| Who scores the results, without knowing which vendor made each call | |
| Decision date, and who makes the call | |

**Contract checklist.** Before signing, confirm the contract covers: a quality floor measured by your team; response times by severity, with an agreed start for the clock; daily exposure limits, counseling during and after employment, and your right to audit; processor terms, access logging and retention limits; a written process for illegal content; surge capacity and price; decision data and raw quality samples back to you; notice before model or threshold changes; and an exit with handover help and return or deletion of your data.

## Do it with

- **[Vendor scorecard](https://stevenmacchia.com/ts-workbench/#vendors)**: Choose a moderation vendor on evidence: weighted criteria, rubrics, minimums and RFP questions. [Open content](https://github.com/stevenmacchia/moderation-vendor-scorecard)
- **[Classifier eval](https://stevenmacchia.com/ts-workbench/#eval)**: Build a labeled set of hard cases from a rule, run a classifier against it and see where it fails. [Open content](https://github.com/stevenmacchia/ts-workbench)
- **[Works with ROOST](https://stevenmacchia.com/ts-workbench/#roost)**: Free, open-source safety tools, and where the Workbench connects to them.
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Rehearse [The empty review floor](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vendor.md), where the site that handles most of your review goes dark for a week.
- **[Running on Coop](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/running-on-coop.md)**: Where each metric's data lives if your review console is ROOST's Coop, field by field, and the gaps you'll need to log yourself.
- **[QA agreement rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/qa-agreement-rate.md)** (metric): how often a vendor's decisions match your experts' on a blind random sample.
- **[Cost per decision](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/cost-per-decision.md)** (metric): the fully loaded cost of each decision, by queue and vendor, read next to quality.

## Further reading

Outside sources:

- **[ROOST](https://roost.tools)**: the nonprofit behind Coop, Osprey and the ROOST Model Community.
- **[Coop on GitHub](https://github.com/roostorg/coop)**: ROOST's open-source review console, with its documentation.
- **[Osprey on GitHub](https://github.com/roostorg/osprey)**: ROOST's open-source rules engine and investigation console.
- **[awesome-safety-tools](https://github.com/roostorg/awesome-safety-tools)**: a directory of open-source tools for online trust and safety.
- **[OpenAI: gpt-oss-safeguard user guide](https://developers.openai.com/cookbook/articles/gpt-oss-safeguard-guide)**: how to write a policy for an open-weight safety model, prepared with ROOST.
- **[TSPA: Setting up content moderation teams](https://www.tspa.org/curriculum/ts-fundamentals/content-moderation-and-operations/setting-up-content-moderation-teams/)**: the trade-offs between in-house and outsourced review.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
