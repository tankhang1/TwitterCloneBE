import { PrismaClient } from "@prisma/client";
import { Router } from "express";
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
  res.json(posts);
});

router.post("/", async (req, res) => {
  const data = req.body;
  try {
    const post = await prisma.post.create({
      data: data,
    });

    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

//like

router.post("/updateLike", async (req, res) => {
  const { userId, postId, numberLike, isLike } = req.query;
  try {
    const post = await prisma.post.update({
      where: { userId: +userId!, id: +postId! },
      data: {
        numberLike: isLike === "true" ? +numberLike! + 1 : +numberLike! - 1,
      },
    });
    res.json({ id: post.id, numberLike: post.numberLike });
  } catch (error) {
    res.sendStatus(404);
  }
});
export default router;
