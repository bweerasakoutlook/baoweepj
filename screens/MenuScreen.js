import React from 'react';
import {StyleSheet, View, ScrollView, ImageBackground} from 'react-native';
import {
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';


const MenuScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            width: undefined,
          }}
          source={{
            uri:
              'https://www.pixelstalk.net/wp-content/uploads/2016/07/1366x768-Backgrounds-Wonderful.jpg',
          }}>
          <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
            Main Menu
          </Text>
        </ImageBackground>
      </View>

      <Content>
        <ListItem
          icon
          onPress={() => {
            navigation.navigate('HomeStack');
          }}>
          <Left>
            <Button style={{backgroundColor: '#007AFF'}}>
              <Icon active name="home" />
            </Button>
          </Left>
          <Body>
            <Text>Main page</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem
          icon
          onPress={() => {
            navigation.navigate('ProductStack');
          }}>
          <Left>
            <Button style={{backgroundColor: '#007AFF'}}>
              <Icon active name="location" />
            </Button>
          </Left>
          <Body>
            <Text>Product</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    </ScrollView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
