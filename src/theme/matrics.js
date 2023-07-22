// This will hold your device dimensions it will manage all the fonts, margins and images according to device size. So, you can export and use responsive layouts.

import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width > height ? height : width,
};

export default metrics;
