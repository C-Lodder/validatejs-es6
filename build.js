/*
 * Build script for Validate VanillaJS
 */

const Fs = require('fs');
const Path = require('path');
const Babel = require('@babel/core');
const Terser = require('terser');

const dir = {
	SRC  : Path.resolve(__dirname, 'src/'),
	DIST : Path.resolve(__dirname, 'dist/')
}

Fs.readFile(`${dir.SRC}/validate.js`, 'utf-8', (error, data) => {
	if (error) {
		console.error(`${error}`);
		process.exit(1);
	}

	// Minify the result and put it straight in the "dist"
	Fs.writeFile(`${dir.DIST}/validate.min.js`, Terser.minify(data).code, 'utf-8', (error, data) => {
		if (error) {
			console.error(`${error}`);
			process.exit(1);
		}
	});

	// Transpile the ES6 code
	const compiled = Babel.transform(data, {
		presets: [
			['@babel/preset-env']
		]
	}).code;

	// Minify and write the result to a new file in "dist"
	Fs.writeFile(`${dir.DIST}/validate-es5.min.js`, Terser.minify(compiled).code, 'utf-8', (error, data) => {
		if (error) {
			console.error(`${error}`);
			process.exit(1);
		}
	});
});
