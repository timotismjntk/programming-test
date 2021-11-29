import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [nilai, setNilai] = useState(null);
  const [listing, setListing] = useState([]);
  const [listingSubmited, setListingSubmited] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const addList = () => {
    const arr = {name: name, nilai: nilai};
    const newArr = [];
    newArr.push(arr);
    if (name.length === 0 && nilai === null) {
      console.log('anda belum mengisi input');
      setName('');
      setNilai(null);
    } else {
      if (listing.length === 0) {
        setListing(newArr);
        setTimeout(() => {
          setName('');
          setNilai(null);
        }, 200);
      } else {
        setListing(listing.concat(newArr));
        setTimeout(() => {
          setName('');
          setNilai(null);
        }, 200);
      }
    }
  };

  const submitProc = () => {
    const submitedList = [];
    submitedList.push(...listing);
    console.log(submitedList);
    submitedList.sort((a, b) => b.nilai - a.nilai);
    setListingSubmited(submitedList);
    setIsSubmit(true);
  };

  const clear = () => {
    setListing([]);
    setListingSubmited([]);
  };

  const renderItem = ({item}) => (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Text style={styles.output}>{item.name}</Text>
      <Text style={styles.output}>{item.nilai}</Text>
    </View>
  );

  const renderItem2 = ({item}) => (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Text style={[styles.output, {color: 'green'}]}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.parent}>
      <View>
        <Text style={styles.title}>Nama Teman</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View>
        <Text style={styles.title}>Nilai Suka</Text>
        <TextInput
          style={styles.input}
          value={nilai}
          keyboardType={'number-pad'}
          onChangeText={text => setNilai(text)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={addList}
          disabled={name.length === 0 || nilai === null}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={submitProc}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 10,
        }}>
        {listing.length ? (
          <View>
            <Text
              style={{
                fontSize: 20,
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
              }}>
              Input
            </Text>
            <FlatList
              data={listing}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : undefined}
        {listingSubmited.length ? (
          <View>
            <Text
              style={{
                fontSize: 20,
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
              }}>
              Output
            </Text>
            <FlatList
              data={listingSubmited}
              renderItem={renderItem2}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : undefined}
      </View>
      {listingSubmited.length || listing.length ? (
        <View>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={clear}>
            <Text style={{color: 'white', fontSize: 15}}>Clear</Text>
          </TouchableOpacity>
        </View>
      ) : undefined}
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  title: {
    fontSize: 20,
  },
  input: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 15,
  },
  output: {
    fontSize: 18,
    marginRight: 20,
    color: 'blue',
  },
});
