import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CardProps {
  icon: any;
  label: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, label, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <MaterialCommunityIcons name={icon} size={45} color="#11BFBF" />
        <Text style={[styles.text, styles.bold]}>{label}</Text>
      </View>
      <View>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    height: 180,
    width: 170,
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    justifyContent: "space-around",
    elevation: 20,
    shadowOffset: {
      height: 100,
      width: 100,
    },
    shadowColor: "black",
  },
  imageWrapper: {
    gap: 4,
  },
  text: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "500",
    color: "#000000",
  },
  textDescription: {
    color: "grey",
  },
});

export default Card;
