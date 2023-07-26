import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';
//@ts-ignore
import {API_URL} from '@env';
import VideoContainer from './homeComponent/VideoContainer';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoriesList from './homeComponent/CategoriesList';
import commonStyles from '../../styles/commonStyles';

const HomeComponent = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        let unmount = false;
        if (!unmount) {
            // made api request
            getListOfContent();
        }
    }, []);

    /**
     * description :- This method help us to get list of youtube link
     * @author {Alamin}
     * @created_by :- {ALAMIN}
     * @created_at :- 14/07/2023 22:52:19
     */
    const getListOfContent = async () => {
        try {
            const res = await axios.get(API_URL);
            setData(res?.data || []);
        } catch (error) {
            setData([]);
            if (__DEV__) {
                console.log(error, 'from catch errors');
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={[commonStyles.pageContentCenter]}>
                <Text style={[commonStyles.mediumTextStyles]}>loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                ListHeaderComponent={<CategoriesList data={data} />}
                renderItem={({item, index}) => (
                    <VideoContainer item={item} index={index} />
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

export default HomeComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
});
