import { StyleSheet, Text, View } from "react-native";
import Box from "../../modules/box/Box";
import { useNavigation } from "@react-navigation/native";
const Local = () => {
  const navigation = useNavigation();
  const handleJapan = () => {
    navigation.navigate("Japan");
  };
  const handleEnglish = () => {
    navigation.navigate("English");
  };
  return (
    <View style={styles.container}>
      <Box name={"Japan"} onPress={handleJapan} />
      <Box name={"English"} onPress={handleEnglish} />
    </View>
  );
};
export default Local;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
