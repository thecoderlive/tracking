import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ApplicationList from './ApplicationList'
import TourList from './TourList'

const Tracking = () => (
<ScrollView style={styles.tracking} showsVerticalScrollIndicator={false}>
<Image
    style={styles.search_icon}
    source={{uri: item.search_icon}}
   />
<Text style={styles.search_for_performers}>{item.search_for_performers}</Text>
<Image
    style={styles.cross_icon}
    source={{uri: item.cross_icon}}
   />
<ApplicationList item={item.application_list}/>
<Text style={styles.on_tour}>{item.on_tour}</Text>
<TourList item={item.tour_list}/>
</ScrollView>
)

export default Tracking;

const styles = StyleSheet.create({
    'search_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5
    },
    'search_for_performers': {
        'fontSize': 10,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#666060'
    },
    'cross_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5
    },
    'on_tour': {
        'color': '#080707',
        'fontSize': 18,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 10
    }
});