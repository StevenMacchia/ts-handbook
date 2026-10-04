# 2. Know your risks

> **How will people misuse this product, and which harms should you tackle first?**

*Part 1: Before the first hire* · [Contents](../README.md) · [← 1. What Trust & Safety is for](01-what-trust-and-safety-is-for.md) · [3. The first 90 days →](03-the-first-90-days.md)

## In one minute

- **Run an abuse pre-mortem at design review.** At that point, changing a default is a quick edit to the spec. After launch, the same change means taking something away from users.
- **Be selective, and answer in days.** Give a full review to launches that let strangers contact each other, move money or items between users, expose location or change what minors can do. Everything else gets a short checklist.
- **Rank harms by severity, likelihood and reach.** Give extra weight where children are involved, and treat "18+" as minors being present unless you check age.
- **Map your defenses in five layers.** Rate policy, detection, enforcement, appeals and measurement for each kind of harm, and fix the places where risk outruns them.
- **Give every accepted risk an owner and a date.** The person who owns the product outcome signs off, and the most serious risks go to the executive who owns safety risk.
- **The mistake to avoid:** reviewing every release the same way. A review that slows everything won't stay in the launch plan for long.

## Why it matters

Most product launches get a security review. Almost none get an abuse review: who will misuse this, how, and what ships on day one to stop it.

That's a missed chance, because the things that predict abuse are knowable before launch. Who can contact whom. Whether money moves. Whether children are present. What gets recommended. Which markets you're in. A team that asks these questions at design review can fix a risk with an edit to the spec. A team that waits finds out from a support queue, a parent or a journalist, and then has to take something away from users who already rely on it.

