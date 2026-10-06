# 6. Child safety and age assurance

> **How do you keep children safe on a product adults use too?**

*Part 2: Build* · [Contents](../README.md) · [← 5. Detection and prevention](05-detection-and-prevention.md) · [7. Standing up review operations →](07-review-operations.md)

## In one minute

- **Decide what each level of age assurance unlocks before you pick a method.** A typed birthday gets safe defaults and not much else. An age estimate can open chat with people the same age. Anything that lets an adult reach a minor privately needs a verified account or a parent's sign-off.
- **Limit who can reach a child in the first place.** Minors' accounts are private by default, and adults can't find or message minors they aren't connected to. Most of the protection comes from these defaults, not from moderation.
- **Detect patterns, not messages.** Grooming builds over weeks. Let the response build as signals stack: log it, add friction, then restrict contact and send the case to a trained reviewer.
- **Handle the account as carefully as the content.** Content comes down, gets preserved and gets reported. Then decide whether to ban visibly or restrict quietly while you map the network. A banned account is not a closed case.
- **Measure prevention.** Count adults found in teen spaces, children found in adult spaces, and cases caught before the move to another app, not just removals.
- **The mistake to avoid:** treating age as a check you run once at sign-up. Accounts get shared, sold and handed down.

## Why it matters

Games and social apps are where children spend time with each other online, so they're also where offenders find them. Offenders often make first contact in a game or a public space and then move the child to a private messaging app where nobody is watching. Children also end up in spaces built for adults: in Thorn's late-2025 survey of US 9-to-17-year-olds, about one in six said they had used a dating app ([Thorn, Youth Perspectives on Online Safety](https://info.thorn.org/hubfs/Research/Thorn_2025YouthPerspectives_Report.pdf)).

Regulators have stopped treating this as voluntary. The UK's Online Safety Act requires services likely to be accessed by children to assess the risks to them. Since July 2025, services that allow the most harmful content, such as pornography or content promoting suicide, self-harm or eating disorders, must use highly effective age assurance to stop children encountering it ([section 12](https://www.legislation.gov.uk/ukpga/2023/50/section/12)). The EU's Digital Services Act ([Article 28](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)) requires online platforms accessible to minors to take appropriate and proportionate measures for a high level of privacy, safety and security, and the European Commission's [July 2025 guidelines](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-protection-minors) spell out what that means for age assurance and default settings. In April 2026, Australia's eSafety Commissioner [sent legally enforceable notices](https://www.esafety.gov.au/newsroom/media-releases/esafety-asks-gaming-giants-what-they-are-doing-to-prevent-grooming-and-radicalisation) to the companies behind Roblox, Minecraft, Fortnite and Steam, asking what they do about grooming, sexual extortion and radicalisation. In the US, the 2024 [REPORT Act](https://www.govinfo.gov/app/details/PLAW-118publ59) made online enticement and child sex trafficking things platforms must report to NCMEC, not just images. The question is no longer whether you have a child safety policy. It's whether you can show it works.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A minimum age, safe defaults for every under-18 account, adults unable to message minors they aren't connected to, a way to report an under-age account, and a restricted path for child-safety escalations, with CyberTipline reporting set up if US law applies to you. | Age estimation where features open up (chat, voice, gifting), grooming signals on adult-to-minor contact with responses that build, a small group of trained child-safety reviewers, and re-checks when an account seems to have changed hands. | Age assurance matched to each surface and each market's law, thresholds with one owner and a change log, investigators who map networks of accounts, cross-industry signal sharing, and children's risk assessments that are kept up to date. |
| **What you can show** | Every under-18 account is on safe defaults. Time from a child-safety report to action. | Age-check coverage for the people using chat and voice. Confirmed unsafe-contact cases per 10,000 young users, split by how the contact started. | Adults found in teen spaces, children found in adult spaces, time to catch an account that changed hands, the share of cases caught before the move to another app, and a record that answers "why this account?" |

## How to do it

### 1. Decide what each level of assurance unlocks

Most debate about age assurance is about the method: face scans, ID documents, parental consent. Start with a different question: what should each level of confidence let a user do?

| What you know | How you know it | What it unlocks |
|---|---|---|
| A typed date of birth | The user told you | Locked-down defaults: a private account, no discovery by strangers, no private messages from adults they don't know |
| An age estimate | Facial or behavioral age estimation | Text and voice chat with people of about the same age |
| A verified age, or a parent's sign-off | ID check, a trusted third party or verifiable parental consent | Anything that lets an adult reach a minor privately |

This puts friction where the risk is. Most users never feel it, because most features don't need more than the first row. Context and platform matter a great deal: a learning app for 8-year-olds and a game with an adult audience will draw these lines in different places.

The lines that matter most are usually 13, 16 and 18. They're where laws change (COPPA's under-13 consent rules, minimum ages for social media, adult content; see [chapter 16](16-regulation-and-compliance.md)) and where your product should change what's allowed. Optimize your checks for getting those boundaries right, not for precision across every age.

Errors aren't equal. Put an adult in a teen space and they get annoyed, and some borrow a younger relative's account. Put a 15-year-old in an adult space and every protection built for them is gone. When you tune a threshold, weigh those two mistakes differently.

### 2. Set defaults that limit who can reach a child

The protections most likely to work act before any harmful message is sent. For every account you believe belongs to a minor:

- The account is private, and it doesn't show up in search or recommendations to adults.
- Adults can't message, friend or voice-chat with minors they aren't already connected to.
- Precise location is off, and photos have location data removed.
- Gifts, currency transfers and spending are limited, especially from new accounts.
- No advertising based on profiling. The DSA bans it when a platform is reasonably certain the user is a minor.

The UK's [Children's Code](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/) expects high-privacy defaults like these for services likely to be used by under-18s. Your own data will usually point the same way. If you look at where confirmed cases began, many start with an open message from an adult the child didn't follow. That's a default setting to change, not a moderation problem to staff up for.

### 3. Treat age as something that can change

Most age checks happen once, at sign-up or when a feature unlocks. But accounts don't stay with one person. They get shared, sold and handed down to a younger sibling, and months later the person using the account no longer matches the age on file.

Decide what triggers a fresh look: a report that the user is under age, behavior that doesn't fit the age on file, a long-dormant account coming back, or signs that an account has been sold. When something looks off, you have three choices:

- **Ban it.** This hits many legitimate users and teaches people to hide their age better.
- **Do nothing.** This leaves the gap open.
- **Put the account back on safer defaults right away and ask for a stronger check.** The child stays protected while it gets sorted out, and an adult can clear it in minutes.

The third is almost always right.

### 4. Detect grooming as a pattern

Grooming rarely shows up in a single message. It builds over weeks. An adult account friends many younger players it has no connection to. It gifts currency early, asks about parents and whether the child is alone, moves the conversation to private voice, and eventually pushes for another app. Each step can be innocent on its own. Together they're a pattern.

So the response should build as signals stack:

| Signals on an adult-to-minor contact | Response |
|---|---|
| One signal | Log it. Nothing visible happens. |
| Two or more within a short window | Add friction: gifting limits, a safety prompt to the child, no new private channels between the two accounts. |
| A request to move to another app, or for images, after that | Restrict contact, and send the full history to a trained reviewer. |

Thresholds should come from data, not instinct. Test them against past confirmed cases and past false alarms. Set them where precision holds and the review team can keep pace. Revisit them every quarter, because offenders learn what triggers friction and route around it ([chapter 5](05-detection-and-prevention.md) covers setting thresholds from data). Detection tools now exist to help, such as Thorn's conversation classifiers, Roblox's open-sourced Sentinel and specialist vendors, and which fits depends on your volume and how much engineering you can put behind it ([chapter 9](09-choosing-vendors-and-tools.md)). A tool still needs your thresholds and your reviewers behind it.

Privacy sets the other boundary. Limit pattern detection to adult-to-minor pairs. Start with metadata (who contacts whom, how often, from how new an account) before reading message content. Agree retention limits with Legal before launch. Check each market: rules on scanning private messages vary, especially in the EU.

### 5. Work the queue by risk

There will be weeks when flagged relationships outnumber reviewers. When that happens, protective actions stay automatic, and the queue is worked by risk: requests to move off-platform first, then cases involving children under 13. A restricted account waiting a day for review is a cost worth paying.

The reviewers who handle these cases need specific training, a restricted escalation path, and limits on how much of this material they see in a day. See [chapter 14](14-moderator-wellbeing.md).

### 6. Handle the account, not just the content

When you find child sexual abuse material or an adult enticing a child, some steps aren't optional. The content comes down, gets preserved and gets reported. In the US that means the [NCMEC CyberTipline](https://www.missingkids.org/gethelpnow/cybertipline), under [18 U.S.C. § 2258A](https://www.law.cornell.edu/uscode/text/18/2258A). Since the REPORT Act, that includes enticement and child sex trafficking, and you must preserve what you reported for a year. A child in immediate danger comes before everything else: escalate to law enforcement straight away. [Chapter 12](12-severe-harm-escalations.md) covers the first hour.

The judgment call is the account. You can act immediately and visibly, or restrict the account quietly while investigators map linked accounts and law enforcement decides what it needs. Immature programs default to the ban because it's the only lever their tooling gives them, and it looks like success on a dashboard. In practice, the offender comes back on a fresh account with none of the history that flagged them. Their other accounts go unexamined. And the child is still reachable wherever the conversation already moved.

Offenders work across services, so one platform's ban is one move in a longer sequence. The Tech Coalition's [Lantern](https://technologycoalition.org/programs/lantern/) program lets participating companies share signals about online child sexual exploitation and abuse across platforms. If you're eligible, join. If you aren't yet, design your investigation records so you could share well-structured signals when you are.

The standard isn't speed. It's a safe child and a fully mapped network.

### 7. Give the thresholds one owner, and write every change down

Where the age lines and detection thresholds sit affects product, safety, legal and privacy at once. If nobody owns them, each team nudges them toward its own goals and nobody notices the drift. Give them one owner and the same sign-off as a policy change.

Write every change down, with the numbers behind it. Every threshold gets tested the day a regulator, a parent or a court asks why a specific account was or wasn't restricted. That question is only answerable if one person owned the thresholds, each change was recorded, and the decision to report to law enforcement was made by people trained for it. [Chapter 4](04-writing-policy.md) covers treating thresholds as policy, and [chapter 16](16-regulation-and-compliance.md) covers building a record that holds up.

### 8. Measure prevention, not just removal

Completion rate (how many users finished an age check) is a weak metric on its own. These tell you whether the system works:

- **Adults in teen spaces:** how many accounts in teen groups turn out to be adults.
- **Children in adult spaces:** how many children end up in adult groups or adult-only products.
- **Time to catch an account that changed hands.**
- **Time from first signal to protective action** on adult-to-minor contact.
- **Share of confirmed cases caught before the move to another app.**
- **Precision at each step** of the grooming response, and **how long high-risk cases wait** for review.
- **Confirmed unsafe-contact cases per 10,000 young users**, split by how the contact started, so you can close the path, not just ban the account.

## Mistakes to avoid

- **Checking age once, at sign-up.** Re-check when an account seems to have changed hands, and fall back to safer defaults while you do.
- **Choosing a method before deciding what it unlocks.** Decide what's at stake for each feature first, then pick the lightest check that's strong enough.
- **Banning every account that looks young.** You'll hit legitimate users and teach children to lie better. Move the account to safer defaults and ask for a stronger check.
- **Reviewing messages one at a time.** Grooming is spread across weeks of contact. Look at the relationship.
- **Treating the ban as the end of the case.** Preserve, report, and map linked accounts before you tip off the offender.
- **Reporting completion rates as success.** Report who ended up where, and how much contact you prevented.
- **Letting thresholds drift.** One owner, a written change log, and the same sign-off as policy.

## Start from this template

**Age assurance ladder.** Fill in one row per level for your product.

| Level | How it's established | What it unlocks | What it never unlocks | Re-check when |
|---|---|---|---|---|
| Self-declared | Typed date of birth | | | |
| Estimated | | | | |
| Verified or parent-approved | | | | |

**Grooming response ladder.** Agree it with Legal and Privacy before launch.

| Signals on an adult-to-minor contact | Window | Automatic response | Who reviews, and how fast |
|---|---|---|---|
| One signal | | Log only | No review |
| Two or more | | | |
| Off-platform or image request | | | |

**Child safety review.** One page for leadership, monthly or on the cadence your leadership reviews already run: age-check coverage for chat and voice users; adults found in teen spaces; children found in adult spaces; unsafe-contact cases per 10,000 young users by entry path; share of cases caught before the move off-platform; CyberTipline reports and time to report; threshold changes since the last review and who signed them off.

## Do it with

- **[COPPA readiness](https://stevenmacchia.com/ts-workbench/#coppa)**: Check a service against the US COPPA Rule's duties for children under 13.
- **[Abuse pre-mortem](https://stevenmacchia.com/ts-workbench/#premortem)**: Profile a product and see its child safety risks and safeguards before launch. [Open content](https://github.com/stevenmacchia/abuse-premortem)
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Rehearse [The gifts that weren't gifts](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/gifting.md) (a kids' multiplayer game), [The gift card ultimatum](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/sextortion.md) (sextortion on a teen social app) and [The 15-year-old on the app](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/minor.md) (a minor on an 18+ service).
- **[Age-assurance coverage](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/age-assurance-coverage.md)** (metric): how many active users have an age check stronger than a typed birthday.
- **[Unsafe-contact rate for minors](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/unsafe-contact-rate-for-minors.md)** (metric): confirmed cases per 10,000 young users, by entry path.
- **[Legal obligations](https://github.com/stevenmacchia/abuse-premortem/blob/main/laws.md)**: COPPA, the CSAM reporting duty, DSA Article 28, the UK children's safety duties and Australia's social media minimum age, in plain language.

## Further reading

From Steven's writing:

- **[Saturday reading: child safety gaps in games, Ofcom in court and California's new laws](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-onlinesafety-gamingsafety-share-7512121016282882048-B4fp/)** (Oct 3, 2026): Australia's eSafety found Fortnite and Minecraft still mostly rely on self-declared age. Age assurance is the foundation, because every other safeguard assumes you know who's a kid.
- **[Why early grooming detection matters](https://www.linkedin.com/posts/stevenmacchia_this-is-why-what-aiba-is-building-matters-share-7511198140469800960--XX4/)** (Sep 30, 2026): Tools that help platforms spot grooming early protect kids and the communities around them.
- **[Grooming is a pattern, not a message](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-childsafety-onlinesafety-share-7511067864448237568-k7h4/)** (Sep 30, 2026): Responses build as signals stack on adult-to-minor contact, with thresholds tested on past cases, a queue worked by risk, privacy limits agreed up front, and four numbers that show it works.
- **[Nudify apps: harm no single platform sees in full](https://www.linkedin.com/posts/stevenmacchia_nudify-apps-are-a-growing-problem-and-a-share-7510771967986155520-s7TP/)** (Sep 29, 2026): The image is made on one service, the tool promoted on another and the harm lands on a third. That's why cross-platform signal sharing through Lantern matters.
- **[Age assurance: what should each check unlock?](https://www.linkedin.com/posts/stevenmacchia_most-of-the-debate-about-age-assurance-in-share-7510763675658477568-IVax/)** (Sep 29, 2026): The method matters less than what each level of assurance lets a user do. Errors aren't equal, accounts change hands, and someone has to own the thresholds.
- **[Games are where kids socialize now, and regulators know it](https://www.linkedin.com/posts/stevenmacchia_games-have-become-one-of-the-main-places-share-7510446882154864641-n3PV/)** (Sep 28, 2026): Grooming builds over weeks and usually moves off-platform. Protections that work act earlier and limit who can reach a child. Measure prevented contact, not just removals.
- **[A banned account is not a closed case](https://www.linkedin.com/posts/stevenmacchia_childsafety-trustandsafety-responsibleai-share-7509260900831260674-gar3/)** (Sep 25, 2026): Online enticement is a pattern of contact, not a file, and is now mandatory to report. The hard call is the account: ban visibly, or restrict quietly while the network is mapped.

Outside sources:

- **[NCMEC CyberTipline](https://www.missingkids.org/gethelpnow/cybertipline)**: where US platforms report child sexual exploitation, including enticement. [Its annual data](https://www.missingkids.org/gethelpnow/cybertipline/cybertiplinedata) shows what gets reported.
- **[Tech Coalition: Lantern](https://technologycoalition.org/programs/lantern/)**: cross-platform signal sharing about online child sexual exploitation and abuse.
- **[European Commission: guidelines on the protection of minors](https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-protection-minors)**: what DSA Article 28 expects on age assurance and defaults.
- **[ICO: the Children's Code](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/)**: the UK's standards for services likely to be used by children.
- **[FTC: the COPPA Rule](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa)**: US duties for services that collect data from children under 13.
- **[Thorn: Youth Perspectives on Online Safety](https://info.thorn.org/hubfs/Research/Thorn_2025YouthPerspectives_Report.pdf)**: what 9-to-17-year-olds say about their lives online.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
