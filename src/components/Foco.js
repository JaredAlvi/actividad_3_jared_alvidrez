import React, { useState } from 'react'
import {Image, TouchableOpacity, View} from 'react-native'

const foco = () => {
    const [estatus, setEstatus]=useState(false)
  return (
    <View>
        <TouchableOpacity onPress={()=>{setEstatus(!estatus)}}>
        <Image source={estatus ? require('../../img/focoOn.png') : require('../../img/focoOff.png')}
            style={{width: 122, height: 195}}/>
        </TouchableOpacity>
    </View>
  )
}

export default foco