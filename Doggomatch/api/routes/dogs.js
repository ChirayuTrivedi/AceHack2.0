import express from "express";
import {
  addDog,
  // deleteDog,
  getDog,
  // updateDog,
//   deletePostfromcart,
} from "../controllers/dog.js";

const router = express.Router();

router.get("/", getDog);
// router.get("/:id", getDog);
router.post("/", addDog);
// router.delete("/:id", deletePost);
// router.delete("/cart/:id", deletePostfromcart);

// router.put("/:id", updatePost);

export default router;
