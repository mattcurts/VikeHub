import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const EventCard = props => {
  return (
    <View>
        <div class= "EventBlock">
          <div class="EventDetails" >
              <div class="image"><img src={props.imageSource}/>
              </div>
              <div class="description">
                  <h3> {props.title} </h3>
                  <h3> {props.date} </h3>
                  <p> {props.description} </p>
              </div>
        </div>
      </div>
    </View>
  )
  }

  export default EventCard;