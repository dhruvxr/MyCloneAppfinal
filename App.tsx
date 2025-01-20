import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";

export default function App() {
  // Function to handle alert button click
  const showAlert = () => {
    Alert.alert("Alert button pressed!");
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image
        source={require("./assets/Instagram_icon.png")}
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>
        Connect with friends and the world around you on Instagram.
      </Text>



      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#444",
  },
  


  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  orText: {
    marginHorizontal: 10,
    color: "#888",
  },

});