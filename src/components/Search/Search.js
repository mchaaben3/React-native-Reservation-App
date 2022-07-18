import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Search = ({ searchFilterFunction }) => {
  const [search, setSearch] = useState('');
  return (
    <TextInput
      type="text"
      style={styles.input}
      placeholder="Search"
      onChangeText={(text) => {
        setSearch(text);
        searchFilterFunction(text);
      }}
      value={search}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    height: 40,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
export default Search;
