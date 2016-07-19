# React Filepicker
react component for **filepicker**(a.k.a **filestack**) button

## How to install
[NPM link](https://npmjs.com/package/react-filestack)
```
npm install react-filepicker
```
## Import
```
var ReactFilepicker = require('react-filepicker');
```
In ES2015
```
import ReactFilepicker from 'react-filepicker';
```
## Usage
You should register for [Filestack(filepicker)](https://www.filestack.com) and get an **API key** first!

**Default FileStack widget**
```
<ReactFilepicker apikey={Your API Key} onSuccess={this.yourCallbackFunction}/>
```

**Custom Designed button**
```
<ReactFilepicker apikey={Your API Key} defaultWidget={false} options={options} onSuccess={this.yourCallbackFunction} />
```

**Other mode than 'pick'**
```
<ReactFilepicker apikey={Your API Key} mode="export" defaultWidget={false} options={options} onSuccess={this.yourCallbackFunction} />
```
Available modes:
* convert
* export
* pickAndStore

make your own options and callback function, connect it and get results(fpfiles or blob object)
```
const options = {
  buttonText: 'Pick Me',
  buttonClass: 'filepicker',
  mimetype: 'image/*',
  container: 'window',
  services: ['COMPUTER', 'FACEBOOK', 'CLOUDAPP']
};
yourCallbackFunction(fpfiles) {
  // handle fpfiles or blob object
}
```
## Result
![filestack](https://cloud.githubusercontent.com/assets/10962668/16173096/634160de-35d1-11e6-9b6a-1803b53c30d6.png)
## Demo
git clone this project and open index.html
[Link](https://github.com/zerocho/react-filestack/blob/master/index.html)

## Props
[Official Filestack Documentation](https://filestack.com/docs)

> ### apikey
> **required** string. An API key for filestack

> ### defaultWidget
> **optional** boolean. **default** true. choose between the default widget and the custom button

> ### mode
> **optional** string. **default** 'pick'. **options** `['pick', 'dragdrop', 'convert', 'export']`. convert and export modes are for custom button.

> ### blob
> **optional** object. use if you need to insert blob object for convert or export

> ### onSuccess
> **optional** function. get result(fpfiles or blob object) after upload is done.

> ### onError
> **optional** function. send error object as callback parameter

> ### onProgress
> **optional** function. send progress object as callback parameter

> ### options
> **optional** object. **Detailed options for button. See Javascript API of official documentation. Put everything in it if you think you have to**

> ### buttonText
> **optional** string. When using custom button, you can set your own text. Also included in **options** prop, so use only when it's necessary.

> ### buttonClass
> **optional** string. When using custom button, you can set className. Also included in **options** prop, so use only when it's necessary.

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!

## Future
- server side rendering
- add other methods than pick, convert, export and pickAndMultiple

## License
MIT
