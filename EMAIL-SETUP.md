# Email Setup Guide for Spectrum Contact Form

## Overview
The contact form now sends emails to both:
- contact@manalsroujy.com
- aref.aboutrabi7@gmail.com

## Setup Instructions

### 1. Create a Resend Account
1. Go to https://resend.com
2. Sign up for a free account (includes 100 emails/day for free)
3. Verify your email address

### 2. Get Your API Key
1. Once logged in, go to **API Keys** in the dashboard
2. Click **Create API Key**
3. Give it a name (e.g., "Spectrum Contact Form")
4. Copy the API key (it will only be shown once!)

### 3. Add API Key to Your Project

Create a file named `.env.local` in your project root:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit `.env.local` to GitHub (it's already in .gitignore)

### 4. Verify Your Domain (Optional but Recommended)

For production, you should verify your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., manalsroujy.com)
4. Follow the DNS setup instructions
5. Once verified, update the email route to use your domain:

```typescript
from: 'Contact Form <noreply@manalsroujy.com>',
```

### 5. Test the Contact Form

1. Restart your dev server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check both email addresses for the message

## Troubleshooting

### "Failed to send email" error
- Check that RESEND_API_KEY is set in `.env.local`
- Restart the dev server after adding the key
- Verify the API key is valid in Resend dashboard

### Emails not arriving
- Check spam/junk folders
- Verify the email addresses are correct
- Check Resend dashboard logs for delivery status

### Using in Production (Vercel)
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your API key
4. Redeploy your application

## Email Content
The form sends:
- Name
- Email (with reply-to functionality)
- Phone (if provided)
- Project Type (if selected)
- Message

All formatted in a professional HTML email template.
