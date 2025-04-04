import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type BoxProps = {
  name?: String;
  onPress?: () => void;
};
const Box = ({name, onPress}: BoxProps) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 10,
      }}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={['#00A6FF', '#3300FE']}
          locations={[0, 0.9]}
          style={styles.cardContainer}>
          <Text
            style={{
              color: '#fff',
              fontSize: 25,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            {name}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default Box;
const styles = StyleSheet.create({
  cardContainer: {
    margin: 1,
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: '#107bfa',
    borderRadius: 15,
  },
});
