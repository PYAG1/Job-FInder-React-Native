import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [activeJobType, setActiveJobType] = useState('');

  const jobTypes = ["Full-time", "Part-time", "Contractor"];

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello there!</Text>
        <Text style={styles.welcomeMessage}>Find the perfect Job!</Text>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
              placeholder='Enter your job'
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {
            console.log("apple");
          }}>
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tabsContainer}>
          <FlatList
            data={jobTypes}
            keyExtractor={item => item}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.small }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  navigation.navigate(`/search/${item}`);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
