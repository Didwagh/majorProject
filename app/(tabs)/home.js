import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    Alert,
    Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
    const router = useRouter();

    const handleNavigate = (path) => {

        console.log(`Navigating to ${path}`);
        router.push(path);
    };

    const handleLogout = () => {
      Alert.alert("Log Out", "Are you sure you want to log out?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Log Out",
          onPress: () => {
            console.log("Logging out and navigating to /login");
            handleNavigate("/login");
          },
        },
      ]);
    };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{ uri: "https://www.example.com/your-logo.png" }}
          />
          <Text style={styles.title}>Welcome to Your App</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => handleNavigate("/profile")}
          >
            <Text style={styles.buttonText}>Go to Profile</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => handleNavigate("/settings")}
          >
            <Text style={styles.buttonText}>Settings</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={handleLogout}
          >
            <Text style={styles.buttonText}>Log Out</Text>
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Ionicons name="home" size={24} color="gray" />
          <Text style={styles.footerText}>Home</Text>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  buttonsContainer: {
    width: "80%",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#0072b1",
    borderRadius: 6,
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    padding: 20,
  },
  footerText: {
    marginLeft: 10,
    fontSize: 16,
    color: "gray",
  },
});

export default Home;