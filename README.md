# URL Shortener Frontend

A modern, responsive UI for URL shortening built with Next.js and TailwindCSS.

## 🔧 Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js |
| Styling | TailwindCSS |
| Language | TypeScript |
| Package Manager | Yarn |
| Node Runtime | Node 23 (Docker) |
| Deployment | Docker (multi-stage) |

## 📌 Features

### ✓ Clean Modern UI
- Dark-themed interface using Tailwind
- Responsive design for all devices

### ✓ URL Shortening Form
- Input field for long URLs
- Sends request to backend API
- Displays short URL with "Copy" button

### ✓ Result List Component
- Shows shortened URLs in card format
- Displays both original and short URLs
- Easy reference for all shortened links

### ✓ Clipboard Copy
- 1-click copy of short URLs
- User-friendly copy feedback

### ✓ Fully Dockerized
- Multi-stage production build
- Optimized runtime image using Node 23 + Yarn

## 📁 Project Structure

```
frontend/
  app/
    layout.tsx       # Root layout
    page.tsx         # Main Shortener UI
    components/
      Header.tsx
      Footer.tsx
      ShortenForm.tsx
      ShortUrlCard.tsx
      ShortUrlList.tsx
  lib/
    api.ts           # API calls to backend
    types.ts         # Shared types
    utils.ts         # Copy to clipboard
  public/
  Dockerfile
  .env.local
```

## ⚙️ Environment Variables

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

## 🚀 Getting Started

### Running with Docker Compose
```bash
docker compose up --build
```

The frontend will be available at `http://localhost:3000`

### Running Locally

1. Install dependencies:
```bash
cd frontend
yarn install
```

2. Create `.env.local` with the API base URL:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

3. Run the development server:
```bash
yarn dev
```

4. Open `http://localhost:3000` in your browser

## 📦 Key Components

### ShortenForm
Handles URL input and submission to the backend API

### ShortUrlCard
Displays individual shortened URL results with copy functionality

### ShortUrlList
Renders a list of all shortened URLs

### Header & Footer
Navigation and branding components

## 🔗 Service URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:8080 |

## 🎯 Future Improvements

- Custom short code support (vanity URLs)
- Click analytics dashboard
- URL expiration support
- Authentication for protected URLs
- QR code generation
- Full-text history page
