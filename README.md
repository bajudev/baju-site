<h1 style="text-align:center:">
    [ setofℝ ] 
<\h1>

My attempt at a personal website. Built with Astro and Tailwind CSS.

## Features

- Home Page
- Blog
- Projects

## Technologies

- [ ] [Astro](https://astro.build/) franework
- [ ] [Tailwind CSS](https://tailwindcss.com/)
- [ ] Simple Icons font, FontAwesome
- [ ] Cloudflare Pages

## Project Structure

```
/
├── components/
│   ├── BlogPost.astro       
│   └── Project.astro        
├── data/
│   └── projects.js          
├── layouts/
│   ├── Layout.astro         # base layout
│   └── MarkdownPostLayout.astro
├── pages/
│   ├── blog.astro          
│   ├── index.astro         # home page
│   ├── links.astro         # basically a linktree
│   ├── projects.astro      
│   ├── posts/             # Markdown blog posts
│   └── tags/              # Dynamic tag pages
└── styles/
    ├── colors.css         # CSS custom properties for theming
    └── global.css         # Global styles and animations
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/setofr/setofr-site.git/
   cd setofr-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see your site.

## 📝 Usage

### Adding Blog Posts

Create new markdown files in the `pages/posts/` directory with the following frontmatter:

```markdown
---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Your Post Title"
pubDate: MM-DD-YYYY
description: "Brief description of your post"
tags: ["tag1", "tag2"]
---

Your md content here...
```

### Adding Projects

Edit the `data/projects.js` file to add new projects:

```javascript
{
  title: "Project Name",
  description: "Project description",
  url: "https://github.com/username/repo",
  technologies: ["Tech1", "Tech2"],
  status: "Live", // or "In Progress", "Learning"
  featured: true, // true for featured section
  image: "/path/to/image.jpg" // optional
}
```

### Customizing Content

- **Homepage**: Edit `pages/index.astro` to update personal information, skills, and social links
- **About sections**: Modify the activities, skills, and contact information in the index file
- **Styling**: Adjust colors in `styles/colors.css` and global styles in `styles/global.css`

## 🎨 Customization

### Color Scheme

The site uses CSS custom properties for easy theming. Edit `styles/colors.css`:

```css
:root {
  --color-bg: #000000;           /* Background color */
  --color-heading: #ffffff;      /* Heading text color */
  --color-text: #cccccc;         /* Body text color */
  --color-accent: #808080;       /* Accent color */
  --color-border: #333333;       /* Border color */
  --color-primary: #808080;      /* Primary action color */
}
```

### Typography

The site uses STIX Two Math font for the mathematical branding. You can change fonts by updating the Google Fonts import in `layouts/Layout.astro`.

## 📦 Build & Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy**
   The site generates static files in the `dist/` directory, ready for deployment to:
   - [Netlify](https://netlify.com)
   - [Vercel](https://vercel.com)
   - [GitHub Pages](https://pages.github.com)
   - Any static hosting service

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Simple Icons](https://simpleicons.org/) and [FontAwesome](https://fontawesome.com/)
- Typography using [STIX Two Math](https://fonts.google.com/specimen/STIX+Two+Math)

## 📞 Contact

- **Website**: [setofr.me](https://setofr.me)
- **Email**: contact@setofr.me
- **GitHub**: [@setofr](https://github.com/setofr)
- **YouTube**: [@setofR](https://www.youtube.com/@setofR)

---

⭐ If you found this project helpful, please consider giving it a star!
