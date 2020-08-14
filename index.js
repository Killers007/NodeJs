var express = require('express'); //import express 
var app = express();

var server = app.listen(process.env.PORT || 8080, function() {
    console.log("Server Berjalan dengan port : 8080");
});


//buat data yang akan dikirimkan berupa JSON
var pegawai = {
    "pegawai": [{
            "id": 1,
            "nama": "Faizal Damar R",
            "tanggal_lahir": "12122020",
            "jenis_kelamin": "L"
        },
        {
            "id": 2,
            "nama": "Yanuar Hidayanto",
            "tanggal_lahir": "20122020",
            "jenis_kelamin": "L"
        },
        {
            "id": 3,
            "nama": "Ahmad Juhdi",
            "tanggal_lahir": "20122020",
            "jenis_kelamin": "L"
        },
    ]
}

app.get('/pegawai', function(req, res) {
    res.send(pegawai);
});