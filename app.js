const express = require('express');
const app = express();
const gpio = require('onoff').Gpio;
const pir = new gpio(23, 'in', 'both');
const port = 3000;

app.use(express.static('client'));

app.listen(port, () => console.log(`Listening on port ${port}`));

pir.watch((err, value) => {
    console.log(value);
    if (value == 1){
        console.log('Motion Detected');
    } else {
        console.log('Motion Gone');
    }
});
