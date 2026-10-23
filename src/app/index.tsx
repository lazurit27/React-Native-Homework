import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const USER_AUTH_STORAGE_KEY = "user_auth";

export default function Index() {
  const router = useRouter();

  const checkUserAuth = async () => {
    const userAuth = await AsyncStorage.getItem(USER_AUTH_STORAGE_KEY);
    setTimeout(() => {
      if (userAuth) {
        router.push("/home");
      } else {
        router.push("/auth/sign-up");
      }
    }, 2000);
  };
  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/rent-logo.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9B401",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 350,
  },
});
