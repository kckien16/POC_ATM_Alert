import React from 'react'
import { FlatList, ScrollView, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import {TT, ThongTin} from "../data/ThongTinTB"
import {SDT, SDT_KC} from "../data/SDT_KC"
import {Nhan, SDT_Nhan} from "../data/SDT_Nhan"
import {Gui, SDT_GuiTN} from "../data/SDT_GuiTN"


const CaiDat = ({navigation}) => {

    

    return (
        <View>
            <View>
                <View style={{ backgroundColor: "#ffff", height: 60, flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={{ height: 30, width: 30, justifyContent: "center", marginLeft: 30 }}>
                        <FontAwesome name="angle-left" size={30} color="#1e88e5" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>Thông tin thiết bị</Text>
                    <View style={{flex:1, alignItems:"flex-end"}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("CaiDat")}>
                
                    <Text style={{fontSize: 18, fontWeight: "500",marginRight:20,color:'#2196F3' }}>Chỉnh sữa</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        <ScrollView style={{ backgroundColor: "#F0F8FF", width: "100%", height: "100%" }}>
            
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
            }}>
            <View style={{
                
                backgroundColor: "#ffff",
                borderRadius: 12,
                marginTop: 20,               
                width: '90%',
                height: 300,
            }}>
                <FlatList
                    data={ThongTin}
                    renderItem={({ item }) => (
                        <View >
                            <View style={{ flexDirection: "row", margin: 20 }}>
                                <Text style={{ fontSize: 16 }}>IMEI:</Text>
                                <Text style={{ fontSize: 16, right: "-500%", width: 180, fontWeight: "200",  }}>{item.imei}</Text>

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
            <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 25, marginTop: 25 }}>Cài đặt số điện thoại</Text>
            <View style={{ 
                flex:1,
                alignItems:"center",
                justifyContent:"center"
                }}>
            <View style={{
                backgroundColor: "#ffffff",
                borderRadius: 12,
                marginTop: 12,
                width: "86%",
            }}>
                <Text style={{ fontSize: 14, marginLeft: 15, marginTop: 15 }}>Số điện thoại khẩn cấp:</Text>
                <FlatList
                    data={SDT_KC}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontSize: 16, marginLeft: 15, marginBottom:15}}>{item.sdt}</Text>
                        </View>
                    )}
                >
                </FlatList>
            </View>
            </View>

            <View style={{ 
                flex:1,
                alignItems:"center",
                justifyContent:"center"
                }}>
            <View style={{
                backgroundColor: "#ffffff",
                borderRadius: 12,
                marginTop: 20,
                marginLeft: 25,
                marginRight: 25,
                width: "86%",
            }}>
                <Text style={{ fontSize: 14, marginLeft: 15, marginTop: 15 }}>Số điện thoại nhận cuộc gọi:</Text>
                <FlatList
                    data={SDT_Nhan}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontSize: 16, marginLeft: 15 , marginBottom:15}}>{item.sdt}</Text>
                        </View>
                    )}
                >
                </FlatList>
            </View>
            </View>

            <View style={{ 
                flex:1,
                alignItems:"center",
                justifyContent:"center"
                }}>
            <View style={{
                backgroundColor: "#ffffff",
                borderRadius: 12,
                marginTop: 20,
                marginLeft: 25,
                marginRight: 25,
                width: "86%",
            }}>
                <Text style={{ fontSize: 14, marginLeft: 15, marginTop: 15 }}>Số điện thoại gửi tin nhắn:</Text>
                <FlatList
                    data={SDT_GuiTN}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontSize: 16, marginLeft: 15, marginBottom:15 }}>{item.sdt}</Text>
                        </View>
                    )}
                >
                </FlatList>
                
            </View>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 25, marginTop: 25 }}>Cài đặt ngưỡng cảnh báo</Text>
            <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                <Text style={{
                    fontSize: 14,
                    marginLeft: 15,
                }}>Ngưỡng cảnh báo rung:</Text>
                <TextInput editable={false} selectTextOnFocus={false} style={{
                    width: 100,
                    height: 40,
                    backgroundColor: "#ffffff",
                    borderRadius: 8,
                    right: "-230%",
                    textAlign: "right",
                    paddingRight: 20,
                    fontWeight:"bold"
                }}>1500</TextInput>

            </View>
            <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                <Text style={{
                    fontSize: 14,
                    marginLeft: 15,
                }}>Ngưỡng cảnh báo rò điện (dòng):</Text>
                <TextInput editable={false} selectTextOnFocus={false} style={{
                    width: 100,
                    height: 40,
                    backgroundColor: "#ffffff",
                    borderRadius: 8,
                    right: "-75%",
                    textAlign: "right",
                    paddingRight: 20,
                    fontWeight:"bold"
                }}>1500</TextInput>

            </View>
            <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                <Text style={{
                    fontSize: 14,
                    marginLeft: 15,
                }}>Ngưỡng cảnh báo khói (mật độ):</Text>
                <TextInput editable={false} selectTextOnFocus={false} style={{
                    width: 100,
                    height: 40,
                    backgroundColor: "#ffffff",
                    borderRadius: 8,
                    right: "-83%",
                    textAlign: "right",
                    paddingRight: 20,
                    fontWeight:"bold"
                }}>70</TextInput>

            </View>
            <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                <Text style={{
                    fontSize: 14,
                    marginLeft: 15,
                }}>Ngưỡng cảnh báo nhiệt độ (độ C):</Text>
                <TextInput editable={false} selectTextOnFocus={false} style={{
                    width: 100,
                    height: 40,
                    backgroundColor: "#ffffff",
                    borderRadius: 8,
                    right: "-55%",
                    textAlign: "right",
                    paddingRight: 20,
                    fontWeight:"bold"
                }}>70</TextInput>

            </View>
            <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                <Text style={{
                    fontSize: 14,
                    marginLeft: 15,
                }}>Cảnh báo PIN (%):</Text>
                <TextInput editable={false} selectTextOnFocus={false} style={{
                    width: 100,
                    height: 40,
                    backgroundColor: "#ffffff",
                    borderRadius: 8,
                    right: "-305%",
                    textAlign: "right",
                    paddingRight: 20,
                    fontWeight:"bold"
                }}>10</TextInput>
            </View>
        </ScrollView>
        </View>
    )
}

export default CaiDat

const styles = StyleSheet.create({})
