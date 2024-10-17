import mongoose, {Schema} from "mongoose";

const comicSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    authorName: {
        type: String,
        required: true
    },
    yearOfPublication: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: false
    },
    numberOfPages: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        enum: ['used', 'new'],
        required: true
    },
    description: {
        type: String,
        required: false
    },
});

export const Comics = mongoose.model('Comics', comicSchema);
