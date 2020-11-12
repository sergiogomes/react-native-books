import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import books from "../../data/books.json";

const BookList = () => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={books}
        renderItem={({ item }) => {
          return (
            <View key={item.key} style={styles.textStyle}>
              <Text>{item.title}</Text>
              <Text>{item.author}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default BookList;
