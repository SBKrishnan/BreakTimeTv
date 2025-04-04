import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../screens/Home/Home';
import Country from '../screens/countries/Country';
import CountryChannel from '../screens/countries/CountryChannel';
import VideoPlayer from '../screens/video/VideoPlayer';
import Category from '../screens/categories/Category';
import CategoriesChannel from '../screens/categories/CategoriesChannel';
import Languages from '../screens/languages/Languages';
import LanguageChannels from '../screens/languages/LanguageChannels';
import English from '../screens/local/pages/English';
import Japan from '../screens/local/pages/Japan';
const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Country" component={Country} />
      <Stack.Screen name="CountryChannel" component={CountryChannel} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="CategoriesChannel" component={CategoriesChannel} />
      <Stack.Screen name="Languages" component={Languages} />
      <Stack.Screen name="LanguagesChannel" component={LanguageChannels} />
      <Stack.Screen name="Japan" component={Japan} />
      <Stack.Screen name="English" component={English} />
      <Stack.Screen name="Video" component={VideoPlayer} />
    </Stack.Navigator>
  );
};
export default RootStack;
const styles = StyleSheet.create({});
