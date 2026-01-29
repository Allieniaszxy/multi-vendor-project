# 🚀 Quick Start Guide

## Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## ✅ That's it!

You should now see:
- 🏠 Homepage with 4 vendor cards
- 🌙 Dark mode toggle in the header
- 🔍 Click any vendor to explore their store

---

## 📍 Quick Navigation

| Page | URL |
|------|-----|
| Homepage | `http://localhost:3000` |
| Men's Fashion | `http://localhost:3000/site/mens-fashion` |
| Women's Fashion | `http://localhost:3000/site/womens-fashion` |
| Jewelry Store | `http://localhost:3000/site/jewelry-store` |
| Tech Shop | `http://localhost:3000/site/tech-shop` |

---

## 🎯 Try These Features

1. **Search Products**
   - Go to any vendor page
   - Type in the search bar
   - Press Enter

2. **Sort Products**
   - Use the dropdown to sort by:
     - Price: Low to High
     - Price: High to Low
     - Most Recent

3. **Toggle Dark Mode**
   - Click the moon/sun icon
   - Theme persists across page reloads

4. **Pagination**
   - Navigate through pages if there are many products
   - Page state saved in URL

---

## 🐛 Common First-Time Issues

### "Module not found" error?
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use?
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dark mode not working?
- Make sure JavaScript is enabled
- Clear browser cache and reload

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your app is live! 🎉

---

## 📚 Need More Help?

Check the full README.md for:
- Detailed documentation
- Configuration options
- Troubleshooting guide
- API reference

---

**Happy Coding! 🎉**
