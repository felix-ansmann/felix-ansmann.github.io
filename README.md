# felix-ansmann.com — Website Guide

This is your personal website. It is a set of plain files — no special software is needed to edit it. The sections below explain everything you need to know.

---

## The only file you regularly edit: `projects.js`

Open it in any text editor (TextEdit, VS Code, etc.). At the top you will find the list of all projects. Each project looks like this:

```js
{
  title: "Your Project Title",
  venue: "Institution or Publisher",
  type: "Research",
  description: "2–3 sentences describing the project. You can include a link like this: <a href='https://example.com' target='_blank'>link text</a>.",
  image: "assets/projects/your-image.jpg",
  link: "https://example.com"
},
```

---

## How to Add a New Project

1. Open `projects.js`
2. Copy the block below and paste it at the **very top** of the list, just after the line `const PROJECTS = [`
3. Fill in your details — see the field guide below
4. Save the file

```js
{
  title: "Your Project Title",
  venue: "Institution or Publisher",
  type: "Research",
  description: "Your 2–3 line description here.",
  image: "assets/projects/your-image.jpg",
  link: ""
},
```

**Field guide:**

| Field | Required? | What to put there |
|---|---|---|
| `title` | yes | The project name |
| `venue` | yes | Institution, journal, or collaborator |
| `type` | yes | Category — must be one of the five below |
| `description` | optional | 2–3 sentences shown when clicking the row |
| `image` | optional | Path to hover image — see section below |
| `link` | optional | External URL — only used when there is no description |

To leave an optional field empty, delete the line entirely or write `""`.

---

## Categories

The Index has five fixed categories. Always use exactly one of these spellings in the `type` field:

| Type | Use for |
|---|---|
| `Projects` | Exhibitions, installations, screenings, films, collaborative work |
| `Research` | Research projects, networks, papers |
| `Writing` | Published articles, essays, book contributions |
| `Teaching` | Courses, seminars, workshops |
| `Other` | Talks, conference appearances, advisory roles, everything else |

**Example:**
```js
type: "Research",
```

Getting the spelling wrong means the filter won't work for that entry. Copy exactly from the list above.

---

## How to Add a Project Description

A description appears when a visitor clicks on the project row, and closes on a second click. It is optional — projects without a description are not clickable.

Add it as the `description` field:
```js
description: "A short 2–3 sentence text about the project.",
```

**To include a link inside the description:**
```js
description: "Published in <a href='https://example.com' target='_blank'>DISC Journal</a> as part of a special issue on platform governance.",
```

The link will be underlined automatically. Do not add a separate `link` field when you have a description — put all links inside the description text instead.

---

## How to Add a Hover Image

When someone hovers over a project row on desktop, an image or GIF appears on the right half of the screen.

**Step 1 — Prepare your file**
- Supported formats: JPG, PNG, WebP, GIF (animated GIFs play automatically)
- Recommended width: 1000–1400 px
- Keep file size under 500 KB for fast loading
- Use a simple filename without spaces, e.g. `forked-trust-berlin.jpg`

**Step 2 — Drop it into the right folder**
```
assets/projects/your-filename.jpg
```

**Step 3 — Add the path in projects.js**
```js
image: "assets/projects/your-filename.jpg",
```

If the file is missing or the path is wrong, no hover panel appears — nothing breaks.

---

## How to Add a Link to a Project (without description)

If a project has no description, you can make the title a clickable link:
```js
link: "https://www.example.com/your-article",
```

The title will be underlined. If the project has a description, ignore this field and put the link inside the description text instead (see above).

---

## How to Update the Bio Text

Open `index.html` and find this section near the top of `<body>`:

```html
<section class="bio">
  <p>
    <strong>Felix Ansmann</strong> is a researcher ...
  </p>
```

Edit only the text between the `<p>` tags. Do not change the surrounding HTML tags (`<p>`, `<strong>`, `<section>`, etc.).

---

## How to Update Your Contact Links

In `index.html`, find:

```html
<p class="contact">
  <a href="mailto:studio@felix-ansmann.com">Mail</a>
  <a href="https://www.instagram.com/felix.ansmann/" ...>Instagram</a>
  <a href="https://www.linkedin.com/in/..." ...>LinkedIn</a>
</p>
```

Change the URLs or add more links in the same format.

---

## How to Publish Changes to the Website

**Option A — GitHub website (no software needed):**
1. Go to your GitHub repository: `github.com/Felix-Ansmann/felix-ansmann.github.io`
2. Click the file you changed (e.g. `projects.js`)
3. Click the pencil icon (Edit)
4. Paste your updated content
5. Click **Commit changes** — the site updates within ~1 minute

For new images: in the repository click **Add file → Upload files**, navigate into `assets/projects/` and upload your file.

**Option B — GitHub Desktop (recommended for regular updates):**
1. Open GitHub Desktop — it shows your changed files automatically
2. Add a short note (e.g. "Add project XY") and click **Commit to main**
3. Click **Push origin** — done

---

## File Overview

```
index.html         — Page structure and all SEO meta tags
style.css          — Visual design (fonts, colors, layout)
script.js          — Hover and filter interaction logic
projects.js        — ⭐ Your project list — edit this regularly
CNAME              — Your custom domain (do not edit)
assets/
  portrait.jpg     — Your profile photo
  projects/        — Drop all hover images and GIFs here
README.md          — This guide
```

---

## GitHub Pages Setup (one-time)

1. Create a GitHub repository named `felix-ansmann.github.io`
2. Upload all files to the repository
3. Go to **Settings → Pages → Source**: select `main` branch, `/ (root)` folder, click Save
4. At your domain registrar, add these DNS records:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `CNAME` | `www` | `felix-ansmann.github.io` |

5. In GitHub Pages settings, enter `felix-ansmann.com` under **Custom domain** and enable **Enforce HTTPS**
6. DNS propagation takes up to 24 hours

---

## SEO Validation

All SEO meta tags are set in `index.html` and do not need regular changes. To verify:

- **Structured data**: [validator.schema.org](https://validator.schema.org) — paste the URL
- **LinkedIn / WhatsApp preview**: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) — paste the URL and click "Inspect"
