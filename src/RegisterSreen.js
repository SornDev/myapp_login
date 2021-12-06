import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default function RegisterSreen(props) {
  useEffect(() => {
    setNavigatorOption();
  }, []);

  const setNavigatorOption = () => {
    props.navigation.setOptions({
      title: 'ໜ້າລົງທະບຽນ',
      headerStyle: {backgroundColor: '#778899'},
      headerRight: () => {
        return (
          <TouchableOpacity
            activeOpacity={0.1}
            onPress={() => alert('SornDev OK')}>
            <Icon
              name="address-card"
              size={20}
              color="#FFF"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                height: 24,
                width: 24,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        );
      },
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ໜ້າລົງທະບຽນ</Text>
      <Button
        title="ກັບຄືນ"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}
