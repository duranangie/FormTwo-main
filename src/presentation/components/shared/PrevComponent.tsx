import React from 'react'
import { Pressable, View } from 'react-native'
import { Button, FAB } from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons"
import { globalStyles } from '../../theme/theme'
interface PrevProps{
  onPrevPressed: () => void;
}

export const Prevcomponent = ({onPrevPressed}:PrevProps) => {
  return (
        <FAB
            style={globalStyles.fab}
            color='#4A7E8F'
            icon={() => <Icon name="caret-back-outline" size={25} color={'white'}/>}
            onPress={onPrevPressed}
        />
  )
}
