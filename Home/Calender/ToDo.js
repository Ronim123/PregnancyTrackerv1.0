import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

const ToDo = () => {
  const [todo, setToDo] = useState(null);
  const [textvalue, settextValue] = useState('');
  const onSave = () => {
    setToDo(textvalue);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>ToDo</Text>
        <View style={styles.box}>
          <TextInput
            style={{
              display: 'flex',
              alignItems: 'center',

              fontSize: 18,
              color: 'black',
              // fontWeight: 'bold',
              flex: 1,
              padding: -10,
            }}
            value={textvalue}
            placeholder="Enter your list"
            onChange={(textvalue) => {
              settextValue(textvalue);
            }}
          />
        </View>
        <View
          style={{
            // width: 325,
            height: 56,
            borderRadius: 10,
            backgroundColor: '#8DBAC5',
          }}
        >
          <Pressable
            style={{
              borderRadius: 10,
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
            }}
            onPress={() => onSave()}
          >
            <Text
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 15,
              }}
            >
              Save
            </Text>
          </Pressable>
        </View>
        <View style={{ backgroundColor: 'white', marginTop: 15, height: 500 }}>
          <Text>{textvalue}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    margin: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  box: {
    height: 50,
    backgroundColor: 'white',
    borderColor: '#CCC5C5',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 15,
    marginBottom: 25,
  },
});
