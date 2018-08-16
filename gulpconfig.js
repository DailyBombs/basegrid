const jsAppBase = './app/js/app/';
const scssCoreBase = './src/scss/';
const scssRichTextBase = './src/scss/rich-text';

const paths = {
    script: {
        app:  [
            jsAppBase + 'partials/base.js',
            jsAppBase + 'main.js'
        ],
        vendor: [
        ]
    },
    style: {
    	core: scssCoreBase + 'core.scss',
        richText: [
            scssRichTextBase + '**/*.scss',
            scssRichTextBase + '**/*.css'
        ]
    }
}

exports.paths = paths;
