/**
 * Created by Guang on 16/8/12.
 */

import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Text, Path} = ART;

export default class ArtText extends  React.Component{


    render(){

        return(
            <View style={this.props.style}>
                <Surface width={150} height={50}>
                    <Text strokeWidth={1} stroke="#000" font="bold 30px Heiti SC"  >占有率</Text>
                </Surface>
            </View>
        )
    }

}
