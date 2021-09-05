import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const lookup  = ({navigation}) => {
  const [IMEI, setIMEI] = useState('498142699');
  const [Loai, setLoai] = useState('Thiết bị ATM');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e8f1f2'}}>
      <View style={{alignItems:'center', marginTop: 200}}>
        <Text>Hoặc</Text>
      </View>
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 30,
          paddingHorizontal: 20,
        }}>
        <TextInput
          style={{
          
            marginTop: 35,
            borderWidth: 1,
            width: '100%',
            height: 50,
            borderRadius: 10,
            borderColor: '#ffff',
            backgroundColor: '#ffff',
            color: '#202d2c',
          }}
          placeholder="Nhập IMEI/Seri number"
          value={IMEI}
          onChangeText={value => setIMEI(value)}></TextInput>
        <TextInput
          style={{
            padding: 10,
            marginTop: 35,
            borderWidth: 1,
            width: '100%',
            height: 50,
            borderRadius: 10,
            borderColor: '#ffff',
            backgroundColor: '#ffff',
            color: '#202d2c',
          }}
          placeholder="Loại thiết bị"
          value={Loai}
          onChangeText={value => setLoai(value)}></TextInput>
      </View>
      
      <TouchableOpacity 
      style={{
        width:'90%',
        backgroundColor:'#098cf7',
        height:50,
       borderRadius:20,
       alignItems:'center',
       marginLeft:20,
       justifyContent:'center'
      }}
        onPress={() => {
          navigation.navigate('Device', {
            IMEI: IMEI,
            Loai: Loai,
          });
        }}>
        <Text 
        style={{
        }}>Tra Cứu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default lookup;
// import React from 'react';
// import { Text,View } from 'react-native';
// const Lookup=()=> {
//     return(
//         <View>
//             <Text>Thai</Text>
//         </View>
//     )
// }
// export default Lookup;