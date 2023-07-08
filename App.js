import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import './styles.css';
import TitleItem from './components/EventBlock.jsx';
import EventCard from './components/EventCard.jsx';
import NavBar from './components/NavBar.jsx';


export default function App() {
  const eventDataArr = [
    {
      "title": "ESS",
      "description": "cool event",
      "image": "image1",
      "club": "ESS",
      "date": "07/28/2023"
    },
    {
        "title": "ESS Teaching Award Ceremony",
        "description": "cool event",
        "image": "image1",
        "club": "ESS",
        "date": "06/30/2023"
    },
    {
        "title": "VikeCTF",
        "description": "cool event",
        "image": "image1",
        "club": "VikeSec",
        "date": "07/28/2023"
    }
  ]

  console.log(eventDataArr[1]["title"])

  const testString = "<NavBar/>"
  return  (
    <>
      <NavBar/>
      <TitleItem/>
      {eventDataArr.map(item => {
                return <EventCard title={item["title"]} description={item["description"]}/>
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
