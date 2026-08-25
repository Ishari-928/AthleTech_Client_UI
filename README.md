# AthleTech - Client UI

Public-facing web application for **AthleTech**, an athletic meet management system. This is the interface used by athletes, coaches, sponsors and spectators to register for events, submit payment slips, follow live results and browse past competition data.

This repository contains **only the public front-end**. The admin panel and the API live in separate repositories:

| Layer | Repository |
|---|---|
| Client / Public UI (this repo) | [AthleTech_Client_UI](https://github.com/Ishari-928/AthleTech_Client_UI) |
| Admin Dashboard | [AthleTech_Admin_Dashboard](https://github.com/Ishari-928/AthleTech_Admin_Dashboard) |
| REST API & Database layer | [AthleTech_Backend](https://github.com/Ishari-928/AthleTech_Backend) |

---

## Tech Stack

- **React.js** (functional components + hooks)
- **Vite** - dev server and build tool
- **ESLint** - linting
- **JavaScript (ES6+)**
- Consumes the AthleTech backend via **REST APIs** over HTTPS

---

## Features

### Athlete Registration
- Registration form capturing name, email, gender, date of birth, contact number and school/club
- Event selection with live display of registration limits and current status
- Registration blocked automatically once an event reaches its participant cap
- Auto-assigned athlete ID on submission

### Payment Slip Upload
Registration fees are paid offline by bank deposit or transfer, and the athlete attaches proof during registration.

- Bank account details and the applicable fee shown on the registration page
- Slip upload field accepting image or PDF files, with client-side type and size validation
- Registration submitted with status *Pending Verification*
- Athletes can track slip status - *Pending / Verified / Rejected*
- If a slip is rejected, the reason is shown and a replacement can be uploaded
- BIB number and confirmation email are issued only after the admin verifies the slip

### Personalised Dashboard
- Registered events and event schedules
- Payment slip status and submission history
- Assigned BIB numbers and event confirmations

### Results & Performance Tracking
- Real-time rankings and event progress updates
- Semifinal and final qualifier lists updated dynamically
- Athlete performance history across events
- School/club point standings and championship rankings
- Downloadable results book and rules & guidelines book (PDF)

### Coach Articles
- Coaches submit articles with their name, contact number, social media profile and description
- Spectators browse published articles to find a suitable coach

### Public / Spectator Access
- Event schedules, live rankings and historical results viewable without login
- Sponsor and partner advertisements displayed in banner and sidebar areas
- Photo gallery of past meets

---

## Project Structure

```
AthleTech_Client_UI/
├── public/                 # Static assets served as-is
├── src/                    # Application source
│   ├── assets/             # Images, gallery media, icons, fonts
│   ├── components/         # Reusable UI components (navbar, footer, cards, slip upload, ad slots)
│   ├── pages/              # Home, Events, Registration, Results, Gallery, Articles
│   ├── services/           # API call helpers
│   ├── App.jsx             # Root component & routing
│   └── main.jsx            # React entry point
├── index.html              # Vite HTML entry
├── vite.config.js          # Vite build configuration
├── eslint.config.js        # ESLint rules
├── replace.txt             # Notes on env/gitignore restructuring
├── package.json            # Dependencies and npm scripts
├── package-lock.json       # Locked dependency tree
├── .env                    # Local environment variables (should not be committed)
└── .gitignore
```

> **Note:** `.env` is currently tracked in this repository. Add it to `.gitignore` and rotate any keys that were committed - client builds inline these values into the bundle, so nothing secret should ever live here.

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- The [AthleTech_Backend](https://github.com/Ishari-928/AthleTech_Backend) API running locally or deployed

### Installation

```bash
git clone https://github.com/Ishari-928/AthleTech_Client_UI.git
cd AthleTech_Client_UI
git checkout Ishari-test
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_MAX_SLIP_SIZE_MB=5
```

> Only `VITE_`-prefixed variables are exposed to the browser. Nothing secret belongs here.

### Available Scripts

```bash
npm run dev       # Start the dev server with hot module replacement
npm run build     # Production build into /dist
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

The dev server runs at `http://localhost:5173` by default.

---

## Branches

| Branch | Purpose |
|---|---|
| `main` | Stable release |
| `Ishari-test` | Active development / testing branch |

---

## Browser Support

Optimised for current versions of Google Chrome, Mozilla Firefox, Microsoft Edge and Safari. The layout is responsive across desktops, laptops, tablets and mobile devices.

---

## Author

**Abeysooriya I. P**
BSc (Hons) Information Technology & Management
Faculty of Information Technology
University of Moratuwa

Developed for **Individual Project on Business Solutions**.

---

## Contact

For questions about this repository, integration support, or collaboration enquiries:

| | |
|---|---|
| **Email** | [ishariabeysooriya628@gmail.com](mailto:ishariabeysooriya628@gmail.com) |
| **LinkedIn** | [ishari-abeysooriya-628i](https://www.linkedin.com/in/ishari-abeysooriya-628i) |
| **GitHub** | [@Ishari-928](https://github.com/Ishari-928) |

**Bug reports and feature requests** — please open an issue on the relevant repository rather than emailing directly, so the discussion stays with the code:

- Public site issues → [AthleTech_Client_UI/issues](https://github.com/Ishari-928/AthleTech_Client_UI/issues)
- Admin panel issues → [AthleTech_Admin_Dashboard/issues](https://github.com/Ishari-928/AthleTech_Admin_Dashboard/issues)
- API issues → [AthleTech_Backend/issues](https://github.com/Ishari-928/AthleTech_Backend/issues)

### Academic Supervision

- **Ms. B. N. N. T. Batagoda** - Lecturer, Faculty of Information Technology, University of Moratuwa
- **Mr. Chandeepa Pathirana** - Software Engineer, SimCentric Technologies