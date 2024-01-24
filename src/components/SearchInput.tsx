import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const SearchInput = () => {
  return (
    <View>
      <TextInput style={styles.searchInput} placeholder="Search List..." />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInput: {
    marginVertical: 10,
    backgroundColor: COLORS.grayLight,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
