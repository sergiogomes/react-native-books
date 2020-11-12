import React from "react";
import { View, Text } from "react-native";

const BookDetailScreen = ({ navigation }) => {
  const book = navigation.getParam("book");

  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
    </View>
  );
};

export default BookDetailScreen;
