const { check, validationResult } = require("express-validator");
const { home, addMovie, viewMovie, updatePostMovie, deletMovie } = require("../controllers/home");

module.exports = {
    home: (app) => {
        app.get('/', (req, res) => {
            home(app, req, res);
        });
        app.get('/api/filmes', (req, res) => {
            home(app, req, res);
        });
    },
    insertMovie: (app) => {
        app.post('/api/filmes', (req, res) => {
            console.log("[Rota salvar Filme]")
            addMovie(app, req, res);
        });
    },
    searchMovie: (app) => {
        app.get('/api/filmes/:id', (req, res) => {
            viewMovie(app, req, res);
        });
    },
    editMovie: (app) => {
        app.put('/api/filmes/:id', (req, res) => {
            console.log("[Rota Editar Filme]")
            updatePostMovie(app, req, res);
        });
    },
    deletMovie: (app) => {
        app.delete('/api/filmes/:id', (req, res) => {
            deletMovie(app, req, res);
        });
    }
}

