# React Filestack
react component for **filestack**(previously **filepicker**) button

## How to install
[NPM link](https://npmjs.com/package/react-filestack)
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
You should register [Filestack(filepicker)](https://www.filestack.com) and get API key first!

Default FileStack widget
```
<ReactFilestack apiKey={Your API Key} onFileUploaded={this.yourCallbackFunction}/>
```

Custom Designed button
```
<ReactFilestack apiKey={Your API Key} defaultWidget={false} buttonText="Pick" buttonClass="filestack" />
```

make your own callback function, connect it and get results(fpfiles or blob object)
```
yourCallbackFunction(fpfiles) {
  // handle fpfiles or blob object
}
```
## Result
![filestack](https://cloud.githubusercontent.com/assets/10962668/16107045/8d957838-33d4-11e6-91bb-bccc700af2de.png)
## Demo
[Link](https://github.com/zerocho/react-filestack/blob/master/src/demo.js)

## Props

### apiKey
**required** string. An API key for filestack
### defaultWidget
**optional** boolean. **default** true. choose between the default widget and the custom button
### onFileUploaded
**optional** function. get result(fpfiles or blob object) after upload is done.
### buttonText
**optional** string. **default** Pick File. When using custom button, you can set your own text. Will be included in **options** prop and deprecated.
### buttonClass
**optional** string. When using custom button, you can set className. Will be included in **options** prop and deprecated.
### options(not possible now)
**optional** object. Detailed options for button. Will be added at v0.3.0

## Contribute
Please contribute to this package(via Pull Request), or, you can open issues! 

## Future
- server side rendering
- Add methods other than pick()
- Add options for button

## License
MIT