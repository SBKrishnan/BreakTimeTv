import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';

type AppTextProps = {
  style?: StyleProp<TextStyle>;
  children: any;
};
const AppText = ({style, children}: AppTextProps) => {
  return <Text style={[styles.Text, style]}>{children}</Text>;
};
export default AppText;
const styles = StyleSheet.create({
  Text: {
    color: '#fff',
  },
});
