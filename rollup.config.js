
import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

import css from 'rollup-plugin-css-only'

const input = './src/lib/index.js';
const inputNative = './src/lib/native.js';

let logged = {};

const external = id => {

  // external
  if ([
    'react',
    'react-dom',
  ].includes(id)) {
    return true;
  }

  // external
  if (id.startsWith('@babel')) {
    return true;
  }

  // internal
  if (id.startsWith('.') || path.isAbsolute(id)) {
    return false;
  }

  // internal
  if ([
    // 'react-window',
    // 'react-virtualized-auto-sizer',
    // 'react-window-infinite-loader',
    // 'react-image-crop',
    // 'copy-to-clipboard',
    // 'memoize-one',
    // 'prop-types',
    // 'react-is',
    // 'object-assign',
  ].includes(id)) {
    return false;
  }

  // log other externals
  if (!logged[id]) {
      console.log('->', id);
      logged[id] = true;
  }

  // external
  return true;
};

export default [
  {
    input,
    output: {
      dir: 'build/',
      format: 'cjs',
    },
    external,
    plugins: [
      css({ output: 'build/style.css' }),
      babel({
        runtimeHelpers: true,
        plugins: ['@babel/transform-runtime'],
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input,
    output: {
      dir: 'build/esm/',
      format: 'esm',
    },
    external,
    plugins: [
      css({ output: 'build/style.css' }),
      babel({
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]],
      }),
      nodeResolve(),
      commonjs(),
    ],
  },



  {
    input: inputNative,
    output: {
      file: "build/native.js",
      format: 'cjs',
    },
    external,
    plugins: [
      babel({
        runtimeHelpers: true,
        plugins: ['@babel/transform-runtime'],
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
  {
    input: inputNative,
    output: {
      file: "build/native.esm.js",
      format: 'esm',
    },
    external,
    plugins: [
      babel({
        runtimeHelpers: true,
        plugins: [['@babel/transform-runtime', { useESModules: true }]],
      }),
      nodeResolve(),
      commonjs(),
    ],
  },
];
