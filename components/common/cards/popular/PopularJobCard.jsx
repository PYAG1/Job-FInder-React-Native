import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item,selectedJob,handleCardPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container(selectedJob,item) } onPress={()=> handleCardPress(item)}>
<TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
  <Image source={{url:item.employer_logo}} resizeMode='contain' style={styles.logoImage} />

</TouchableOpacity>
<Text style={styles.companyName} numberOfLines={1}>{item.employer_name }</Text>

<View style={styles.infoContainer}>
<Text>{styles.jobName(selectedJob,item)}</Text>
</View>
      </TouchableOpacity>
    </View>
  )
}

export default PopularJobCard