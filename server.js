const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/teste', (req, res) => {
    res.send('Servidor está funcionando!');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
