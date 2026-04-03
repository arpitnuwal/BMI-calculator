const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('bmi', { bmi: null });
});

app.post('/calculate', (req, res) => {
    const { weight, height } = req.body;
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    res.render('bmi', { bmi });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});