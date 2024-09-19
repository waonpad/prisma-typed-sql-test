import { postsWithAuthor, userById } from "@prisma/client/sql";
import { prisma } from "./lib/prisma/client";

const userId = 1;
const posts = await prisma.$queryRawTyped(postsWithAuthor(userId));

// const posts = await prisma.post.findMany({
//   where: {
//     authorId: userId,
//   },
//   include: {
//     author: true,
//   },
// });

console.log(posts);

const user = await prisma.$queryRawTyped(userById(userId));

console.log(user);
