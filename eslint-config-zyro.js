const {
	objectCurlySpacingRule,
	objectPropertyNewlineRule,
	arrayBracketNewlineRule,
	maxLenRule,
} = require('./rules');

module.exports = {
	plugins: [
		'import',
		'modules-newline',
		'destructuring-newline',
		'destructure-depth',
		'unicorn',
	],
	extends: ['airbnb-base'],
	rules: {
		// Import rules
		'import/newline-after-import': ['error'],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				groups: [
					'builtin',
					'external',
					'internal',
					'sibling',
					'parent',
				],
				alphabetize: { order: 'asc' },
			},
		],
		'import/prefer-default-export': 'off',
		'modules-newline/import-declaration-newline': 'error',
		'modules-newline/export-declaration-newline': 'error',
		'no-restricted-imports': [
			'error',
			{ patterns: ['..*'] },
		],

		// Unicorn rules
		'unicorn/empty-brace-spaces': 'error',
		'unicorn/catch-error-name': 'error',
		'unicorn/error-message': 'error',
		'unicorn/escape-case': 'error',
		'unicorn/no-unreadable-array-destructuring': 'error',
		'unicorn/no-useless-undefined': 'error',
		'unicorn/no-zero-fractions': 'error',
		'unicorn/prefer-add-event-listener': 'error',
		'unicorn/prefer-array-find': 'error',
		'unicorn/prefer-array-flat-map': 'error',
		'unicorn/prefer-array-some': 'error',
		'unicorn/prefer-date-now': 'error',
		'unicorn/prefer-includes': 'error',
		'unicorn/prefer-keyboard-event-key': 'error',
		'unicorn/prefer-number-properties': 'error',
		'unicorn/prefer-spread': 'error',
		'unicorn/no-abusive-eslint-disable': 'error',
		'unicorn/no-array-push-push': 'error',
		'unicorn/no-nested-ternary': 'error',
		'unicorn/better-regex': 'error',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				extendDefaultReplacements: false,
				replacements: {
					args: false,
					props: false,
					prop: false,
					refs: false,
					ref: false,
					env: false,
				},
			},
		],
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
				ignore: ['.*.spec.js'],
			},
		],

		// Spacing rules
		'padded-blocks': [
			'error',
			'never',
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: [
					'const',
					'let',
					'var',
				],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: [
					'const',
					'let',
					'var',
				],
				next: [
					'const',
					'let',
					'var',
				],
			},
			{
				blankLine: 'always',
				prev: ['block-like'],
				next: ['*'],
			},
		],
		'newline-before-return': ['error'],
		indent: [
			'error',
			'tab',
		],
		'no-tabs': [
			'error',
			{ allowIndentationTabs: true },
		],
		curly: 'error',

		// Object spacing
		'destructuring-newline/object-property-newline': 2,
		'object-curly-spacing': objectCurlySpacingRule,
		'object-curly-newline': [
			'error',
			{
				multiline: true,
				minProperties: 2,
			},
		],
		'object-property-newline': objectPropertyNewlineRule,
		'array-bracket-newline': arrayBracketNewlineRule,
		'array-element-newline': [
			'error',
			{
				ArrayExpression: {
					multiline: true,
					minItems: 2,
				},
				ArrayPattern: {
					multiline: true,
					minItems: 3,
				},
			},
		],

		// Miscellaneous
		'multiline-comment-style': [
			'error',
			'starred-block',
		],
		'no-console': [
			'error',
			{ allow: ['error'] },
		],
		'destructure-depth/max-depth': ['error'],
		'class-methods-use-this': 'off',
		'max-len': maxLenRule,
	},
};
