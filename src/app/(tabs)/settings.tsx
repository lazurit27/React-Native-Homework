import Header from "@/components/base/header";
import Button from "@/components/screens/profile/ui/button";
import { layout } from "@/constant/layout";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {

  const { colorScheme, toggleTheme } = useTheme();
  const styles = getStyles(colorScheme);

  const handleModeChange = () => {
    toggleTheme(colorScheme === "dark" ? "light" : "dark");
  };


  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <Header title="Settings" />
      <View style={styles.settingsContainer}>
        <View style={styles.settingItem}>
          <Text style={styles.settingItemText}>Theme</Text>
          <Switch
            value={colorScheme === "dark"}
            onValueChange={handleModeChange}
            trackColor={{
              false: colorScheme === "dark" ? "#6a6a6a" : "#d1d5db",
              true: colorScheme === "dark" ? "#6a6a6a" : "#d1d5db",
            }}
            thumbColor={colorScheme === "dark" ? layout.colors.white : layout.colors.black}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const getStyles = (theme: ThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme === "dark" ? layout.colors.black : layout.colors.white,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
    gap: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingItemText: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: theme === "dark" ? layout.colors.white : layout.colors.black,
  }
});