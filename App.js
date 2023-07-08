import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import './styles.css';
import EventCard from './components/EventCard.jsx';
import NavBar from './components/NavBar.jsx';


export default function App() {
  const eventDataArr = [
    {
      "title": "ESS",
      "description": "cool event",
      "image": "1.png",
      "club": "ESS",
      "date": "07/28/2023"
    },
    {
        "title": "ESS Teaching Award Ceremony",
        "description": "cool event",
        "image": "1.png",
        "club": "ESS",
        "date": "06/30/2023"
    },
    {
        "title": "VikeCTF",
        "description": "cool event",
        "image": "1.png",
        "club": "VikeSec",
        "date": "07/28/2023"
    }
  ]

  console.log(eventDataArr[1]["title"])

  return  (
    <>
      <NavBar/>
      {eventDataArr.map(item => {
                return <EventCard title={item["title"]} description={item["description"]} date={item["date"]} image={item["image"]}/>
            })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
