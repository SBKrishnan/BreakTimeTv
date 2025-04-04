import {StyleSheet, Text, View} from 'react-native';
import ActivityIndicator from '../../modules/activitiyIndicator/ActivityIndicator';
import CountryList from '../../screens/countries/CountryList';
import {useEffect, useState} from 'react';
import {fetchCountries} from '../../provider/Api';
const HomeCountries = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

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
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <CountryList horizontal={true} filteredChannels={country} />
      )}
    </View>
  );
};
export default HomeCountries;
const styles = StyleSheet.create({});
