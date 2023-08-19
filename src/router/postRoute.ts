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
    await prisma.post.create({
      data: data,
    });
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

//like

router.post("/updateLike", async (req, res) => {
  const { userId, postId, numberLike } = req.query;

  try {
    const post = await prisma.post.update({
      where: { userId: +userId!, id: +postId! },
      data: { numberLike: +numberLike! + 1 },
    });
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});
export default router;
