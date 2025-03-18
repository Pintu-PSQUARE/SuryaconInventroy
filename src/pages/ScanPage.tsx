import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React, {useRef} from 'react';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {color, font} from '../config/Env';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {
  GestureHandlerRootView,
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';
import {style} from './Auth/ForgotPassword';
const ScanPage = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          height: responsiveScreenHeight(5),
          alignItems: 'flex-start',
          zIndex: 100,
          position: 'absolute',
          padding: responsiveScreenHeight(1),
          top: responsiveScreenHeight(4),
          left: responsiveScreenWidth(2),
          borderRadius: 100,
        }}>
        <Image
          source={require(`../assests/icons/chevron-left.png`)}
          style={{height: '100%', aspectRatio: 1, tintColor: color.white}}
        />
      </TouchableOpacity>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: 'red',
          paddingHorizontal: responsiveScreenWidth(5),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {device && hasPermission ? (
          <View
            style={{
              width: '100%',
              aspectRatio: 1,
              borderRadius: 35,
              overflow: 'hidden',
            }}>
            <Camera
              ref={cameraRef}
              style={{height: '100%', width: '100%'}}
              device={device}
              isActive={true}
              photo={true}
              onInitialized={() => {}}
            />
          </View>
        ) : (
          <ActivityIndicator />
        )}
        <View
          style={{
            position: 'relative',
            width: '100%',
            marginTop: responsiveScreenHeight(4),
            marginBottom: responsiveScreenHeight(7),
          }}>
          {[...Array(3)].map((_, i) => (
            <Card
              index={i}
              animatedValue={animatedValue}
              currentIndex={currentIndex}
              prevIndex={prevIndex}
              length={3}
            />
          ))}
        </View>
        <View
          style={{
            ...style.btn,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: responsiveScreenWidth(2),
            position: 'absolute',
            bottom: -responsiveScreenHeight(-1),
            width: responsiveScreenWidth(60),
            backgroundColor: color.primary,
          }}>
          <Text
            onPress={() => {
              // navigation.navigate(routes.DISPATCHITEAM)
            }}
            style={{
              fontSize: responsiveScreenFontSize(2.2),
              color: color.white,
              fontWeight: '500',
            }}>
            Scan QR Code{' '}
          </Text>
          <Image
            source={require(`../assests/icons/scan.png`)}
            style={{
              resizeMode: 'center',
              height: responsiveScreenHeight(2.2),
              width: responsiveScreenHeight(2.2),
              tintColor: color.white,
            }}
          />
        </View>
      </GestureHandlerRootView>
    </>
  );
};
interface CardProps {
  index: number;
  length: number;
  animatedValue: SharedValue<number>;
  currentIndex: SharedValue<number>;
  prevIndex: SharedValue<number>;
}
const Card: React.FC<CardProps> = ({
  index,
  length,
  animatedValue,
  currentIndex,
  prevIndex,
}) => {
  const a = responsiveScreenHeight(1);
  const X = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [a, 0, a - a * 2],
    );
    const translateX = interpolate(
      X.value,
      [index - 1, index, index + 1],
      [0, 0, 30],
    );
    const translateY2 = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [0, 0, -100],
    );

    const scale = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [0.98, 1, 1.05],
    );
    const opacity = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [1, 1, 0],
    );
    return {
      transform: [
        {translateY: index === prevIndex.value ? translateY2 : translateY},
        {scale},
      ],
      // transform: [{ translateY: translateY }, { translateX: translateY2 }, { scale }],

      opacity,
    };
  });
  const handlePress = () => {
    if (currentIndex.value < length - 1) {
      animatedValue.value = withTiming(currentIndex.value + 1); // Animate forward
      prevIndex.value = currentIndex.value;
      currentIndex.value += 1;
    }
  };
  return (
    <FlingGestureHandler
      key={'up'}
      direction={Directions.DOWN}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (currentIndex.value !== length - 1) {
            animatedValue.value = withTiming((currentIndex.value -= 1));
            prevIndex.value = currentIndex.value;
          }
        }
      }}>
      <Pressable
        onPress={handlePress}
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: length - index,
        }}>
        <Animated.View
          key={index}
          style={[
            animatedStyle,
            {
              marginVertical: responsiveScreenHeight(1),
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
              // position: "absolute",
              // zIndex: length- index,
              overflow: 'hidden',
              gap: responsiveScreenWidth(3),
            },
          ]}>
          <View
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
              style={{height: '100%', aspectRatio: 1, tintColor: color.primary}}
            />
          </View>
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
            {index + 300} Bags
          </Text>
        </Animated.View>
      </Pressable>
    </FlingGestureHandler>
  );
};
export default ScanPage;

//
