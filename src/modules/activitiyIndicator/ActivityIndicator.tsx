import LottieView from "lottie-react-native";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type ActivityIndicatorProps = {
  style?: StyleProp<ViewStyle>;
};
const ActivityIndicator = ({ style }: ActivityIndicatorProps) => {
  return (
    <View style={[styles.activityIndicatorContainer, style]}>
      <LottieView
        autoPlay
        loop
        source={require("./loading.json")}
        style={{ height: 130, width: 130 }}
      />
    </View>
  );
};
export default ActivityIndicator;
const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
