import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

type ScreenWrapperProps = {
  children: any;
  style?: StyleProp<ViewStyle>;
};
const ScreenWrapper = ({children, style}: ScreenWrapperProps) => {
  return <ScrollView style={[styles.container, style]}>{children}</ScrollView>;
};
export default ScreenWrapper;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
