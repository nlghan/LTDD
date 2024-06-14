import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

function App() {
  const [showAll, setShowAll] = useState(false);
  const courseImages = [
    require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/1.jpg'),
    require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/2.jpg'),
    require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/12.jpg'),
    require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/4.jpg'),
    require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/5.jpg'),
    require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/6.jpg'),
    require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/11.jpg'),
    require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/10.jpg'),
  ];

  const visibleCourseImages = showAll ? courseImages : courseImages.slice(0, 4);

  const courseDescriptions = [
    'Marketing',
    'Design',
    'Photography',
    'Business Photography',
    'UI/UX',
    'Video Content',
    'Figma',
    'Data Analyst'
  ];

  const courseSubDescriptions = [
    '25 Courses',
    '20 Courses',
    '10 Courses',
    '15 Courses',
    '22 Courses',
    '13 Courses',
    '18 Courses',
    '20 Courses'
  ];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.icon}
            source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/bars-sort.png')}
          />
          <View style={styles.spacer} />
          <Image
            style={styles.img}
            source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/avt.png')}
          />
        </View>
        <Text style={styles.textBold}>Hey Yahana,</Text>
        <Text style={{ fontSize: 18, marginBottom: 30 }}>
          Find a course you want to learn
        </Text>
        <View style={styles.search}>
          <Image
            style={styles.icon}
            source={require('D:/Hk2_nam_3/LTDD/HomeWork/android/app/src/icon/search.png')}
          />
          <TextInput
            style={{ flex: 1, height: 40, borderColor: 'gray', marginLeft: 15, fontSize: 15 }}
            placeholder='Search for anything'
          />
        </View>
        <View style={styles.category}>
          <Text style={[styles.text, { color: 'black' }]}>Categories</Text>
          <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            <Text style={[styles.text, { color: '#388be4de' }]}>
              {showAll ? 'Show Less' : 'See All'}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.courseScroll}>
          <View style={styles.course}>
            {visibleCourseImages.map((image, index) => (
              <View key={index} style={styles.courseItem}>
                <Image
                  style={styles.courseImg}
                  source={image}
                />
                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionText}>
                    {courseDescriptions[index]}
                  </Text>
                  <Text style={styles.subDescriptionText}>
                    {courseSubDescriptions[index]}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginRight: 8,
  },
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  img: {
    width: 50,
    height: 50,
  },
  spacer: {
    flex: 1,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
    marginBottom: 10,
  },
  search: {
    width: '100%',
    height: 60,
    backgroundColor: '#edeaea',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  course: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  courseImg: {
    width: '48%',
    height: 200,
    aspectRatio: 1, // Maintain aspect ratio
    marginBottom: 15,
    borderRadius: 10,
  },
  courseItem: {
    width: (windowWidth - 32) / 2, // 32 is the total horizontal margins and paddings
    marginBottom: 15,
    position: 'relative'
  },
  courseScroll: {
    paddingBottom: 20,
  },
  descriptionContainer: {
    position: 'absolute',
    top:8,
    left: 8,
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 5,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subDescriptionText: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 5
  }
});

export default App;
