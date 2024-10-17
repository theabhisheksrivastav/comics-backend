import { Router } from "express";
import {
    createComic,
    getComics,
    getComic,
    deleteComic
} from "../controllers/comics.controller.js";

const router = Router();

router.route("/createcomic").post(createComic)
router.route("/get-all-comics").post(getComics)
router.route("/get-comic").post(getComic)
router.route("/delete-comic").post(deleteComic)


export default router;