import React, { useState } from 'react';
import { FlatList, ScrollView, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TT, ThongTin } from "../data/ThongTinTB";
import { SDT, SDT_KC } from "../data/SDT_KC";
import { Nhan, SDT_Nhan } from "../data/SDT_Nhan";
import { Gui, SDT_GuiTN } from "../data/SDT_GuiTN";

import Card from '../components/UI/Card';
import ToolBar from '../components/UI/ToolBar'


const CaiDat = ({ navigation }) => {
    const [inputShown, setInputShown] = useState<Boolean>(false);

    return (
        <View>
            <View >
                <ToolBar>
                    <TouchableOpacity style={{ height: 30, width: 30, justifyContent: "center", marginLeft: 30 }}
                        onPress={() => navigation.goBack()}
                    >
                        <FontAwesome name="angle-left" size={30} color="#1e88e5" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>Cài đặt</Text>
                </ToolBar>
            </View>
            <ScrollView style={{ backgroundColor: "#F0F8FF", width: "100%" }}>

                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Card>
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
                    </Card>
                </View>
                <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 25, marginTop: 25 }}>Cài đặt số điện thoại</Text>

                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Card>
                        <Text style={{ fontSize: 14, marginLeft: 15, marginTop: 15 }}>Số điện thoại khẩn cấp:</Text>
                        <FlatList
                            data={SDT_KC}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                    <TouchableOpacity style={{ marginLeft: 15 }}>
                                        <FontAwesome name="minus-circle" size={24} color="#FF3333" />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{item.sdt}</Text>
                                </View>
                            )}
                        >
                        </FlatList>

                        <Text style={{ fontWeight: "200", paddingLeft: 15, paddingRight: 15, height: 25 }}>_____________________________________________________________</Text>
                        <View style={{
                            marginBottom: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            display: inputShown == true ? "flex" : "none"
                        }}>

                            <TouchableOpacity style={{ marginLeft: 15 }}

                            >
                                <FontAwesome name="plus-circle" size={24} color="#00CCFF" />
                            </TouchableOpacity>
                            <TextInput style={{
                                fontSize: 16,
                                backgroundColor: "#F5F5F5",
                                height: 40,
                                width: 280,
                                marginLeft: 10,
                                borderRadius: 8,
                                paddingLeft: 10,
                                color: "#000000"
                            }}

                            />
                        </View>
                        <View style={{
                            marginBottom: 10,
                            display: inputShown == false ? "flex" : "none"
                        }}>
                            <TouchableOpacity style={{ marginLeft: 15, flexDirection: "row" }}
                                onPress={() => setInputShown(true)}>
                                <FontAwesome name="plus-circle" size={24} color="#00CCFF" />
                                <Text style={{ fontSize: 14, marginLeft: 10, marginTop: 2, color: "#3399FF" }}>Thêm số khẩn cấp</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>

                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <View style={{
                        backgroundColor: "#ffffff",
                        borderRadius: 12,
                        marginTop: 20,
                        width: "86%",
                    }}>
                        <Text style={{ fontSize: 14, marginLeft: 15, marginTop: 15 }}>Số điện thoại nhận cuộc gọi:</Text>
                        <FlatList
                            data={SDT_Nhan}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                    <TouchableOpacity style={{ marginLeft: 15 }}>
                                        <FontAwesome name="minus-circle" size={24} color="#FF3333" />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{item.sdt}</Text>
                                </View>
                            )}
                        >
                        </FlatList>
                        <Text style={{ fontWeight: "200", paddingLeft: 15, paddingRight: 15, height: 25 }}>_____________________________________________________________</Text>
                        <View style={{ marginBottom: 10 }}>
                            <TouchableOpacity style={{ marginLeft: 15, flexDirection: "row" }}>
                                <FontAwesome name="plus-circle" size={24} color="#00CCFF" />
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft: 10,
                                    marginTop: 2,
                                    color: "#3399FF"
                                }}>Thêm số điện thoại nhận cuộc gọi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <View style={{
                        backgroundColor: "#ffffff",
                        borderRadius: 12,
                        marginTop: 20,
                        width: "86%",
                    }}>
                        <Text style={{ fontSize: 14, marginLeft: 15, marginTop: 15 }}>Số điện thoại gửi tin nhắn:</Text>
                        <FlatList
                            data={SDT_GuiTN}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                                    <TouchableOpacity style={{ marginLeft: 15 }}>
                                        <FontAwesome name="minus-circle" size={24} color="#FF3333" />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{item.sdt}</Text>
                                </View>
                            )}
                        >
                        </FlatList>
                        <Text style={{ fontWeight: "200", paddingLeft: 15, paddingRight: 15, height: 25 }}>_____________________________________________________________</Text>
                        <View style={{ marginBottom: 10 }}>
                            <TouchableOpacity style={{ marginLeft: 15, flexDirection: "row" }}>
                                <FontAwesome name="plus-circle" size={24} color="#00CCFF" />
                                <Text style={{
                                    fontSize: 14,
                                    marginLeft: 10,
                                    marginTop: 2,
                                    color: "#3399FF"
                                }}>Thêm số điện thoại gửi tin nhắn</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 25, marginTop: 25 }}>Cài đặt ngưỡng cảnh báo</Text>
                <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 15,
                    }}>Ngưỡng cảnh báo rung:</Text>
                    <TextInput style={{
                        width: 100,
                        height: 40,
                        backgroundColor: "#ffffff",
                        borderRadius: 8,
                        right: "-230%",
                        textAlign: "right",
                        paddingRight: 20
                    }}>1500</TextInput>

                </View>
                <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 15,
                    }}>Ngưỡng cảnh báo rò điện (dòng):</Text>
                    <TextInput style={{
                        width: 100,
                        height: 40,
                        backgroundColor: "#ffffff",
                        borderRadius: 8,
                        right: "-75%",
                        textAlign: "right",
                        paddingRight: 20
                    }}>1500</TextInput>

                </View>
                <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 15,
                    }}>Ngưỡng cảnh báo khói (mật độ):</Text>
                    <TextInput style={{
                        width: 100,
                        height: 40,
                        backgroundColor: "#ffffff",
                        borderRadius: 8,
                        right: "-83%",
                        textAlign: "right",
                        paddingRight: 20
                    }}>70</TextInput>

                </View>
                <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 15,
                    }}>Ngưỡng cảnh báo nhiệt độ (độ C):</Text>
                    <TextInput style={{
                        width: 100,
                        height: 40,
                        backgroundColor: "#ffffff",
                        borderRadius: 8,
                        right: "-55%",
                        textAlign: "right",
                        paddingRight: 20
                    }}>70</TextInput>

                </View>
                <View style={{ flexDirection: "row", width: "100%", height: 40, margin: 10, alignItems: "center" }}>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 15,
                    }}>Cảnh báo PIN (%):</Text>
                    <TextInput style={{
                        width: 100,
                        height: 40,
                        backgroundColor: "#ffffff",
                        borderRadius: 8,
                        right: "-305%",
                        textAlign: "right",
                        paddingRight: 20
                    }}>10</TextInput>
                </View>
                <View style={{
                    margin: 20,
                    height: 100
                }}>
                    <TouchableOpacity style={{
                        width: "100%",
                        height: 40,
                        backgroundColor: "#3399FF",
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center"
                    }} onPress={() => { navigation.navigate("ThongTinThietBi") }}>
                        <Text style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "600" }}>Lưu</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default CaiDat

const styles = StyleSheet.create({})
