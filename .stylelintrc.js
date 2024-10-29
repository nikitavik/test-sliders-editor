// https://regex101.com/library/WfeFgL
// allowing double dashes (like "foo--bar") and digits
const kebab = '^_?[a-z0-9]+(?:-+[a-z0-9]+)*$';

// https://regex101.com/library/hPo3UO
// allowing sequential uppercase letters (like "getURL") and digits
const camel = '^([a-z\\d]+)(([A-Z\\d]+)*([a-z\\d]+)*)*$';

module.exports = {
    plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],

    customSyntax: 'postcss-scss',
    extends: ['stylelint-config-recommended'],

    rules: {
        'prettier/prettier': true,
        'selector-max-id': 0,
        'declaration-no-important': true,
        'comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
            },
        ],
        'declaration-block-single-line-max-declarations': 1,
        'function-no-unknown': null,
        'annotation-no-unknown': [
            true,
            {
                ignoreAnnotations: ['default'],
            },
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'use',
                    'include',
                    'each',
                    'mixin',
                    'extend',
                    'if',
                    'else',
                    'function',
                    'return',
                    'error',
                ],
            },
        ],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: ['else'],
            },
        ],
        'media-query-no-invalid': null,
        'rule-empty-line-before': [
            'always',
            {
                except: ['after-single-line-comment', 'first-nested'],
                ignore: ['after-comment'],
            },
        ],
        'custom-property-empty-line-before': [
            'always',
            {
                except: ['after-custom-property', 'after-comment', 'first-nested'],
            },
        ],
        'declaration-empty-line-before': [
            'always',
            {
                except: ['after-declaration', 'after-comment', 'first-nested'],
            },
        ],
        'order/order': [
            {
                type: 'at-rule',
                name: 'extend',
            },
            {
                type: 'at-rule',
            },
            'declarations',
            {
                type: 'at-rule',
                hasBlock: true,
            },
            'rules',
        ],
        'max-nesting-depth': null,
        'custom-property-pattern': kebab,
        'keyframes-name-pattern': kebab,
        'selector-class-pattern': camel,
        'scss/at-function-pattern': kebab,
        'scss/at-mixin-pattern': kebab,
        'scss/dollar-variable-pattern': kebab,
        'scss/percent-placeholder-pattern': camel,
        'scss/at-use-no-unnamespaced': true,
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-no-namespaced-assignment': true,
        'scss/no-duplicate-dollar-variables': [
            true,
            {
                ignoreInside: ['at-rule', 'nested-at-rule'],
                ignoreInsideAtRules: ['include'],
            },
        ],
        'scss/no-duplicate-mixins': true,
        'scss/operator-no-unspaced': true,
        'scss/at-extend-no-missing-placeholder': null,
        'scss/dollar-variable-empty-line-before': [
            'always',
            {
                except: ['after-dollar-variable', 'after-comment', 'first-nested'],
                ignore: ['after-comment', 'inside-single-line-block', 'after-dollar-variable'],
            },
        ],
        'property-no-unknown': [
            true,
            {
                checkPrefixed: true,
                ignoreSelectors: [':export'],
            },
        ],
        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                ignoreShorthands: ['font', 'flex'],
            },
        ],
        'length-zero-no-unit': [
            true,
            {
                ignore: ['custom-properties'],
            },
        ],
        'shorthand-property-no-redundant-values': true,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['export'],
            },
        ],
    },
};
