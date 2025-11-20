# The Neural Cyclist

A personal blog and project site built with [Astro](https://astro.build), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com).

## 📂 Project Structure

This project follows a standard Astro structure with some specific organizations for the blog and UI components.

### `/src`

*   **`components/`**: Reusable UI components.
    *   `Sidebar.tsx`: The main navigation sidebar, built with React for interactive state (toggle, active links).
    *   `Gallery.tsx`: An interactive image gallery component for use in MDX posts.
    *   `BlogCard.astro`: Displays a preview summary of a blog post in listings.
    *   `TableOfContents.astro`: Generates a TOC for blog posts.
*   **`content/`**: The heart of the blog.
    *   `blog/`: Contains all blog posts as `.md` or `.mdx` files.
    *   `config.ts`: Defines the schema and collections for the content.
*   **`layouts/`**:
    *   `Layout.astro`: The main wrapper layout applied to all pages, handling the Sidebar and main content area.
*   **`pages/`**: File-based routing.
    *   `index.astro`: The homepage.
    *   `blog/`: Routes for the blog index and individual posts.
*   **`styles/`**:
    *   `global.css`: Global styles, Tailwind directives, and custom CSS variables.

## 🚀 How to Use The Neural Cyclist

### Installation & Development

1.  **Install dependencies:**
    ```bash
    bun install
    ```

2.  **Start the development server:**
    ```bash
    bun dev
    ```

### 📝 How to Create a New Blog Post

To create a new blog post for "The Neural Cyclist", follow these steps:

#### 1. Create the File
Create a new file in `src/content/blog/` with a `.md` or `.mdx` extension. The filename will become the URL slug (e.g., `my-new-post.md` becomes `/blog/my-new-post`).

#### 2. Add Frontmatter
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

#### 3. Field Details
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

#### 4. Using MDX Components (Optional)
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
