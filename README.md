# React Filestack
react component for **filestack**(previously **filepicker**) button

## How to install
```
npm install react-filestack
```
## Import
```
var ReactFilestack = require('react-filestack');
```
In ES2015
```
import ReactFilestack from 'react-filestack';
```
## Use
```
<ReactFilestack apiKey={Your API Key} />
```
## Props
### apiKey
required. A key for filestack
### defaultWidget
optional. default true. choose between the default widget and the custom button
### buttonText
optional. When using custom button, you can set your own text.
### buttonClassName
optional. When using custom button, you can set className.