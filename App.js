import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './database';
import Phonebutton from './components/Phonebutton';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phones:[],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        < Image
         style={styles.logo}
          source={require('./download.png')}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
           // console.log(db[this.state.text]);
           var word = this.state.text.toLowerCase().trim();
           db[word]? 
            (this.setState({ chunks: db[this.state.text].chunks }),
              this.setState({ phones: db[this.state.text].phones }))
              : Alert.alert("Sorry,the word is not existed.")
          }}>

          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>

        <View>
          {this.state.chunks.map((item,index) => {
            return (
             <Phonebutton
             chunks1 = {this.state.chunks[index]}
             phones1 = {this.state.phones[index]}
 
             buttonindex = {index} 
             />

            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  
  logo: {
    width: 180,
    height: 180,
    borderColor: 'black',
    borderWidth: 10,
    marginTop: 20,
    marginLeft: 70,
  },
  
});
