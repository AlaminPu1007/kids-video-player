import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';

interface Props {
    data: any;
}

const CategoriesList = ({data}: Props) => {
    const [categories, setCategories] = useState<any>([]);

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * description :- get categories list from root data
     * @author {AL-AMIN}
     * @created_by :- {AL-AMIN}
     * @created_at :- 21/07/2023 11:07:16
     */
    const getCategories = () => {
        // define js hash-map
        const map: any = new Map();

        for (let i = 0; i < data?.length; i++) {
            if (!map.has(data[i]?.type)) {
                map.set(data[i]?.type, 1);
            } else {
                map[data[i]?.type] = 1;
                map.set(data[i]?.type, map.get(data[i]?.type) + 1);
            }
        }
        for (const item in map) {
            //@ts-ignore
            setCategories(prv => [...prv, {name: item}]);
        }
    };

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.categoriesContainer}>
                {categories?.length
                    ? // @ts-ignore
                      categories.map(item => {
                          return (
                              <View key={item?.name} style={styles.itemWidget}>
                                  <Text>{item.name}</Text>
                              </View>
                          );
                      })
                    : null}
            </View>
        </ScrollView>
    );
};

export default CategoriesList;

const styles = StyleSheet.create({
    scrollViewContainer: {
        paddingTop: 10,
    },
    categoriesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemWidget: {
        backgroundColor: '#ddd',
        color: '#000',
        fontSize: 22,
        marginLeft: 10,
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 6,
    },
});
