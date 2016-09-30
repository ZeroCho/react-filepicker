# React Filepicker
react component for **filepicker**(a.k.a **filestack**)

## How to install

Live Demo
[Link](https://zerocho.herokuapp.com/portfolio/ReactFilepicker)
NPM
[Link](https://npmjs.com/package/react-filepicker)
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
* pickMultiple (Instead, you can use pick mode and put 'multiple: true' in **options** object)
* read
* store
* storeUrl
* write
* writeUrl
* stat

make your own options and callback function, connect it to the component and get the results(either fpfiles or blob object)
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

**Link instead of button**
if you want a custom button to be a link, just put **link** props
```
<ReactFilepicker apikey={Your API Key} defaultWidget={false} link options={options} onSuccess={this.yourCallbackFunction} />
```

## Result
![filepicker](https://cloud.githubusercontent.com/assets/10962668/16950040/17a2eb94-4df9-11e6-8995-fb120a466400.png)
Works well with IE...

## Demo
git clone this project and open index.html
You can also see live demo here
[Link](https://zerocho.herokuapp.com/portfolio/ReactFilepicker)

## Props
[Official Filestack Documentation](https://filestack.com/docs)

> ### apikey
> **required** string. An API key for filestack

> ### defaultWidget
> **optional** boolean. **default** true. choose between the default widget and the custom button

> ### mode
> **optional** string. **default** 'pick'. **options** `['pick', 'dragdrop', 'convert', 'export']`. convert and export modes are for custom button.

> ### blob
> **optional** object. use if you need to insert blob object for convert, export, stat, write or writeUrl mode.

> ### input
> **optional** object. use this for read, store, storeUrl or write mode.

> ### log
> **optional** object. **default** false. choose whether to console.log filepicker process

> ### onSuccess
> **optional** function. get result(fpfiles or blob object) after upload is done.

> ### onError
> **optional** function. send error object as callback parameter

> ### onProgress
> **optional** function. send progress object as callback parameter

> ### options
> **optional** object. **Detailed options for button. See Javascript API of [official documentation](https://filestack.com/docs). Put everything in it if you think you have to**

> ### buttonText
> **optional** string. When using custom button, you can set your own text. It is included in **options** prop(as options.buttonText), so use only when it's necessary.

> ### buttonClass
> **optional** string. When using custom button, you can set className. It is included in **options** prop(as options.buttonClass), so use only when it's necessary.

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!
```
npm install && npm run build
run index.html
```

## Contributors
- Zero Cho
- Łukasz Kornek

## License
MIT
