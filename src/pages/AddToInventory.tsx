import {
  View,
  Text,
  Image,
  Animated,
  Pressable,
  StyleSheet,
  FlatList,
  PanResponder,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {color, font} from '../config/Env';
import {Header} from '../component';
import Models from '../component/Model';

const AddToInventory = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const screenWidth = responsiveScreenWidth(100);
  const halfScreenWidth = screenWidth / 4;
  return (
    <>
      <Models
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        cancel={{
          title: 'Retry',
          on: () => {
            setModalVisible(false);
          },
        }}
        // ok={{
        //     title: 'Ok',
        //     on: () => {
        //         setModalVisible(false);
        //     },
        // }}
        title={`Printer is not connected.`}
        icon={
          <View
            style={{
              maxHeight: responsiveScreenHeight(2.8),
              alignItems: 'flex-start',
            }}>
            <Image
              source={require('../assests/icons/printer.png')}
              style={{
                tintColor: color.red,
                height: '100%',
                aspectRatio: 1,
              }}
            />
          </View>
        }
      />
      <Header title={'Add to inventory'}></Header>
      <View
        style={{
          marginTop: responsiveScreenHeight(3),
          gap: responsiveScreenHeight(3),
          width: responsiveScreenWidth(90),
          marginHorizontal: 'auto',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            alignSelf: 'center',
            width: '100%',
            marginBottom: responsiveScreenHeight(1),
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
                    toValue: -responsiveScreenWidth(15),
                    duration: 500,
                    useNativeDriver: true,
                  }).start(() => {
                    // setModalVisible(true);
                    // setSelectedUser(item);
                  });
                }
              },
            });

            const animatedStyle = {
              transform: [{translateX: animatedValue}],
            };

            return (
              <View style={[styles.back, {borderRadius: 10}]}>
                <View
                  style={{
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    alignItems: 'center',
                    paddingHorizontal: responsiveScreenWidth(3),
                    gap: responsiveScreenWidth(2),
                    flexDirection: 'row',
                    borderRadius: 10,
                  }}>
                  <Pressable
                    onPress={() => {
                      setModalVisible(true);
                    }}
                    style={{
                      width: responsiveScreenWidth(9),
                      padding: responsiveScreenWidth(2),
                      aspectRatio: 1,
                      backgroundColor: color.white,
                      borderWidth: 1,
                      borderColor: color.black28,
                      borderRadius: 100,
                    }}>
                    <Image
                      source={require(`../assests/icons/printer.png`)}
                      style={{
                        height: '100%',
                        aspectRatio: 1,
                        tintColor: color.primary,
                      }}
                    />
                  </Pressable>
                </View>
                <Animated.View
                  {...panResponder.panHandlers}
                  style={[
                    animatedStyle,
                    {
                      paddingHorizontal: responsiveScreenWidth(3),
                      paddingVertical: responsiveScreenHeight(1),
                      backgroundColor: color.white,
                      borderWidth: 1,
                      borderColor: color.black28,
                      borderRadius: 10,
                      width: '100%',
                      margin: 'auto',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      overflow: 'hidden',
                      gap: responsiveScreenWidth(3),
                    },
                  ]}>
                  <Pressable
                    onPress={() => {}}
                    style={{
                      width: responsiveScreenWidth(9),
                      padding: responsiveScreenWidth(2),
                      aspectRatio: 1,
                      backgroundColor: color.white,
                      borderWidth: 1,
                      borderColor: color.black28,
                      borderRadius: 100,
                    }}>
                    <Image
                      source={require(`../assests/icons/box.png`)}
                      style={{
                        height: '100%',
                        aspectRatio: 1,
                        tintColor: color.primary,
                      }}
                    />
                  </Pressable>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(2),
                        color: color.black87,
                        fontFamily: font.NunitoSemiBold,
                      }}>
                      Cement
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(1.6),
                        color: color.black60,
                        fontFamily: font.NunitoMedium,
                      }}>
                      Grade A{' '}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: responsiveScreenFontSize(1.8),
                      color: color.black87,
                      fontFamily: font.NunitoMedium,
                    }}>
                    300 Bags
                  </Text>
                </Animated.View>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  back: {
    marginVertical: responsiveScreenFontSize(0.5),
    borderColor: color.gray3,
    backgroundColor: color.primary,
  },
});
export default AddToInventory;
