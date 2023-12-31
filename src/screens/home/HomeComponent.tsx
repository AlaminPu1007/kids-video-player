import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import axios from 'axios';
//@ts-ignore
import {API_URL} from '@env';
import VideoContainer from './homeComponent/VideoContainer';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategoriesList from './homeComponent/CategoriesList';
// import commonStyles from '../../styles/commonStyles';
import {storeRootData} from '../../store/slice/homeSlice';
import {useAppDispatch} from '../../store/storeHook';
import HomeLoaderSkeleton from '../../component/molecules/HomeLoaderSkeleton';
import commonStyles from '../../styles/commonStyles';

const HomeComponent = () => {
    // define dispatch
    const dispatch = useAppDispatch();

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        let unmount = false;
        if (!unmount) {
            // made api request
            getListOfContent();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

            // store data into redux-store, to re-usable of it
            dispatch(storeRootData(res?.data));

            setLoading(prv => !prv);
        } catch (error) {
            // setData([]);
            setLoading(prv => !prv);

            if (__DEV__) {
                console.log(error, 'from catch errors');
            }
        }
    };

    if (loading) {
        return (
            <View>
                <HomeLoaderSkeleton />
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            {data?.length ? (
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={<CategoriesList data={data} />}
                    renderItem={({item, index}) => (
                        <VideoContainer item={item} index={index} />
                    )}
                    keyExtractor={item => item.id}
                />
            ) : (
                <View style={[commonStyles.pageContentCenter]}>
                    <Text style={[commonStyles.mediumTextStyles]}>
                        Content is not available
                    </Text>
                </View>
            )}
        </SafeAreaView>
    );
};

export default HomeComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
