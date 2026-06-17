# PattySource — Premium Jamaican Patty Wholesale

A premium, mobile-first B2B website for **PattySource**, a Jamaican patty wholesale brand supplying pubs, restaurants, cafés, convenience stores, and event organisers across the UK.

## 🌐 Live Site

> Deployed on Vercel — link added after first deploy.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (CSS-first config)
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Fonts:** Playfair Display + Inter (Google Fonts)

## 📄 Pages & Sections

| Section | Description |
|---|---|
| Hero | Full-screen parallax image, animated headline, dual CTAs |
| About | Split layout with brand story and stats |
| Products | 5 animated product cards with spice indicators |
| Why Choose Us | 6 benefit cards on dark background |
| Demo Basket | Interactive order builder with WhatsApp CTA |
| Testimonials | Animated carousel with 3 stockist reviews |
| Become a Stockist | Business enquiry form with success state |
| Footer | Links, contact, social media |

## 🏃 Running Locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 🏗️ Building for Production

```bash
npm run build
npm run start
```

## 📦 Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repository
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **Deploy**

No environment variables are required for the MVP.

## 📁 Project Structure

```
app/
├── layout.tsx        # Root layout, fonts, SEO metadata
├── page.tsx          # Main page (assembles all sections)
└── globals.css       # Tailwind v4 design system + brand tokens
components/
├── Navbar.tsx
├── HeroSection.tsx
├── AboutSection.tsx
├── ProductsSection.tsx
├── WhyChooseUs.tsx
├── DemoBasket.tsx
├── Testimonials.tsx
├── StockistForm.tsx
└── Footer.tsx
lib/
└── products.ts       # Product data (name, price, spice level)
public/
└── images/           # AI-generated food photography
```

## 🔮 Next Steps (Post-MVP)

- Connect stockist form to an email service (e.g. [Resend](https://resend.com))
- Add real WhatsApp number to `components/DemoBasket.tsx` (`wa.me/44XXXXXXXXXX`)
- Integrate Stripe payments to enable the "Pay Now" button
- Add product photography with real images
- Set up Google Analytics or Vercel Analytics

## 📝 License

Private — all rights reserved by PattySource.
