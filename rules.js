module.exports = {
	objectCurlySpacingRule: [
		'error',
		'always',
	],
	objectPropertyNewlineRule: [
		'error',
		{ allowMultiplePropertiesPerLine: false },
	],
	arrayBracketNewlineRule: [
		'error',
		{
			multiline: true,
			minItems: 3,
		},
	],
	maxLenRule: [
		'error',
		{
			code: 140,
			ignoreStrings: true,
			ignoreUrls: true,
			ignorePattern: '^import .*',
		},
	],
};
