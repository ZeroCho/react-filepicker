# React Filestack
react component for **filestack**(previously **filepicker**) button
![filestack](https://cloud.githubusercontent.com/assets/10962668/16107045/8d957838-33d4-11e6-91bb-bccc700af2de.png)
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
## Usage
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

## Contribute
Please contribute to this package(via Pull Request), or, you can open issues! 
## Future
Render on **server side**(The main reason I made this package but failed).
Add methods other than pick()
## License
MIT