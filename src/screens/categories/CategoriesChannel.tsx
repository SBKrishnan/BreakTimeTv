import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {fetchChannelsByCategory, fetchStreamsLinks} from '../../provider/Api';
import ActivityIndicator from '../../modules/activitiyIndicator/ActivityIndicator';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import Search from '../../modules/search/Search';
import BoxLogo from '../../modules/box/BoxLogo';
import BoxContainer from '../../modules/box/BoxContainer';
import Title from '../../modules/title/Title';

const CategoriesChannel = ({route}) => {
  const {categoryId} = route.params;
  const [channel, setChannel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const loadChannels = async () => {
      setLoading(true);
      setChannel(await fetchChannelsByCategory(categoryId));
      setStreams(await fetchStreamsLinks());
      setLoading(false);
    };
    loadChannels();
  }, []);

  const getStreamUrl = (channelId: any) => {
    const stream = streams.find((stream: any) => stream.channel === channelId);
    return stream ? stream.url : null;
  };

  const navigation = useNavigation();
  const handlePlay = ({streamUrl}: any) => {
    navigation.navigate('Video', {streamUrl});
  };

  const [searchQuery, setSearchQuery] = useState('');
  const filteredChannels = channel.filter((channel: any) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: '#000'}}>
      <Title name={categoryId} upperCase />
      <Search value={searchQuery} onChangeText={t => setSearchQuery(t)} />
      <BoxContainer>
        {loading ? (
          <ActivityIndicator style={{marginTop: 50}} />
        ) : (
          <FlatList
            data={filteredChannels}
            // estimatedItemSize={2000}
            keyExtractor={item => item.id}
            renderItem={({item}: any) => {
              const streamUrl = getStreamUrl(item.id);
              if (!streamUrl) return null;
              return (
                <BoxLogo item={item} onPress={() => handlePlay({streamUrl})} />
              );
            }}
            ListEmptyComponent={() => (
              <Text style={{textAlign: 'center', marginTop: 20, color: '#fff'}}>
                No channels found.
              </Text>
            )}
            ListFooterComponent={() => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                {loading && <ActivityIndicator />}
              </View>
            )}
          />
        )}
        {/* {!loading ? (
          <Text style={{ color: "#fff", paddingTop: 10, textAlign: "center" }}>
            Total Channel : {channel.length}
          </Text>
        ) : null} */}
      </BoxContainer>
    </View>
  );
};
export default CategoriesChannel;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(78, 107, 153, 0.58)',
    flex: 1,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  channel: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
});
