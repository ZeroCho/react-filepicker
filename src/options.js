export default function applyOptions(domElement, options, mode = 'pick') {
  const generalOptionsMap = {
    'data-fp-container': 'container',
    'data-fp-mimetype': 'mimetype',
    'data-fp-extension': 'extension',
    'data-fp-openTo': 'openTo',
    'data-fp-debug': 'debug',
    'data-fp-signature': 'signature',
    'data-fp-policy': 'policy',
    'data-fp-language': 'language',
    'data-fp-background-upload': 'backgroundUpload',
    'data-fp-hide': 'hide',
    'data-fp-custom-css': 'customCss',
    'data-fp-crop-force': 'cropForce',
    'data-fp-crop-ratio': 'cropRatio',
    'data-fp-crop-dim': 'cropDim',
    'data-fp-crop-max': 'cropMax',
    'data-fp-crop-min': 'cropMin',
    'data-fp-show-close': 'showClose',
    'data-fp-conversions': 'conversions',
    'data-fp-custom-text': 'customText',
    'data-fp-custom-source-container': 'customSourceContainer',
    'data-fp-custom-source-path': 'customSourcePath',
  };
  const pickOnlyOptionsMap = {
    'data-fp-mimetypes': 'mimetypes',
    'data-fp-extensions': 'extensions',
    'data-fp-maxSize': 'maxSize',
    'data-fp-maxFiles': 'maxFiles',
    'data-fp-store-location': 'storeLocation',
    'data-fp-store-path': 'storePath',
    'data-fp-store-container': 'storeContainer',
    'data-fp-store-region': 'storeRegion',
    'data-fp-store-access': 'storeAccess',
    'data-fp-image-quality': 'imageQuality',
    'data-fp-image-dim': 'imageDim',
    'data-fp-image-max': 'imageMax',
    'data-fp-image-min': 'imageMin',
  };
  const webcamOptionsMap = {
    'data-fp-video-recording-resolution': 'videoRes',
    'data-fp-webcam-dim': 'webcamDim',
    'data-fp-video-length': 'videoLen',
    'data-fp-audio-length': 'audioLen',
  };
  setAttrIfExistsArray(options, domElement, generalOptionsMap);
  if (mode === 'export') {
    setAttrIfExists('suggestedFilename', options, 'data-fp-suggestedFilename', domElement);
  } else if (mode === 'pick' || mode === 'pickMultiple') {
    setAttrIfExistsArray(options, domElement, pickOnlyOptionsMap);
    setAttrIfExistsArray(options.webcam, domElement, webcamOptionsMap);
  }
  if (options.services) {
    domElement.setAttribute('data-fp-services', options.services.join());
  }
  if (options.service) {
    domElement.setAttribute('data-fp-service', options.service);
  }
  const arrayToJoin = ['extensions', 'mimetypes', 'imageDim', 'imageMin', 'imageMax', 'cropDim', 'cropMax', 'cropMin', 'webcamDim', 'conversions'];
  for (const key in arrayToJoin) {
    joinIfExist(arrayToJoin[key], options);
  }
  if (options.folders === true) {
    domElement.setAttribute('data-fp-folders', 'true');
  }
  if (options.multiple === true || mode === 'pickMultiple') {
    return domElement.setAttribute('data-fp-multiple', 'true');
  }
  return domElement;
}

function setAttrIfExists(key, options, attrname, dom) {
  if (options[key]) {
    dom.setAttribute(attrname, options[key]);
  }
}

function setAttrIfExistsArray(fpoptions, domElement, optionsObj) {
  for (const option in optionsObj) {
    setAttrIfExists(optionsObj[option], fpoptions, option, domElement);
  }
}

function joinIfExist(key, options) {
  if (options[key]) {
    options[key] = options[key].join();
  }
}
