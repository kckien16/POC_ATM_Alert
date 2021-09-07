import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SensorStatus = props => {
  return (
    <View style={{marginTop:20}}>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
         <Image style={{ width: 26, height: 26,  }}
         source={require('../../images//thermometer.png')} />
          <Text style={styles.titles}>Nhiet(>36.5):</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.nhiet}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
            source={require('../../images/mobile-phone.png')} />
          <Text style={styles.titles}>Rung(>1700)</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.rung}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
            source={require('../../images/border.png')} />
          <Text style={styles.titles}>Cửa trên máy ATM:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.cuatrenATM}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
           source={require('../../images/door.png')} />
          <Text style={styles.titles}>Cửa két máy ATM>36.5)</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.cuaketATM}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
              source={require('../../images/windows.png')} />
          <Text style={styles.titles}>Cửa ngoài máy ATM>36.5):</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.cuangoaiATM}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
           source={require('../../images/paste.png')} />
          <Text style={styles.titles}>Dự phòng:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.duPhong}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
          source={require('../../images/move.png')} />
          <Text style={styles.titles}>Dịch chuyển</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.dichChuyen}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
            source={require('../../images/power-plug.png')} />
          <Text style={styles.titles}>Rò Điện:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.roDien}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
           source={require('../../images/carbon-dioxide.png')} />
          <Text style={styles.titles}>Khói:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.khoi}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
             source={require('../../images/power-plug.png')} />
          <Text style={styles.titles}>Pin dự phòng:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.pinDuPhong}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
            source={require('../../images/lightning.png')} />
          <Text style={styles.titles}>Điện áp nguồn AC:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.dienAp}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 26, height: 26 }}
            source={require('../../images/sun.png')} />
          <Text style={styles.titles}>Báo hiệu:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.baoHieu}</Text>
        </View>
      </View>
    </View>
  );
};

export default SensorStatus;

const styles = StyleSheet.create({
  titles: {
    fontSize: 16,
    fontWeight:'bold'
    
  },
  title: {
    fontSize: 16,

    fontWeight: '300',
    marginLeft:"30%",
    
  },
  viewItem: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 20,
    width:"100%"
  },
});