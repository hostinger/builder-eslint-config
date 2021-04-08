const {
	objectCurlySpacingRule,
	objectPropertyNewlineRule,
	arrayBracketNewlineRule,
} = require('./rules');

module.exports = {
	extends: [
		// Enables vue-specific rules
		// https://vuejs.github.io/eslint-plugin-vue/rules/
		'plugin:vue/recommended',
		// Enables generic Zyro ESLint rules
		'./eslint-config-zyro.js',
	],
	rules: {
		// Spacing rules
		'vue/multiline-html-element-content-newline': [
			'error',
			{
				ignores: [],
			},
		],
		'vue/html-indent': [
			'error',
			'tab',
		],
		// Object spacing
		'vue/object-curly-spacing': objectCurlySpacingRule,
		'vue/object-curly-newline': [
			'error',
			{
				multiline: true,
				minProperties: 4,
			},
		],
		'vue/object-property-newline': objectPropertyNewlineRule,

		// Array spacing
		'vue/array-bracket-newline': arrayBracketNewlineRule,

		// Casing
		'vue/custom-event-name-casing': [
			'error',
			'kebab-case',
			{
				ignores: ['/^.*:click$/'],
			},
		],
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				registeredComponentsOnly: false,
				ignores: [
					'i18n',
					'masonry',
				],
			},
		],

		// Miscellaneous
		'vue/no-v-html': 'off',
		'vue/attributes-order': ['error'],
		'vue/max-len': 'off',
		// @vue/airbnb config just extends airbnb-base config and overrides 'no-param-reassign' rule. Since this config extends airbnb-base
		// by default already, there is no point in extending the whole @vue/airbnb config.
		// Copying this override rule is sufficient enough.
		// (https://github.com/vuejs/eslint-config-airbnb/blob/master/index.js)
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsFor: [
					'state', // for vuex state
					'acc', // for reduce accumulators
					'e', // for e.returnvalue
				],
			},
		],
	},
};
