# React Filestack
react component for **filestack**(previously **filepicker**) button

## How to install
![filestack](https://cloud.githubusercontent.com/assets/10962668/16107045/8d957838-33d4-11e6-91bb-bccc700af2de.png)
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
**required** string. A key for filestack
### defaultWidget
**optional** boolean. **default** true. choose between the default widget and the custom button
### buttonText
**optional** string. **default** Pick File. When using custom button, you can set your own text. Will be included in **options** prop.
### buttonClass
**optional** string. When using custom button, you can set className. Will be included in **options** prop.
### options(not possible now)
**optional** object. Detailed options for button. Will be added at v0.3.0

## Contribute
Please contribute to this package(via Pull Request), or, you can open issues! 
## Future
Add methods other than pick()
Add options for button
## License
MIT