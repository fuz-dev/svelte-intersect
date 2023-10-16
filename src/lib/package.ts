import type {PackageJson} from '@grogarden/gro/package_json.js';

export const package_json = {
	name: '@fuz.dev/svelte_intersect',
	description: 'a Svelte action for IntersectionObserver',
	license: 'MIT',
	version: '0.5.0',
	type: 'module',
	homepage: 'https://intersect.fuz.dev/',
	repository: 'https://github.com/fuz-dev/svelte_intersect',
	engines: {node: '>=20.7'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	devDependencies: {
		'@changesets/changelog-git': '^0.1.14',
		'@feltjs/eslint-config': '^0.4.0',
		'@fuz.dev/fuz': '^0.73.0',
		'@fuz.dev/fuz_code': '^0.3.1',
		'@fuz.dev/fuz_library': '^0.11.0',
		'@grogarden/gro': '^0.95.3',
		'@grogarden/util': '^0.15.0',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.25.2',
		'@sveltejs/package': '^2.2.2',
		'@typescript-eslint/eslint-plugin': '^6.8.0',
		'@typescript-eslint/parser': '^6.8.0',
		eslint: '^8.51.0',
		'eslint-plugin-svelte': '^2.34.0',
		prettier: '^3.0.3',
		'prettier-plugin-svelte': '^3.0.3',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.1',
		'svelte-check': '^3.5.2',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'.': {default: './dist/index.js', types: './dist/index.d.ts'},
		'./intersect.js': {default: './dist/intersect.js', types: './dist/intersect.d.ts'},
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
	},
} satisfies PackageJson;
