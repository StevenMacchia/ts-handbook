# 14. Moderator wellbeing

> **How do you protect the people who look at the worst content?**

*Part 3: Run* · [Contents](../README.md) · [← 13. Crisis response](13-crisis-response.md) · [15. Working with Product, Legal, Comms and leadership →](15-working-with-product-legal-and-leadership.md)

## In one minute

- **Decide how much harm people see when you decide what they review.** Where the line between automated and human decisions sits sets reviewers' exposure. Design it with that in mind, and measure exposure after every automation change.
- **Limit exposure per person, and measure it from your tools.** Log hours on high-exposure queues for each reviewer, set caps with a clinical partner, and report who is over them, never just the average.
- **Make the tools reduce exposure by default.** Grayscale, blur that lifts on hover, muted audio, previews instead of full video, and hash matching so known material doesn't need fresh eyes.
- **Give support people actually use.** Specialist counseling, not just a general helpline, plus consent before severe work, a confidential way to step away, debriefs after hard cases and support that continues after people leave.
- **Cover everyone who sees the material.** Data labelers, AI raters, red-teamers and vendor staff get the same limits, tools, support and escalation paths, written into contracts and checked.
- **The mistake to avoid:** reading low counseling use as good health. Watch attrition and support use by exposure level, and ask people anonymously.

## Why it matters

Reviewing harmful content is an occupational exposure, and psychiatry treats it as one. DSM-5's criteria for post-traumatic stress disorder count repeated or extreme exposure to aversive details of traumatic events, including through electronic media or pictures when that exposure is work related ([summarized in the BMJ](https://pmc.ncbi.nlm.nih.gov/articles/PMC4663500/)). Research on moderators points the same way. In a survey of content moderators, Spence and colleagues found a dose-response effect: the more often people were exposed to distressing content, the higher their psychological distress and secondary trauma. The results suggested that supportive colleagues and feedback about the importance of their role softened that link ([Cyberpsychology, Behavior, and Social Networking, 2024](https://pubmed.ncbi.nlm.nih.gov/38153846/)).

Both findings point at things you control: how often people are exposed, and what surrounds the work. It's also an operational risk. People who are struggling make more mistakes and leave, and every leaver takes their training and judgment with them. And the people exposed now include more than your reviewers: the contractors labeling data and rating AI output can see the same material, without the same protections.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | Before anyone reviews harmful content: confidential counseling with a clinician who understands the work, a plain description of what the job involves, grayscale, blur and muted audio on by default, hash matching for known child sexual abuse material, and a limit on time in the worst queues. | Exposure hours logged per person from the case tool, caps with alerts, cross-training and rotation so caps hold, debriefs after severe cases, labelers and raters inside the program, wellbeing standards in every vendor contract, and a regular anonymous survey. | Wellbeing designed into tools and workflows, vendor audits against contract standards, support that continues after people leave, and a senior leader accountable for reviewer wellbeing. |
| **What you can show** | A list of everyone who sees severe content, with their weekly hours. Support offered to vendor staff and contractors, not just employees. | The spread of exposure hours and how many people went over the cap. Attrition and support use by exposure level, in-house and at vendors. | Exposure hours before and after each automation change. Vendor audit results. Whether the attrition gap between high-exposure queues and the rest is closing. |

## How to do it

I wouldn't run a team without all four of the core protections: limits on exposure with rotation out of the worst queues, tools that reduce what people see, real clinical support in place before anyone reviews harmful content, and leads who model taking breaks and protect their people's time. The steps below cover each, and what holds them up.

### 1. Treat the automation line as a wellbeing decision

Where the line between automated and human decisions sits also sets how much harmful material your reviewers see. Designing it well includes limiting that exposure through rotation and support. Two effects pull in opposite directions.

**Automation can take people away from the material.** Hash matching finds copies of known images without anyone having to study them fresh. Classifiers clear the obvious cases. Summaries, metadata and transcripts let a reviewer understand a case before opening the worst of it, or decide it without opening it at all.

**Automation also concentrates what's left.** Where a wrong decision can't be reversed or someone's safety is at risk, a person owns the call. That means child safety, credible threats, exploitation and self-harm stay with people, and those are the most disturbing queues. As automation takes the clear-cut cases, each hour of human review can carry more severe content, not less.

So measure exposure hours before and after every automation change, next to accuracy and cost. And design the case view so automation prepares the case: context first, the content itself last, and only as much of it as the decision needs. [Chapter 7](07-review-operations.md) covers where the line sits, and [chapter 18](18-ai-in-trust-and-safety.md) covers automation in depth.

### 2. Map everyone who's exposed

It's easy to protect the front-line review team and forget everyone else. List every role that sees harmful material, in-house and at vendors:

