import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Search from '../../../modules/search/Search';
import {japan} from '../data/japan';
import {parseM3U} from '../../../utils/m3uParser/m3uParser';
import {useNavigation} from '@react-navigation/native';
import Title from '../../../modules/title/Title';
import BoxContainer from '../../../modules/box/BoxContainer';
import LinearGradient from 'react-native-linear-gradient';

const Japan = () => {
  const navigation = useNavigation();
  const streams = parseM3U(japan);

  const handleplay = ({item}) => {
    const streamUrl = item.url;
    navigation.navigate('Video', {streamUrl});
  };

  const [searchQuery, setSearchQuery] = useState('');
  const filteredChannels = streams.filter((steams: any) =>
    steams.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Title name={'Japan'} upperCase />
      <Search value={searchQuery} onChangeText={t => setSearchQuery(t)} />
      <BoxContainer>
        <FlatList
          data={filteredChannels}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}: any) => (
            <LinearGradient
              colors={['#00A6FF', '#3300FE']}
              locations={[0, 0.7]}
              style={styles.channel}>
              <TouchableOpacity onPress={() => handleplay({item})}>
                <Image
                  source={{
                    uri: item.logo || 'https://via.placeholder.com/150',
                  }}
                  style={{width: 200, height: 100, alignSelf: 'center'}}
                  resizeMode="center"
                />
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: 20,
                    fontWeight: '700',
                    textAlign: 'center',
                    color: '#fff',
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          )}
          ListEmptyComponent={() => (
            <Text style={{textAlign: 'center', marginTop: 20}}>
              No channels found.
            </Text>
          )}
        />
      </BoxContainer>
    </View>
  );
};
export default Japan;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 20,
    height: 200,
    width: 300,
    textAlign: 'center',
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  channel: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 15,
    borderRadius: 20,
  },
});
