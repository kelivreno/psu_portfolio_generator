# Roise Uddin — Personal Portfolio Website

A fully responsive, GitHub Pages-ready personal portfolio for **Roise Uddin**, Adjunct Instructor, Cybersecurity & Network Security Specialist, and Academic Researcher.

---

## 🚀 Quick Start — GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click **"New repository"**
3. Name it exactly: `roiseuddin.github.io` *(or any name for a project page)*
4. Set to **Public**
5. Click **"Create repository"**

### Step 2: Upload the Files

**Option A — via GitHub web interface:**
1. Drag and drop all files from this folder into your repository
2. Commit with message: `Initial portfolio deployment`

**Option B — via Git CLI:**
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/roiseuddin.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository → **Settings**
2. Click **"Pages"** in the left sidebar
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch → **/ (root)** folder
5. Click **Save**

### Step 4: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/roiseuddin.github.io/
```
*(GitHub Pages deployment takes 1–5 minutes)*

---

## 📁 Project Structure

```
roise-portfolio/
├── index.html          # Main portfolio page
├── css/
│   └── style.css       # All styles (responsive, animations, theme)
├── js/
│   └── main.js         # Interactivity (navbar, scroll, skills, chart)
├── images/             # Place your photos here
│   ├── portrait.jpg    # Your profile photo
│   ├── award-1.jpg     # Award photo (Picture 2)
│   └── award-2.jpg     # Award photo (Picture 3)
└── README.md           # This file
```

---

## 🖼️ Adding Your Photos

### Profile Photo
1. Add your photo as `images/portrait.jpg`
2. In `index.html`, find the `.portrait-frame` section
3. Replace the placeholder div with:
```html
<img src="images/portrait.jpg" alt="Roise Uddin" style="width:100%; height:100%; object-fit:cover;" />
```

### Award Photos (Picture 2 & Picture 3)
1. Add photos as `images/award-1.jpg` and `images/award-2.jpg`
2. In `index.html`, find the `.award-image` sections
3. Replace each `.award-image-placeholder` div with:
```html
<img src="images/award-1.jpg" alt="Award Name" style="width:100%; height:100%; object-fit:cover;" />
```

---

## ✏️ Customizing Content

### Update Contact Info
In `index.html`, search for and update:
- `roise.uddin@psu.edu` → your real email
- `linkedin.com/in/roiseuddin` → your LinkedIn URL
- `github.com/roiseuddin` → your GitHub URL

### Add Real Publications
Find the `#research` section and update the `.pub-card` items with your actual paper titles, journals, and years.

### Link GitHub Projects
Find the `#projects` section and replace `href="#"` in `.project-link` with your actual GitHub repository URLs.

### Download CV Button
In `index.html`, find the `.cv-btn` button and update it:
```html
<a href="cv/roise-uddin-cv.pdf" download class="cv-btn">📄 Download Full CV</a>
```
Add your CV file as `cv/roise-uddin-cv.pdf`.

---

## 🎨 Theme Customization

Key CSS variables in `css/style.css`:
```css
:root {
  --navy:   #050d1a;    /* Background */
  --cyan:   #00d4ff;    /* Accent color */
  --amber:  #f5a623;    /* Highlight color */
  --mist:   #c8d8e8;    /* Body text */
}
```
Change `--cyan` to any color to update the entire theme accent.

---

## 🌐 Custom Domain (Optional)

To use a custom domain (e.g., `roiseuddin.com`):
1. Buy a domain from Namecheap, GoDaddy, etc.
2. In your repo, create a file named `CNAME` with just your domain:
   ```
   roiseuddin.com
   ```
3. In your domain registrar, add DNS records pointing to GitHub Pages IPs:
   ```
   A  185.199.108.153
   A  185.199.109.153
   A  185.199.110.153
   A  185.199.111.153
   ```

---

## 📱 Browser & Device Support

- ✅ Chrome, Firefox, Safari, Edge (latest)
- ✅ iOS Safari, Android Chrome
- ✅ Desktop, tablet, mobile responsive
- ✅ Dark mode optimized

---

## 🔧 Tech Stack

- **HTML5** — Semantic, SEO-optimized markup
- **CSS3** — Custom properties, animations, flexbox/grid
- **Vanilla JS** — No frameworks, fast load time
- **Google Fonts** — Syne + DM Sans + JetBrains Mono
- **SVG** — Inline radar chart (no library needed)

---

*Built for Roise Uddin · Pacific States University · California, USA*
