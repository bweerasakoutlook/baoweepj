import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';

import axios from 'axios';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';

const DetailScreen = ({navigation, route}) => {
  const {id, title} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Product very detail',
    });
  }, [navigation, title]);

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        'https://api.codingthailand.com/api/course/' + id,
      );
      // console.log(res.data.data);
      // alert(JSON.stringify(res.data.data));
      setDetail(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  // useEffect(() => {
  //   getData(id);
  // }, [id]);

  useFocusEffect(
    React.useCallback(() => {
      getData(id);
    }, [id]),
  );

  if (error) {
    return (
      <View style={styles.container}>
        <Text>เกิดข้อผิดพลาด ไม่สามารถติดต่อกับ Server ได้</Text>
      </View>
    );
  }

  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getData(id);
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item, index) => item.ch_id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({item, index}) => (
          <ListItem thumbnail>
            <Left>
              <Text>{index + 1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>
                {item.ch_dateadd}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.ch_view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
