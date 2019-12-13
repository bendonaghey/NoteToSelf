import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { HomeScreen, NotesScreen, CalendarScreen } from './src/screens';
import SideBar from './src/components/SideBar';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Feather name="home" size={16} color={tintColor} />
        )
      }
    },
    Notes: {
      screen: NotesScreen,
      navigationOptions: {
        title: 'Notes',
        drawerIcon: ({ tintColor }) => (
          <Feather name="book-open" size={16} color={tintColor} />
        )
      }
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Feather name="calendar" size={16} color={tintColor} />
        )
      }
    }
  },
  {
    contentComponent: props => <SideBar {...props} />,

    drawerWidth: Dimensions.get('window').width * 0.85,
    hideStatusBar: true,

    contentOptions: {
      activeBackgroundColor: 'rgba(212,118,207, 0.2)',
      activeTintColor: '#53115B',
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8
      },
      itemStyle: {
        borderRadius: 4
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);
