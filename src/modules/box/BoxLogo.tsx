import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type BoxLogoProps = {
  item?: string;
  onPress?: () => void;
};

const BoxLogo = ({item, onPress}: BoxLogoProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#00A6FF', '#3300FE']}
        locations={[0, 0.7]}
        style={styles.channel}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{uri: item.logo}}
            style={{width: 200, height: 100, alignSelf: 'center'}}
            resizeMode="contain"
          />
          <Text
            style={{
              marginTop: 5,
              fontSize: 20,
              fontWeight: '700',
              textAlign: 'center',
              color: '#fff',
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
export default BoxLogo;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  channel: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
});
