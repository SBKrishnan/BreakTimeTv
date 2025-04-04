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
import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';

import {
  fetchChannels,
  fetchLanguages,
  fetchStreamsLinks,
} from '../../provider/Api';
import ActivityIndicator from '../../modules/activitiyIndicator/ActivityIndicator';
import Search from '../../modules/search/Search';
import BoxLogo from '../../modules/box/BoxLogo';
import BoxContainer from '../../modules/box/BoxContainer';
import Title from '../../modules/title/Title';

const LanguageChannels = ({route}) => {
  const {code, langname} = route.params;

  const [loading, setLoading] = useState(true);
  const [channels, setChannels] = useState([]);
  const [streams, setStreams] = useState<any[]>([]);

  useEffect(() => {
    const loadChannels = async () => {
      setLoading(true);
      const getChannels = await fetchChannels();
      const filteredChannels = getChannels.filter(channel =>
        channel.languages.includes(code),
      );
      setChannels(filteredChannels);
      setStreams(await fetchStreamsLinks());
      setLoading(false);
    };
    loadChannels();
  }, [code]);

  const getStreamUrl = (channelId: any) => {
    const stream = streams.find((stream: any) => stream.channel === channelId);
    return stream ? stream.url : null;
  };

  const [searchQuery, setSearchQuery] = useState('');
  const filteredChannels = channels.filter((channel: any) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const navigation = useNavigation();
  const handlePlay = ({streamUrl}: any) => {
    navigation.navigate('Video', {streamUrl});
  };

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: '#000'}}>
      <Title name={langname} upperCase />
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
            Total Channel : {filteredChannels.length}
          </Text>
        ) : null} */}
      </BoxContainer>
    </View>
  );
};
export default LanguageChannels;
