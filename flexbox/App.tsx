/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

/*
export default class flexbox extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image
        style={{ height: 100, width: 100 }}
        source={require('./img/logo-og.png')}
        />
        <Text style={styles.text}>Hello to React Native!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    padding: 10
  },
  text: {
    fontSize: 20
  }
});
*/

/*
function App(): React.JSX.Element {

  return (
    <View>
      <View style={{ height: 10 }} />
      <Text>Hello World!</Text>
      <Image
        style={{ height: 400, width: 415 }}
        source={require('./img/logo-og.png')}
      />
      <Switch />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value='Useless TextInput'
      />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
        value='Useless Multiline TextInput'
      />
      <TouchableOpacity
        onPress={() => { }}
        style={{ borderColor: '#ac2d6a', backgroundColor: '#f6d5e5', borderWidth: 1 }}>
        <Text>Touch me for Opacity!</Text>
      </TouchableOpacity>
      <View style={{ height: 5 }} />
      <TouchableHighlight
        onPress={() => { }}
        underlayColor='#f00a'
        style={{ borderColor: '#ac2d6a', backgroundColor: '#f6d5e5', borderWidth: 1 }}>
        <Text>Touch me for Highlight!</Text>
      </TouchableHighlight>
    </View>
  );
}/*

/*
  const App = () => {
    const style = {
      width :200,
      height :200,
      backgroundColor : 'rgb(74,124,226)',
      borderWidth: 2,
      borderColor: 'blue',
      borderRadius : 10,
      padding: 40,
      margin: 110

    }
    
    const boxStyle = {
      flex: 1,
      backgroundColor: 'pink'
    }

    const textStyle = {
      fontSize: 40,
      fontWeight: 'bold' as 'bold',
      color: 'red',
    }


    return (
      <View style = {style}>
      <View style= {boxStyle}>
        <Text style= {textStyle}>
          Hello!
        </Text>
      </View>
    </View>
    )
    }
*/

/*const App = () => {
  const boxStyle = {
    width: 200,
    height: 200,
    backgroundColor: 'rgb(74,124,226)',
    borderWidth: 10,
    borderBottomColor: 'blue',
    borderLeftColor: 'green',
    borderRightColor: 'red',
    borderTopColor: 'red',
    opacity: 0.5,
    borderRadius: 20,
    marginTop: 40,
    marginLeft: 20,
    position: 'absolute' as 'absolute'
  };

  const box2Style = {
    width: 200,
    height: 200,
    backgroundColor: '#faa',
    borderWidth: 10,
    borderBottomColor: 'black',
    borderLeftColor: 'black',
    borderRightColor: 'black',
    borderTopColor: 'black',
    opacity: 0.5,
    borderRadius: 20,
    marginTop: 100,
    marginLeft: 20,
  };

  const container = {
    backgroundColor: 'white',
    padding: 20
  };

  return (
    <View style={container}>
      <View style={boxStyle} />
      <View style={box2Style} />
    </View>
  );
};
*/

// export default App;

/*
export default class flexbox extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.headline}>Hello World!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headline: {
    fontSize: 40,
    color: 'black'
  }
});
*/

/*
export default class Exercise3 extends Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>
            <View style= {[styles.box, {backgroundColor: 'red'}]} />
            <View style= {[styles.box, {backgroundColor: 'green'}]} />
        </View>
        
        <View style={[styles.inner, {alignItems: 'flex-end'}]}>
            <View style= {[styles.box, {backgroundColor: 'blue'}]} />
            <View style= {[styles.box, {backgroundColor: 'pink'}]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    
  },
  box: {
    width: 50,
    height: 50,
    
  },
  inner: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
*/

/*
export default class Exercise3 extends Component {
  render() {
    return (
      <View style={styles.outer}>
        <View style={[styles.box, styles.greenBox]} testID="box1">
          <Text style={styles.text}>1</Text>
        </View>
        <View style={[styles.box, styles.yellowBox]} testID="box2">
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.box, styles.redBox, ]} testID="box3">
          <Text style={styles.text}>3</Text>
        </View>
        <View style={[styles.box, styles.blueBox, ]} testID="box4">
          <Text style={styles.text}>4</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    backgroundColor: '#e8e5e5',
    width: 420,
    height: 200,
    flexDirection: 'row',
  },
  box: {
    justifyContent: 'center',
    marginLeft: 8,
    marginTop: 8
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  greenBox: {
    backgroundColor: 'green',
    width: 50,
    height: 70,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    width: 70, height: 50 
  },
  redBox: {
    backgroundColor: 'red',
    width: 70, height: 70
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 120, height: 70
  },
});
*/

export default class Exercise4 extends Component{
  render(){
    return(
      
    )
  }
}