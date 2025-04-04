import {StyleSheet, Text, View} from 'react-native';
const BoxContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
export default BoxContainer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(78, 107, 153, 0.58)',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
    padding: 20,
    marginHorizontal: 15,
  },
});
