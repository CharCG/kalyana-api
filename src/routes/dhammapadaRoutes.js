const express = require("express");
const router = express.Router();

const dhammapadaController = require("../controllers/dhammapadaController");

router.get("/chapters", dhammapadaController.getAllChapters);
router.get("/chapters/:chapterNumber", dhammapadaController.getChapterByNumber);
router.get("/chapters/:chapterNumber/verses", dhammapadaController.getAllVersesInChapter);
router.get("/chapters/:chapterNumber/verses/:verseNumber", dhammapadaController.getVerseInChapter);

module.exports = router;