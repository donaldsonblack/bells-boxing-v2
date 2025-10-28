# n8n Webhook Setup Guide - Bells Boxing Contact Form

## Quick Start

Your contact form at `/contact` is already configured to send data to an n8n webhook. Follow these steps to set it up:

### 1. Set Environment Variable

Add this to your `.env.local` file:

```env
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact-form
```

### 2. JSON Payload Format

Your website sends this JSON structure:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "0407581872",
  "message": "I'm interested in joining your boxing classes...",
  "timestamp": "2025-10-24T11:13:45.123Z"
}
```

## Field Details

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | ✅ Yes | Full name from form |
| `email` | string | ✅ Yes | Email address (validated) |
| `phone` | string | ❌ No | Phone number (optional) |
| `message` | string | ✅ Yes | Message content |
| `timestamp` | string | ✅ Yes | ISO 8601 submission time |

## Simple n8n Workflow

### 1. Webhook Node
- **HTTP Method**: POST
- **Path**: `contact-form`
- **Response Mode**: On Received
- **Response Code**: 200

### 2. Send Email Node (Gmail/SMTP)
**To**: greg@bellsboxing.com

**Subject**: New Contact Form - Bells Boxing

**Body**:
```
New contact form submission:

Name: {{ $json.name }}
Email: {{ $json.email }}
Phone: {{ $json.phone }}
Message: {{ $json.message }}

Submitted: {{ $json.timestamp }}
```

### 3. (Optional) Google Sheets Node
Log submissions to a spreadsheet:
- **Operation**: Append
- **Columns**: Date | Name | Email | Phone | Message | Status

## Testing

1. **Local Testing**:
   ```bash
   # Add webhook URL to .env.local
   echo "NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-webhook-url" >> .env.local

   # Restart dev server
   npm run dev

   # Visit http://localhost:3000/contact and submit form
   ```

2. **Check Browser Console**:
   - Form submission includes detailed debug logs
   - Look for "CONTACT FORM DEBUG" messages
   - Verify webhook URL is correct

3. **Verify in n8n**:
   - Check workflow executions
   - Confirm data received correctly

## Business Information

The form already displays this information:

- **Email**: greg@bellsboxing.com
- **Phone**: 0 407 581 872
- **Address**: 116 Fyans St, South Geelong VIC 3220
- **Hours**: All Days: 5:00 AM - 9:00 PM

## Production Deployment

### Vercel/Netlify:
1. Add `NEXT_PUBLIC_N8N_WEBHOOK_URL` to environment variables
2. Redeploy your site
3. Test production form

### Important Notes:
- Uses `no-cors` mode for broader compatibility
- Form shows success immediately (can't read response)
- Monitor n8n executions to confirm receipt
- Phone field is optional

## Troubleshooting

**Form shows success but no email received?**
- Check n8n workflow executions
- Verify webhook URL is correct
- Check email node configuration

**CORS errors?**
- Already handled with `no-cors` mode
- n8n doesn't need CORS headers

**Can't see webhook URL in browser?**
- Check `.env.local` exists
- Verify variable starts with `NEXT_PUBLIC_`
- Restart dev server after adding variable

## Advanced: Full Workflow Example

See `n8n-webhook-config.json` for:
- Complete payload schema
- HTML email template
- Google Sheets integration
- Slack notifications
- Data validation examples

## Support

Form code location: `/app/contact/page.tsx` (lines 18-96)

Need help? Check the debug logs in browser console when submitting the form.
