import express from "express";

import {
  createVisitor,
  deleteVisitor,
  getAllVisitors,
  getVisitorDetail,
  updateVisitor,
} from "../controllers/visitor.controller.js";

const router = express.Router();

router.route("/").get(getAllVisitors);
router.route("/:id").get(getVisitorDetail);
router.route("/").post(createVisitor);
router.route("/:id").patch(updateVisitor);
router.route("/:id").delete(deleteVisitor);

export default router;
