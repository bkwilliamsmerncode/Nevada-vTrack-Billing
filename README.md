# vTrack Nevada

Public Nevada marketing site for vTrack by Vichra. The site is built with
React and Vite and deploys to GitHub Pages from the `main` branch.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

The contact form uses EmailJS. Add the three values shown in `.env.example`
to a local `.env` file. For GitHub Pages, create repository Actions secrets
with the same names:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The form uses `emailjs.sendForm` with the three environment variables above.
It supplies `user_name`, `user_email`, and `user_subject` for the original
contact template, plus the agency fields below.

The EmailJS template should accept `to_email`, `contact_name`, `agency_name`,
`email`, `reply_to`, `phone`, `provider_type`, `agency_size`, `message`, and
`legacy_interest`. Set its **To Email** field to `{{to_email}}`; form leads are
addressed to brian@vichra.com, selena@vichra.com, and greg@vichra.com.

## Quality checks

```bash
npm run lint
npm run build
```

## Nevada status language

Vichra Systems is enrolled with Nevada Medicaid as a trading partner for
third-party billing (Trading Partner ID 51488619). Connectivity is established
and EDI certification testing is in progress. Do not describe vTrack as a
licensed or approved Nevada EVV vendor or as approved for production claim
submission until those statuses are separately confirmed.
