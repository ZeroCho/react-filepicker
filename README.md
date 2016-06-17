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
You should register for [Filestack(filepicker)](https://www.filestack.com) and get an **API key** first!

Default FileStack widget
```
<ReactFilestack apikey={Your API Key} onFileUploaded={this.yourCallbackFunction}/>
```

Custom Designed button
```
<ReactFilestack apikey={Your API Key} defaultWidget={false} options={options} onFileUploaded={this.yourCallbackFunction} />
```

make your own options and callback function, connect it and get results(fpfiles or blob object)
```
const options = {
  buttonText: 'Pick Me',
  buttonClass: 'filestack',
  mimetype: 'image/*',
  container: 'window',
  services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
};
yourCallbackFunction(fpfiles) {
  // handle fpfiles or blob object
}
```
## Result
![filestack](https://cloud.githubusercontent.com/assets/10962668/16159308/033281ac-34fd-11e6-9b07-aab69893997a.png)
## Demo
git clone this project and open index.html
[Link](https://github.com/zerocho/react-filestack/blob/master/index.html)

## Props
[Official Filestack Documentation](https://filestack.com/docs)
### mode
**optional** string. **default** 'pick'. **options** `['pick', 'dragdrop', 'convert']`
### apikey
**required** string. An API key for filestack
### defaultWidget
**optional** boolean. **default** true. choose between the default widget and the custom button
### onFileUploaded
**optional** function. get result(fpfiles or blob object) after upload is done. Will be changed to **onFilesUploaded** for correspondence with filestack doc.
### options
**optional** object. Detailed options for button. See official documentation.
------------------------------------------------------------------------------------------------------
### apiKey
**deprecated**. Changed to **apikey** for correspondence with filestack doc.
### buttonText
**deprecated**. When using custom button, you can set your own text. Will be included in **options** prop and deprecated.
### buttonClass
**deprecated**. When using custom button, you can set className. Will be included in **options** prop and deprecated.
### onFilesUploaded
**optional** function. **Not available now.** 0.4.0
### onError
**optional** function. **Not available now** 0.4.0

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**! 

## Future
- server side rendering
- add other methods than pick and pickAndMultiple

## License
MIT