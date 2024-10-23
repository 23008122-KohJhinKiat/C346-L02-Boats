import React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const Boats = ({name, desc, icon_name, poster}) => {
    return (
        <View>
            <Image source={poster} style={{width:400, height:500}}/>
            <Icon name = {icon_name} size={20}><Text>{name}</Text></Icon>
            <Text>{desc}</Text>
        </View>
    );
}

export default Boats;
