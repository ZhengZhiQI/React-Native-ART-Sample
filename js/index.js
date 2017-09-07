/**
 * Created by Guang on 16/8/8.
 */

import React from 'react'
import {
    Text,
    View,
    ScrollView
} from 'react-native'

import Line from './Line';
import DashLine from './DashLine';
import Rect from './Rect'
import FillRect from './FillRect'
import Circle from './Circle';
import ArtText from './ArtText'
import Fan from './Fan'
import GroupTest from './GroupTest'
import TransformTest from './TransformTest'
import LinearGradientView from './LinearGradientView';
import RadialGradientView from './RadialGradientView';
import ZhengzhiqiExample from './ZhengzhiqiExample';
import FadeInView from './AnimatedExample'

export default class App extends React.Component{

    render(){
        return(
            <ScrollView>



                <View style={{flex: 1}}>
                    <ArtText style={{marginTop:10}}/>

                    <ZhengzhiqiExample style={{marginTop:10}}/>

                    <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                    </FadeInView>


                    {/*<AnimatedExample style={{marginTop:10}}/>*/}

                    {/*<AnimatedExample style={{marginTop:10}}/>*/}


                    {/*<LinearGradientView style={{marginTop:50}}/>*/}

                    {/*<RadialGradientView style={{marginTop:50}} />*/}

                    {/*<TransformTest style={{marginTop:50}} />*/}

                    {/*<Fan style={{marginTop:10}}/>*/}

                    {/*<GroupTest style={{marginTop:10}}/>*/}

                    {/*<Line style={{marginTop: 40,height:10}}/>*/}

                    {/*<DashLine style={{marginTop: 40,height:10}}/>*/}

                    {/*<Rect />*/}

                    {/*<FillRect style={{marginTop:10}}/>*/}

                    {/*<Circle style={{marginTop:10}}/>*/}



                </View>
            </ScrollView>
        )
    }

}