import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import useCurrentUserDetails from "../../hooks/useCurrentUserDetails";
import useDimension from "../../hooks/useDimensions";

export default function Info() {
  const { screenHeight, screenWidth } = useDimension();
  const styles = StyleSheet.create({
    container: {
      height: screenHeight * 0.25,
      top: 10,
      width: "100%",
      paddingHorizontal: 10,
    },
    infoContainer: {
      top: 9,
      height: "50%",
      width: "100%",
      flexDirection: "row",
    },
    profileImage: {
      height: "100%",
      width: "30%",
      justifyContent: "center",
      alignItems: "center",
    },
    info: {
      height: "100%",
      width: "70%",
      justifyContent: "space-around",
    },
  });
  const { name, service, userId, profileImage, reviews, ratings } =
    useCurrentUserDetails();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 500 }}>Hello, Taskmaster</Text>
      <View style={styles.infoContainer}>
        <View style={styles.profileImage}>
          <Image
            source={{ uri: profileImage }}
            style={{ height: 70, width: 70, borderRadius: 35 }}
          />
        </View>
        <View style={styles.info}>
          <View style={{ flexDirection: "row" }}>
            <Text>Task Master Name: </Text>
            <Text style={{ fontWeight: "bold", left: 10 }}>{name}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Task Master ID: </Text>
            <Text style={{ fontWeight: "bold", left: 10 }}>{userId}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Primary Service: </Text>
            <Text style={{ fontWeight: "bold", left: 10, color: "#3898b3" }}>
              {service}
            </Text>
          </View>
        </View>
      </View>
      <Text style={{ top: 15 }}>
        {ratings} ⭐️ {"("}
        {reviews}+ reviews{")"}
      </Text>
    </View>
  );
}
