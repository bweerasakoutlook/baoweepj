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
} from 'native-base';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

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
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://api.codingthailand.com/api/course');
      // console.log(res.data.data);
      // alert(JSON.stringify(res.data.data));
      setProduct(res.data.data);
    };

    getData();
  }, []);
  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => (
          <ListItem thumbnail>
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
