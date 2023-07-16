import {Dimensions, PixelRatio, Platform} from 'react-native';
//get window dimensions
let {width, height} = Dimensions.get('window');
// get platform specific device
const IosDevice = Platform.OS === 'ios';

///Convert to width wise
//vertically
const widthToDp = (number: any) => {
    /// convert Given width to number
    const givenWidth = typeof number === 'number' ? number : parseFloat(number);
    //get plat form specific withToDp
    const widthValue = IosDevice
        ? PixelRatio.roundToNearestPixel((width * givenWidth) / 100) + 5
        : PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
    return widthValue;
};

///Convert to Height wise
//horizontally
const heightToDp = (number: any) => {
    /// convert Given Height to number
    //if percentage
    const givenHeight =
        typeof number === 'number' ? number : parseFloat(number);
    //get plat form specific withToDp
    const heightValue = IosDevice
        ? PixelRatio.roundToNearestPixel((height * givenHeight) / 100) + 3
        : PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
    return heightValue;
};

//responsive font size
const ResponsiveFontSize = (number: any) => {
    /// convert Given Height to number
    let givenNumber = typeof number === 'number' ? number : parseFloat(number);

    // based on iphone 5s's scale
    const scale = width / 320;

    //get new size
    const newSize = givenNumber * scale;
    // get platform specific value
    const fontSize = IosDevice
        ? Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2 + 2
        : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    return fontSize;
};

export {widthToDp, heightToDp, ResponsiveFontSize};
