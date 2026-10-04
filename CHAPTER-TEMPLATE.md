# Chapter template

Every chapter has the same shape, so readers always know where to look. To draft a chapter, copy everything below the line into its file in `chapters/`, then work through the outline that's already there.

## Rules for every chapter

- **Hold the point of view.** Every chapter follows the principles in [the README](README.md#what-this-handbook-believes). If a chapter needs to disagree with one, change the principle on purpose rather than letting the two drift apart.
- **Build on the posts.** Start from the posts listed under the chapter's "Further reading". Keep their specifics (the thresholds, the numbers worth tracking, the "my default" calls) and don't contradict them.
- **Open with the answer.** The one-minute summary should work on its own for someone who reads nothing else.
- **Plain language.** Explain a term the first time it appears.
- **Stage by stage.** Say what changes for an early, growing and at-scale team. Don't write one answer for everyone.
- **Choices, not decrees.** Where good practice varies by platform, lay out the options and when each fits, and give numbers as examples, not rules. Be firm only where Steven's posts or the law are firm.
- **One story, anonymized.** Never name a current or past employer, and leave out numbers that would identify one and anything that was internal or confidential. Describe the setting instead: "a gaming platform with millions of uploads a day".
- **Laws get a source.** Name the law and the article or section, and link to the official text. Law notes are general information, not legal advice. A chapter whose footer says so automatically shows a notice under its title telling readers to check with their own legal team. Have a lawyer read chapters 6, 12 and 16, and any chapter that states what a law requires, before it's published.
- **Link, don't repeat.** Link the Workbench tool or metric page that goes deeper rather than restating it.
- **2,500 to 4,000 words.** If it runs longer, split the chapter.
- **Update the README.** When a chapter's status changes, change it in the contents table too.
- **Keep the section names and formats exactly as below.** The website gives each section its own layout, the same components as the rest of stevenmacchia.com: "In one minute" becomes the summary strip under the title, "What good looks like" a panel with one column per stage, "How to do it" numbered steps, "Mistakes to avoid" numbered rows, each "Start from this template" block a panel, "Do it with" cards, and "Further reading" the same list as the writing page. So keep the bullet formats (`**Lead.** text`, `**[Name](url)**: description`, `**[Post title](url)** (Mon D, YYYY): the point`), start each step with `### N. Title`, and start each template block with a bold name. Any other section renders as text beside its heading. Run `npm run build` and look at the page before calling a chapter done.
- **The website reads the data files.** On the site, "From Steven's writing" comes from `data/posts.json` (every post whose `chapters` list includes the chapter's slug, newest first, the latest five shown and the rest behind "Show more"), and the chapter's "Updated" date and "Recent changes" come from `data/updates.json`. The daily-post routine's sync script keeps the Markdown list under "Further reading" in step with the data (GitHub shows the Markdown), so don't edit that list by hand. The slug is the chapter's file name without its number and `.md`, and the build stops on a slug it doesn't know.

Status values: **Outline** (what it will cover), **Draft** (written, not yet reviewed), **Published** (reviewed and live).

---

# N. Chapter title

> **The question this chapter answers?**

*Part N: Part name* · [Contents](../README.md) · [← N-1. Previous chapter](file.md) · [N+1. Next chapter →](file.md)

## In one minute

- Three to five bullets: what to do, in order.
- End with the one mistake to avoid.

## Why it matters

What goes wrong without this, for users and for the company. One paragraph, with one fact and its source.

## What good looks like

| | Early | Growing | At scale or regulated |
|---|---|---|---|
| **What you have** | | | |
| **What you can show** | | | |

## How to do it

### 1. Step title

What to do, who owns it, and how you know it's done. Tables and lists are fine inside a step.

### 2. Step title

...

## From the field

One story from experience: the situation, what we did, what happened, and what I'd do differently. Anonymized.

## Mistakes to avoid

- **Mistake.** What to do instead.

## Start from this template

Something to copy and use: a checklist, a policy outline, a decision table, an escalation tree or a staffing sheet. Put it here if it's short, or in `templates/` and link it.

## Do it with

The Workbench tools and metric pages that go with this chapter.

## Further reading

- Steven's posts on this topic, from [articles.md](../articles.md)
- Two to five outside sources worth the time

---

*Last updated: YYYY-MM-DD.* Part of [The T&S Handbook](../README.md) by [Steven Macchia](https://www.linkedin.com/in/stevenmacchia). Content licensed [CC BY 4.0](../LICENSE).
