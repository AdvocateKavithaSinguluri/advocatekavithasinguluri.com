# Kavitha Singuluri Advocate & Associates Website

A static website for Advocate Kavitha Singuluri & Associates, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). The site features information about legal services, practice areas, associates, a blog, and a WhatsApp contact form.

## 🚀 Tech Stack

- [Astro](https://astro.build/) (Static Site Generator)
- [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
- [TypeScript](https://www.typescriptlang.org/)
- [date-fns](https://date-fns.org/) (Date formatting)
- Content collections for blog posts (Markdown + schema validation)

## 📁 Project Structure

```
/
├── public/                # Static assets (favicon, images)
├── src/
│   ├── components/        # Reusable UI components (Header, Footer, Home, WhatsAppContactForm)
│   ├── content/           # Content collections config and blog posts
│   ├── layouts/           # Layout components
│   ├── pages/             # Astro pages (index, blog, contact, etc.)
│   └── utils/             # Utility functions (pagination, etc.)
├── .astro/                # Astro-generated types and content data
├── tailwind.config.mjs    # Tailwind CSS config
├── astro.config.mjs       # Astro config
├── package.json           # Project metadata and scripts
└── tsconfig.json          # TypeScript config
```

## 🧑‍💻 Local Development

1. **Install dependencies:**

   ```sh
   bun install
   ```

2. **Start the dev server:**
   ```sh
   bun run dev
   ```
   The site will be available at [http://localhost:4321](http://localhost:4321).

## 🏗️ Build & Preview

- **Build for production:**
  ```sh
  bun run build
  ```
- **Preview the production build:**
  ```sh
  bun run preview
  ```

## ✍️ Content Management

- Blog posts are stored as Markdown files in [`src/content/blog/`](src/content/blog/).
- Blog schema is defined in [`src/content/config.ts`](src/content/config.ts) and validated using Zod.
- To add a new blog post, create a new `.md` file with frontmatter in the blog folder.

## 📦 Key Scripts

- `bun run dev` – Start local dev server
- `bun run build` – Build static site
- `bun run preview` – Preview built site

## 📝 Notes

- The WhatsApp contact form sends user queries directly to the firm's WhatsApp number.
- The site does not use a CMS; all content is managed via Markdown and code.
- For styling, Tailwind CSS is used throughout.

---

For any questions or onboarding help, refer to the code comments or contact the project
