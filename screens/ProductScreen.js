import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
  Form,
} from 'native-base';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import {useFocusEffect} from '@react-navigation/native';

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={30}
    color="white"
    {...props}
  />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Product',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://api.codingthailand.com/api/course');
      // console.log(res.data.data);
      // alert(JSON.stringify(res.data.data));
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
       getData();
    }, []),
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
    getData();
  };

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={({item}) => (
          <ListItem
            thumbnail
            onPress={() => {
              navigation.navigate('Detail', {
                id: item.id,
                title: item.title,
              });
            }}>
            <Left>
              <Thumbnail square source={{uri: item.picture}} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge success>
                <Text>{item.view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
