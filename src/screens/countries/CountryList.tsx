import {FlatList, StyleSheet, Text, View} from 'react-native';
import ActivityIndicator from '../../modules/activitiyIndicator/ActivityIndicator';
import {useEffect, useState} from 'react';
import {fetchCountries} from '../../provider/Api';
import CountryItem from './CountryItem';

type CountryListProps = {
  filteredChannels?: any[];
  horizontal: boolean;
};

const CountryList = ({filteredChannels, horizontal}: CountryListProps) => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const loadLanguages = async () => {
      setLoading(true);
      const data = await fetchCountries();
      setCountry(data);
      setLoading(false);
    };
    loadLanguages();
  }, []);
  return (
    <View>
      {loading ? (
        <ActivityIndicator style={{marginTop: 50}} />
      ) : (
        <View>
          <FlatList
            data={filteredChannels}
            // estimatedItemSize={200}
            keyExtractor={item => item.code.toString()}
            renderItem={({item}: any) => <CountryItem item={item} />}
            horizontal={horizontal}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={{textAlign: 'center', marginTop: 20, color: '#fff'}}>
                No countries found.
              </Text>
            )}
          />
        </View>
      )}
    </View>
  );
};
export default CountryList;
