const express = require("express");
const guestRouter = express.Router();

const {
	recommendRoom,
	addGuest,
	editGuest,
	deleteGuest,
} = require("../controllers/guest.controller");

guestRouter.post("/recommend", recommendRoom);
guestRouter.post("/", addGuest);
guestRouter.put("/:id", editGuest);
guestRouter.delete("/:id", deleteGuest);
module.exports = guestRouter;
