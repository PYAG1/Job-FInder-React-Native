import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Nearbyjobs, Popularjobs, Welcome } from './components'

export default function Indexcl({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        <ScrollView  showsVerticalScrollIndicator={false}>
            <View style={{ padding: 20,backgroundColor:"white"}}>
            <Welcome navigation={navigation} />
            <Popularjobs navigation ={navigation}/>
            <Nearbyjobs/>
            </View>

        </ScrollView>
    </SafeAreaView>
  )
}
