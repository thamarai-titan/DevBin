# 🚀 DevBin

DevBin is a platform that helps developers and professionals discover the right tools for their development or any kind of work.

Users can explore curated tools, view details in clean card layouts, and save their favorite tools to their profile for future reference.

---

## ✨ Features

- 🔍 Browse developer tools
- 📌 Save tools to profile
- 👤 User authentication
- 🏷 Categorized tool listing
- ⚡ Fast and minimal UI

---

## 🛠 Tech Stack

### Frontend
- Next.js
- Tailwind CSS

### Backend
- Express
- Prisma ORM

### Database
- PostgreSQL

### Package Manager
- Bun

---

## 📦 Installation & Setup

Follow the steps below to run DevBin locally.

---

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd devbin
```

---

### 2️⃣ Install Dependencies

Using Bun:

```bash
bun install
```

If Bun is not installed, install it first:

```bash
curl -fsSL https://bun.sh/install | bash
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL="your_postgres_connection_string"
JWT_SECRET="your_secret"
```

Make sure PostgreSQL is running locally or provide a valid hosted database URL.

---

### 4️⃣ Run Database Migrations

```bash
bunx prisma migrate dev
```

This will:
- Create the database tables
- Sync Prisma schema
- Generate Prisma client

---

### 5️⃣ Run the Development Server

```bash
bun dev
```

Your application should now be running locally.

---

## 📁 Project Structure

### Frontend Structure

```
app/
 ├── layout.tsx
 ├── page.tsx
 ├── explore/
 ├── tool/[id]/
 ├── profile/[username]/
 ├── dashboard/
 └── auth/

components/
 ├── ToolCard.tsx
 ├── Navbar.tsx
 ├── SaveButton.tsx
 └── ui/

lib/
 ├── api.ts
 ├── utils.ts
 └── hooks/

types/
```

---

## 🧠 How DevBin Works

1. Users can register and log in.
2. Tools are displayed in clean card layouts.
3. Users can view detailed tool information.
4. Users can save tools to their profile.
5. Saved tools are stored in the database using Prisma and PostgreSQL.

---

## 🧪 Development Scripts

```bash
bun dev        # Run development server
bun build      # Build project
bun start      # Start production server
```

---

## 🚀 Future Improvements

- Tool search functionality
- Tool tagging system
- User collections (folders)
- Like & comment system
- Admin dashboard for moderation

---

## 👨‍💻 Author

Developed by Thamarai Manalan