import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import SecondPage from "./SecondPage";
import PasswordSet from "./PasswordSet";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function FirstPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const checkLogin = () => {
    if (email === "admin" && password === "admin") {
      setErr(false);
      console.log("navigation");
      navigation.navigate("ViewTimesheets");
    } else {
      setErr(true);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("./sup1.jpg")} style={styles.logo} />
      <View style={styles.formContainer}>
        <View style={styles.incontainer}>
          <FontAwesome
            name={"user-circle"}
            size={20}
            color="#6e6969"
            style={styles.icon}
          />
          <TextInput
            style={styles.text}
            placeholder="Username"
            value={email}
            onChangeText={(em) => {
              setEmail(em);
              setErr(false);
            }}
          />
        </View>
        <View style={styles.incontainer}>
          <FontAwesome
            name="key"
            size={20}
            color="#6e6969"
            style={styles.icon}
          />
          <TextInput
            style={styles.text}
            placeholder="Password"
            value={password}
            onChangeText={(em) => {
              setPassword(em);
              setErr(false);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.passwordReset}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text>Forgot Password</Text>
        </TouchableOpacity>
        {err ? (
          <Text style={{ marginTop: 10, color: "red" }}>
            Please enter valid details
          </Text>
        ) : (
          <Text style={{ marginTop: 10, color: "red" }}></Text>
        )}
        <TouchableOpacity style={styles.button} onPress={checkLogin}>
          <Text style={[styles.text, { textAlign: "center", color: "white" }]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={FirstPage} />
        <Stack.Screen name="ViewTimesheets" component={SecondPage} />
        <Stack.Screen name="ResetPassword" component={PasswordSet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 5,
  },
  logo: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  button: {
    backgroundColor: "#2874A6",
    borderRadius: 25,
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 15,
    width: "35%",
    marginVertical: 5,
  },
  text: {
    // paddingHorizontal: 25,
    width: "100%",
    color: "black",
    fontSize: 18,
  },
  incontainer: {
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  formContainer: {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
  },
  passwordReset: {
    width: "80%",
    alignItems: "flex-end",
  },
});
