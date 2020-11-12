import React from "react";
import { View, Text, FlatList } from "react-native";

import books from "../../data/books.json";

const BookList = () => {
  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => {
          return (
            <View key={item.title}>
              <Text>{item.title}</Text>
              <Text>{item.author}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default BookList;
