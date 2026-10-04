# 4. Writing policy and an enforcement ladder

> **How do you write rules people can follow and reviewers can apply the same way?**

*Part 2: Build* · [Contents](../README.md) · [← 3. The first 90 days](03-the-first-90-days.md) · [5. Detection and prevention →](05-detection-and-prevention.md)

## In one minute

- **Write two documents for every rule.** A public rule tells users what isn't allowed and why. Internal guidelines tell reviewers exactly how to decide. You need both, and they must say the same thing.
- **Define the harm, then the exceptions.** A rule needs a definition, what's in and what's out, examples on both sides of the line, and explicit handling for news, satire, counter-speech and survivors telling their own story.
- **Give every rule a ladder, not just a delete button.** Friction, reduced distribution, feature limits, suspensions and bans, matched to severity and history. How long strikes count is a choice that depends on the platform you run. The worst harms skip the ladder.
- **Treat thresholds as policy.** Age lines, detection thresholds and strike counts are rules written as numbers. They get one owner, a change log and the same sign-off as a rule change.
- **Test the rule before it ships.** Run it against hard cases with two reviewers and a model. Where they disagree, fix the words before you train anyone.
- **The mistake to avoid:** writing a rule that only the person who wrote it can apply. If two reviewers, or a model, can't reach the same answer from the text alone, the rule isn't finished.

## Why it matters

Without written rules, the decision depends on who picks up the case. One reviewer removes a post, another leaves an identical one up, and the user who appeals gets a third answer. Inconsistency hurts twice: harmful content stays up in one queue, while good users are actioned by mistake in another. Most of those users never appeal. They just leave.

The law now expects rules you can point to. The EU's Digital Services Act ([Article 14](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)) requires every intermediary service to set out its content moderation policies, procedures and tools, including algorithmic decision-making and human review, in "clear, plain, intelligible, user-friendly and unambiguous language", and to apply them in a diligent, objective and proportionate way. Every statement of reasons you send under Article 17 has to name the rule relied on and explain why the content breaks it. In the UK, the Online Safety Act ([section 10](https://www.legislation.gov.uk/ukpga/2023/50/section/10)) requires user-to-user services to say in their terms how people are protected from illegal content, to make those terms clear and accessible, and to apply them consistently.

There's a newer reason too. More decisions are now made by models that read your policy directly. A model applies a rule exactly as well as the rule is written. And public rules are evidence: what your guidelines and your Comms team say has to match what enforcement actually does ([chapter 15](15-working-with-product-legal-and-leadership.md)).

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | Public guidelines that cover your most serious harms, a one-page internal guide with examples for each, a simple ladder (warn, suspend, ban) with a short list of harms that skip it, one owner for policy, and a dated change log, even if it's a shared document. | Internal guidelines with definitions, examples, edge cases and a decision order for every public policy. A ladder that includes friction, reduced distribution and feature limits, with strikes that expire. A hard-case test set per policy, and named owners for every threshold. | Policies written so people and models apply them the same way, hard-case sets run before every change, regional variants mapped to local law, a sign-off process for rules and thresholds, and published reasoning for major changes. |
| **What you can show** | Every enforcement action points to a named rule. Every rule change has a date, an owner and a reason. | Reviewer agreement and appeal overturn rate for each policy. How long a policy change takes to reach every reviewer. | Agreement and overturn rates by policy, language and enforcement source; repeat offending by rung of the ladder; and a record of every rule and threshold change with the numbers behind it and who signed it off. |

## How to do it

### 1. Write the public rule and the internal guideline

Every policy area needs two documents.

The **public rule** is for users. It says what isn't allowed, why, a few examples, what happens if you break it and how to appeal. Write it in plain language. If your service is aimed at minors or mostly used by them, the DSA ([Article 14(3)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)) expects you to explain the rules in a way minors can understand.

The **internal guideline** is for reviewers. It says how to decide: the definitions, the signals to check and in what order, examples on both sides of the line, the edge cases, and which response applies. It's longer and more specific than the public rule.

