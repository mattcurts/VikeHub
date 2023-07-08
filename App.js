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
    },
    {
        "title": "Polar Plunge",
        "description": " really cool event",
        "image": "image1",
        "club": "ESS",
        "date": "01/10/2023"
    },
    {
        "title": "Launch Day",
        "description": "Orcaset sent to space from the ISS",
        "image": "image1",
        "club": "UVic Satellite Design",
        "date": "06/04/2023"
    },
    {
        "title": "Earth Day",
        "description": "Reduce you overall energy consumption on Earth Day",
        "image": "image1",
        "club": "URec",
        "date": "03/12/2023"
    },
    {
        "title": "Snake Battle",
        "description": "Join a bunch of people who comepete to make the most intelligent snake and then battle each other",
        "image": "image1",
        "club": "UVic AI Club",
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
