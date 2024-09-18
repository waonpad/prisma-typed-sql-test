import { type Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (input: Prisma.UserCreateWithoutPostsInput) => {
  return prisma.user.create({
    data: input,
  });
};

const createPost = async (input: Prisma.PostCreateInput) => {
  return prisma.post.create({
    data: input,
  });
};

const main = async () => {
  try {
    const createdUser = await createUser({
      name: "John Dough",
      email: `john-${Math.random()}@example.com`,
    });

    console.log(createdUser);

    const createdPost = await createPost({
      title: "Hello, World!",
      content: "This is my first post.",
      author: {
        connect: { id: createdUser.id },
      },
    });

    console.log(createdPost);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

main();
