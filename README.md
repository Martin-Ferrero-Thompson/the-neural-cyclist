# Astro Starter Kit: Basics

```sh
bun create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 📝 How to Create a New Blog Post

To create a new blog post for "The Neural Cyclist", follow these steps:

### 1. Create the File
Create a new file in `src/content/blog/` with a `.md` or `.mdx` extension. The filename will become the URL slug (e.g., `my-new-post.md` becomes `/blog/my-new-post`).

### 2. Add Frontmatter
At the top of your file, add the required metadata between `---` fences. Use this template:

```markdown
---
title: 'Your Post Title'
description: 'A brief summary of your post.'
pubDate: '2025-11-20'
heroImage: 'https://example.com/image.jpg'
category: 'My Challenge'
featured: false
tags: ['tag1', 'tag2']
---

# Your Content Here

Write your blog post content here using standard Markdown...
```

### 3. Field Details
*   **title**: (Required) The main headline of your post.
*   **description**: (Required) A short summary used for previews and SEO.
*   **pubDate**: (Required) The publication date in `YYYY-MM-DD` format.
*   **heroImage**: (Optional) URL to the main image for the post.
*   **category**: (Required) Must be one of:
    *   `'My Challenge'`
    *   `'My Training'`
    *   `'My Gear'`
    *   `'My Nutrition'`
    *   `'Partners'`
*   **featured**: (Optional) Set to `true` to highlight this post (defaults to `false`).
*   **tags**: (Optional) A list of related keywords.

### 4. Using MDX Components (Optional)
If you use the `.mdx` extension, you can import and use React components directly in your post, like the Gallery component:

```jsx
import Gallery from '../../components/Gallery';

<Gallery 
  client:visible 
  images={[
    { src: "https://...", alt: "Image 1" },
    { src: "https://...", alt: "Image 2" }
  ]} 
/>
```
