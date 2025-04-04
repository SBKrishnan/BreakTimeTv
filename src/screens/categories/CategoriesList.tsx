import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {fetchCategories} from '../../provider/Api';
import ActivityIndicator from '../../modules/activitiyIndicator/ActivityIndicator';
import CategoriesItem from './CategoriesItem';
const CategoriesList = ({horizontal}: any) => {
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const loadCategoriesList = async () => {
      setLoading(true);
      setCategoryList(await fetchCategories());
      setLoading(false);
    };
    loadCategoriesList();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator style={{marginTop: 50}} />
      ) : (
        <View>
          <FlatList
            data={categoryList.slice(0, -1)}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CategoriesItem item={item} />}
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
export default CategoriesList;