Why keep them separate? Detailed guidelines change often, and some details, such as the exact signals that trigger a review, would help bad actors stay just under the line. Platforms have historically kept enforcement guidelines internal for reasons like these ([Trust & Safety Professional Association, Policy development](https://www.tspa.org/curriculum/ts-fundamentals/policy/policy-development/)). But the two must never disagree. The public rule can be less detailed. It can't promise more than enforcement delivers.

Give each policy area one named owner. They write the rule, answer reviewers' questions about it, and sign off on changes.

**How you know it's done:** every enforcement action maps to a named rule, and every public rule has an internal guideline behind it.

By stage: an early team can keep both in one document per harm, with the internal section clearly marked. A growing team separates them. At scale, many teams keep guidelines in a versioned system that reviewers, notices and models all read from.

### 2. Write a rule that holds up

A rule that holds up has the same parts every time. Here they are for a harassment rule on a gaming platform:

| Part | What it says | Example |
|---|---|---|
| **Definition** | The harm, in terms a reviewer can check | Content that targets a specific, identifiable person with insults, threats or degradation |
| **What's in** | Concrete behaviors | Repeated insults at a player after they've asked you to stop; mocking someone's appearance to get others to join in |
| **What's out** | Nearby content that's allowed | Trash talk about gameplay between players in the same match; criticism of a public figure's actions |
| **Context exceptions** | When the same words mean something different | Quoting abuse you received in order to call it out; satire; news reporting |
| **Signals, in order** | What the reviewer checks first, second, third | Is the target identifiable? Is it repeated? Did they ask you to stop? Are others joining in? |
| **Examples** | Three to five on each side, close to the line | Paired cases that differ by one detail |
| **Escalate when** | What leaves the normal queue | Any threat that names a time, a place or a weapon goes to the severe harm path ([chapter 12](12-severe-harm-escalations.md)) |

Context is where most rules fail. One message, or one high classifier score, can describe a credible threat, hyperbole between friends or a survivor telling their own story. The words are the same. The right action is not. Write those exceptions into the rule. Don't leave them to each reviewer's judgment, because each reviewer will judge differently.

The [counter-speech takedowns](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/bias.md) tabletop scenario shows what happens when you don't. Reviewers had labeled any post quoting a slur as hate speech, whether it attacked someone or described an attack. A classifier trained on those labels learned the same mistake, and people recounting abuse they'd received lost posts far more often than anyone else.

Cut vague words. "Offensive", "inappropriate", "excessive", "generally" and "usually" mean different things to different reviewers. Replace each with something a reviewer can observe.

### 3. Build a ladder of responses

Removal is one response. It shouldn't be the only one. Match the response to how severe the harm is, how sure you are, and the account's history. Clear evidence gets enforcement. Less certain evidence gets friction, reduced distribution or limits. Where you can't support a decision yet, gather more signals. Where an error would cost too much, a person decides.

| Rung | What it does | Use it for |
|---|---|---|
| **Friction** | A warning before posting, a prompt to reconsider, a rate limit | A first, low-severity violation, or when you're unsure |
| **Reduced distribution** | Kept out of recommendations and search, but not removed | Borderline content that's allowed but shouldn't be amplified |
| **Feature limits** | No messages to strangers, no live streaming, no gifting or links for a set time | Misuse of one specific feature |
| **Temporary suspension** | The account is locked or read-only for a set time | Repeated violations after warnings |
| **Permanent ban** | The account is removed, with checks for ban evasion | Severe harm, or repeat violations after a suspension |

Feature limits are underused. If someone misuses gifting, take away gifting. The same logic works for groups. When a raid hits a busy chat, slowing posting for accounts less than a week old can catch most of the people causing it and leave everyone else alone. Locking the room punishes thousands of people for what a few hundred accounts are doing ([chapter 5](05-detection-and-prevention.md)).

**Some harms skip the ladder.** Child sexual abuse material, adults enticing children, credible threats, terrorist content and trafficking go straight to removal, preservation, reporting where the law requires it, and an account decision made by trained people ([chapter 6](06-child-safety-and-age-assurance.md), [chapter 12](12-severe-harm-escalations.md)). Name these harms in the policy so nobody applies a warning to them.

**Decide how long strikes count.** There's no single right answer. It depends on the platform you want to run. Three models work:

| Model | How it works | Where it tends to fit |
|---|---|---|
| Strikes expire by severity | Minor violations drop off after a set window, and the most severe never do | Large, open communities where most violations are one-off mistakes and you want people to learn and stay |
| A lifetime record | Every strike counts for good, and the ladder escalates on the whole history | Marketplaces, dating and other services where one bad actor can do serious harm to others and trust history matters |
| Expiry with a cap | Strikes expire, but repeated cycles (for example a third strike after two expired ones) go straight to suspension or a ban | A middle ground for services that want second chances without rewarding people who learn the timing |

YouTube's public system is one example of the first model: a strike expires after 90 days, three strikes within 90 days may end a channel, and a single case of severe abuse can end it without warning ([YouTube Help](https://support.google.com/youtube/answer/2802032)). Whichever you choose, write down why, and match your window to the one you use to measure repeat offending, so you can see which rungs actually change behavior.

The EU writes part of the ladder into law. Under the DSA ([Article 23](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)), online platforms must suspend users who frequently provide manifestly illegal content, for a reasonable period and after a prior warning. They must also set out that policy in their terms, clearly and in detail, with examples of what they take into account and how long suspensions last.

Remember that a ban is one move, not a closed case. People come back on new accounts ([chapter 6](06-child-safety-and-age-assurance.md)).

### 4. Treat thresholds as policy

Some of your most important rules are numbers. The age at which features unlock. The classifier score above which content is hidden. How many strikes end an account. How many signals on an adult-to-minor contact trigger friction. Change one of these and you've changed the policy, even if no sentence moved.

These lines touch product, safety, legal and privacy at once. If nobody owns them, each team nudges them toward its own goals and nobody notices the drift. So give each threshold one owner and the same sign-off as a rule change. Write every change down with the numbers behind it: what you tested, what precision and volume you expected, and who approved it.

This is what lets you answer the hard question later. A regulator, a parent or a court will ask why one account was or wasn't restricted. You can only answer if someone owned the threshold and every change was recorded ([chapter 6](06-child-safety-and-age-assurance.md), step 7). [Chapter 5](05-detection-and-prevention.md) covers setting thresholds from data, and [chapter 18](18-ai-in-trust-and-safety.md) covers the thresholds that decide what automation may do on its own.

### 5. Test the rule against hard cases before it ships

A rule that reads well can still split reviewers down the middle. Find out before launch, not from appeals.

1. **Build a hard-case set.** For example, 24 cases gives you a first read and 48 is often enough to trust results by category. How many you need depends on how many kinds of case and languages the rule covers. Cover each kind of case that rules and classifiers get wrong: clear violations, clearly allowed content on the same topic, borderline cases, counter-speech, context-dependent cases (banter, reclaimed language), adversarial cases (misspellings, symbols, coded language), news and education, hyperbole, off-topic content that a jumpy system might flag, and the same kinds of case in your other languages.
2. **Have two experienced reviewers label it blind**, separately, using only the written rule. Every disagreement points at a gap in the text.
3. **Stress-test the wording.** The [policy stress-tester](https://stevenmacchia.com/ts-workbench/#policy) finds vague terms, missing exceptions and edge cases, and suggests a clearer rewrite.
4. **Run the same set through a model** that sees only the rule. The [classifier eval](https://stevenmacchia.com/ts-workbench/#eval) can have Claude label your cases from the rule as written. If a model reading the rule can't reach the right answer, a new reviewer in another market probably won't either.
5. **Fix the words, then run it again.** Add an example, tighten a definition or state which exception wins.

Decide what "ready" means before you look at the results. For example: both reviewers agree on every clear case, and every borderline disagreement has been resolved by a change to the text. Then keep the set. It becomes the regression test you run every time the rule changes.

### 6. Write rules a model can apply

Language models can now apply a written policy directly. Policy-following models such as OpenAI's open-weight gpt-oss-safeguard read your policy at the moment they classify, so the policy text is effectively production code. The habits that make a rule clear for people matter even more for models:

- **Definitions first, then criteria a reader can check.** "Targets an identifiable person" can be checked. "Is hurtful" can't.
- **State precedence.** If two parts of a policy conflict, say which wins. Models don't resolve ambiguity the way an experienced reviewer would.
- **Give examples close to the line, on both sides.** Obvious examples teach nothing.
- **Give the model a way out.** An "escalate" label lets it say a case needs a person, instead of guessing.
- **Keep it short.** OpenAI's [guide to writing policies for gpt-oss-safeguard](https://developers.openai.com/cookbook/articles/gpt-oss-safeguard-guide) suggests about 400 to 600 tokens, a few hundred words, recommends avoiding words like "generally" and "usually", and recommends an escalation path for ambiguous cases.

Keep one source of truth. The policy the model reads and the guideline reviewers read should be the same text, or generated from the same source, so the two can't drift apart. When a model and a reviewer disagree, check the rule before you blame either of them. [Chapter 18](18-ai-in-trust-and-safety.md) covers when a model's decision can stand on its own and when a person has to close the case.

### 7. Version every change, and check that it landed

Every rule and threshold gets a version number. Every change gets a row in the change log: the date, what changed, why, the numbers behind it, the owner and who signed it off.

A change only counts once reviewers apply it. One routine that works for each change:

- **Send a short change note.** What changed, two or three before-and-after examples, and what to do with cases already in the queue.
- **Calibrate on it.** Give reviewers a handful of cases on the changed area and compare answers ([chapter 10](10-quality-calibration-and-appeals.md)).
- **Check agreement soon after, for example the following week.** If quality checks on the changed area drop, the note didn't land or the rule isn't clear. [Chapter 7](07-review-operations.md) covers getting a change to hundreds of reviewers within hours.
- **Tell users about significant changes.** The DSA ([Article 14(2)](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)) requires you to inform users of any significant change to your terms.

Then review each policy on a schedule, and sooner when the data says so. When one policy area keeps running a high appeal overturn rate, review the guidance itself first, before anyone looks at reviewer performance. A rule that many reviewers get "wrong" is usually a rule that's unclear.

## Mistakes to avoid

- **Publishing rules nobody can apply.** Replace words like "offensive" and "inappropriate" with criteria a reviewer can check, and add examples close to the line.
- **Leaving context to each reviewer.** Write the exceptions for news, satire, counter-speech and survivors into the rule itself.
- **Only having a delete button.** Build a ladder with friction, reduced distribution and feature limits, and keep removal and bans for when they're warranted.
- **Picking a strike model by default.** Choose how long strikes count on purpose, for the platform you run, write down why, and check which rungs actually reduce repeat offending.
- **Changing a threshold without sign-off.** A threshold is a rule written as a number. Give it an owner, a change log and the same approval as a rule change.
- **Training reviewers on a rule you haven't tested.** Run it against hard cases with two reviewers and a model first.
- **Blaming reviewers when a policy area runs high.** Review the guidance before reviewer performance.
- **Letting public rules and enforcement drift apart.** Public rules and safety claims are evidence. Check them against what enforcement actually does.

## Start from this template

**Rule template.** Fill in one for each policy area. The first two rows are public. The rest is the internal guideline.

| Field | What to write |
|---|---|
| Policy area, owner, version, effective date | |
| Public rule | What isn't allowed and why, in plain language, with two examples |
| Definition | The harm, in terms a reviewer can check |
| What's in | Concrete behaviors |
| What's out | Nearby content that's allowed |
| Context exceptions | News, satire, counter-speech, survivors, in-group or reclaimed use |
| Signals, in order | What the reviewer checks first, second and third |
| Examples | Three violating and three allowed, close to the line |
| Escalate when | What leaves the normal queue, and where it goes |
| Response | The rung of the ladder by severity and history |
| Test set | Link to the hard-case set, and the last agreement result |

**Enforcement ladder.** Agree it with Legal before launch, and publish the parts users need to know.

| Severity | First violation | Repeat within the window | Strike expires after | Skips the ladder? |
|---|---|---|---|---|
| Low | | | | No |
| Medium | | | | No |
| High | | | | |
| Severe (child sexual abuse material, enticement, credible threats, terrorist content) | Remove, preserve, report where required, trained person decides on the account | | Never | Yes |

**Policy change log.** One row per change: date; policy and new version; what changed; why, with the numbers behind it; owner; who signed it off; how reviewers were told; agreement on the changed area the following week.

## Do it with

- **[Policy stress-tester](https://stevenmacchia.com/ts-workbench/#policy)**: Find vague terms, gaps and hard edge cases in a rule, with a clearer rewrite. [Open content](https://github.com/stevenmacchia/ts-ai-assistants)
- **[Classifier eval](https://stevenmacchia.com/ts-workbench/#eval)**: Build a labeled set of hard cases from a rule, run a classifier against it and see where it fails. [Open content](https://github.com/stevenmacchia/ts-workbench)
- **[Enforcement notice writer](https://stevenmacchia.com/ts-workbench/#notice)**: Draft a notice that tells a user which rule they broke and how to appeal, checked against what an EU statement of reasons must include. [Open content](https://github.com/stevenmacchia/ts-ai-assistants)
- **[Incident tabletop](https://stevenmacchia.com/ts-workbench/#tabletop)**: Rehearse [The counter-speech takedowns](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/bias.md) (labels that treated quoting a slur as hate speech) and [The special-treatment leak](https://github.com/stevenmacchia/incident-tabletop/blob/main/scenarios/vip.md) (high-profile accounts getting softer enforcement).
- **[QA agreement rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/qa-agreement-rate.md)** (metric): how often front-line decisions match an expert's, by policy. A low rate usually means an unclear rule.
- **[Appeal overturn rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/appeal-overturn-rate.md)** (metric): how often appealed decisions are reversed, by policy area and enforcement source. When one area stays high, review the guidance first.
- **[Repeat-offender rate](https://github.com/stevenmacchia/ts-metrics-framework/blob/main/metrics/repeat-offender-rate.md)** (metric): whether people stop after enforcement, split by the earlier penalty, so you can see which rungs of the ladder deter.

## Further reading

From Steven's writing:

- **[Age assurance: what should each check unlock?](https://www.linkedin.com/posts/stevenmacchia_most-of-the-debate-about-age-assurance-in-share-7510763675658477568-IVax/)** (Sep 29, 2026): The method matters less than what each level of assurance lets a user do. Errors aren't equal, accounts change hands, and someone has to own the thresholds.

Outside sources:

- **[TSPA: Policy development](https://www.tspa.org/curriculum/ts-fundamentals/policy/policy-development/)**: the Trust & Safety Professional Association's introduction to public policies and internal enforcement guidelines.
- **[The Santa Clara Principles](https://santaclaraprinciples.org/)**: civil society's standards for understandable rules, notice and appeal in content moderation.
- **[EU Digital Services Act](https://eur-lex.europa.eu/eli/reg/2022/2065/oj)**: the official text. Article 14 covers terms and conditions, Article 17 statements of reasons and Article 23 suspensions for misuse.
- **[OpenAI: User guide for gpt-oss-safeguard](https://developers.openai.com/cookbook/articles/gpt-oss-safeguard-guide)**: how to structure a policy so a model can apply it.
- **[YouTube: Community Guidelines strike basics](https://support.google.com/youtube/answer/2802032)**: a public example of an enforcement ladder with warnings, strikes that expire and termination for severe abuse.

---

*Last updated: 2026-10-03.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE). Law notes are general information, not legal advice: check with your own legal team before acting on them.