Regulators now expect the same habit. The UK's Online Safety Act requires user-to-user services to carry out a "suitable and sufficient" illegal content risk assessment, keep it up to date, and assess again before making a significant change to the service's design or operation ([section 9](https://www.legislation.gov.uk/ukpga/2023/50/section/9)). Services likely to be accessed by children must also carry out a children's risk assessment ([section 11](https://www.legislation.gov.uk/ukpga/2023/50/section/11)). Ofcom has said the illegal harms assessment applies to every service in scope, whatever its size ([Ofcom, scrutinising illegal harms risk assessments](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/enforcing-the-online-safety-act-scrutinising-illegal-harms-risk-assessments)). In the EU, platforms and search engines that the European Commission designates as very large (45 million or more average monthly active recipients in the EU, under Article 33) must assess systemic risks once designated, at least once a year, and before deploying features likely to have a critical impact on them (Digital Services Act, [Article 34](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)). A pre-mortem at design review is how you do that work while it's still cheap.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | A pre-mortem on the core product and on each launch that meets the full-review criteria, a ranked list of the top harms, a short checklist for every other launch, and an owner and a date on every accepted risk. | The pre-mortem as a standing step in design review with an answer in days, coverage rated for each kind of harm across five layers, and exit criteria agreed for safeguards that cost a feature its metric. | A risk register that feeds the risk assessments the law requires, updated before significant changes, coverage reviewed every quarter against risk, and serious accepted risks taken to the executive who owns safety risk. |
| **What you can show** | The top risks, the safeguard and owner for each, and who signed off each accepted risk. | The share of qualifying launches reviewed before design was final. How many incidents in a feature's first 90 days the review predicted. | Risk assessments that are current for every product and market, coverage against risk over time, and how many accepted risks turned into incidents. |

## How to do it

### 1. Decide which launches get a full review

If every product team pre-mortems only one kind of launch, make it anything that changes what children can do or who can reach them.

Being invited to design review is something T&S earns. You earn it by being selective and fast. A review that slows every release won't stay in the launch plan for long.

Give a full pre-mortem to any launch that does at least one of these:

- **Lets strangers contact each other.** Messages, friend requests, voice, live video, group invites.
- **Moves money or items between users.** Gifting, virtual currency, tips, trading, payouts, marketplace sales.
- **Exposes location.** Maps, nearby features, check-ins, in-person meetups, photos that carry location data.
- **Changes what minors can do.** New features open to under-18s, or any change to their defaults.

Everything else gets a short checklist the product team fills in themselves (there's one under the templates below). If any answer worries you, it becomes a full review.

Put the four questions into the launch template your product teams already use, so the trigger doesn't depend on someone remembering to invite you. The T&S lead owns the criteria. Product operations or whoever runs the launch process owns the template. It's working when qualifying launches reach you before the design is final, and your answers go back within days.

### 2. Run the pre-mortem at design review

A pre-mortem is a session where the team assumes the project has already failed and works out why ([Gary Klein, Harvard Business Review](https://hbr.org/2007/09/performing-a-project-premortem)). For abuse, the prompt is simple: it's three months after launch and this feature is in the news for the wrong reason. What happened?

A typical room: the product manager who owns the outcome, the engineering lead, the designer, and T&S, though on a small team one person may fill two of those seats. Add Legal and Privacy when minors, money or new markets are involved. Walk through the product the way an abuser would: who can I reach, what can I send, what can I take, and what happens if I'm banned?

The Workbench's [abuse pre-mortem](https://stevenmacchia.com/ts-workbench/#premortem) structures this as 12 plain questions: what you're building, what people can do in it, whether anyone under 18 could use it, whether strangers can make contact, what it takes to make an account, whether money changes hands, where it will be used, how many people use it, and who deals with safety problems today. It returns the risks that apply, rated, the safeguards to ship before launch with an owner for each in priority order, the laws that likely apply in your markets, and a launch plan you can send to Jira, Linear or GitHub.

The output of the session is a short record: the risks, the rating for each, the safeguards you'll ship, and any risk you're accepting. Changes made now are cheap. If new accounts shouldn't be able to message strangers, or should have a lower gifting cap in their first week, that's an edit to the spec today and a fight with users after launch.

### 3. Work out how each feature creates risk

Most abuse comes through a small number of features. Know how each one gets misused, and what a safer default looks like:

| Feature | How it gets misused | Safeguards to decide at design review |
|---|---|---|
| Messaging between strangers | Grooming, scams, harassment and unwanted sexual images, which often start with a message from someone the target doesn't know | No messages to strangers from new accounts, adults unable to message minors they aren't connected to, a block that stops all contact, warnings when someone asks for money or to move to another app |
| Gifting, currency and payouts | Gifts used as grooming lures, scam payments, laundering through items or stored value, accounts recruited as money mules | Lower gifting caps for new accounts, limits on gifts to minors, payout holds and velocity limits for new payees |
| Live voice and video | Harm happens in real time and is hard to review afterwards: grooming, sexual exploitation, harassment, self-harm on stream | Eligibility rules for going live, instant stream shutdown, round-the-clock on-call cover, no private voice between adults and minors they don't know |
| Location | Stalking, doxxing (publishing someone's address or other private details) and harm at in-person meetings | Approximate location by default, precise location opt-in and time-limited and never shown to strangers, location data stripped from photos |
| Anonymity and easy sign-up | Ban evasion, bots, fake accounts at scale, guests who can't be held to account | Limited abilities for new accounts, rate limits, device and network signals to link banned accounts, no private messages or uploads for guests |
| Generative AI | Sexual imagery of children, sexual deepfakes of real people, jailbreaks for dangerous information, harmful responses from AI companions | Input and output filters, a block on sexual images of real people, red-teaming before launch and after every model update, clear and repeated notice that users are talking to an AI |

Two things multiply every row: who's present and where. Children raise both the likelihood and the severity of the worst harms. New markets bring new laws and new languages your reviewers may not read. The [risk catalog](https://github.com/stevenmacchia/abuse-premortem/blob/main/risks.md) lists 58 risks in 14 areas, and the [safeguards library](https://github.com/stevenmacchia/abuse-premortem/blob/main/safeguards.md) lists 104 safeguards with an owner and effort for each.

### 4. Rank harms by severity, likelihood and reach

You can't fix everything before launch, so rank. One simple method, and the one the abuse pre-mortem uses, scores each risk on two scales:

| Score | Severity: how bad is it if it happens? | Likelihood: how likely is it on this product? |
|---|---|---|
| 1 | Limited | Rare |
| 2 | Serious | Possible |
| 3 | Severe | Likely |
| 4 | Critical | Expected |

Multiply them for a score out of 16. Twelve or more is critical, 8 to 11 is high, 4 to 7 is medium, and below 4 is low. Severity is the inherent harm and doesn't change. Likelihood is what your design moves: stranger contact raises the likelihood of grooming and scams, and verified identity lowers it. Three- or five-point scales work too, as long as everyone scores on the same one.

Then use reach to order risks with the same score. A harm that recommendations, live features or sheer scale can spread to thousands of people goes ahead of one that stays inside a single conversation. Scale also raises the likelihood of organized abuse.

Give extra weight where children are involved. One simple way: if a harm could reach a minor, rate its severity a level higher than you would for adults. Don't let "18+" in your terms lower the rating. A rule that says 18+ doesn't keep children out unless you check, so treat it as minors being present, just fewer of them ([chapter 6](06-child-safety-and-age-assurance.md) covers age assurance).

T&S does the rating with the product team, and writes down the evidence behind each score: past incidents, support tickets, what's happened on similar products. A score you can't explain will be argued down in the first meeting where it costs something.

### 5. Choose safeguards, and agree exit criteria for the ones that cost a metric

Work down the ranked list. Prefer safeguards that lower several critical risks at once, and prefer defaults over detection. Safer defaults and targeted limits stop most harm before anything needs removing, and most users never feel them. Detection and review come next ([chapter 5](05-detection-and-prevention.md)).

Give each safeguard an owner by function, because most of them aren't T&S work. A common split, though it shifts with how your company is organized:

- **Product:** defaults, limits for new accounts, reporting and blocking, warnings
- **Engineering:** rate limits, hash matching, account linking, logging every enforcement action
- **T&S operations:** a review queue with an owner, response times by severity, escalation paths
- **Policy:** written rules for the harms the feature creates ([chapter 4](04-writing-policy.md))
- **Legal and compliance:** reporting duties, notice channels, records

Some safeguards cost the feature its own metric. A gifting limit on new accounts will reduce gifting, and revenue usually wins that argument. Don't fight it twice. Agree the exit criteria up front: what the safeguard protects against, which number would show it's no longer needed, and when you'll look again. Then the follow-up is a check against an agreed bar, not a new negotiation.

### 6. Give every accepted risk an owner and a date

Some launches will go ahead with a known risk. That's a legitimate business decision, as long as the right person makes it.

The person who owns the product outcome signs off on the risk, with a date to revisit it. T&S's job is to make sure the risk is in front of them when they decide, in plain words: what could happen, to whom, how likely it is, and what's in place. When a risk is too serious to be one person's call, T&S takes it to the executive who owns safety risk.

Write it down every time. Accepted risks without an owner and a date don't get revisited. And on the day something goes wrong, the first question will be who knew, and what they decided ([chapter 15](15-working-with-product-legal-and-leadership.md) covers the conversation with Product and leadership).

### 7. Map your defenses in five layers, and find where risk outruns them

A pre-mortem tells you where the risk is. It doesn't tell you whether you're ready for it. For that, rate your defenses for each kind of harm in five layers:

| Layer | The question it answers |
|---|---|
| Policy | Is there a clear rule, with guidance reviewers can apply? |
| Detection | How do you find it, beyond waiting for user reports? |
| Enforcement | Can trained people act on it quickly and consistently? |
| Appeals | Can users contest decisions, and do mistakes get fixed? |
| Measurement | Do you know how much of it users see, and how well you respond? |

Rate each layer from 0 (none) to 3 (strong). Coverage is the share of the maximum across all five. Then put it next to the risk score as a share of the maximum (16 on the scale above). A critical risk (12 or more) with less than half the coverage is exposed. A high risk (8 or more) whose coverage is below its risk level is a gap: a risk of 12 out of 16 is 75%, so it needs coverage of at least 75%.

The [coverage radar](https://stevenmacchia.com/ts-workbench/#coverage) does this for eight kinds of harm and names the next step for each weak layer. Fix exposed areas first, starting with the weakest layer. When several layers are weak, the radar's order for serious harm is detection, enforcement, policy, measurement, appeals, and it gives every exposed area its first step before any area gets a second. That's a sound default, but it's a choice: a team whose reviewers keep disagreeing may need policy first, and one facing a regulator's questions may move measurement up.

The point is to see risk and readiness side by side. Most programs can list the harms they worry about, and separately the defenses they have. Without the two together, budget follows whoever argues loudest. A child safety policy with no proactive detection looks fine on paper until something goes wrong.

By stage: an early team rates coverage once, for its top few harm areas, for example three or four. A growing team rates every area and reruns it regularly, for example each quarter. At scale, the coverage map is part of the risk assessment you'd show a regulator.

### 8. Check the review against what actually happened

Measure the review itself. Two numbers:

- **How many incidents in a feature's first 90 days the review predicted.** If the review keeps missing the incidents that happen, the questions need to change.
- **How many accepted risks turned into incidents.** If that number keeps climbing, risks are being accepted at too low a level.

Ninety days after each reviewed launch, list the incidents, match them to the record, and add anything you missed to the checklist for next time. When the feature changes significantly, run the review again. Under the UK's Online Safety Act, a significant change to a service's design or operation needs a fresh look at the risk before it's made ([section 9](https://www.legislation.gov.uk/ukpga/2023/50/section/9)).

## Mistakes to avoid

- **Reviewing the week before launch.** By then every fix is a delay. Get the four trigger questions into the launch template so you're in at design review.
- **Reviewing every release the same way.** You'll slow everything and lose the invite. Full reviews for the four triggers, a checklist for the rest, and answers in days.
- **Treating "18+" as no children.** Without an age check, minors are present, just fewer of them. Rate child safety risks accordingly.
- **Scoring likelihood from silence.** No reports doesn't mean no harm. Much of it is never reported. Score from how the feature works, and from what's happened on similar products.
- **Accepting risk without an owner or a date.** Have the person who owns the product outcome sign off, with a date to revisit, and escalate the most serious risks.
- **Counting a policy as coverage.** A rule with no detection, no trained reviewers and no measurement is one layer out of five. Rate all five.
- **Never checking the review.** Track what it predicted and which accepted risks became incidents, and change the questions when it misses.

## Start from this template

**Full-review trigger.** Add these four questions to your launch template. A yes to any of them means a full pre-mortem.

| Does this launch... | Yes or no |
|---|---|
| Let strangers contact each other? | |
| Move money or items between users? | |
| Expose anyone's location? | |
| Change what minors can do? | |

**Short checklist for every other launch.** The product team fills it in. Any "no" goes to T&S.

| Question | Yes or no |
|---|---|
| Can users report anything new this launch creates, with reasons that match your policies? | |
| Does blocking still stop all contact? | |
| Is every enforcement action on the new surface logged (what, why, who, when)? | |
| Do new accounts get the same limits here as everywhere else? | |
| Does it leave minors' defaults unchanged? | |

**Pre-mortem record.** One row per risk. Keep it with the design document.

| Risk | Severity (1 to 4) | Likelihood (1 to 4) | Score | Reach | Could it reach a minor? | Safeguard | Owner | Before launch? |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

**Accepted-risk sign-off.** One per accepted risk.

| Field | Entry |
|---|---|
| The risk, in plain words | |
| Score and why | |
| What's in place today | |
| Why we're accepting it | |
| Signed off by (owner of the product outcome) | |
| Date to revisit | |
| Escalated to (if too serious for one person's call) | |

## Do it with

- **[Abuse pre-mortem](https://stevenmacchia.com/ts-workbench/#premortem)**: Profile a product and see how it will be misused before launch. [Open content](https://github.com/stevenmacchia/abuse-premortem)
- **[Coverage radar](https://stevenmacchia.com/ts-workbench/#coverage)**: Rate five layers of defense for eight kinds of harm, against your products' risk. [Open content](https://github.com/stevenmacchia/harm-coverage-radar)
- **[Risk catalog](https://github.com/stevenmacchia/abuse-premortem/blob/main/risks.md)**: 58 ways products get misused, in 14 areas, with the inherent severity of each.
- **[Gap playbook](https://github.com/stevenmacchia/harm-coverage-radar/blob/main/gap-playbook.md)**: The next step for each layer of defense when it's rated none or partial in a high-risk area.
- **[Legal obligations](https://github.com/stevenmacchia/abuse-premortem/blob/main/laws.md)**: 33 obligations across 7 jurisdictions that a product's features and markets can bring into scope, in plain language.
- **[Systemic-risk assessment currency](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/systemic-risk-assessment-currency.md)** (metric): whether the risk assessments the law requires are up to date.

## Further reading

From Steven's writing:

- **[Run the abuse pre-mortem at design review](https://www.linkedin.com/posts/stevenmacchia_trustandsafety-safetybydesign-productmanagement-share-7511792474445750272-3rLV/)** (Oct 2, 2026): At design review, changing a default is a quick edit. After launch it means taking something away. T&S earns the invite by being selective and fast, and accepted risks get an owner and a date.
- **[Launches get a security review. Almost none get an abuse review.](https://www.linkedin.com/posts/stevenmacchia_most-product-launches-get-a-security-review-share-7511154971653070848-PMG-/)** (Sep 30, 2026): Introducing the free abuse pre-mortem: 12 questions, rated risks, safeguards with owners in priority order, likely laws, and a launch plan for Jira, Linear or GitHub.

Outside sources:

- **[Gary Klein: Performing a Project Premortem](https://hbr.org/2007/09/performing-a-project-premortem)**: the Harvard Business Review article that introduced the premortem, imagining a project has failed in order to find out why.
- **[eSafety Commissioner: Safety by Design](https://www.esafety.gov.au/industry/safety-by-design)**: Australia's regulator on anticipating harm in design, built on three principles: service provider responsibility, user empowerment and autonomy, and transparency and accountability.
- **[Ofcom: Protecting people from illegal harms online](https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/statement-protecting-people-from-illegal-harms-online)**: the UK regulator's statement, including its risk assessment guidance and risk profiles for user-to-user services.
- **[TSPA: Safety by Design](https://www.tspa.org/curriculum/ts-fundamentals/safety-by-design/)**: the Trust & Safety Professional Association's chapter on finding and reducing harm during product development.
- **[Digital Trust & Safety Partnership: Best Practices Framework](https://dtspartnership.org/best-practices/)**: its first commitment is to identify, evaluate and adjust for content- and conduct-related risks in product development.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
