import {StyleSheet} from 'react-native';
import fonts from '../theme/fonts';
import colors from '../theme/colors';

export default StyleSheet.create({
    displayFlex: {
        flex: 1,
    },
    // page of content center
    pageContentCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // This is the most small font size of our application
    smallTextStyles: {
        fontSize: fonts.size.font12,
        fontFamily: fonts.type.robotoRegular,
        fontWeight: '400',
        opacity: 0.5,
        color: colors.textPrimary,
    },
    // Medium text styles for our application
    mediumTextStyles: {
        fontSize: fonts.size.font16,
        fontFamily: fonts.type.robotoRegular,
        fontWeight: '400',
        color: colors.textPrimary,
    },
});
