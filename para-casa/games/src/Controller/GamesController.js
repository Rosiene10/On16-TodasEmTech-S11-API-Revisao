const { response, request } = require("../app")
const gamesJson=require("../models/games.json")

const getAll=(request,response)=>{
    try{
        response.status(200).json([{
           "mensagem":gamesJson
        }])
    }catch(err){
        response.status(500).json([{
            "mensagem":"problema no servidor"
        }])

    }
}

const getGame=(request,response)=>{
    const idRequest=request.params.id
    const gameFound=gamesJson.find(games=>games.id==idRequest)
    if(gameFound){
        response.status(200).send([{
            "mensagem":gameFound
        }])
    }else{
        response.status(404).send([{
            "mensagem":"jogo não encontrado"
        }])
    }
}

const addNewGame = (request, response) => {
    const titleRequest = request.body.title
    const launchYearRequest = request.body.launchYear
    const consolesRequest = request.body.consoles
    const likedRequest = request.body.liked
    const newId = gamesJson.length + 1

    const newGame = {
        id: newId,
        title: titleRequest,
        launchYear: launchYearRequest,
        consoles: consolesRequest,
        liked: likedRequest
    }

    gamesJson.push(newGame)
    response.status(200).json([{
        "mensagem": "novo jogo adicionado!",
        newGame
    }])
}

const updateGame = (request, response) => {
    const idRequest = request.params.id
    const gameRequest = request.body

    const gameEncontrado = gamesJson.findIndex(game => game.id == idRequest)
    gamesJson.splice(gameEncontrado, 1, gameRequest)

    response.status(200).json([{
        "mensagem": "jogo atualizado!",
        gamesJson
    }])
}

const deleteGame = (request, response) => {
    const idRequest = request.params.id
    const gameEncontrado = games.findIndex(game => game.id == idRequest)
    games.splice(gameEncontrado, 1)

    response.status(200).json([{
        "mensagem": "jogo excluído!",
        games
    }])
}

const likeGame = (request, response) => {
    const idRequest = request.params.id
    const gameEncontrado = gamesJson.find(game => game.id == idRequest)

    if(gameEncontrado.liked === true){
        gameEncontrado.liked = false
    } else {
        gameEncontrado.liked = true
    }

    response.status(200).json([{
        "mensagem": "jogo curtido/descurtido!",
        gameEncontrado
    }])
}


module.exports={
getAll,
getGame,
addNewGame,
updateGame,
deleteGame,
likeGame



}