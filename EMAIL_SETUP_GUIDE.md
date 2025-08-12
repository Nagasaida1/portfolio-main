# 📧 EmailJS Contact Form Setup Guide

This guide will help you set up EmailJS to make your contact form functional and send emails directly to your Gmail account.

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Connect Your Gmail Account
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** 
4. Click **"Connect Account"** and authorize EmailJS to access your Gmail
5. Note down your **Service ID** (looks like: `service_xxxxxxxxx`)

### 3. Create Email Template
1. Go to **"Email Templates"** in EmailJS dashboard
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Contact Form Message: {{subject}}

Hello Naga Saida,

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

4. Set these template variables:
   - `from_name` - Sender's name
   - `from_email` - Sender's email  
   - `subject` - Message subject
   - `message` - Message content
   - `to_name` - Your name
   - `to_email` - Your email
   - `reply_to` - Reply email

5. **Test the template** and note down your **Template ID** (looks like: `template_xxxxxxxxx`)

### 4. Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (looks like: `your_public_key_here`)

### 5. Update Your Code
Open `src/components/Contact.jsx` and replace these lines:

```javascript
// Replace these with your actual EmailJS credentials
const EMAIL_SERVICE_ID = 'service_your_service_id' // Your service ID here
const EMAIL_TEMPLATE_ID = 'template_your_template_id' // Your template ID here  
const EMAIL_PUBLIC_KEY = 'your_public_key' // Your public key here
```

**Example:**
```javascript
const EMAIL_SERVICE_ID = 'service_abc123xyz'
const EMAIL_TEMPLATE_ID = 'template_def456uvw'
const EMAIL_PUBLIC_KEY = 'Bx_9vY2wT8kL5nM3pQ'
```

## 🔧 Alternative: Environment Variables (Recommended)

For better security, create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=service_your_service_id
VITE_EMAILJS_TEMPLATE_ID=template_your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update your Contact.jsx:
```javascript
const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

## ✅ Test Your Setup

1. Save your changes
2. Run `npm run dev`
3. Go to your contact form
4. Fill out and submit a test message
5. Check your Gmail inbox for the email

## 📞 Troubleshooting

**Email not sending?**
- Check browser console for errors
- Verify all IDs and keys are correct
- Ensure your EmailJS service is active
- Check EmailJS usage limits (100 emails/month on free plan)

**Gmail not receiving?**
- Check Gmail spam folder
- Verify Gmail authorization in EmailJS
- Test the template in EmailJS dashboard first

## 🔄 Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic support

## 🎯 Your Setup Checklist
- [ ] EmailJS account created
- [ ] Gmail service connected  
- [ ] Email template created and tested
- [ ] Service ID, Template ID, and Public Key obtained
- [ ] Code updated with your credentials
- [ ] Test email sent successfully
- [ ] Contact form working properly

---

**Need help?** Check the [EmailJS Documentation](https://www.emailjs.com/docs/) or contact their support.

**🎉 Once setup is complete, your contact form will send emails directly to: `nagasaidavelpula1704@gmail.com`**