- Front-line reviewers, and the specialists and investigators who take their escalations
- Quality reviewers, calibrators and appeals reviewers, who see the same cases twice
- The on-call team and anyone who handles law enforcement requests
- Policy writers who build example sets, and trainers who show them
- Engineers and data scientists who inspect training data or classifier errors
- Data labelers, AI output raters, red-teamers and evaluation graders
- Support agents who read user reports before they're routed

Then tag each queue with an exposure level, for example high, medium or low. Graphic violence, child sexual exploitation and self-harm are high. Voice review can be as hard as graphic video, so count it. The tag decides which limits, tools and support apply.

### 3. Limit exposure, and measure it per person

You can't manage exposure you don't measure. Track [graphic-exposure hours per reviewer](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/graphic-exposure-hours-per-reviewer.md): hours each person spends on high-exposure queues each week.

- **Log it from the case tool, not from self-reporting**, so the number doesn't depend on anyone remembering, or wanting to admit, how long they spent.
- **Set daily and weekly caps with a clinical partner.** There's no agreed, evidence-based number for how much is too much. The Technology Coalition's guidebook says limiting time exposed to child sexual abuse material is key, without naming a figure ([Employee Resilience Guidebook](https://cdn.icmec.org/wp-content/uploads/2023/04/TechnologyCoalitionEmployeeResilienceGuidebookV2January2015.pdf)). Start with your clinician's advice, then adjust on what you see in attrition, survey results and support use.
- **Decide what happens at the cap.** The person moves to lower-exposure work, with no loss of pay or standing. If hitting the cap costs people anything, they'll hide their hours.
- **Alert leads before someone reaches the cap**, not after.
- **Report the spread and the number of people over the cap.** Averages hide individuals. A team can average well under the cap while the few people trained for the child-safety queue sit far above it.
- **Cross-train so the caps can hold.** A cap nobody can cover for is a cap that gets broken in the first busy week.

Look at productivity targets too. Don't run high-exposure queues on the same throughput targets as spam: a target built for volume pushes people through the worst material faster. Moderators' unions go further. The Global Trade Union Alliance of Content Moderators, formed in 2025, calls for eliminating all quotas for egregious content ([UNI Global Union](https://uniglobalunion.org/news/tech-protocols/)).

### 4. Make the tools reduce exposure by default

Small interface choices change how much of each item a reviewer has to take in. Turn them on by default, and let reviewers turn detail up when a case needs it, rather than down after they've seen too much.

| Default | What it does |
|---|---|
| **Grayscale** | Shows images and video without color |
| **Blur that lifts on hover** | The reviewer reveals only the part they need, only for as long as they need it |
| **Muted audio** | Sound plays only when the reviewer chooses, with a transcript where you have one |
| **Previews** | Thumbnails or keyframes before the full video, and no autoplay |
| **A warning before opening** | The suspected category is shown first, so nothing arrives as a surprise |
| **Hash matching** | Known material is matched by its digital fingerprint, so it doesn't need fresh eyes to be identified |
| **Context first** | Account history, reports and metadata appear before the content itself |

The research supports the first two, with a caveat. In a live review setting, simple grayscale transformations significantly changed the emotional impact of reviews without a significant drop in accuracy, while a full blur was challenging for reviewers ([Karunakaran and Ramakrishan, 2019](https://doi.org/10.1609/hcomp.v7i1.5270)). In experiments with crowd workers, interactive blurring reduced emotional impact without sacrificing accuracy or speed ([Das, Dang and Lease, 2020](https://doi.org/10.1609/hcomp.v8i1.7461)). So blur that reviewers control, not blur that gets in their way.

You don't have to build these from scratch. ROOST's open-source review console, [Coop](https://github.com/roostorg/coop), blurs images and video by default with hover to reveal, offers grayscale and muted video, lets admins set organization-wide wellness defaults, and can match uploads against NCMEC's hash list of known child sexual abuse material once it's connected to Meta's Hasher-Matcher-Actioner with NCMEC credentials. For hash matching, Microsoft's [PhotoDNA](https://www.microsoft.com/en-us/photodna) and Thorn's [Safer](https://safer.io/solutions/) are established options.

### 5. Give support people actually use

A general employee assistance program, the counseling benefit offered to all staff, is built for everyday problems, not the specific effects of reviewing harmful content. People in these roles need more.

- **Before the work.** Tell every candidate and new reviewer what they'll see and what support exists. Get informed consent before assigning anyone to child sexual abuse material, as the Technology Coalition's guidebook recommends, and do the same for other high-exposure queues.
- **Specialist counseling.** A licensed clinician who understands this work, available during working hours. The guidebook advises that the care provider be outside the company, which helps with confidentiality.
- **A confidential way to step away.** Clear opt-out rules, so someone can leave a queue for a while without explaining why to the whole team.
- **Rotation and real breaks.** Rotation off high-exposure queues, either on a fixed schedule or triggered by the cap, whichever your staffing can hold, and wellbeing time counted as planned time away from the queue, so it isn't taken out of anyone's targets ([chapter 7](07-review-operations.md)).
- **Debriefs after severe cases.** After a self-harm emergency or a child safety case, offer a debrief and counseling, give time away from high-severity queues, and check exposure across the team. The tabletop scenario [The post six friends saw](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/emergency.md) rehearses that call.
- **Colleagues and meaning.** In Spence's survey, the results suggested that supportive colleagues and feedback about the importance of the role softened the link between exposure and distress. Build time for peers to talk, and tell reviewers what their decisions led to: a child safeguarded, a network removed, a report that reached the right people.
- **Trained managers who model it.** Leads should know the signs of secondary trauma and what to do next, and should take their own breaks and talk about it. When leads do, everyone else feels able to. UNI's protocols ask for trauma-informed training for supervisors as well as moderators.
- **After they leave.** Support shouldn't end on someone's last day. The [maturity model](https://github.com/stevenmacchia/ts-maturity-model) treats support after people leave review roles as the mark of a leading program.

### 6. Treat data labeling and AI training review as moderation work

Data labeling is moderation work. It needs the same wellbeing support and escalation paths.

The people who label training data for safety classifiers, rate model outputs, red-team AI products and grade evaluations see the same material your reviewers do. Many are contractors working through a platform, outside the Trust & Safety team, and may have no exposure limits, no blurring in the labeling tool and nobody to call.

- **Bring them into the program.** Same exposure levels, caps, tools and counseling as your reviewers.
- **Give them an escalation path.** A labeler who finds what looks like child sexual abuse material, or a real person at risk, needs a route to your restricted escalation path, not just a "skip" button. [Chapter 12](12-severe-harm-escalations.md) covers what happens next.
- **Design datasets to need less exposure.** Filter known material out by hash before anyone labels it, and label from text or metadata where that's enough.
- **Put it in the contract.** Labeling vendors get the same wellbeing clauses as review vendors. Partnership on AI's [Responsible Sourcing of Data Enrichment Services](https://partnershiponai.org/responsible-sourcing-considerations/) sets out what AI developers should consider when buying this work.

### 7. Write wellbeing standards into vendor contracts, and check them

If you use a vendor, its staff may make most of your review decisions and see much of the worst content ([chapter 7](07-review-operations.md) covers which work to send them). A contract that says "wellness program" without numbers or a way to check is a promise, not a standard. Write in:

- A maximum daily exposure to graphic content for each person, with logs you can see
- Licensed counseling during employment and after someone leaves
- Blurring and grayscale on by default in every review tool
- Annual attrition for your account, split by queue
- Support use and survey results, aggregated and anonymous
- Your right to audit and visit
- A price that pays for wellbeing time, not just decisions

Choose vendors with this as a floor: reviewer wellness is a minimum in the [vendor scorecard](https://stevenmacchia.com/ts-workbench/#vendors), and a vendor that falls below it is out whatever its total. Hard daily exposure caps per person, counseling during and after employment and blurring by default earn a 5.

Then check it. Ask for exposure data by person, pseudonymized, not a summary slide. Compare attrition by queue against your own teams. Visit, and talk to reviewers without their managers in the room. When something goes wrong at the vendor, how you treat their people shapes the quality you get afterwards: if a site goes dark, keep paying and ask how you can help. [Chapter 9](09-choosing-vendors-and-tools.md) covers choosing the vendor and the rest of the contract.

### 8. Watch attrition and support use as early warnings

Watch the people, not just the quality scores. Track [attrition and wellness-support usage](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/attrition-and-wellness-support-usage.md) on a regular cadence, monthly for example, for in-house and vendor teams:

- **Attrition by exposure level.** Monthly leavers divided by average headcount, times 12. If high-exposure queues lose people much faster than the rest, fix the work design, not the hiring.
- **Support sessions per person.** From your provider, aggregated and anonymous only. Never individual records.
- **A regular anonymous pulse survey.** Quarterly, for example. It explains what the numbers can't.
- **Other signals.** Rising sick leave, quality dropping on one team, handle time climbing on severe queues, and people asking to move.

Read low support use carefully. It can mean people are fine. It can also mean they doubt it's confidential, don't want to be seen using it, or can't fit it into a shift. Ask anonymously which.

Make one senior leader accountable for reviewer wellbeing, and put these numbers in your regular executive review next to the operational ones. If nobody senior owns it, it's easy to cut in a tight quarter.

## Mistakes to avoid

- **Relying on a general employee assistance program.** Provide specialist counseling from clinicians who understand this work.
- **Automating the easy cases and forgetting what's left.** Measure exposure after every automation change, because the human queue gets harder.
- **Reporting average exposure.** Report the spread and the number of people over the cap.
- **Caps that cost people pay or standing.** Move people to lower-exposure work at the cap, with nothing lost.
- **Training only one or two people on the worst queue.** Cross-train so caps can hold.
- **Forgetting the people outside review.** Labelers, raters, red-teamers, policy writers and engineers are exposed too.
- **Contracts that say "wellness" with no numbers.** Write in caps, counseling, tooling and audit rights, then check them.
- **Reading low counseling use as good health.** Ask anonymously why people do or don't use it.
- **Support that ends on someone's last day.** Continue it after people leave review roles.

## Start from this template

**Exposure plan.** One row per queue. Agree it with your clinical partner.

| Queue | Exposure level | Who works it | Daily cap | Weekly cap | Tool defaults | Rotation | Support after a hard case |
|---|---|---|---|---|---|---|---|
| | High | | | | Grayscale, blur, muted | | |
| | Medium | | | | | | |
| | Low | | | | | | |

**Vendor wellbeing clauses.** Paste into every review and labeling contract, with your numbers: maximum daily exposure to graphic content per person, with logs available to us; licensed counseling during employment and for a set period after; blurring, grayscale and muted audio on by default; annual attrition for our account by queue; aggregated, anonymous support use and survey results every quarter; our right to audit and visit; and pricing that includes wellbeing time.

**Quarterly wellbeing review.** One page for leadership: exposure hours by queue (spread, and people over the cap); attrition by exposure level, in-house and vendor; support sessions per person; survey results and what changed because of them; exposure before and after any automation change; vendor audit findings; and the senior leader who owns the actions.

## Do it with

- **[Graphic-exposure hours per reviewer](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/graphic-exposure-hours-per-reviewer.md)** (metric): how many hours each person spends on graphic or egregious queues each week, and who is over the cap.
- **[Attrition and wellness-support usage](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/attrition-and-wellness-support-usage.md)** (metric): whether you're burning out the people who keep users safe, by exposure level.
- **[Program maturity](https://stevenmacchia.com/ts-workbench/#maturity)**: Rate the program in eight areas against the targets for your stage, and get a phased roadmap. [Open content](https://github.com/stevenmacchia/ts-maturity-model)
- **[Vendor scorecard](https://stevenmacchia.com/ts-workbench/#vendors)**: Score moderation vendors with reviewer wellness as a minimum, and copy its RFP questions on exposure, counseling and attrition. [Open content](https://github.com/stevenmacchia/moderation-vendor-scorecard)
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Rehearse [The post six friends saw](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/emergency.md) (looking after the reviewer who handled a self-harm emergency) and [The empty review floor](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vendor.md) (a vendor's staff hit by a disaster).

## Further reading

From Steven's writing:

- **[The era of voluntary child safety is ending](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-contentmoderation-onlinesafety-share-7510666169993805824-VI4v/)** (Sep 29, 2026): India's push for age checks, Florida's case against OpenAI, Copilot data labeling, TikTok's Alabama settlement and Meta's New Mexico verdict. The question has moved from "do you have a policy?" to "can you prove it works?"
- **[Automation rate isn't a measure of maturity](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-contentmoderation-responsibleai-share-7507791297672486913-jc9j/)** (Sep 21, 2026): Automate as much as the evidence supports. Where a wrong decision can't be reversed or someone's safety is at risk, automation prepares the case and a person closes it.

Outside sources:

- **[Technology Coalition: Employee Resilience Guidebook](https://cdn.icmec.org/wp-content/uploads/2023/04/TechnologyCoalitionEmployeeResilienceGuidebookV2January2015.pdf)**: industry guidance on protecting staff who handle child sexual abuse images, from hiring and consent to counseling and opting out.
- **[Steiger et al., The Psychological Well-Being of Content Moderators](https://doi.org/10.1145/3411764.3445092)**: a CHI 2021 review of the research on moderators' mental health and the ways to support them.
- **[Spence et al., Content Moderator Mental Health, Secondary Trauma, and Well-being](https://pubmed.ncbi.nlm.nih.gov/38153846/)**: a 2024 survey linking how often moderators see distressing content to psychological distress and secondary trauma.
- **[Das, Dang and Lease, Interactive Blurring Helps Moderators Reduce Exposure to Harmful Content](https://doi.org/10.1609/hcomp.v8i1.7461)**: experiments on blur designs that protect reviewers without slowing them down.
- **[UNI Global Union: Mental Health Protocols for content moderation](https://uniglobalunion.org/news/tech-protocols/)**: the eight protocols moderators' unions are asking the tech supply chain to adopt.
- **[Partnership on AI: Responsible Sourcing of Data Enrichment Services](https://partnershiponai.org/responsible-sourcing-considerations/)**: recommendations for AI developers on the working conditions of the people who label their data.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE).
