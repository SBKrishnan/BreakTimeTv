import {FlatList, StyleSheet, Text, View} from 'react-native';
import ActivityIndicator from '../../modules/activitiyIndicator/ActivityIndicator';
import LanguagesItem from './LanguagesItem';
import {fetchLanguages} from '../../provider/Api';
import {useEffect, useState} from 'react';

type LanguageListProps = {
  filteredChannels?: any[];
  horizontal: boolean;
};

const LanguagesList = ({filteredChannels, horizontal}: LanguageListProps) => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLanguages = async () => {
      const data = await fetchLanguages();
      setLanguages(data);
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
            renderItem={({item}: any) => <LanguagesItem item={item} />}
            horizontal={horizontal}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={{textAlign: 'center', marginTop: 20, color: '#fff'}}>
                No channels found.
              </Text>
            )}
          />
        </View>
      )}
    </View>
  );
};
export default LanguagesList;
