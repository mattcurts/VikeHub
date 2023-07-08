import React, { Component } from 'react';
import '../styles.css';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const EventCard = props => {
  return (
    <View>
        <div className= "EventBlock">
          <div className="EventDetails" >
              <div className="image"><img src={props.image}/>
              </div>
              <div className="description">
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