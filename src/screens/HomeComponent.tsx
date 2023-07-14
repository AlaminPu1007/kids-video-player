import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import axios from 'axios';
//@ts-ignore
import {API_URL} from '@env';

const HomeComponent = () => {
    const [playing] = useState(false);
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
            <View>
                <Text>loading...</Text>
            </View>
        );
    }

    return (
        <View>
            {data?.length
                ? data.map(
                      (item: {
                          link: string,
                          id: React.Key | null | undefined,
                      }) => {
                          const getLink: any = item.link
                              .split('v=')[1]
                              .split('&')[0];
                          return (
                              <View key={item.id}>
                                  <YoutubePlayer
                                      height={300}
                                      play={playing}
                                      videoId={getLink}
                                  />
                              </View>
                          );
                      },
                  )
                : null}
        </View>
    );
};

export default HomeComponent;

// const styles = StyleSheet.create({});
