

import React from 'react'
import {
    View,
    ART
} from 'react-native'
import Wedge from './Wedge'

const {Surface,Shape,Path,Text} = ART;


export default class ZhengzhiqiExample extends React.Component{

    render(){

        const path = new Path()
            .moveTo(150,3)
            .arc(0,294,147)
            .arc(0,-294,147)
            .close();

        return(

            <View style={this.props.style}>
                <Surface width={300} height={300}>
                    <Shape d={path} stroke="#000000" strokeWidth={3}/>
                    <Wedge
                        outerRadius={150}
                        startAngle={0}
                        endAngle={60}
                        originX={150}
                        originY={150}
                        fill="blue"/>
                    <Wedge
                        outerRadius={150}
                        startAngle={70}
                        endAngle={100}
                        originX={150}
                        originY={150}
                        fill="red"
                    />
                </Surface>
            </View>
        )
    }
}