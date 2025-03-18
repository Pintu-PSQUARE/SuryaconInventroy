import {
  ActivityIndicatorBase,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {AnimatedInput, Header} from '../component';
import {color, font} from '../config/Env';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {style} from './Auth/ForgotPassword';
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

const DispatchPage = () => {
  const [data, setData] = useState({
    priority: '',
    name: '',
    reporting: '',
    role: '',
    photo: '',
  });
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [isCamera, setIsCamera] = useState(false);
  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();
  const [viewForm, setViewForm] = useState(false);

  return (
    <>
      <Header title={'Dispatch'} />
      <View
        style={{
          marginTop: responsiveScreenHeight(3),
          gap: responsiveScreenHeight(1.5),
          width: responsiveScreenWidth(90),
          marginHorizontal: 'auto',
        }}>
        <Text
          style={{
            color: color.black87,
            fontSize: responsiveScreenFontSize(2.3),
          }}>
          Who is collecting the material?
        </Text>
        {viewForm ? (
          <>
            <View style={{flexDirection: 'row', gap: responsiveScreenWidth(4)}}>
              <View
                style={{
                  aspectRatio: '9/16',
                  width: responsiveScreenWidth(38),
                  borderRadius: 10,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{uri: `file://${data.photo}`}}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: color.gray3,
                  borderRadius: 10,
                  gap: responsiveScreenHeight(1.5),
                  paddingHorizontal: responsiveScreenWidth(3),
                  paddingVertical: responsiveScreenHeight(2),
                }}>
                <Pressable
                  onPress={() => {
                    setData({...data, priority: 'site engineer'});
                  }}
                  style={{
                    borderWidth: 1,
                    borderColor: color.black28,
                    borderRadius: 25,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingVertical: responsiveScreenHeight(0.6),
                    paddingHorizontal: responsiveScreenWidth(2),
                    height: responsiveScreenHeight(3.2),
                    gap: responsiveScreenWidth(1),
                  }}>
                  <View
                    style={{
                      borderColor: color.primary,
                      borderWidth: 1,
                      aspectRatio: 1,
                      borderRadius: 100,
                      marginHorizontal: responsiveScreenWidth(0.5),
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      padding: 2,
                    }}>
                    <View
                      style={{
                        aspectRatio: 1,
                        borderRadius: 100,
                        height: '100%',
                        backgroundColor: color.primary,
                      }}></View>
                  </View>
                  <Text
                    style={{
                      color: color.black87,
                      fontFamily: font.NunitoMedium,
                      fontSize: responsiveScreenFontSize(1.5),
                    }}>
                    {data.priority}
                  </Text>
                </Pressable>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: responsiveScreenWidth(2),
                    alignItems: 'center',
                  }}>
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
                      source={require(`../assests/icons/building.png`)}
                      style={{
                        height: '100%',
                        aspectRatio: 1,
                        tintColor: color.primary,
                      }}
                    />
                  </Pressable>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(1.6),
                        color: color.black60,
                        fontFamily: font.NunitoMedium,
                      }}>
                      Name
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(2),
                        color: color.black87,
                        fontFamily: font.NunitoSemiBold,
                      }}>
                      {data.name}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: responsiveScreenWidth(2),
                    alignItems: 'center',
                  }}>
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
                      source={require(`../assests/icons/building.png`)}
                      style={{
                        height: '100%',
                        aspectRatio: 1,
                        tintColor: color.primary,
                      }}
                    />
                  </Pressable>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(1.6),
                        color: color.black60,
                        fontFamily: font.NunitoMedium,
                      }}>
                      Role
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(2),
                        color: color.black87,
                        fontFamily: font.NunitoSemiBold,
                      }}>
                      {data.role}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: responsiveScreenWidth(2),
                    alignItems: 'center',
                  }}>
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
                      source={require(`../assests/icons/building.png`)}
                      style={{
                        height: '100%',
                        aspectRatio: 1,
                        tintColor: color.primary,
                      }}
                    />
                  </Pressable>
                  <View>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(1.6),
                        color: color.black60,
                        fontFamily: font.NunitoMedium,
                      }}>
                      Reporting To
                    </Text>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(2),
                        color: color.black87,
                        fontFamily: font.NunitoSemiBold,
                      }}>
                      {data.reporting}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={{flexDirection: 'row', gap: responsiveScreenWidth(4)}}>
              <Pressable
                onPress={() => {
                  setData({...data, priority: 'site engineer'});
                }}
                style={{
                  borderWidth: 1,
                  borderColor: color.black28,
                  borderRadius: 25,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingVertical: responsiveScreenHeight(0.6),
                  paddingHorizontal: responsiveScreenWidth(2),
                  height: responsiveScreenHeight(3.2),
                  gap: responsiveScreenWidth(1),
                }}>
                <View
                  style={{
                    borderColor:
                      data.priority === 'site engineer'
                        ? color.primary
                        : color.black28,
                    borderWidth: 1,
                    aspectRatio: 1,
                    borderRadius: 100,
                    marginHorizontal: responsiveScreenWidth(0.5),
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    padding: 2,
                  }}>
                  {data.priority === 'site engineer' && (
                    <View
                      style={{
                        aspectRatio: 1,
                        borderRadius: 100,
                        height: '100%',
                        backgroundColor: color.primary,
                      }}></View>
                  )}
                </View>
                <Text
                  style={{
                    color: color.black87,
                    fontFamily: font.NunitoMedium,
                    fontSize: responsiveScreenFontSize(1.5),
                  }}>
                  Site Engineer
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setData({...data, priority: 'representative'});
                }}
                style={{
                  borderWidth: 1,
                  borderColor: color.black28,
                  borderRadius: 25,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingVertical: responsiveScreenHeight(0.6),
                  paddingHorizontal: responsiveScreenWidth(2),
                  height: responsiveScreenHeight(3.2),
                  gap: responsiveScreenWidth(1),
                }}>
                <View
                  style={{
                    borderColor:
                      data.priority === 'representative'
                        ? color.primary
                        : color.black28,
                    borderWidth: 1,
                    aspectRatio: 1,
                    borderRadius: 100,
                    marginHorizontal: responsiveScreenWidth(0.5),
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    padding: 2,
                  }}>
                  {data.priority === 'representative' && (
                    <View
                      style={{
                        aspectRatio: 1,
                        borderRadius: 100,
                        height: '100%',
                        backgroundColor: color.primary,
                      }}></View>
                  )}
                </View>
                <Text
                  style={{
                    color: color.black87,
                    fontFamily: font.NunitoMedium,
                    fontSize: responsiveScreenFontSize(1.5),
                  }}>
                  Representative
                </Text>
              </Pressable>
            </View>
            <AnimatedInput
              label="Name"
              value={data.name}
              onChange={e => {
                setData({...data, name: e});
              }}
            />
            <AnimatedInput
              label="Role [Optional]"
              value={data.role}
              onChange={e => {
                setData({...data, role: e});
              }}
            />
            <AnimatedInput
              label="Reporting to"
              value={data.reporting}
              onChange={e => {
                setData({...data, reporting: e});
              }}
            />
          </>
        )}
        <View style={{flex: 1}}></View>
      </View>
      <View
        style={{
          ...style.btn,
          position: 'absolute',
          bottom: -responsiveScreenHeight(-1),
          width: responsiveScreenWidth(50),
          backgroundColor: color.primary,
        }}>
        <Text
          onPress={() => {
            if (!data.photo) {
              setIsCamera(true);
            } else if (data.photo && !viewForm) {
              setViewForm(true);
            }
            // navigation.navigate(routes.DISPATCHITEAM)
          }}
          style={{
            fontSize: responsiveScreenFontSize(2.2),
            color: color.white,
            fontWeight: '500',
          }}>
          Next
        </Text>
      </View>
      {isCamera && (
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            top: 0,
            right: 0,
            justifyContent: 'center',
            backgroundColor: color.white,
            height: '100%',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => setIsCamera(false)}
            style={{
              height: responsiveScreenHeight(5),
              alignItems: 'flex-start',
              zIndex: 100,
              position: 'absolute',
              backgroundColor: color.white,
              padding: responsiveScreenHeight(1),
              top: responsiveScreenHeight(4),
              left: responsiveScreenWidth(2),
              borderRadius: 100,
            }}>
            <Image
              source={require(`../assests/icons/x.png`)}
              style={{height: '100%', aspectRatio: 1, tintColor: color.primary}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: responsiveScreenHeight(5),
              alignItems: 'flex-start',
              zIndex: 100,
              position: 'absolute',
              backgroundColor: color.white,
              padding: responsiveScreenHeight(1),
              top: responsiveScreenHeight(4),
              right: responsiveScreenWidth(2),
              borderRadius: 100,
            }}>
            <Image
              source={require(`../assests/icons/lightning-off.png`)}
              style={{height: '100%', aspectRatio: 1, tintColor: color.primary}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              const front = await cameraRef.current?.takePhoto({});
              if (front?.path) {
                setData({...data, photo: front?.path});
                setIsCamera(false);
              }
            }}
            style={{
              height: responsiveScreenHeight(6),
              alignItems: 'flex-start',
              zIndex: 100,
              position: 'absolute',
              bottom: responsiveScreenHeight(4),
              borderRadius: 100,
            }}>
            <Image
              source={require(`../assests/icons/cameraCricle.png`)}
              style={{height: '100%', aspectRatio: 1, tintColor: color.white}}
            />
          </TouchableOpacity>
          {device && hasPermission ? (
            <Camera
              ref={cameraRef}
              style={{height: '100%', width: '100%'}}
              device={device}
              isActive={true}
              photo={true}
              onInitialized={() => {}}
            />
          ) : (
            <ActivityIndicatorBase />
          )}
        </View>
      )}
    </>
  );
};

export default DispatchPage;
