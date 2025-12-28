/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
        require('cssnano')({
            preset: 'lite',
        }),
    ]
}

module.exports = config
