import {useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ActivityIndicator from '../../modules/activitiyIndicator/ActivityIndicator';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoPlayer = ({route}) => {
  const {streamUrl} = route.params;

  const navigation = useNavigation();
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [subtitles, setSubtitles] = useState([]); // Store extracted subtitles
  const [selectedSubtitleIndex, setSelectedSubtitleIndex] = useState(-1); // Default: No subtitles
  const [showSubtitleMenu, setShowSubtitleMenu] = useState(false);

  //   const handleLoad = meta => {
  //     if (meta?.textTracks && meta.textTracks.length > 0) {
  //       setSubtitles(meta.textTracks); // Store available subtitles
  //     }
  //     setLoading(false);
  //   };

  const handleBuffer = ({isBuffering}) => {
    setLoading(isBuffering); // Show loader only while buffering
  };

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          style={[
            styles.loaderContainer,
            isFullscreen && styles.fullscreenLoader,
          ]}
        />
      )}
      <Video
        ref={videoRef}
        source={{uri: streamUrl}}
        style={styles.video}
        controls
        onBuffer={handleBuffer}
        onFullscreenPlayerWillPresent={() => setIsFullscreen(true)}
        onFullscreenPlayerWillDismiss={() => setIsFullscreen(false)}
        resizeMode="contain"
        maxBitRate={2000000}
        preventsDisplaySleepDuringVideoPlayback
        onError={error => {
          Alert.alert(
            'Video Error',
            'An error occurred while playing the video.',
            [
              {
                text: 'OK',
                onPress: () => navigation.goBack(),
              },
            ],
          );
          setLoading(false);
        }}
        paused={paused}
      />
    </View>
  );
};
export default VideoPlayer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 20,
  },
  video: {width: '100%', height: '100%'},
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  loader: {
    position: 'absolute',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
    transform: [{translateX: -25}, {translateY: -25}],
  },
  fullscreenLoader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: 25}, {translateY: 25}],
  },
  playPauseButton: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 50,
  },

  subtitleButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 50,
  },
  subtitleMenu: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  subtitleItem: {
    padding: 10,
  },
  subtitleText: {
    color: '#fff',
    fontSize: 16,
  },
});
