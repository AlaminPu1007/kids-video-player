import {StyleSheet} from 'react-native';
import theme from './theme.js';

export default StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1,
    },
    light_container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    },

    dark_container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.BACKGROUND_COLOR_DARK,
        alignItems: 'center',
    },

    light_background_color: {backgroundColor: theme.PRIMARY_COLOR_LIGHT},
    dark_background_color: {
        backgroundColor: theme.BACKGROUND_COLOR_HEADER_DARK,
    },
    /** This portion for light-theme */
    //style for large text
    light_large_text_style: {
        color: theme.TEXT_PRIMARY_COLOR,
        fontSize: theme.FONT_SIZE_LARGE,
    },
    // style for medium text
    light_medium_text_style: {
        color: theme.TEXT_PRIMARY_COLOR,
        fontSize: theme.FONT_SIZE_MEDIUM,
    },
    // style for small text
    light_small_text_style: {
        color: theme.TEXT_PRIMARY_COLOR,
        fontSize: theme.FONT_SIZE_SMALL,
    },
    /** This portion for dark-theme */
    //style for large text
    dark_large_text_style: {
        color: theme.TEXT_PRIMARY_COLOR_DARK,
        fontSize: theme.FONT_SIZE_LARGE,
    },
    // style for medium text
    dark_medium_text_style: {
        color: theme.TEXT_PRIMARY_COLOR_DARK,
        fontSize: theme.FONT_SIZE_MEDIUM,
    },
    // style for small text
    dark_small_text_style: {
        color: theme.TEXT_PRIMARY_COLOR_DARK,
        fontSize: theme.FONT_SIZE_SMALL,
    },
});
