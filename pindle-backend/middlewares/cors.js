const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3000'
];

function cors(req, res, next ) {
    const { origin } = req.headers; 
    /*if (origin === 'localhost:3000') {
        res.headers('Access-Control_Allow-Origin', 'localhost:3000')
    }
    next();*/
    
    if (allowedCors.includes(origin)) {
        res.headers('Access-Control_Allow-Origin', origin)
    }
    next();
}

module.exports = cors;