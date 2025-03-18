/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  Image,
  StatusBar,
  Text,
  View,
  Animated,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {color, font, routes} from '../../config/Env';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {useAppSelector} from '../../store/hooks';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function InventoryHome() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {user} = useAppSelector(state => state.userStore);
  const [sideBar, setSidBar] = useState(false);
  const [isLeft, setIsLeft] = useState(true);
  const animatedLeft = useRef(new Animated.Value(0)).current;
  const handleToggle = (direction: boolean) => {
    if (isLeft !== direction) {
      Animated.timing(animatedLeft, {
        toValue: isLeft ? responsiveScreenWidth(35) : 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setIsLeft(!isLeft));
    }
  };
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: sideBar ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <View style={{flex: 1, backgroundColor: color.white}}>
        <View
          style={{
            backgroundColor: color.primary,
            gap: responsiveScreenHeight(0.5),
            paddingHorizontal: responsiveScreenWidth(4),
            paddingTop: responsiveScreenHeight(6),
          }}>
          <Text
            style={{fontSize: responsiveScreenFontSize(3), color: color.white}}>
            Hey {user?.name},
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EvilIcons
              style={{
                fontSize: responsiveScreenFontSize(2.5),
                color: color.white,
              }}
              name="location"
            />
            <Text
              style={{
                fontSize: responsiveScreenFontSize(1.7),
                color: color.white87,
              }}>
              North View
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'relative',
            width: '100%',
            height: responsiveScreenHeight(3),
            backgroundColor: color.primary,
            borderBottomEndRadius: 40,
            borderBottomLeftRadius: 40,
            overflow: 'visible',
            marginBottom: responsiveScreenHeight(2),
          }}></View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 100,
            borderColor: color.gray3,
            flexDirection: 'row',
            position: 'relative',
            width: responsiveScreenWidth(70),
            marginHorizontal: 'auto',
          }}>
          <Animated.View
            style={{
              width: '50%',
              backgroundColor: color.primary,
              borderRadius: 100,
              position: 'absolute',
              height: '100%',
              top: 0,
              left: animatedLeft, // Controlled by animation
            }}></Animated.View>
          <TouchableOpacity
            onPress={() => handleToggle(true)}
            style={{
              width: '50%',
              paddingVertical: responsiveScreenHeight(1.3),
              flexDirection: 'row',
              justifyContent: 'center',
              gap: responsiveScreenWidth(3),
            }}>
            <Text
              style={{
                color: !isLeft ? color.black87 : color.white,
                fontFamily: font.NunitoMedium,
                fontSize: responsiveScreenFontSize(1.8),
              }}>
              Material
            </Text>
            <View
              style={{
                width: responsiveScreenWidth(5),
                backgroundColor: !isLeft ? color.primary : color.white,
                aspectRatio: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text
                style={{
                  color: !isLeft ? color.white : color.primary,
                  fontFamily: font.NunitoMedium,
                  fontSize: responsiveScreenFontSize(1.2),
                }}>
                89
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleToggle(false)}
            style={{
              width: '50%',
              paddingVertical: responsiveScreenHeight(1.3),
              flexDirection: 'row',
              justifyContent: 'center',
              gap: responsiveScreenWidth(3),
            }}>
            <Text
              style={{
                color: isLeft ? color.black87 : color.white,
                fontFamily: font.NunitoMedium,
                fontSize: responsiveScreenFontSize(1.8),
              }}>
              Material
            </Text>
            <View
              style={{
                width: responsiveScreenWidth(5),
                backgroundColor: isLeft ? color.primary : color.white,
                aspectRatio: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}>
              <Text
                style={{
                  color: isLeft ? color.white : color.primary,
                  fontFamily: font.NunitoMedium,
                  fontSize: responsiveScreenFontSize(1.2),
                }}>
                89
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: responsiveScreenHeight(0.7),
            width: responsiveScreenWidth(95),
            alignSelf: 'center',
            marginTop: responsiveScreenHeight(1.5),
          }}>
          <Text
            style={{
              color: color.black87,
              fontSize: responsiveScreenFontSize(2.3),
            }}>
            To be Recieved
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
        <View
          style={{
            width: '95%',
            margin: 'auto',
          }}>
          <View
            style={{
              marginVertical: responsiveScreenHeight(1),
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveScreenHeight(1),
              backgroundColor: color.white,
              borderWidth: 1,
              borderColor: color.black28,
              borderRadius: 10,
              width: '98%',
              margin: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}>
            <View>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2),
                  color: color.black87,
                }}>
                Ticket id
              </Text>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(1.5),
                  marginTop: responsiveScreenHeight(0.1),
                  color: color.black60,
                }}>
                Cement, Plywood, Steel, Plywood, Steel
              </Text>
            </View>
            <View style={{}}>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2),
                  color: color.black87,
                }}>
                Sep 25, Thr
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: responsiveScreenHeight(0.7),
            width: responsiveScreenWidth(95),
            alignSelf: 'center',
            marginTop: responsiveScreenHeight(1.5),
          }}>
          <Text
            style={{
              color: color.black87,
              fontSize: responsiveScreenFontSize(2.3),
            }}>
            To be Dispatched
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
        <View
          style={{
            width: '95%',
            margin: 'auto',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.TICKET, {
                order: false,
                page: 'dispatch',
              });
            }}
            style={{
              marginVertical: responsiveScreenHeight(1),
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveScreenHeight(1),
              backgroundColor: color.white,
              borderWidth: 1,
              borderColor: color.black28,
              borderRadius: 10,
              width: '98%',
              margin: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}>
            <View>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(2),
                  color: color.black87,
                }}>
                Ticket id
              </Text>
              <Text
                style={{
                  fontSize: responsiveScreenFontSize(1.5),
                  marginTop: responsiveScreenHeight(0.1),
                  color: color.black60,
                  fontFamily: font.NunitoMedium,
                }}>
                Cement, Plywood, Steel, Plywood, Steel
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveScreenWidth(3),
              }}>
              <AntDesign
                name="message1"
                style={{
                  color: color.primary,
                  fontSize: responsiveScreenFontSize(2),
                }}
              />
              <Image
                style={{
                  height: responsiveScreenHeight(5),
                  aspectRatio: 1,
                  borderRadius: 100,
                }}
                source={{
                  uri: 'https://ashallendesign.ams3.cdn.digitaloceanspaces.com/rMbsGOyK6i1KjNkbXff8qLohzM1nWQA8HNGwHF0J.png',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}></View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: responsiveScreenHeight(1),
          right: responsiveScreenWidth(3),
          gap: responsiveScreenHeight(0.5),
          alignItems: 'flex-end',
        }}>
        <Animated.View
          style={[
            {
              borderWidth: 1,
              borderColor: color.gray3,
              opacity: animation,
              width: responsiveScreenWidth(50),
              backgroundColor: color.white,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveScreenHeight(1),
              gap: responsiveScreenHeight(1),
            },
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      responsiveScreenWidth(55),
                      responsiveScreenWidth(3),
                    ],
                  }),
                },
              ],
            },
          ]}>
          <Pressable
            onPress={() => {
              navigation.navigate(routes.ORDERPAGE);
            }}
            style={{
              borderWidth: 1,
              borderColor: color.gray3,
              borderRadius: 50,
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveScreenHeight(0.8),
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveScreenWidth(2),
            }}>
            <Image
              source={require(`../../assests/icons/calendar-add.png`)}
              style={{
                resizeMode: 'center',
                height: responsiveScreenHeight(2.6),
                width: responsiveScreenHeight(2.5),
                tintColor: color.black60,
              }}
            />
            <Text
              style={{
                fontFamily: font.NunitoMedium,
                color: color.black60,
                fontSize: responsiveScreenFontSize(1.6),
              }}>
              Order
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate(routes.CONTACT)}
            style={{
              borderWidth: 1,
              borderColor: color.gray3,
              borderRadius: 50,
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveScreenHeight(0.8),
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveScreenWidth(2),
            }}>
            <Image
              source={require(`../../assests/icons/ContactBook.png`)}
              style={{
                resizeMode: 'center',
                height: responsiveScreenHeight(2.6),
                width: responsiveScreenHeight(2.5),
              }}
            />
            <Text
              style={{
                fontFamily: font.NunitoMedium,
                color: color.black60,
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Contact Book
            </Text>
          </Pressable>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: color.gray3,
              borderRadius: 50,
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveScreenHeight(0.8),
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveScreenWidth(2),
            }}>
            <Image
              source={require(`../../assests/icons/box.png`)}
              style={{
                resizeMode: 'center',
                tintColor: color.black60,
                height: responsiveScreenHeight(2.6),
                width: responsiveScreenHeight(2.5),
              }}
            />
            <Text
              style={{
                fontFamily: font.NunitoMedium,
                color: color.black60,
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Requests
            </Text>
          </Pressable>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: color.gray3,
              borderRadius: 50,
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveScreenHeight(0.8),
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveScreenWidth(2),
            }}>
            <Image
              source={require(`../../assests/icons/scan.png`)}
              style={{
                resizeMode: 'center',
                height: responsiveScreenHeight(2.2),
                width: responsiveScreenHeight(2.2),
                tintColor: color.black60,
              }}
            />
            <Text
              style={{
                fontFamily: font.NunitoMedium,
                color: color.black60,
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Scan
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate(routes.CHATS)}
            style={{
              borderWidth: 1,
              borderColor: color.gray3,
              borderRadius: 50,
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveScreenHeight(0.8),
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveScreenWidth(2),
            }}>
            <Image
              source={require(`../../assests/icons/message.png`)}
              style={{
                height: responsiveScreenHeight(2.2),
                width: responsiveScreenHeight(2.2),
                tintColor: color.black60,
              }}
            />
            <Text
              style={{
                fontFamily: font.NunitoMedium,
                color: color.black60,
                fontSize: responsiveScreenFontSize(1.7),
              }}>
              Messages
            </Text>
          </Pressable>
        </Animated.View>
        <Pressable
          onPress={() => {
            startAnimation();
            setSidBar(!sideBar);
          }}
          style={{
            width: responsiveScreenWidth(12),
            aspectRatio: 1,
            backgroundColor: sideBar ? color.white : color.secondary,
            borderRadius: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: color.gray2,
          }}>
          <Animated.Image
            source={require(`../../assests/icons/add.png`)}
            style={{
              height: '65%',
              aspectRatio: 1,
              tintColor: sideBar ? color.black87 : color.white,
              transform: [
                {
                  rotateZ: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg'],
                  }),
                },
              ],
            }}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate(routes.PROFILE);
          }}
          style={{
            width: responsiveScreenWidth(12),
            aspectRatio: 1,
            backgroundColor: color.primary,
            borderRadius: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require(`../../assests/icons/userOutline.png`)}
            style={{
              height: '45%',
              aspectRatio: 1,
              tintColor: color.white,
              resizeMode: 'center',
            }}
          />
        </Pressable>
      </View>
    </>
  );
}

