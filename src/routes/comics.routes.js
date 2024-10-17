import { Router } from "express";
import {
    createComic,
    getComics,
    getComic,
    deleteComic
} from "../controllers/comics.controller.js";

const router = Router();

/**
 * @swagger
 * /comics/createcomic:
 *   post:
 *     summary: Create a new comic
 *     description: Create a new comic with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               authorName:
 *                 type: string
 *               yearOfPublication:
 *                 type: integer
 *               price:
 *                 type: number
 *               discount:
 *                 type: number
 *               numberOfPages:
 *                 type: integer
 *               condition:
 *                 type: string
 *                 enum: [new, used]
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Comic created successfully.
 *       400:
 *         description: Bad request, missing or invalid fields.
 */
router.route("/createcomic").post(createComic);

/**
 * @swagger
 * /comics/get-all-comics:
 *   get:
 *     summary: Retrieve all comics
 *     description: Fetch a list of all comics.
 *     responses:
 *       200:
 *         description: A list of comics.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   authorName:
 *                     type: string
 *                   yearOfPublication:
 *                     type: integer
 *                   price:
 *                     type: number
 *                   discount:
 *                     type: number
 *                   numberOfPages:
 *                     type: integer
 *                   condition:
 *                     type: string
 *                   description:
 *                     type: string
 */
router.route("/get-all-comics").get(getComics);

/**
 * @swagger
 * /comics/get-comic/{title}:
 *   get:
 *     summary: Get a specific comic by title
 *     description: Retrieve details of a comic using its title.
 *     parameters:
 *       - in: path
 *         name: title
 *         required: true
 *         description: The title of the comic to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comic found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     authorName:
 *                       type: string
 *                     yearOfPublication:
 *                       type: integer
 *                     price:
 *                       type: number
 *                     discount:
 *                       type: number
 *                     numberOfPages:
 *                       type: integer
 *                     condition:
 *                       type: string
 *                     description:
 *                       type: string
 *       404:
 *         description: Comic not found.
 *       500:
 *         description: Internal Server Error.
 */

router.route("/get-comic/:title").get(getComic);

/**
 * @swagger
 * /comics/delete-comic/{title}:
 *   patch:
 *     summary: Delete a comic
 *     description: Delete a comic by its title.
 *     parameters:
 *       - in: path
 *         name: title
 *         required: true
 *         description: The title of the comic to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comic deleted successfully.
 *       404:
 *         description: Comic not found.
 */
router.route("/delete-comic/:title").patch(deleteComic);

export default router;
