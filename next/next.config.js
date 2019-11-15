
// next.config.js
const withCSS = require('@zeit/next-css');
module.exports = () => withCSS({
    webpack(config, options) {
        const { isServer } = options;
        if (!options.defaultLoaders) {
            throw new Error(
                'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
            )
        }

        // https://github.com/zeit/next.js/issues/2060
        // Unshift polyfills in main entrypoint.
        const originalEntry = config.entry;
        config.entry = async () => {
            const entries = await originalEntry();
            if (entries['main.js'] && !entries['main.js'].includes(__dirname + '/polyfills.js')) {
                entries['main.js'].unshift(__dirname + '/polyfills.js');
            }
            return entries;
        };

        const assetPrefix = config.assetPrefix || "";
        const limit = config.inlineImageLimit || 8192;

        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|mp3)$/,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit,
                        fallback: "file-loader",
                        publicPath: `${assetPrefix}/_next/static/images/`,
                        outputPath: `${isServer ? "../" : ""}static/images/`,
                        name: "[name]-[hash].[ext]"
                    }
                }
            ]
        });

        if (typeof config.webpack === 'function') {
            return config.webpack(config, options)
        }

        return config
    }
});
