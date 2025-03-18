import { View, Text, Pressable, Image, ScrollView, TouchableOpacity, StyleSheet, Animated, FlatList, PanResponder } from 'react-native';
import React, {  useState } from 'react'
import { Header } from '../component'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { color, font, routes } from '../config/Env'
import { style } from './Auth/ForgotPassword'
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native'
import Models from '../component/Model';

const TicketPage = () => {
    const navigation: NavigationProp<ParamListBase> = useNavigation()
    const route: any = useRoute()
    const { page }: { page: "approve" | "order" | "dispatch" } = route.params
    const screenWidth = responsiveScreenWidth(100);
    const halfScreenWidth = screenWidth / 4;
    const [modalVisible, setModalVisible] = useState(false)
    const [modalConfig, setModalConfig] = useState<{ title: string,heading?:string, icon: JSX.Element, cancel?: { title: string, on: () => void }, ok?: { title: string, on: () => void }, inputs?: JSX.Element }>({
        title: '',
        icon: <></>,
        cancel: { title: '', on: () => { } },
        ok: { title: '', on: () => { } },
    });
    return (
        <>
            <Models
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                cancel={modalConfig.cancel}
                ok={modalConfig.ok}
                title={modalConfig.title}
                heading={modalConfig.heading}
                icon={
                    modalConfig.icon
                }
            />
            <Header title={page === "approve" ? "Item Request" : "Ticket"} >
                <>
                    {
                        page === "order" &&
                        <Pressable onPress={() => {
                        }}>
                            <Image source={require(`../assests/icons/History.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.white, }} />
                        </Pressable>
                    }
                </>
            </Header>
            <View style={{ marginTop: responsiveScreenHeight(3), gap: responsiveScreenHeight(3), width: responsiveScreenWidth(90), marginHorizontal: "auto", }}>
                {
                    page === "approve" &&
                    <View style={{ justifyContent: "space-between", flexDirection: "row", gap: responsiveScreenWidth(3), width: responsiveScreenWidth(60), marginHorizontal: "auto" }}>
                        <Pressable style={{ borderColor: color.red, borderWidth: 1, paddingHorizontal: responsiveScreenWidth(7), paddingVertical: responsiveScreenHeight(.7), borderRadius: 50 }}>
                            <Text style={{ color: color.black87, fontFamily: font.NunitoMedium, fontSize: responsiveScreenFontSize(1.7) }}>Decline</Text>
                        </Pressable>
                        <Pressable style={{ borderColor: color.primary, borderWidth: 1, paddingHorizontal: responsiveScreenWidth(7), paddingVertical: responsiveScreenHeight(.7), borderRadius: 50 }}>
                            <Text style={{ color: color.black87, fontFamily: font.NunitoMedium, fontSize: responsiveScreenFontSize(1.7) }}>Approve</Text>
                        </Pressable>
                    </View>
                }
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "auto", width: "90%" }}>
                    <View style={{ flexDirection: "row", gap: responsiveScreenWidth(2), alignItems: "center" }}>
                        <Pressable onPress={() => {

                        }} style={{ width: responsiveScreenWidth(11), padding: responsiveScreenWidth(2.7), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                            <Image source={require(`../assests/icons/building.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.primary, }} />
                        </Pressable>
                        <View>
                            <Text
                                style={{
                                    fontSize: responsiveScreenFontSize(1.6),
                                    color: color.black60,
                                    fontFamily: font.NunitoMedium
                                }}>
                                Ticket id</Text>
                            <Text
                                style={{
                                    fontSize: responsiveScreenFontSize(2),
                                    color: color.black87,
                                    fontFamily: font.NunitoSemiBold
                                }}>
                                565778</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", gap: responsiveScreenWidth(2), alignItems: "center", }}>
                        <Pressable onPress={() => {

                        }} style={{ width: responsiveScreenWidth(11), padding: responsiveScreenWidth(2.7), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                            <Image source={require(`../assests/icons/calendar.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.primary, }} />
                        </Pressable>
                        <View>
                            <Text
                                style={{
                                    fontSize: responsiveScreenFontSize(1.6),
                                    color: color.black60,
                                    fontFamily: font.NunitoMedium
                                }}>
                                Requested</Text>
                            <Text
                                style={{
                                    fontSize: responsiveScreenFontSize(2),
                                    color: color.black87,
                                    fontFamily: font.NunitoSemiBold
                                }}>
                                Sep 25, Thr</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", borderWidth: 1, borderColor: color.black28, borderRadius: 20, }}>
                    <View style={{ flexDirection: "row", gap: responsiveScreenWidth(3), alignItems: "center", paddingHorizontal: responsiveScreenWidth(4), paddingVertical: responsiveScreenHeight(2) }}>
                        <View style={{ width: responsiveScreenWidth(12), aspectRatio: 1, borderRadius: 1212, overflow: "hidden" }}>
                            <Image
                                style={{ height: '100%', width: '100%' }}
                                source={{
                                    uri: 'https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png',
                                }}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    color: color.black87,
                                    fontSize: responsiveScreenFontSize(2),
                                    fontWeight: '400',
                                    fontFamily: font.NunitoSemiBold
                                }}>
                                Esther Howard
                            </Text>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: responsiveScreenWidth(2) }}>
                                <Text
                                    style={{
                                        color: color.black60,
                                        fontSize: responsiveScreenFontSize(1.8),
                                        fontWeight: '400',
                                        fontFamily: font.NunitoMedium
                                    }}>
                                    133412
                                </Text>
                                <View style={{ width: responsiveScreenWidth(2), borderRadius: 100, aspectRatio: 1, backgroundColor: color.primary }}>
                                </View>
                                <Text
                                    style={{
                                        color: color.black60,
                                        fontSize: responsiveScreenFontSize(1.8),
                                        fontWeight: '400',
                                        fontFamily: font.NunitoMedium
                                    }}>
                                    Site Engineer
                                </Text>
                            </View>
                        </View>
                        {
                            page !== "approve" && <View style={{ flexDirection: "row", gap: responsiveScreenWidth(2) }}>
                                <Pressable onPress={() => { }} style={{ maxHeight: responsiveScreenHeight(2.6), alignItems: "flex-start" }}>
                                    <Image source={require("../assests/icons/message.png")} style={{ tintColor: color.primary, height: "100%", aspectRatio: 1 }} />
                                </Pressable>
                                <View style={{ maxHeight: responsiveScreenHeight(2.6), alignItems: "flex-start" }}>
                                    <Image source={require("../assests/icons/call.png")} style={{ tintColor: color.primary, height: "100%", aspectRatio: 1 }} />
                                </View>
                            </View>
                        }

                    </View>
                    <View style={{ borderWidth: 1, borderColor: color.primary, borderStyle: "dashed" }}></View>
                    <View style={{ flexDirection: "row", gap: responsiveScreenWidth(2), alignItems: "center", paddingHorizontal: responsiveScreenWidth(4), paddingVertical: responsiveScreenHeight(2) }}>
                        {
                            (page === "approve" || page === "dispatch") &&
                            <>
                                <Pressable onPress={() => {

                                }} style={{ width: responsiveScreenWidth(9), padding: responsiveScreenWidth(2), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                                    <Image source={require(`../assests/icons/building.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.primary, }} />
                                </Pressable>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            fontSize: responsiveScreenFontSize(1.6),
                                            color: color.black60,
                                            fontFamily: font.NunitoMedium
                                        }}>
                                        Location</Text>
                                    <Text
                                        style={{
                                            fontSize: responsiveScreenFontSize(1.8),
                                            color: color.black87,
                                            fontFamily: font.NunitoSemiBold
                                        }}>
                                        Tower A2/Floor No. 7</Text>
                                </View>
                            </>
                        }
                        {
                            page === "order" && <>
                                <Pressable onPress={() => {

                                }} style={{ width: responsiveScreenWidth(9), padding: responsiveScreenWidth(2), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                                    <Image source={require(`../assests/icons/user.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.primary, }} />
                                </Pressable>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            fontSize: responsiveScreenFontSize(1.6),
                                            color: color.black60,
                                            fontFamily: font.NunitoMedium
                                        }}>
                                        Representative name</Text>
                                    <Text
                                        style={{
                                            fontSize: responsiveScreenFontSize(1.8),
                                            color: color.black87,
                                            fontFamily: font.NunitoSemiBold
                                        }}>
                                        Tarundeep Singh</Text>
                                </View>
                            </>
                        }
                        {
                            (page === "approve" || page === "order") &&
                            <>
                                <Pressable onPress={() => {
                                }} style={{ width: responsiveScreenWidth(9), padding: responsiveScreenWidth(2), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                                    <Image source={require(`../assests/icons/box.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.primary, }} />
                                </Pressable>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: responsiveScreenFontSize(1.5),
                                            color: color.black60,
                                            fontFamily: font.NunitoMedium
                                        }}>
                                        Items</Text>
                                    <Text
                                        style={{
                                            fontSize: responsiveScreenFontSize(1.7),
                                            color: color.black87,
                                            fontFamily: font.NunitoSemiBold
                                        }}>
                                        04 Items</Text>
                                </View>
                            </>
                        }
                    </View>
                </View>
                {
                    page === "dispatch" &&
                    <View style={{ width: "100%", borderWidth: 1, borderColor: color.black28, borderRadius: 20, paddingHorizontal: responsiveScreenWidth(5), paddingVertical: responsiveScreenHeight(1.5) }}>
                        <Text style={{
                            fontSize: responsiveScreenFontSize(1.8),
                            color: color.black87,
                            fontFamily: font.NunitoSemiBold
                        }}>
                            <Text style={{
                                fontSize: responsiveScreenFontSize(1.8),
                                color: color.black28,
                                fontFamily: font.NunitoSemiBold
                            }}>Comments(Purchase): </Text>
                            Please coordinate with the supplier for prompt delivery.
                        </Text>
                    </View>
                }

                <ScrollView style={{ width: "100%" }}>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'baseline',
                            justifyContent: 'space-between',
                            alignSelf: "center",
                            width: "100%",
                            marginBottom: responsiveScreenHeight(1)
                        }}>
                        <Text
                            style={{
                                color: color.black87,
                                fontSize: responsiveScreenFontSize(2.3),
                            }}>
                            Item List:
                        </Text>
                        <View>
                            <Text
                                style={{
                                    color: color.primary,
                                    fontSize: responsiveScreenFontSize(1.7),
                                }}>
                                See all
                            </Text>
                        </View>
                    </View>
                    {
                        (page === "approve" || page === "order") &&
                        <FlatList
                            data={[...Array(1)]}
                            renderItem={() => {
                                const animatedValue = new Animated.Value(0);
                                const panResponder = PanResponder.create({
                                    onStartShouldSetPanResponder: () => true,
                                    onMoveShouldSetPanResponder: () => true,
                                    onPanResponderMove: (evt, gestureState) => {
                                        if (gestureState.dx < 2) {
                                            animatedValue.setValue(
                                                Math.max(gestureState.dx, -halfScreenWidth - 50),
                                            );
                                        }
                                    },
                                    onPanResponderRelease: (evt, gestureState) => {
                                        if (gestureState.dx < -halfScreenWidth / 10) {
                                            Animated.timing(animatedValue, {
                                                toValue: -halfScreenWidth,
                                                duration: 500,
                                                useNativeDriver: true,
                                            }).start();
                                        }
                                    },
                                });

                                const animatedStyle = {
                                    transform: [{ translateX: animatedValue }],
                                };

                                return (
                                    <View style={[styles.back, { borderRadius: 10, }]}>

                                        <View
                                            style={{
                                                height: '100%',
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                alignItems: "center",
                                                paddingHorizontal: responsiveScreenWidth(3),
                                                gap: responsiveScreenWidth(2),
                                                flexDirection: "row",
                                                borderRadius: 10
                                            }}>
                                            {
                                                page === "approve" ? <Pressable onPress={() => {
                                                    setModalConfig({
                                                        icon: <View
                                                            style={{
                                                                maxHeight: responsiveScreenHeight(2.8),
                                                                alignItems: 'flex-start',
                                                            }}>
                                                            <Image
                                                                source={require('../assests/icons/bin.png')}
                                                                style={{
                                                                    tintColor: color.red,
                                                                    height: '100%',
                                                                    aspectRatio: 1,
                                                                }}
                                                            />
                                                        </View>, title: "Are you sure you want to remove 1000 Pieces of Bricks (Grade A)?", cancel: { title: "no", on: () => { setModalVisible(false) } }, ok: { title: "Yes", on: () => { setModalVisible(false) } }
                                                    })
                                                    setModalVisible(true)
                                                }} style={{ width: responsiveScreenWidth(9), padding: responsiveScreenWidth(2), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                                                    <Image source={require(`../assests/icons/bin.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.red, }} />
                                                </Pressable> : <Pressable onPress={() => {
                                                    setModalVisible(true)
                                                }} style={{ width: responsiveScreenWidth(9), padding: responsiveScreenWidth(2), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                                                    <Image source={require(`../assests/icons/alert-triangle.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.red, }} />
                                                </Pressable>
                                            }

                                            <Pressable onPress={() => {
                                                setModalConfig({
                                                    icon: <View
                                                        style={{
                                                            maxHeight: responsiveScreenHeight(2.8),
                                                            alignItems: 'flex-start',
                                                        }}>
                                                        <Image
                                                            source={require('../assests/icons/pencil-edit.png')}
                                                            style={{
                                                                tintColor: color.primary,
                                                                height: '100%',
                                                                aspectRatio: 1,
                                                            }}
                                                        />
                                                    </View>,
                                                     heading:"cement bags", title: "Only 250 Bags of cement (Grade A) is left?", cancel: { title: "cancel", on: () => { setModalVisible(false) } }, ok: { title: "save", on: () => { setModalVisible(false) } }
                                                })
                                                setModalVisible(true)
                                            }} style={{ width: responsiveScreenWidth(9), padding: responsiveScreenWidth(2), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                                                <Image source={require(`../assests/icons/pencil-edit.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.primary, }} />
                                            </Pressable>
                                        </View>
                                        <Animated.View
                                            {...panResponder.panHandlers}
                                            style={[animatedStyle, {
                                                paddingHorizontal: responsiveScreenWidth(3),
                                                paddingVertical: responsiveScreenHeight(1),
                                                backgroundColor: color.white,
                                                borderWidth: 1, borderColor: color.black28,
                                                borderRadius: 10,
                                                width: '100%',
                                                margin: 'auto',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                overflow: "hidden",
                                                gap: responsiveScreenWidth(3)
                                            }]}>

                                            <Pressable onPress={() => {

                                            }} style={{ width: responsiveScreenWidth(9), padding: responsiveScreenWidth(2), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                                                <Image source={require(`../assests/icons/box.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.primary, }} />
                                            </Pressable>
                                            <View style={{ flex: 1 }}>
                                                <Text
                                                    style={{
                                                        fontSize: responsiveScreenFontSize(2),
                                                        color: color.black87,
                                                        fontFamily: font.NunitoSemiBold
                                                    }}>
                                                    Cement</Text>
                                                <Text
                                                    style={{
                                                        fontSize: responsiveScreenFontSize(1.6),
                                                        color: color.black60,
                                                        fontFamily: font.NunitoMedium
                                                    }}>
                                                    Grade A </Text>

                                            </View>
                                            <Text
                                                style={{
                                                    fontSize: responsiveScreenFontSize(1.8),
                                                    color: color.black87,
                                                    fontFamily: font.NunitoMedium
                                                }}>
                                                300 Bags</Text>
                                        </Animated.View>
                                    </View>
                                );
                            }}
                        />
                    }
                    {
                        page === "dispatch" && <>
                            <TouchableOpacity
                                onPress={() => {
                                }}
                                style={{
                                    marginVertical: responsiveScreenHeight(1),
                                    paddingHorizontal: responsiveScreenWidth(3),
                                    paddingVertical: responsiveScreenHeight(1),
                                    backgroundColor: color.white,
                                    borderWidth: 1, borderColor: color.black28,
                                    borderRadius: 10,
                                    width: '100%',
                                    margin: 'auto',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    overflow: "hidden",
                                    gap: responsiveScreenWidth(3)
                                }}>

                                <Pressable onPress={() => {

                                }} style={{ width: responsiveScreenWidth(9), padding: responsiveScreenWidth(2), aspectRatio: 1, backgroundColor: color.white, borderWidth: 1, borderColor: color.black28, borderRadius: 100 }}>
                                    <Image source={require(`../assests/icons/box.png`)} style={{ height: "100%", aspectRatio: 1, tintColor: color.primary, }} />
                                </Pressable>
                                <View style={{ flex: 1 }}>
                                    <Text
                                        style={{
                                            fontSize: responsiveScreenFontSize(2),
                                            color: color.black87,
                                            fontFamily: font.NunitoSemiBold
                                        }}>
                                        Cement</Text>
                                    <Text
                                        style={{
                                            fontSize: responsiveScreenFontSize(1.6),
                                            color: color.black60,
                                            fontFamily: font.NunitoMedium
                                        }}>
                                        Grade A </Text>

                                </View>
                                <Text
                                    style={{
                                        fontSize: responsiveScreenFontSize(1.8),
                                        color: color.black87,
                                        fontFamily: font.NunitoMedium
                                    }}>
                                    300 Bags</Text>
                            </TouchableOpacity>
                        </>
                    }


                </ScrollView>

            </View>
            {
                page !== "approve" &&
                <View style={{ ...style.btn, position: "absolute", bottom: -responsiveScreenHeight(-1), width: responsiveScreenWidth(50), backgroundColor: color.primary }}>
                    <Text onPress={() => {
                        if (page !== "dispatch") {
                            navigation.navigate(routes.ADDTOINVENTORY)
                        }
                        else {
                            navigation.navigate(routes.SCANPAGE)
                        }
                    }} style={{ fontSize: responsiveScreenFontSize(2.2), color: color.white, fontWeight: "500" }}>{page !== "dispatch" ? "Add to inventory" : "Next"}</Text>
                </View>
            }
        </>
    )
}
const styles = StyleSheet.create({
    back: {
        marginVertical: responsiveScreenFontSize(.5),
        borderColor: color.gray3,
        backgroundColor: color.primary,
    },
});
export default TicketPage