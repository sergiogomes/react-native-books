import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

import books from "../../data/books.json";

const BookList = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item.key}
              style={styles.buttonStyle}
              onPress={() => {
                navigation.navigate("BookDetail", { book: item });
              }}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 15,
    marginHorizontal: 7,
    marginTop: 10,
  },
});

export default withNavigation(BookList);
