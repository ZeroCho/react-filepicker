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
default widget
```
<ReactFilestack apiKey={Your API Key} />
```
custom button
```
<ReactFilestack apiKey={Your API Key} defaultWidget={false} buttonText="Pick" buttonClassName="filestack" />
```
## Props
### apiKey
required string. A key for filestack
### defaultWidget
optional boolean. default true. choose between the default widget and the custom button
### buttonText
optional string. When using custom button, you can set your own text.
### buttonClassName
optional string. When using custom button, you can set className.