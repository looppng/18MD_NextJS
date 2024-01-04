This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Authentication Setup](#authentication-setup)
- [Database](#database)
  - [Data Schema](#data-schema)
- [API Routes](#api-routes)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

Clone the repository:

   ```bash
   git clone https://github.com/looppng/18MD_NextJS
   cd 18MD_NextJS

   npm install
   npm run dev
   ```

### Authentication Setup

Local Authentication ( Email and Password )

Create a .env file in the root of your project and add the following:

<details>
  <summary><strong>Environment Variables</strong></summary>

  ```bash
  MONGODB_URI=mongodb+srv://egilskalvans2:IqGWfMyjQWIAnzAv@nextblogs.3lzvhoq.mongodb.net/?retryWrites=true&w=majority
  NEXTAUTH_SECRET="secretkeygoeshere"
  NEXTAUTH_URL="http://localhost:3000"
  ```
</details

Click the "Log In" button in the Navbar to log in using the sample user account.
To access the admin panel, navigate to /adminPanel. If not authenticated, you will be redirected to the login page.

Sample Admin User

- Username: admin
- Email: admin@test.com
- Password: password

## Database

### Data Schema

#### Blogs Collection

- **_id**: ObjectId
- **title**: String
- **content**: String
- **tag**: String
- **createdAt**: Date
- **updatedAt**: Date

#### Comments Collection

- **_id**: ObjectId
- **blogId**: String (reference to Blogs collection)
- **comment**: String
- **author**: String
- **createdAt**: Date
- **updatedAt**: Date

#### Tags Collection

- **_id**: ObjectId
- **tag**: String

#### Users Collection

- **_id**: ObjectId
- **username**: String
- **password**: String (hashed)
- **email**: String
- **image**: String
- **createdAt**: Date
- **updatedAt**: Date


## API Routes

```bash
api/
|-- auth/
|   |-- [...nextauth].ts
|
|-- blogs/
|   |-- route.ts
|   |-- [id]/
|       |-- route.ts
|   |-- comments/
|       |-- route.ts
|   |-- tags/
|       |-- route.ts
|       |-- [tag]/
|           |-- route.ts
|
|-- user/
|   |-- route.ts
```




## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
