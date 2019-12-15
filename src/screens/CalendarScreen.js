import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: 'flex-start', marginTop: 30, marginLeft: 15 }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={24} color="#161924" />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center', marginTop: -25 }}>
            <Text style={styles.text}>Calendar Screen</Text>
            <CalendarPicker
              style={styles.calendarStyle}
              onDateChange={this.onDateChange}
            />
            <View>
              <Text>SELECTED DATE:{startDate}</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  text: {
    color: '#161924',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 50
  },
  calendarStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});
