import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Box from '../../modules/box/Box';
const LanguagesItem = ({item}) => {
  const navigation = useNavigation();
  const handleLanguages = ({item}: any) => {
    navigation.navigate('LanguagesChannel', {
      code: item.code,
      langname: item.name,
    });
  };
  return <Box name={item.name} onPress={() => handleLanguages({item})} />;
};
export default LanguagesItem;
