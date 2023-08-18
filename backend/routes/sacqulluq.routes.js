const express = require("express")
const sacqulluq_router = express.Router()
const sacqulluqController = require("../controller/sacqulluq.controller")
const sacqulluqPostMiddleware = require("../middleware/sacqulluq.middleware")


sacqulluq_router.get("/", sacqulluqController.getAll)

sacqulluq_router.get("/:id", sacqulluqController.getOne)

sacqulluq_router.delete("/:id", sacqulluqController.delete)

sacqulluq_router.post("/", sacqulluqPostMiddleware ,sacqulluqController.post)

sacqulluq_router.put("/:id", sacqulluqController.edit)



module.exports = sacqulluq_router