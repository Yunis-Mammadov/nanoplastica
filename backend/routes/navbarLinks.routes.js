const express = require("express")
const navbarLinks_router = express.Router()
const navbarLinksController = require("../controller/navbarLinks.contoller")
const navbarLinksPostMiddleware = require("../middleware/navbarLinks.middleware")


navbarLinks_router.get("/", navbarLinksController.getAll)

navbarLinks_router.get("/:id", navbarLinksController.getOne)

navbarLinks_router.delete("/:id", navbarLinksController.delete)

navbarLinks_router.post("/", navbarLinksPostMiddleware, navbarLinksController.post)

navbarLinks_router.put("/:id", navbarLinksController.edit)


module.exports = navbarLinks_router