import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const tourListItem = ({ item }) => (
<View style={styles.tour_list_item}>
<Image
    style={styles.tour_logo}
    source={{uri: item.tour_logo}}
    />
<Image
    style={styles.bell_icon}
    source={{uri: item.bell_icon}}
   />
<Text style={styles.tour_name}>{item.tour_name}</Text>
<Text style={styles.event_count}>{item.event_count}</Text>
<Image
    style={styles.heart_icon}
    source={{uri: item.heart_icon}}
   />
</View>
  );

const TourList = ({ item }) => (
<FlatList
    style={styles.tour_list}
    data={item}
    renderItem={tourListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default TourList;

const styles = StyleSheet.create({
    'tour_logo': {
        'width': '14vw',
        'height': '14vw',
        'marginTop': 5,
        'borderRadius': 50
    },
    'bell_icon': {
        'width': '2vw',
        'height': '2vw',
        'margin': 5
    },
    'tour_name': {
        'color': '#050505',
        'fontSize': 14,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'event_count': {
        'color': '#757070',
        'fontSize': 12,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'heart_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5
    }
});