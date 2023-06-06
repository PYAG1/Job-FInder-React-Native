import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList,ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import {COLORS,SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from "../../../hook/useFetch"

const Popularjobs = ({navigation}) => {
  
const {data, isLoading, error}= useFetch('search',{query:"React developer", num_pages:1})
console.log(data)

  return (
    <View style={styles.container}>
     <View style={styles.header}>
     
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity><Text style={styles.headerBtn}>Show all</Text></TouchableOpacity>
     </View>
     <View style={styles.cardsContainer}>
      {isLoading ? (<ActivityIndicator size={'large'} colors={COLORS.primary}
      />): error ? (<Text>help</Text>):(<FlatList
      data={[1,2,3,4,5,6,7,8,9,10]}
      renderItem={({item})=>{
      return( <PopularJobCard/>)
      }}
      //keyExtractor={item => item?.job_id}
      keyExtractor={item => item.toString()}

      contentContainerStyle={{columnGap:SIZES.medium}}
      horizontal

      />)}

     </View>
    </View>
  )
}

export default Popularjobs