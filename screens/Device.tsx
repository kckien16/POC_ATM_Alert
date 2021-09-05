import { NavigationContainer } from '@react-navigation/native';
import React, { useState, FC } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Modal, TextInput, FlatList, ScrollView, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Device = ({ route, navigation }) => {
    const { IMEI, Loai } = route.params;

    const DATA = [
        {
            imei: JSON.stringify(IMEI),
            sim: '0369756908',
            tinhtrang: "Bình thường",
            loaiThietBi: JSON.stringify(Loai),
            tenThietBi: 'ATM - 123124234234',
            diaChi: 'Âu Cơ, P.8, Q.Tân Bình, TP.HCM',
            ngayKH: '16/09/2019',
            Ketnoi: 'Pin dự phòng',
        },
    ];

    function header() {
        return (
            
            <View style={{flex:1}}>  
                <View style={{backgroundColor: "#ffff", height: 60 , justifyContent:'center',}}>
                  <View style={{flexDirection: "row",}}>
                    <TouchableOpacity 
                    onPress={() => navigation.goBack()} 
                    style={{ height: 30, width: 30,  marginLeft: 20 }}>
                        <FontAwesome name="angle-left" size={35} color="#1e88e5" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>Tra cứu thiết bị</Text>
                    <TouchableOpacity style={{flex:3,alignItems:'flex-end',marginRight:10,}}
                    onPress={()=>navigation.navigate("ThongTinThietBi")}
                    >
                         <FontAwesome name="cog" size={30} color="#1e88e5" />
                        {/* <Text style={{ fontSize: 18, fontWeight: "500", color: '#2196F3' }}>Chỉnh sữa</Text> */}
                    </TouchableOpacity>
                 </View>
                </View>
                <View style={{ height: 60, flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>Thông Tin ATM</Text>
                </View>
                <View style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,

                    marginLeft: 25,
                    marginRight: 25,
                    width: 345,
                    height: 400,
                }}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => (
                            <View >
                                <View style={{ flexDirection: "row", margin: 20 }}>
                                    <Text style={{ fontSize: 16 }}>IMEI:</Text>
                                    <Text style={{ fontSize: 16, right: "-500%", width: 180, fontWeight: "200" }}>{item.imei}</Text>

                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16, color: "#000000" }}>SIM:</Text>

                                    <Text style={{ fontSize: 16, right: "-510%", width: 180, fontWeight: "200" }}>{item.sim}</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16 }}>Tình trạng thiết bị:</Text>
                                    <Text style={{ fontSize: 16, right: "-220%", width: 180, fontWeight: "200" }}>{item.tinhtrang}</Text>
                                </View>

                                <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16 }}>Loại thiết bị:</Text>
                                    <Text style={{ fontSize: 16, right: "-220%", width: 180, fontWeight: "200" }}>{item.loaiThietBi}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16 }}>Tên thiết bị:</Text>
                                    <Text style={{ fontSize: 16, right: "-270%", width: 180, fontWeight: "200" }}>{item.tenThietBi}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16 }}>Địa chỉ lắp đặt:</Text>
                                    <Text style={{ fontSize: 16, right: "-90%", width: 180, fontWeight: "200" }}>{item.diaChi}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16 }}>Ngày kích hoạt:</Text>
                                    <Text style={{ fontSize: 16, right: "-135%", width: 180, fontWeight: "200" }}>{item.ngayKH}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                    <Text style={{ fontSize: 16 }}>Kết nổi nguồn:</Text>
                                    <Text style={{ fontSize: 16, right: "-135%", width: 180, fontWeight: "200" }}>{item.Ketnoi}</Text>
                                </View>
                            </View>
                        )}>
                    </FlatList>

                </View>
            </View>

        )
    }

    function sensor() {
        return (
            <View style={{flex:1}}>
                <View style={{ height: 60, justifyContent:'center',  }}>
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>Trạng Thái Cảm Biết</Text>
                </View>
                <View style={{
             
                    backgroundColor: "#ffffff",
                    borderRadius: 12,

                    marginLeft: 25,
                    marginRight: 25,
                    width: 345,
                    height: 580,
                }} >
         
                    <View style={{ width:'100%',flexDirection: "row", margin: 10, }}>
                        <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16, }}>Nhiệt ( >36.5):</Text>

                        <Text style={{fontSize: 16,right: "-500%", fontWeight: "200"  }}>Cao</Text>
                  
                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Rung ( >1700):</Text>
                        <Text style={{ fontSize: 16, right: "-500%", width: 180, fontWeight: "200" }}>Bình Thường</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Cửa trên máy ATM:</Text>
                        <Text style={{ fontSize: 16, right: "-420%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Cửa ngoài máy ATM>36.5):</Text>
                        <Text style={{ fontSize: 16, right: "-230%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Dự phòng :</Text>
                        <Text style={{ fontSize: 16, right: "-600%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Dịch chuyển:</Text>
                        <Text style={{ fontSize: 16, right: "-580%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Rò Điện:</Text>
                        <Text style={{ fontSize: 16, right: "-670%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Khói:</Text>
                        <Text style={{ fontSize: 16, right: "-750%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Pin dự phòng:</Text>
                        <Text style={{ fontSize: 16, right: "-550%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Điện áp nguồn AC:</Text>
                        <Text style={{ fontSize: 16, right: "-450%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                    <FontAwesome name="thermometer-full" size={30} color="#1e88e5" />
                        <Text style={{ fontSize: 16 }}>Báo hiệu:</Text>
                        <Text style={{ fontSize: 16, right: "-650%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>

                </View>
            </View>
        )
    }

    function update() {
        return (
           <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',padding:30}}>
            <View style={{
                    width: 180, 
                    height: 70,}}>
                 <TouchableOpacity 
               
                style={{ 
                    width: 150, height: 50, 
                    borderRadius: 10,
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    borderColor:'#FF0000',
                    borderWidth: 1,
                   
                    }}>
                    <Text style={{color:'#FF0000'}}>Tắt cảnh báo</Text>
                </TouchableOpacity>
                </View> 

              <View style={{ width: 180, 
                    height: 70,  }}>
                <TouchableOpacity 
                onPress={()=> navigation.navigate('traCuuTB')}
                style={{ width: 150, height: 50,backgroundColor: '#098cf7',borderRadius: 10,alignItems: 'center', justifyContent: 'center',  }}>
                    <Text style={{}}>Cập Nhật</Text>
                </TouchableOpacity>
                
              </View>
              </View> 
        )
    }

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1 }}>
                 <StatusBar backgroundColor="#050F2C"  />
                {header()}
                {sensor()}
                {update()}

            </SafeAreaView>
        </ScrollView>
    );
}
export default Device;