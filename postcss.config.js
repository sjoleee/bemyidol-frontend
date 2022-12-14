// 설정변경하면 .next 디렉토리 지워야 제대로 반영됨.
// https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins
// https://tailwindcss.com/docs/using-with-preprocessors
// https://github.com/csstools/postcss-preset-env/blob/main/src/lib/plugins-by-id.js#L36
module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nesting',
        tailwindcss: {},
        autoprefixer: {},
    }
}
