# Maitri Yoga Website

A beautiful, responsive website for Maitri Yoga practice, built for GitHub Pages.

## 🧘 About

Maitri Yoga is a yoga practice dedicated to cultivating peace, strength, and balance through yoga. "Maitri" means loving-kindness in Sanskrit, and this principle guides everything we do.

## 🌟 Features

- **Responsive Design** - Works beautifully on desktop, tablet, and mobile devices
- **Image Gallery** - Interactive lightbox gallery with 33 yoga practice photos
- **Classes Overview** - Detailed information about various yoga class offerings
- **Contact Form** - Easy way for students to get in touch
- **Custom Domain Ready** - Configured for maitriyoga.uk domain

## 📁 Project Structure

```
maitriyoga/
├── index.html          # Home page
├── classes.html        # Classes information
├── gallery.html        # Photo gallery
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── CNAME               # Custom domain configuration
├── img/                # Image directory
│   ├── MaitriYoga.png  # Logo
│   ├── BeZen.jpg       # Hero/branding image
│   └── IMG-*.jpg       # Gallery photos (33 images)
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select the `main` branch
5. Click **Save**
6. Your site will be published at `https://russsmi.github.io/maitriyoga/`

### 2. Configure Custom Domain (maitriyoga.uk)

#### In GitHub:
1. In the **Pages** settings, enter `maitriyoga.uk` in the **Custom domain** field
2. Click **Save**
3. Check **Enforce HTTPS** (may take a few minutes to become available)

#### In GoDaddy:
1. Log in to your GoDaddy account
2. Go to **DNS Management** for maitriyoga.uk
3. Add the following DNS records:

**For apex domain (maitriyoga.uk):**
- Type: `A`
- Name: `@`
- Value: `185.199.108.153`
- TTL: 600

Add three more A records with these IPs:
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `russsmi.github.io`
- TTL: 600

4. Save all DNS records
5. Wait 24-48 hours for DNS propagation (usually much faster)

### 3. Verify Setup

After DNS propagation:
- Visit `https://maitriyoga.uk` to see your site
- Both `maitriyoga.uk` and `www.maitriyoga.uk` should work

## 🎨 Customization

### Update Colors
The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #8B6F47;
    --secondary-color: #D4A574;
    --accent-color: #5D4E37;
    /* ... */
}
```

### Update Content
- Edit HTML files directly to change text, headings, and content
- Add/remove classes in `classes.html`
- Update contact information in `contact.html`

### Contact Form Integration
The contact form currently shows a success message. To make it functional, integrate with:
- **Formspree**: https://formspree.io/ (easiest)
- **EmailJS**: https://www.emailjs.com/
- **Netlify Forms**: If you move to Netlify

For Formspree:
1. Sign up at formspree.io
2. Create a new form
3. Update the form tag in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 📱 Pages Overview

- **Home** (`index.html`) - Welcome page with hero section and benefits
- **Classes** (`classes.html`) - Detailed class descriptions and schedules
- **Gallery** (`gallery.html`) - Photo gallery with lightbox viewer
- **Contact** (`contact.html`) - Contact form and FAQ

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- GitHub Pages for hosting

## 📧 Contact

For website questions or updates, contact the repository owner.

## 📄 License

Copyright © 2025 Maitri Yoga. All rights reserved.
