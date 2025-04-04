import { StyleSheet, Text, View } from "react-native";
import { fetchLanguages } from "../../provider/Api";
import { useEffect, useState } from "react";
import LanguagesList from "../../screens/languages/LanguagesList";
import ActivityIndicator from "../../modules/activitiyIndicator/ActivityIndicator";
const HomeLanguages = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadLanguages = async () => {
      setLoading(true);
      const data = await fetchLanguages();
      setLanguages(data);
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
        <LanguagesList horizontal={true} filteredChannels={languages} />
      )}
    </View>
  );
};
export default HomeLanguages;
const styles = StyleSheet.create({});