// import Svg, { G, Circle, Rect } from 'react-native-svg'
// import { useNavigation } from '@react-navigation/native';
// import { useAppSelector } from '../store/hooks';
// const AnimatedCircle = Animated.createAnimatedComponent(Circle)
// const AnimatedRect = Animated.createAnimatedComponent(Rect)
// const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

// const B = ({
//   strokeWidth = responsiveScreenWidth(2),
//   percentage = 50,
//   height = 60,
//   width = responsiveScreenWidth(45),
//   color = "tomato",
//   max = 100,
//   delay = 500,
//   duration = 5100,
//   textColor

// }) => {
//   const rectHeight = height - strokeWidth
//   const rectWidth = width - strokeWidth
//   const circleCircumference = 2 * (rectHeight + rectWidth)
//   const rectRef = useRef()
//   const animatedValue = useRef(new Animated.Value(0)).current

//   const animation = (toValue) => {
//     return Animated.timing(animatedValue, {
//       toValue,
//       duration,
//       delay,
//       useNativeDriver: true
//     }).start()
//   }
//   useEffect(() => {
//     animation(percentage)

//     animatedValue.addListener((v) => {
//       const maxPerc = 100 * v.value / max
//       const strokeDashoffset = circleCircumference - (circleCircumference * maxPerc) / 100

