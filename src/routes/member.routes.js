import express from "express";
import MemberController from "../controllers/member.controller.js";

const router = express.Router();

router.post("/api/members", MemberController.create);

router.get("/api/members", MemberController.getAll);

router.get("/api/members/:id", MemberController.getMember);

router.put("/api/members/:id", MemberController.update);

router.delete("/api/members/:id", MemberController.delete);

export default router;
