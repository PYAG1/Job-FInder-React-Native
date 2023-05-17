import React from 'react'
import { useState } from 'react'
import { View, Text,TextInput,TouchableOpacity,FlatList } from 'react-native'

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants';

const Welcome = () => {
  const [search , usesearch] = useState()
  return (
    <View>
    <View style={styles.container}>
      <Text style={ styles.userName}> Hello there!</Text>
      <Text style={ styles.welcomeMessage}> Find the perfect Job!</Text>

<View style={styles.searchContainer}>
<View style={styles.searchWrapper}>
  <TextInput
  style={styles.searchInput}
  value={search}
  onChangeText={usesearch}
  placeholder='Enter your job'  
  
  />
  <TouchableOpacity>
    <Image source={}/>
  </TouchableOpacity>


</View>

</View>
    </View>
    </View>
  )
}

export default Welcome