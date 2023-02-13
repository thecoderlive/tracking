import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const applicationListItem = ({ item }) => (
<View style={styles.application_list_item}>
<Image
    style={styles.application_icon}
    source={{uri: item.application_icon}}
    />
<Text style={styles.application_name}>{item.application_name}</Text>
</View>
  );

const ApplicationList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.application_list}
    data={item}
    renderItem={applicationListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default ApplicationList;

const styles = StyleSheet.create({
    'application_icon': {
        'width': '12vw',
        'height': '12vw',
        'marginTop': 5,
        'borderRadius': 10,
        'marginHorizontal': 22
    },
    'application_name': {
        'color': '#060505',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center'
    }
});