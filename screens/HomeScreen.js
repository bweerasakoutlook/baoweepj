import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import Logo from '../components/Logo';

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

const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Logo />,
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="Menu" iconName="menu" onPress={() => navigation.openDrawer()} />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Register"
            iconName="person-add"
            onPress={() => navigation.navigate('Register')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={80} color="blue" />
      <Text>หน้าหลัก</Text>
      <Button
        title="เกี่ยวกับเรา"
        onPress={() => {
          navigation.navigate('About', {
            email: 'bweerasak@gmail.com',
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
