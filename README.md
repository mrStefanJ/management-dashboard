# Next School Management Dashboard

## Getting Started
1. Install [Docker](https://www.docker.com/) desktop app and when ot dowloads and install, run it. Next you need to create port and to do that go to Search and type postgres and click on "Run".

2. Install [Prisma](https://www.prisma.io/?via=start&gad_source=1), go to "Get started with ORM", scroll down and select database Postgres SQL. Follow instruction how to install and connect database.

At the end write the command ```npx prisma studio``` on your terminal.

3. I am using [Clerk](https://dashboard.clerk.com) authentication. Go to page login or register and create users and there roles(student, parent, teacher and admin). But follow [steps](https://clerk.com/docs/quickstarts/nextjs) how to use it in Next.js

4. Run the development server:

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

And on the command ``npx prisma studio`` it will open prisma and display list of data(parents, students, teachers, subjects...)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js](https://nextjs.org/learn)
