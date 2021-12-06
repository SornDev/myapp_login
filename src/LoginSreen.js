import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginSreen(props) {
  useEffect(() => {
    setNavigatorOption();
  }, []);

  const setNavigatorOption = () => {
    props.navigation.setOptions({
      title: 'ໜ້າທຳອິດ',
      headerStyle: {backgroundColor: '#778899'},
      headerRight: () => {
        return (
          <TouchableOpacity
            activeOpacity={0.1}
            onPress={() => alert('ການແຈ້ງເຕືອນ: ສະບາຍດີ')}>
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
      <Text>ເຂົ້າສູ່ລະບົບ</Text>
      <View style={{height: 20}} />
      <Button
        title="ໄປໜ້າແທບ"
        onPress={() => {
          props.navigation.navigate('GoTab');
        }}
      />
    </View>
  );
}
