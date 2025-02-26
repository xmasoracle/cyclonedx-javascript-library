/*!
This file is part of CycloneDX JavaScript Library.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
Copyright (c) OWASP Foundation. All Rights Reserved.
*/

const path = require('path')
const deepmerge = require('deepmerge')

/* eslint-disable jsdoc/valid-types */

/**
 * @type {import('webpack').Configuration}
 * @see {@link https://webpack.js.org/configuration/}
 */
const configBase = {
  target: 'web',
  // mode: '',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        // see https://github.com/TypeStrong/ts-loader
        options: {
          configFile: 'tsconfig.web.json'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts']
  },
  entry: path.resolve(__dirname, 'src/index.web.ts'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist.web'),
    // filename: '',
    library: {
      name: 'CycloneDX_library',
      type: 'umd'
    }
  },
  externals: {
    'packageurl-js': 'packageurl-js',
    ajv: 'ajv',
    'ajv-formats': 'ajv-formats',
    'ajv-formats-draft2019': 'ajv-formats-draft2019'
  }
}

module.exports = [
  deepmerge(configBase, {
    mode: 'production',
    output: {
      filename: 'lib.js'
    }
  }),
  deepmerge(configBase, {
    mode: 'development',
    output: {
      filename: 'lib.dev.js'
    }
  })
]
