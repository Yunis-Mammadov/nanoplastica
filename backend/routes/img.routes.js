const express = require("express")
const img_router = express.Router()
const imgController = require("../controller/img.controller")
const imgPostMiddleware = require("../middleware/img.middleware")


img_router.get("/", imgController.getAll)

img_router.get("/:id", imgController.getOne)

img_router.delete("/:id", imgController.delete)

img_router.post("/", imgPostMiddleware ,imgController.post)

img_router.put("/:id", imgController.edit)



module.exports = img_router