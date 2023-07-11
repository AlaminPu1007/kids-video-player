/**
 * Custom hook to set theme-value and get-also
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Appearance} from 'react-native';

const ThemeSchema = () => {
    const [themeValue, setThemeValue] = useState<string>('light');

    /**
     * description :- method for update theme value
     * @param {dark, light}
     * @return {theme-value}
     * @author {Alamin}
     * @created_by :- {ALAMIN}
     * @created_at :- 11/04/2023 21:37:52
     */
    const setTheme = async (mode: string) => {
        const jsonValue = JSON.stringify(mode);
        await AsyncStorage.setItem('@theme_value', jsonValue);
    };

    // toggle theme color
    const toggleTheme = () =>
        themeValue === 'light' ? setThemeValue('dark') : setThemeValue('light');

    // this will return user device theme
    const colorScheme = Appearance.getColorScheme();

    // get theme value from local-storage
    useEffect(() => {
        getThemeValue();
    }, []);

    const getThemeValue = async () => {
        const value = await AsyncStorage.getItem('@theme_value');
        if (value) {
            setThemeValue(value);
        }
    };
    // return theme_value
    return [themeValue, setTheme, toggleTheme, colorScheme];
};

export default ThemeSchema;
