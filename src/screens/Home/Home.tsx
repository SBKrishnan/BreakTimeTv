import {StyleSheet, Text, View} from 'react-native';
import ScreenWrapper from '../../modules/screenWrapper/ScreenWrapper';
import AppText from '../../modules/appText/AppText';
import Collections from '../../modules/collections/Collections';
import Search from '../../modules/search/Search';
import HomeCountries from '../../component/countries/HomeCountries';
import {useNavigation} from '@react-navigation/native';
import CategoriesList from '../categories/CategoriesList';
import Local from '../local/Local';
import HomeLanguages from '../../component/languages/HomeLanguages';
import TopCountry from '../topCountries/TopCountry';
const Home = () => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else if (currentHour < 22) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  };

  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <AppText style={styles.greetingText}>{getGreeting()}</AppText>
      <Collections name={'Top Countries'} text=" ">
        <TopCountry />
      </Collections>
      <Collections
        name={'Categories'}
        onPress={() => navigation.navigate('Category')}>
        <CategoriesList horizontal={true} />
      </Collections>
      <Collections
        name={'World Countries'}
        onPress={() => navigation.navigate('Country')}>
        <HomeCountries />
      </Collections>
      <Collections
        name={'World Languages'}
        onPress={() => navigation.navigate('Languages')}>
        <HomeLanguages />
      </Collections>
      <Collections name={'Local'} text=" ">
        <Local />
      </Collections>
      <View style={{marginBottom: 40}}></View>
    </ScreenWrapper>
  );
};
export default Home;
const styles = StyleSheet.create({
  greetingText: {
    marginTop: 50,
    marginLeft: 10,
    fontSize: 30,
    fontWeight: '700',
  },
});
