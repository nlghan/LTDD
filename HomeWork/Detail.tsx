import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

function Detail() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgTitle}
        source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/12.jpg')}
      />
      <View style={styles.overlay}>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.icon}
            source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/angle.png')}
          />
        </View>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.icon}
            source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/menu.png')}
          />
        </View>
        <View style={styles.textTitle}>
          <Text style={{ fontSize: 16, marginBottom: 10, color: 'black', fontWeight: '500', backgroundColor: 'orange', width: 120, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>
            BESTSELLER
          </Text>
          <Text style={{ fontSize: 25, marginBottom: 20, color: 'black', fontWeight: 'bold' }}>
            Design Thinking
          </Text>
          <View style={styles.iconTitleWrapper}>
            <Image
              style={styles.icon}
              source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/users.png')}
            />
            <Text style={{ fontSize: 15, marginLeft: 10, color: 'gray', fontWeight: 'bold', marginRight: 10 }}>
              55k
            </Text>
            <Image
              style={styles.icon}
              source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/star.png')}
            />
            <Text style={{ fontSize: 15, marginLeft: 10, color: 'gray', fontWeight: 'bold' }}>
              4.1k
            </Text>
          </View>
          <Text style={{ fontSize: 25, marginBottom: 20, color: 'black', fontWeight: '600' }}>
            $50
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <Text style={{ fontSize: 20, marginBottom: 20, color: 'black', fontWeight: 'bold' }}>
            Course Content
          </Text>
          <View style={styles.courseInfo}>
            <View style={styles.courseInfoWrapper}>
              <Text style={styles.infoText}>
                01
              </Text>
              <View style={styles.infoTextDesWapper}>
                <Text style={styles.infoTextDesTime}>
                  5:35 mins
                </Text>
                <Text style={styles.infoTextDes}>
                  Welcome to the Course
                </Text>
              </View>
              <Image
                style={styles.buttonWrapper}
                source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/play.png')}
              />
            </View>

            <View style={styles.courseInfoWrapper}>
              <Text style={styles.infoText}>
                02
              </Text>
              <View style={styles.infoTextDesWapper}>
                <Text style={styles.infoTextDesTime}>
                  7:35 mins
                </Text>
                <Text style={styles.infoTextDes}>
                  Design Thinking - Intro
                </Text>
              </View>
              <Image
                style={styles.buttonWrapper}
                source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/play.png')}
              />
            </View>

            <View style={styles.courseInfoWrapper}>
              <Text style={styles.infoText}>
                03
              </Text>
              <View style={styles.infoTextDesWapper}>
                <Text style={styles.infoTextDesTime}>
                  10:35 mins
                </Text>
                <Text style={styles.infoTextDes}>
                  Design Thinking Process
                </Text>
              </View>
              <Image
                style={styles.buttonWrapper}
                source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/play.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.buyBtnWrapper}>
          <Image
            style={[styles.icon, {backgroundColor: 'pink', borderRadius: 5, width: 40, height:40}]}
            source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/briefcase.png')}
          />
          <TouchableOpacity
            onPress={() => { }}
            style={{ borderColor: 'blue', backgroundColor: '#7a9fd7', borderWidth: 1, width: '85%', borderRadius: 20, height: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text  style={{ color: 'white', fontWeight: 'bold', fontSize: 20}} >Buy Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imgTitle: {
    width: '100%',
    height: '70%', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
  },
  iconWrapper: {},
  icon: {
    width: 25,
    height: 25,
  },

  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'lightyellow',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
  },

  textTitle: {
    width: '50%',
    position: 'absolute',
    top: '8%',
    backgroundColor: 'transparent',
    marginLeft: 17
  },
  iconTitleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },

  contentWrapper: {},
  courseInfo: {
    marginBottom: 10,
    width: '80%',
  },
  infoText: {
    fontSize: 45,
    marginBottom: 10,
    color: '#ddd9da',
  },
  courseInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center' // Align items to center vertically
  },
  infoTextDesTime: {
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 5,
    color: 'gray',
  },
  infoTextDes: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold'
  },
  infoTextDesWapper: {
    flexDirection: 'column',
    width: 250
  },
  buttonWrapper: {
    marginLeft: 35,
    marginTop:-5,
    width: 40,
    height: 40
  },
  buyBtnWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  }

});

export default Detail;
