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

  return (
    <View>
      <Text>
        {id} {title}
      </Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
