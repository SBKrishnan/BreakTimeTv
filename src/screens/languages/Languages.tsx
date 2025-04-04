import {StyleSheet, Text, TextInput, View} from 'react-native';
import LanguagesList from './LanguagesList';
import {useEffect, useState} from 'react';

import {fetchLanguages} from '../../provider/Api';
import Search from '../../modules/search/Search';
import Title from '../../modules/title/Title';
import BoxContainer from '../../modules/box/BoxContainer';

const Languages = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const loadLanguages = async () => {
      const data = await fetchLanguages();
      setLanguages(data);
    };
    loadLanguages();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const filteredChannels = languages.filter((channel: any) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Title name="Languages" upperCase />
        <Search value={searchQuery} onChangeText={t => setSearchQuery(t)} />
        <BoxContainer>
          <LanguagesList
            filteredChannels={filteredChannels}
            horizontal={false}
          />
        </BoxContainer>
      </View>
    </View>
  );
};
export default Languages;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
});
