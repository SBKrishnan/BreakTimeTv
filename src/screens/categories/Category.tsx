import {StyleSheet, Text, View} from 'react-native';
import CategoriesList from './CategoriesList';
import Title from '../../modules/title/Title';
import BoxContainer from '../../modules/box/BoxContainer';
const Category = () => {
  return (
    <View style={styles.container}>
      <Title name="Categories" upperCase />
      <BoxContainer>
        <CategoriesList horizontal={false} />
      </BoxContainer>
    </View>
  );
};
export default Category;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
});
