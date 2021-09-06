import { NavigationContainer } from '@react-navigation/native';
import React, { useState, FC } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Modal, Image, TextInput, FlatList, ScrollView, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TT, ThongTin } from "../data/ThongTinTB";


const Device = ({ route, navigation }) => {
    const { IMEI, Loai } = route.params;
    function navigationBar() {
        return (
            <View style={{ backgroundColor: "#ffff", height: 60, justifyContent: 'center', }}>
                <View style={{ flexDirection: "row", }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ marginLeft: 20 }}>
                        <FontAwesome name="angle-left" size={30} color="#1e88e5" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 15 }}>Tra cứu thiết bị</Text>
                    <TouchableOpacity style={{ flex: 3, alignItems: 'flex-end', marginRight: 20, }}
                        onPress={() => navigation.navigate("ThongTinThietBi")}
                    >
                        <FontAwesome name="cog" size={26} color="#1e88e5" />
                        {/* <Text style={{ fontSize: 18, fontWeight: "500", color: '#2196F3' }}>Chỉnh sữa</Text> */}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function header() {
        return (

            <View style={{ flex: 1 }}>

                <View style={{ height: 60, flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Thông Tin ATM</Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <View style={{
                        backgroundColor: "#ffffff",
                        borderRadius: 12,
                        width: "86%",
                        height: 300,
                    }}>
                        <FlatList
                            data={ThongTin}
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
                                        <Text style={{ fontSize: 16 }}>Loại thiết bị:</Text>
                                        <Text style={{ fontSize: 16, right: "-130%", width: 180, fontWeight: "200" }}>{item.loaiTB}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                        <Text style={{ fontSize: 16 }}>Tên thiết bị:</Text>
                                        <Text style={{ fontSize: 16, right: "-270%", width: 180, fontWeight: "200" }}>{item.tenTB}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                        <Text style={{ fontSize: 16 }}>Địa chỉ lắp đặt:</Text>
                                        <Text style={{ fontSize: 16, right: "-90%", width: 180, fontWeight: "200" }}>{item.diaChi}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginLeft: 20, marginBottom: 20 }}>
                                        <Text style={{ fontSize: 16 }}>Ngày kích hoạt:</Text>
                                        <Text style={{ fontSize: 16, right: "-135%", width: 180, fontWeight: "200" }}>{item.ngayKH}</Text>
                                    </View>
                                </View>
                            )}>
                        </FlatList>
                    </View>
                </View>
            </View>

        )
    }

    function sensor() {
        return (
            <View >
                <View style={{ margin: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Trạng Thái Cảm Biến</Text>
                </View>
                <View style={{ flex: 1, alignItems:"center" }}>
                <View style={{
                    backgroundColor: "#ffffff",
                    borderRadius: 12,
                    width: "86%",
                    height: 580,
                }} >

                    <View style={{ width: '100%', flexDirection: "row", margin: 10, }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/thermometer.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Nhiệt ( >36.5):</Text>

                        <Text style={{ fontSize: 16, right: "-550%", fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/mobile-phone.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Rung ( >1700):</Text>
                        
                        <Text style={{ fontSize: 16, right: "-70%", width: 150, fontWeight: "200", textAlign:"right" }}>Bình Thường</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/border.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Cửa trên máy ATM:</Text>
                        <Text style={{ fontSize: 16, right: "-400%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/door.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Cửa két máy ATM>36.5):</Text>
                        <Text style={{ fontSize: 16, right: "-250%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/windows.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Cửa ngoài máy ATM>36.5):</Text>
                        <Text style={{ fontSize: 16, right: "-175%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/paste.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Dự phòng :</Text>
                        <Text style={{ fontSize: 16, right: "-620%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/move.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Dịch chuyển:</Text>
                        <Text style={{ fontSize: 16, right: "-570%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/power-plug.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Rò Điện:</Text>
                        <Text style={{ fontSize: 16, right: "-682%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/carbon-dioxide.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Khói:</Text>
                        <Text style={{ fontSize: 16, right: "-770%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/power-plug.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Pin dự phòng:</Text>
                        <Text style={{ fontSize: 16, right: "-530%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/lightning.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Điện áp nguồn AC:</Text>
                        <Text style={{ fontSize: 16, right: "-405%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>
                    <View style={{ flexDirection: "row", margin: 10 }}>
                        <Image style={{ width: 26, height: 26 }}
                            source={require('../images/sun.png')} />
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Báo hiệu:</Text>
                        <Text style={{ fontSize: 16, right: "-650%", width: 180, fontWeight: "200" }}>Cao</Text>

                    </View>

                </View>
                </View>
            </View>
        )
    }

    function update() {
        return (
            <View style={{ width: "100%", flexDirection: 'row', padding: 15, marginBottom: 60 }}>
                <View style={{
                    width: "50%", flex: 1,
                    margin: 10,
                }}>
                    <TouchableOpacity style={{
                        borderColor:"#FF0000",
                        borderStyle:"solid",
                        borderWidth:1,
                        height: 40,
                        backgroundColor: "#FFFF",
                        borderRadius: 8,
                        justifyContent: "center",
                    }}>
                        <Text style={{ fontSize: 16, textAlign: "center",color:"#FF0000", fontWeight:"500" }}>Cảnh báo</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: "50%",
                    flex: 1,
                    margin: 10
                }}>
                    <TouchableOpacity style={{
                        height: 40,
                        backgroundColor: "#1e88e5",
                        borderRadius: 8,
                        justifyContent: "center",
                    }}
                    onPress={()=>navigation.navigate('traCuuTB')}
                    >
                        <Text style={{ fontSize: 16, textAlign: "center", color:"#ffffff",fontWeight:"500" }}>Cập Nhập</Text>
                    </TouchableOpacity>
                </View>

              </View> 
        )
    }

    return (



        <View>
            <View >

                {navigationBar()}

            </View>
            <ScrollView style={{ backgroundColor: "#F0F8FF" }}>
                <SafeAreaView style={{ flex: 1 }}>

                    {header()}
                    {sensor()}
                    {update()}

                </SafeAreaView>
            </ScrollView>
        </View>
    );
}
export default Device;