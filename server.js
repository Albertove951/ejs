const express = require('express'); 
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan( 'dev' ))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.set('views', './views');

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(8000, () => {
    console.log("server is listening on local host 8000")
})
