# Spectrum Interior Design

A modern, responsive interior design portfolio website for Spectrum Interior Design, located in Zahle, Lebanon. Built with Next.js and featuring a beautiful gallery, contact form with email integration, and smooth animations.

## Features

- 🎨 Modern, responsive design optimized for all devices
- 🖼️ Interactive gallery with 30+ interior design projects
- 📧 Contact form with email integration via Resend API
- ⚡ Built with Next.js 16 for optimal performance
- 🎭 Smooth animations and parallax effects
- 📱 Mobile-first responsive design
- 🌙 Professional UI with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 16.0.10
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom component library
- **Email Service:** Resend API
- **Fonts:** DM Sans (body), Fraunces (headings)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Aref-abt/Spectrum.git
cd Spectrum
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
```

To get a Resend API key:
- Sign up at [resend.com](https://resend.com)
- Get your API key from the dashboard
- Free tier includes 100 emails per day

4. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
spectrum-interior-design/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── gallery/           # Gallery page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── hero-section.tsx
│   ├── gallery-section.tsx
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── contact-section.tsx
│   ├── header.tsx
│   ├── footer.tsx
│   └── ui/                # UI components
├── public/                # Static assets
│   └── images/           # Images and gallery
└── styles/               # Global styles
```

## Features Overview

### Gallery
Browse through 30+ professionally photographed interior design projects showcasing our work in residential and commercial spaces.

### Contact Form
Integrated contact form that sends emails directly to the business. Features validation and user-friendly error handling.

### Services
- Residential Interior Design
- Commercial Space Planning
- 3D Visualization
- Furniture Selection
- Custom Solutions

## Deployment

This project can be deployed on Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for Resend email service | Yes |

## Contact

**Spectrum Interior Design**
- Location: Zahle, Lebanon
- Email: contact@manalsroujy.com
- Website: [Spectrum Interior Design](https://github.com/Aref-abt/Spectrum)

## Credits

Website developed by [Devitty](https://devitty.com)

## License

© 2026 Spectrum Interior Design. All rights reserved.
