import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";

interface CardProps {
  icon: any;
  label: string;
  description: string;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ icon, label, description, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.cardWrapper}>
        <MaterialCommunityIcons name={icon} size={45} color={COLORS.primary} />
        <Text style={styles.textLabel}>{label}</Text>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grayLight,
    height: 150,
    flex: 1,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
    elevation: 20,
    shadowOffset: {
      height: 100,
      width: 100,
    },
    shadowColor: "black",
  },
  cardWrapper: {
    gap: 6,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1,
  },
  textLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.dark,
    marginLeft: 8,
  },
  textDescription: {
    color: COLORS.gray,
    marginLeft: 8,
  },
});

export default Card;
