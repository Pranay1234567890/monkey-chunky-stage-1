import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Audio } from 'expo-av';

export default class Phonebutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonindexpressed: '',
    };
  }

  playsound = async (phones) => {
    console.log(phones)
    var soundlink =
      'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/' + phones + '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundlink,
      },
      {
        shouldPlay: true,
      }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonindex === this.state.buttonindexpressed
            ? [styles.chunkbutton, { backgroundColor: 'black' }]
            : [styles.chunkbutton, { backgroundColor: 'red' }]
        }
        onPress={() => {
          
          this.setState({ buttonindexpressed: this.props.buttonindex });
           this.playsound(this.props.phones1);
         
        }}>
        <Text style={styles.displaytext}>{this.props.chunks1}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  chunkbutton: {
    backgroundColor: 'red',
    alignItems: 'center',
    margin: 10,
  },

  displaytext: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
});


