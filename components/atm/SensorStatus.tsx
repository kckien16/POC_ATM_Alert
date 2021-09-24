import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { useTranslation } from 'react-i18next';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
const SensorStatus = props => {
  const { t, i18n } = useTranslation()
  return (
    <View style={{paddingTop:20}} >
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
         <Image style={{ width: 20, height: 20,marginRight:10  }}
         source={require('../../images//thermometer.png')} />
          <Text style={styles.titles}>{t("heat")}(>36.5):</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title1}>{props.nhiet}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 20, height: 20,marginRight:10}}
            source={require('../../images/mobile-phone.png')} />
          <Text style={styles.titles}>{t('vibrate')}(>1700):</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.titleRung}>{props.rung}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{width: 20, height: 20,marginRight:10 }}
            source={require('../../images/border.png')} />
          <Text style={styles.titles}>{t('ATM-machine-door')}:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.cuatrenATM}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 20, height: 20,marginRight:10}}
           source={require('../../images/door.png')} />
          <Text style={styles.titles}>{t('ATM-safes')}</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.cuaketATM}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 20, height: 20,marginRight:10, }}
              source={require('../../images/windows.png')} />
          <Text style={styles.titles}>{t('out-side-the-ATM')}:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.cuangoaiATM}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 20, height: 20,marginRight:10 }}
           source={require('../../images/paste.png')} />
          <Text style={styles.titles}>{t('preven-tive')}:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title1}>{props.duPhong}</Text>
        </View>
      </View>
      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 20, height: 20,marginRight:10}}
          source={require('../../images/move.png')} />
          <Text style={styles.titles}>{t('move')}:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title1}>{props.dichChuyen}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 20, height: 20,marginRight:10 }}
            source={require('../../images/power-plug.png')} />
          <Text style={styles.titles}>{t('electric leakage')}:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title1}>{props.roDien}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 20, height: 20,marginRight:10 }}
           source={require('../../images/carbon-dioxide.png')} />
          <Text style={styles.titles}>{t('smoke')}:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.khoi}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{width: 20, height: 20,marginRight:10 }}
             source={require('../../images/battery.png')} />
          <Text style={styles.titles}>{t('battery-backup')}:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.title}>{props.pinDuPhong}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{ width: 20, height: 20,marginRight:10}}
            source={require('../../images/lightning.png')} />
          <Text style={styles.titles}>{t('AC-supply-voltage')}:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.titleDien}>{props.dienAp}</Text>
        </View>
      </View>

      <View style={styles.viewItem}>
        <View style={{flex: 1,flexDirection:'row'}}>
        <Image style={{width: 20, height: 20,marginRight:10}}
            source={require('../../images/sun.png')} />
          <Text style={styles.titles}>{t('signaling')}:</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.titleBao}>{props.baoHieu}</Text>
        </View>
      </View>
    </View>
  );
};

export default SensorStatus;

const styles = StyleSheet.create({
  titles: {
    ...Fonts.h2
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft:"65%",
  },
  titleRung:{
    fontSize: 14,
    fontWeight: '400',
    marginLeft:"44%",
  },
  titleDien:{
    fontSize: 14,
    fontWeight: '400',
    marginLeft:"12%",
  },
  titleBao:{
    fontSize: 14,
    fontWeight: '400',
    marginLeft:"58%",
  },
  title1:{
    fontSize: 14,
    color:'#FF5B5B',
    fontWeight: '400',
    marginLeft:"65%",
  },
  viewItem: {
    flexDirection: 'row',
    marginLeft: 5,
    marginBottom: 20,
    width:"117%",
  },
});