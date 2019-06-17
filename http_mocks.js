const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/get-products', function (req, res) {
    const data = [
        {
            "id": 100,
            "name": "Sony KD55XF7002 55-Inch 4K HDR Ultra HD Smart TV",
            "description": "With 4K X-Reality PRO, every image is upscaled closer to true 4K quality for remarkable clarity. Images are sharpened and refined in real time, revealing extra detail in the books and architecture of the library. This TV brings you the excitement of movies and games in 4K HDR. It handles a variety of HDR formats, including HDR10 and Hybrid Log-Gamma. Your listening is as lifelike as your viewing. ClearAudio+ fine tunes TV sound for an immersive, emotionally enriching experience that seems to surround you.",
            "image": "https://images-na.ssl-images-amazon.com/images/I/917G5Tj3fdL._SX679_.jpg",
            "currency": "usd",
            "price": "15"
        },
        {
            "id": 101,
            "name": "Sony KD55XF7002 55-Inch 4K HDR Ultra HD Smart TV",
            "description": "With 4K X-Reality PRO, every image is upscaled closer to true 4K quality for remarkable clarity. Images are sharpened and refined in real time, revealing extra detail in the books and architecture of the library. This TV brings you the excitement of movies and games in 4K HDR. It handles a variety of HDR formats, including HDR10 and Hybrid Log-Gamma. Your listening is as lifelike as your viewing. ClearAudio+ fine tunes TV sound for an immersive, emotionally enriching experience that seems to surround you.",
            "image": "https://images-na.ssl-images-amazon.com/images/I/917G5Tj3fdL._SX679_.jpg",
            "currency": "usd",
            "price": "20"
        },
        {
            "id": 102,
            "name": "Sony KD55XF7002 55-Inch 4K HDR Ultra HD Smart TV",
            "description": "With 4K X-Reality PRO, every image is upscaled closer to true 4K quality for remarkable clarity. Images are sharpened and refined in real time, revealing extra detail in the books and architecture of the library. This TV brings you the excitement of movies and games in 4K HDR. It handles a variety of HDR formats, including HDR10 and Hybrid Log-Gamma. Your listening is as lifelike as your viewing. ClearAudio+ fine tunes TV sound for an immersive, emotionally enriching experience that seems to surround you.",
            "image": "https://images-na.ssl-images-amazon.com/images/I/917G5Tj3fdL._SX679_.jpg",
            "currency": "usd",
            "price": "33"
        },
        {
            "id": 103,
            "name": "Sony KD55XF7002 55-Inch 4K HDR Ultra HD Smart TV",
            "description": "With 4K X-Reality PRO, every image is upscaled closer to true 4K quality for remarkable clarity. Images are sharpened and refined in real time, revealing extra detail in the books and architecture of the library. This TV brings you the excitement of movies and games in 4K HDR. It handles a variety of HDR formats, including HDR10 and Hybrid Log-Gamma. Your listening is as lifelike as your viewing. ClearAudio+ fine tunes TV sound for an immersive, emotionally enriching experience that seems to surround you.",
            "image": "https://images-na.ssl-images-amazon.com/images/I/917G5Tj3fdL._SX679_.jpg",
            "currency": "usd",
            "price": "76"
        },
        {
            "id": 104,
            "name": "Sony KD55XF7002 55-Inch 4K HDR Ultra HD Smart TV",
            "description": "With 4K X-Reality PRO, every image is upscaled closer to true 4K quality for remarkable clarity. Images are sharpened and refined in real time, revealing extra detail in the books and architecture of the library. This TV brings you the excitement of movies and games in 4K HDR. It handles a variety of HDR formats, including HDR10 and Hybrid Log-Gamma. Your listening is as lifelike as your viewing. ClearAudio+ fine tunes TV sound for an immersive, emotionally enriching experience that seems to surround you.",
            "image": "https://images-na.ssl-images-amazon.com/images/I/917G5Tj3fdL._SX679_.jpg",
            "currency": "usd",
            "price": "12"
        }
    ];
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(data));
});

app.get('/convert-currency', function (req, res) {
    const usd_data = {
        "from": [
            {
                "mid": 1
            }
        ]
    };

    const gbp_data = {
        "from": [
            {
                "mid": 1.27
            }
        ]
    };

    res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });

    if (req.headers['x-currency'] === 'gbp') {
        res.end(JSON.stringify(gbp_data));
    } else {
        res.end(JSON.stringify(usd_data));
    }
});

app.listen(1080, () => console.log('Example app listening at http://localhost:1080'));