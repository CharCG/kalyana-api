const express = require("express");
const app = express();

const dhammapadaRoutes = require("./routes/dhammapadaRoutes");
const parittaRoutes = require("./routes/parittaRoutes");

app.get("/", (req, res) => {
    res.json({
        status: "200",
        endpoints: {
            dhammapada: [
                "/dhammapada/chapters",
                "/dhammapada/chapters/:chapterNumber",
                "/dhammapada/chapters/:chapterNumber/verses",
                "/dhammapada/chapters/:chapterNumber/verses/:verseNumber"
            ],
            paritta: [
                "/paritta/chants",
                "/paritta/chants/:chantId"
            ]
        }
    })
});

app.use("/dhammapada", dhammapadaRoutes);
app.use("/paritta", parittaRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        status: "404",
        error: "Bad Request",
        message: "The requested resource does not exist."
    });
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        status: "500",
        error: "Internal Server Error",
        message: "An unexpected error occured, please try again later."
    });
});

module.exports = app;