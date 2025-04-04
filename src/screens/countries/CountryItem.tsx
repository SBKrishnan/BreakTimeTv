import {useNavigation} from '@react-navigation/native';
import Box from '../../modules/box/Box';
const CountryItem = ({item}) => {
  const navigation = useNavigation();
  const handleCountry = ({item}: any) => {
    const countrycode = item.code;
    navigation.navigate('CountryChannel', {
      countrycode,
      langname: item.name,
    });
  };
  return <Box name={item.name} onPress={() => handleCountry({item})} />;
};
export default CountryItem;
