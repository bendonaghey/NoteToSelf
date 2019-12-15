import React from 'react';
import HScreen from './HomeScreen';
import NScreen from './NotesScreen';
import CScreen from './CalendarScreen';

export const HomeScreen = ({ navigation }) => (
  <HScreen navigation={navigation} name="HomeScreen" />
);
export const NotesScreen = ({ navigation }) => (
  <NScreen navigation={navigation} name="NotesScreen" />
);
export const CalendarScreen = ({ navigation }) => (
  <CScreen navigation={navigation} name="CalendarScreen" />
);
