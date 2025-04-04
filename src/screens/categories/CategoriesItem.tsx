import {useNavigation} from '@react-navigation/native';
import Box from '../../modules/box/Box';

const CategoriesItem = ({item}) => {
  const navigation = useNavigation();

  const handleCategories = ({item}: any) => {
    const categoryId = item.id;
    navigation.navigate('CategoriesChannel', {categoryId});
  };

  return <Box name={item.name} onPress={() => handleCategories({item})} />;
};
export default CategoriesItem;
