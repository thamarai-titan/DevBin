🚀 DevBin

DevBin is a platform that helps developers and professionals discover the right tools for their development or any kind of work.
Users can explore curated tools, view details in clean card layouts, and save their favorite tools to their profile for future reference.

🛠 Tech Stack

Frontend: Next.js

Styling: Tailwind CSS

Backend: Express

Database: PostgreSQL

ORM: Prisma

Package Manager: Bun

📦 Installation & Setup 

1️⃣ Clone the repository

git clone <your-repo-url>
cd devbin

2️⃣ Install dependencies

Using Bun:

bun install

or

bun add

3️⃣ Setup environment variables

Create a .env file:

DATABASE_URL="your_postgres_connection_string"
JWT_SECRET="your_secret"

4️⃣ Run database migrations

bunx prisma migrate dev

5️⃣ Run the development server

bun dev

📁 Frontend Folder Structure

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


✨ Features

🔍 Browse developer tools

📌 Save tools to profile

👤 User authentication

🏷 Categorized tool listing

⚡ Fast and minimal UI