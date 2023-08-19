import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();
//get all user
// router.get("/", async (req, res) => {
//   const allUser = await prisma.user.findMany();
//   res.json(allUser);
// });
// // get one user by email
// router.get("/:email", async (req, res) => {
//   const { email } = req.params;
//   // const info= await prisma.user.findUniqueOrThrow({
//   //   select:{

//   //   }
//   // })
//   res.json(email);
// });

router.get("/", async (req, res) => {
  const { id } = req.query;
  if (id !== undefined) {
    try {
      const user = await prisma.user.findFirst({
        where: { id: { equals: +id! } },
      });
      res.json(user);
    } catch (error) {
      res.status(404).send("Not Found User");
    }
  }
  res.status(404).send("Not Found User");
});
router.post("/", async (req, res) => {});
export default router;
