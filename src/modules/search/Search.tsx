import {StyleSheet, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchProps} from './Search.types';
const Search = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  color = '#fff',
  style,
}: SearchProps) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={40}
        color="white"
        style={styles.searchIcon}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor={color}
        onChangeText={onChangeText}
        style={[styles.searchTextBox, style]}
      />
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
  searchTextBox: {
    paddingVertical: 10,
    paddingLeft: 20,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    marginLeft: 5,
    minWidth: 300,
    color: 'white',
    fontSize: 16,
  },
  searchIcon: {
    marginTop: 5,
    marginRight: 7,
  },
});
