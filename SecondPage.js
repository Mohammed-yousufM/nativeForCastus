import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Picker,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Picker } from "@react-native-picker/picker";

const data = [
  {
    id: "1",
    status: "Open",
    bckColor: "blue",
    info: {
      head: "FACEBOOK",
      body: "2020-08-08 - 2020-08-14",
    },
  },
  {
    id: "2",
    status: "Submitted",
    bckColor: "green",
    info: {
      head: "Castus",
      body: "2020-10-10 - 2020-10-16",
    },
  },
  {
    id: "3",
    status: "Approved",
    bckColor: "green",

    info: {
      head: "FACEBOOK",
      body: "2020-10-10 - 2020-10-16",
    },
  },
  {
    id: "4",
    status: "Rejected",
    bckColor: "red",
    info: {
      head: "FACEBOOK",
      body: "2020-10-10 - 2020-10-16",
    },
  },
  {
    id: "5",
    status: "Submitted",
    bckColor: "green",

    info: {
      head: "FACEBOOK",
      body: "2020-10-10 - 2020-10-16",
    },
  },
  {
    id: "6",
    status: "Open",
    bckColor: "blue",
    info: {
      head: "FACEBOOK",
      body: "2020-08-08 - 2020-08-14",
    },
  },
  {
    id: "7",
    status: "Open",
    bckColor: "blue",
    info: {
      head: "FACEBOOK",
      body: "2020-08-08 - 2020-08-14",
    },
  },
];

const SecondPage = () => {
  const [status, setStatus] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.top}></View>
        <View style={styles.profCont}>
          <Image source={require("./sup1.jpg")} style={styles.prof} />
          <Text>Welcome Ravi</Text>
        </View>
        <View style={styles.dummy}></View>
        <View style={styles.mid}>
          <View style={styles.pickCont}>
            <Picker
              selectedValue={status}
              style={styles.pick}
              onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
            >
              <Picker.Item label="Status" value="status" />
              <Picker.Item label="Open" value="open" />
              <Picker.Item label="Approved" value="approved" />
              <Picker.Item label="Rejected" value="rejected" />
              <Picker.Item label="Submitted" value="submitted" />
            </Picker>
          </View>
          <TouchableOpacity>
            <View style={styles.crtCont}>
              <Text style={{ color: "white" }}>Create</Text>
              <View style={styles.iconPlus}>
                <AntDesign name="plus" size={18} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {data.map((val) => {
          return (
            <View style={styles.card} key={val.id}>
              <View style={[styles.textCon, { backgroundColor: val.bckColor }]}>
                <Text style={styles.textVer}>{val.status}</Text>
              </View>
              <View style={styles.infoin}>
                <Text>{val.info.head}</Text>
                <Text>{val.info.body}</Text>
              </View>
              <TouchableOpacity style={{ paddingRight: 10 }}>
                <MaterialCommunityIcons
                  name="greater-than"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  top: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "blue",
    height: 100,
    alignSelf: "stretch",
  },
  profCont: {
    position: "absolute",
    top: 70,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  prof: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 40,
  },
  pickCont: {
    alignSelf: "flex-start",
    width: 120,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
  },
  pick: {
    height: 50,
    width: 130,
    color: "gray",
  },
  mid: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 10,
  },
  crtCont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    height: 30,
    paddingHorizontal: 10,
  },
  iconPlus: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "white",
    marginLeft: 10,
  },
  dummy: {
    marginTop: 70,
    alignSelf: "stretch",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    height: 80,
    marginVertical: 5,
    backgroundColor: "white",
    elevation: 10,
  },
  textCon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    alignSelf: "stretch",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  textVer: {
    transform: [{ rotate: "90deg" }],
    fontSize: 10,
    alignSelf: "stretch",
    width: 50,
    color: "white",
    textAlignVertical: "center",
    textAlign: "center",
  },
  infoin: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
});

export default SecondPage;
