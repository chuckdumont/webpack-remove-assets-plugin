/*
 * (C) Copyright HCL Technologies Ltd. 2018
 * (C) Copyright IBM Corp. 2012, 2017 All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const {tap} = require("webpack-plugin-compat").for("webpack-remove-assets-plugin");

module.exports = class RemoveAssetsPlugin {

  constructor(options) {
    this.options = options || [];
  }

  apply(compiler) {

    tap(compiler, 'after-compile', (compilation, callback) => {
      var nDel = 0;
      for (var filename in compilation.assets) {
        if (this.options.regex.test(filename)) {
          delete compilation.assets[filename];
          ++nDel;
        }
      }
      console.log(nDel + " assets removed");
      callback();
    });
  }
};
