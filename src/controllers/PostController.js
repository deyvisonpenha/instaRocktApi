const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;


module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
    },
    async storeFile(req, res) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        return res.json(req.file.path)
    },

    async store(req, res) {
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )

        fs.unlinkSync(req.file.path);

        cloudinary.config({
            cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
            api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
            api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
        });

        cloudinary.uploader.upload(`./uploads/resized/${fileName}`, async function (error, result) {

            if (error) {
                return res.json(error);
            }

            const post = await Post.create({
                author,
                place,
                description,
                hashtags,
                image: result.url,
            });

            req.io.emit('post', post)

            return res.json(post);
        });
    }
};