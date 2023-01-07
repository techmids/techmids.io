module.exports = {
    module: {
        rules: [
            {
                test: /\.mdx?$/,
                use: [
                    {
                        loader: '@mdx-js/loader',
                        /** @type {import('@mdx-js/loader').Options} */
                        options: {}
                    }
                ]
            }
        ]
    }
}