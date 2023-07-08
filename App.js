import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from "react";
import './styles.css';
import TitleItem from './components/EventBlock.jsx';
import EventCard from './components/EventCard.jsx';
import NavBar from './components/NavBar.jsx';


export default function App() {
  const [eventData, setEventData] = useState([]);

  setEventData(getEventData);

  return  (
    <>
      <NavBar/>
      <TitleItem/>
      <EventCard/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const getEventData = () => {

  const eventDataObj = {
    "EEE": {
      "description": "cool event",
      "image": "image1",
      "club": "ESS",
      "date": "07/28/2023"
    },
    "ESS Teaching Award Ceremony": {
        "description": "cool event",
        "image": "image1",
        "club": "ESS",
        "date": "06/30/2023"
    },
    "VikeCTF": {
        "description": "cool event",
        "image": "image1",
        "club": "VikeSec",
        "date": "07/28/2023"
    }
}

return eventDataObj;

}
