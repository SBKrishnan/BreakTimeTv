import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {list} from './list';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const TopCountry = () => {
  const navigation = useNavigation();
  const handleCountry = ({item}: any) => {
    const countrycode = item.code;
    navigation.navigate('CountryChannel', {
      countrycode,
      langname: item.name,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={key => key.code}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 10,
            }}>
            <TouchableOpacity onPress={() => handleCountry({item})}>
              <LinearGradient
                colors={['#063CFF', '#FE0BF6']}
                locations={[0, 0.9]}
                style={styles.cardContainer}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 25,
                    fontWeight: '600',
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      />
      {/* <View id="carousel-component">
        <Carousel
          data={list}
          width={width} // Set the width property as required
          height={230}
          loop
          autoPlay
          autoPlayInterval={2000}
          pagingEnabled={true}
          snapEnabled={true}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 80,
          }}
          // onProgressChange={progress}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleCountry({item})}>
              <LinearGradient
                colors={['#063CFF', '#FE0BF6']}
                locations={[0, 0.9]}
                style={styles.cardContainer}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 30,
                    fontWeight: '700',
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      </View> */}
    </View>
  );
};
export default TopCountry;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  cardContainer: {
    marginHorizontal: 10,
    paddingVertical: 55,
    paddingHorizontal: 40,
    backgroundColor: '#107bfa',
    borderRadius: 15,
  },
});
