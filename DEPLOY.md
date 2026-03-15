# Deploy Ashok Portfolio to Vercel

## Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `ashok-portfolio` (or your preferred name)
   - Keep it **Public** or **Private** (your choice)
   - Click **Create repository**

2. **Push your code to GitHub:**

Copy and run these commands in your terminal:

```bash
cd d:\Projects\Personal_Projects\Websites\Ashok\ashok-portfolio

# Replace YOUR_USERNAME with your GitHub username
# Replace YOUR_REPO with your repository name
git remote add origin https://github.com/YOUR_USERNAME/ashok-portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy on Vercel

1. **Go to Vercel:** https://vercel.com/dashboard

2. **Sign in / Sign up:**
   - Use your GitHub account to sign in (recommended)
   - Or sign in with email

3. **Add New Project:**
   - Click **"Add New..."** → **"Project"**
   - Under **"Import Git Repository"**, find `ashok-portfolio`
   - Click **"Import"**

4. **Configure Project:**
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

5. **Environment Variables:** (optional for now)
   - Skip this for the basic portfolio
   - You can add later if needed

6. **Click "Deploy"**

---

## Step 3: Wait for Build

- Vercel will build your site (takes 2-5 minutes)
- You'll see a progress screen with logs
- When done, you'll see **"Congratulations!"** with a preview

---

## Step 4: View Your Live Site

- Click **"Visit"** to open your live portfolio
- URL will be: `https://ashok-portfolio-xxxx.vercel.app`

---

## Step 5: Add Custom Domain (Optional)

If you want to use `ashok.alchemetryx.com`:

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Click **"Add"**
4. Enter: `ashok.alchemetryx.com`
5. Follow DNS instructions:
   - Add a **CNAME** record in your DNS provider:
     - Name: `ashok`
     - Value: `cname.vercel-dns.com`

---

## Step 6: Add Your Hero Photo

1. **Prepare your photo:**
   - Size: approximately 800x1200px
   - Format: JPG or WebP
   - Mood: professional, moody, cinematic

2. **Add to project:**
   - Save as `hero-portrait.jpg`
   - Place in: `public/images/hero-portrait.jpg`

3. **Update page.tsx:**
   Find the photo placeholder section and replace with:

```tsx
<div style={{ position: 'relative', width: '100%', height: '100%' }}>
  <Image
    src="/images/hero-portrait.jpg"
    alt="Ashok Verma"
    fill
    priority
    sizes="42vw"
    style={{
      objectFit: 'cover',
      objectPosition: 'center top',
      filter: 'grayscale(100%) contrast(1.12) brightness(0.88)',
    }}
  />
</div>
```

4. **Commit and push:**
```bash
git add .
git commit -m "Add hero portrait"
git push
```

Vercel will auto-redeploy with your photo.

---

## Troubleshooting

### Build Failed?
- Check Vercel build logs for errors
- Common issue: missing dependencies → run `npm install` locally first

### Site looks broken?
- Clear browser cache: `Ctrl + Shift + R`
- Check browser console for errors (F12)

### Cursor not showing?
- The custom cursor CSS is in globals.css
- Make sure the div elements with `id="cur"` and `id="cur-ring"` are in page.tsx

---

## Quick Deploy Command

If you have Vercel CLI installed:

```bash
npm i -g vercel
vercel
```

Follow the prompts and your site will deploy instantly.

---

**Your portfolio will be live in under 10 minutes!** 🚀
