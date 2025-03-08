const dhammapadaData = require("../data/dhammapada.json");

const getAllChapters = (req, res) => {
    res.json(dhammapadaData.chapters);
}

const getChapterByNumber = (req, res) => {
    const chapterNumber = parseInt(req.params.chapterNumber);
    const chapter = dhammapadaData.chapters.find(chapter => chapter.chapterNumber === chapterNumber);

    if (chapter) {
        res.json(chapter);
    } else {
        res.status(404).json({
            status: "404",
            error: "Bad Request",
            message: "The requested resource does not exist."
        });
    }
}

const getAllVersesInChapter = (req, res) => {
    const chapterNumber = parseInt(req.params.chapterNumber);
    const chapter = dhammapadaData.chapters.find(chapter => chapter.chapterNumber === chapterNumber);

    if (chapter) {
        res.json(chapter.verses);
    } else {
        res.status(404).json({
            status: "404",
            error: "Bad Request",
            message: "The requested resource does not exist."
        });
    }
}

const getVerseInChapter = (req, res) => {
    const chapterNumber = parseInt(req.params.chapterNumber);
    const verseNumber = parseInt(req.params.verseNumber);
    const chapter = dhammapadaData.chapters.find(chapter => chapter.chapterNumber === chapterNumber);

    if (chapter) {
        const verse = chapter.verses.find(verse => Array.isArray(verse.verseNumber) ? verse.verseNumber.includes(verseNumber) : verse.verseNumber === verseNumber); 
        if (verse) {
            res.json(verse);
        } else {
            res.status(404).json({
                status: "404",
                error: "Bad Request",
                message: "The requested resource does not exist."
            });
        }
    } else {
        res.status(404).json({
            status: "404",
            error: "Bad Request",
            message: "The requested resource does not exist."
        });
    }
}

const getAllVerses = (req, res) => {
    const verses = dhammapadaData.chapters.reduce((acc, chapter) => {
        return acc.concat(chapter.verses);
    }, []);

    res.json(verses);
}

const getVerseByNumber = (req, res) => {
    const verseNumber = parseInt(req.params.verseNumber);
    const verse = dhammapadaData.chapters.reduce((acc, chapter) => {
        return acc.concat(chapter.verses);
    }, []).find(verse => Array.isArray(verse.verseNumber) ? verse.verseNumber.includes(verseNumber) : verse.verseNumber === verseNumber);

    if (verse) {
        res.json(verse);
    } else {
        res.status(404).json({
            status: "404",
            error: "Bad Request",
            message: "The requested resource does not exist."
        });
    }
}

module.exports = {
    getAllChapters,
    getChapterByNumber,
    getAllVersesInChapter,
    getVerseInChapter,
    getAllVerses,
    getVerseByNumber
}