import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const EventCard = props => {
    return (
      <View>
        <Text>{props.title}</Text>
        <Text>{props.description}</Text>
        <Text>{props.imageSource}</Text>
        <Text>{props.date}</Text>
      </View>
    )
  }

  export default EventCard;