import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import VideoContainer from '../homeComponent/VideoContainer';
import commonStyles from '../../../styles/commonStyles';
import {useAppSelector} from '../../../store/storeHook';
import {RootStackParamList} from '../../../navigation/stackNavigation/RootStackNav';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import colors from '../../../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'categoryPreview'>;

// define type for router
interface routerParams {
    categoryName?: string | undefined;
}

const CatagoriesWisePreview = ({route}: Props) => {
    // get rootData from
    const {rootData} = useAppSelector(state => state.home);

    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        // First, assert the correct type for route.params
        const params: routerParams | undefined = route.params;

        const {categoryName = ''} = params ?? {};

        if (categoryName && rootData?.length) {
            getCategoriesWiseData(categoryName);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [route, rootData]);

    /**
     * description :- This method will give us user selected categories wise video list
     * @param {from router, categories name}
     * @return {list-of-video}
     * @author {ALAMIN}
     * @created_by :- {ALAMIN}
     * @created_at :- 05/08/2023 11:43:56
     */
    const getCategoriesWiseData = async (name: string) => {
        try {
            const getItemLst = rootData?.length
                ? rootData?.filter(i => i.type === name)
                : [];
            // strong list into state
            setData(getItemLst);
            //make loader false
            setLoading(prv => !prv);
        } catch (err) {
            setLoading(prv => !prv);
            if (__DEV__) {
                console.log(err);
            }
        }
    };

    // define component for loader
    if (loading) {
        return (
            <View style={[commonStyles.pageContentCenter]}>
                <ActivityIndicator size={'large'} color={colors.primary} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {data?.length ? (
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    // ListHeaderComponent={<CategoriesList data={data} />}
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

export default CatagoriesWisePreview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
