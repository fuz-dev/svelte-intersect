// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: 'svelte-intersect',
	description: 'a Svelte action for IntersectionObserver',
	version: '0.14.0',
	license: 'MIT',
	icon: '💠',
	public: true,
	homepage: 'https://ryanatkn.github.io/svelte-intersect/',
	repository: 'https://github.com/ryanatkn/svelte-intersect',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/svelte-intersect/issues',
	funding: 'https://www.ryanatkn.com/funding',
	type: 'module',
	engines: {node: '>=20.12'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {svelte: '^5.0.0-next.0'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.22.0',
		'@ryanatkn/eslint-config': '^0.1.3',
		'@ryanatkn/fuz': '^0.105.1',
		'@ryanatkn/fuz_code': '^0.15.0',
		'@ryanatkn/gro': '^0.124.0',
		'@ryanatkn/moss': '^0.6.0',
		'@sveltejs/adapter-static': '^3.0.2',
		'@sveltejs/kit': '^2.5.17',
		'@sveltejs/package': '^2.3.2',
		'@sveltejs/vite-plugin-svelte': '^3.1.1',
		'@typescript-eslint/eslint-plugin': '^7.13.1',
		'@typescript-eslint/parser': '^7.13.1',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.41.0',
		prettier: '^3.3.2',
		'prettier-plugin-svelte': '^3.2.5',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.0.0-next.165',
		'svelte-check': '^3.8.2',
		tslib: '^2.6.3',
		typescript: '^5.5.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn'},
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
		'./package.json': './package.json',
	},
} satisfies Package_Json;

export const src_json = {
	name: 'svelte-intersect',
	version: '0.14.0',
	modules: {
		'.': {
			path: 'index.ts',
			declarations: [
				{name: 'Intersect_Params', kind: 'type'},
				{name: 'Intersect_Params_Or_Callback', kind: 'type'},
				{name: 'intersect', kind: 'function'},
				{name: 'On_Intersect', kind: 'type'},
				{name: 'Intersect_State', kind: 'type'},
				{name: 'On_Disconnect', kind: 'type'},
				{name: 'Disconnect_State', kind: 'type'},
			],
		},
		'./package.json': {path: 'package.json', declarations: []},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
