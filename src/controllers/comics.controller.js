import {Comics} from '../models/comics.model.js';
import { asyncHandler } from '../utils/asyncHandler.js'
import { apiError } from '../utils/apiError.js'
import { apiResponse } from '../utils/apiResponse.js'


const createComic = asyncHandler(async (req, res, next) => {

    try {
        const {title, authorName, yearOfPublication, price, discount, numberOfPages, condition, description} = req.body
        if (!title || !authorName || !yearOfPublication || !price  || !numberOfPages || !condition ) {
            throw new Error('Missing required fields')
        }
        if (condition !== 'new' && condition !== 'used') {
            throw new Error('Invalid condition')
        }
        if (discount < 0 || discount > 100) {
            throw new Error('Invalid discount')
        }
        if (price < 0) {
            throw new Error('Invalid price')
        }
        if (numberOfPages < 0) {
            throw new Error('Invalid number of pages')
        }
        if (yearOfPublication < 0) {
            throw new Error('Invalid year of publication')
        }
        if (description.length > 255) {
            throw new Error('Description is too long')
        }
        const comic = await Comics.create({
            title,
            authorName,
            yearOfPublication,
            price,
            discount,
            numberOfPages,
            condition,
            description
        })
        return res.status(201).json(new apiResponse(201, 'Comic created', comic))
    } catch (error) {
        next(apiError(400, error.message))
    }

})

const getComics = asyncHandler(async (req, res, next) => {
    try {
        const comics = await Comics.find()
        return res.status(200).json(new apiResponse(200, 'Comics found', comics))
    } catch (error) {
        next(apiError(500, error.message))
    }
})

const getComic = asyncHandler(async (req, res, next) => {
    try {
        const title = req.body.title
        const comic = await Comics.findOne({title})
        if (!comic) {
            throw new Error('Comic not found')
        }
        return res.status(200).json(new apiResponse(200, 'Comic found', comic))
    } catch (error) {
        next(apiError(404, error.message))
    }
})

const deleteComic = asyncHandler(async (req, res, next) => {
    try {
        const title = req.body.title
        const comic = await Comics.findOneAndDelete({title})
        if (!comic) {
            throw new Error('Comic not found')
        }
        return res.status(200).json(new apiResponse(200, 'Comic deleted', comic))
    } catch (error) {
        next(apiError(404, error.message))
    }
})

export {
    createComic,
    getComics,
    getComic,
    deleteComic
}