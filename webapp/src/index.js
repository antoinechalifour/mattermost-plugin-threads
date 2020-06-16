import manifest from './manifest';

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        const $style = document.createElement('style');
        document.head.appendChild($style);

        const styleSheet = $style.sheet;

        // Insert CSS Rule
        styleSheet.insertRule(`
          #virtualizedPostListContent .post--comment {
            display: none !important;
          }
        `, styleSheet.cssRules.length);
    }
}

window.registerPlugin(manifest.id, new Plugin());