//       if (rectRef?.current) {
//         rectRef.current.setNativeProps({
//           strokeDashoffset
//         })
//       }
//     })
//   }, [])
//   return (
//     <>
//       <View style={{ flex: 1, height: height, }}>
//         <Svg width={"100%"} height={height}
//           viewBox={`0, 0, ${"100%"}, ${height}`}
//         >
//           <G  >
//             <Rect
//               x={5}
//               y={5}
//               rx={rectHeight / 2} ry={rectHeight / 2}
//               width={rectWidth} height={rectHeight}
//               stroke={color}
//               strokeWidth={strokeWidth}
//               opacity={0.7}
//               fill={"transparent"}

//             />
//             <AnimatedRect
//               ref={rectRef}
//               x={5}
//               y={5}
//               rx={rectHeight / 2} ry={rectHeight / 2}
//               width={rectWidth} height={rectHeight}
//               stroke={"green"}
//               strokeWidth={strokeWidth}
//               fill={"transparent"}
//               strokeLinecap='round'
//               strokeDasharray={circleCircumference}
//               strokeDashoffset={circleCircumference / 3}

//             />
//           </G>
//         </Svg>
//       </View>

//     </>
//   )
// }
// const styles = StyleSheet.create({
//   text: { fontWeight: '900', textAlign: 'center' },
// });
export default InventoryHome;
