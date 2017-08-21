# webpack-remove-assets-plugin

Removes assets matching a regular expression before they are emitted.

## Install

```bash
npm i -D webpack-remove-assets-plugin
```
## Usage

```javascript
// webpack.config.js
var RemoveAssetsPlugin = require('webpack-remove-assets-plugin');

module.exports = {
  // ... snip ...
  plugins: [
		new RemoveAssetsPlugin({regex: /.*_nls-.*\.map$/});
  ],
  // ... snip ...
}
```
## Options

#### regex

The regular expression to match against the assets to remove.
