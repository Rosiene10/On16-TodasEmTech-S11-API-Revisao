const express = require("express")
const router = express.Router()
const controller = require("../Controller/GamesController")


router.get("/listar",controller.getAll)
router.get("/buscar/:id",controller.getGame)
router.post("/newgame", controller.addNewGame)
router.put("/atualizar/:id", controller.updateGame)
router.delete("/delete/:id", controller.deleteGame )
router.patch("/like/:id", controller.likeGame)

module.exports=router


