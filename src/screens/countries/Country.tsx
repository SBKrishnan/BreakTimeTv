import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from 'react';
import {fetchCountries} from '../../provider/Api';
import CountryList from './CountryList';
import Search from '../../modules/search/Search';
import Title from '../../modules/title/Title';
import BoxContainer from '../../modules/box/BoxContainer';

const Country = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountry(data);
    };
    loadCountries();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const filteredChannels = country.filter((channel: any) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Title name="All Countries" upperCase />
        <Search value={searchQuery} onChangeText={t => setSearchQuery(t)} />
        <BoxContainer>
          <CountryList filteredChannels={filteredChannels} horizontal={false} />
        </BoxContainer>
      </View>
    </View>
  );
};
export default Country;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
});
