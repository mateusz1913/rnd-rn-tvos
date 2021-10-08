import { ProgressView } from '@react-native-community/progress-view';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, Text, View, useTVEventHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Video from 'react-native-video';

import { commonStyles } from '../../common/styles';
import { theme } from '../../common/theme';

import { styles } from './styles';

function formatTime(time: number) {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(Math.floor(time % 60)).padStart(2, '0');

  return `${minutes}:${seconds}`;
}

const VideoExample: React.FC = () => {
  const isFocused = useIsFocused();
  const videoRef = useRef<Video>(null);
  const [ currentPosition, setCurrentPosition ] = useState(0);
  const [ duration, setDuration ] = useState(0);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const onEndVideoTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (onEndVideoTimeoutRef.current) {
        clearTimeout(onEndVideoTimeoutRef.current);
      }
    };
  }, []);

  function togglePlayPause() {
    setIsPlaying((prev) => !prev);
  }

  useTVEventHandler((event) => {
    if (Platform.OS === 'android' && event.eventKeyAction !== 1) {
      return;
    }

    if ([ 'swipeLeft', 'left' ].includes(event.eventType)) {
      videoRef.current?.seek(Math.max(currentPosition - 5, 0));
    } else if ([ 'swipeRight', 'right' ].includes(event.eventType)) {
      videoRef.current?.seek(Math.min(currentPosition + 5, duration));
    } else if ([ 'playPause', 'select' ].includes(event.eventType)) {
      togglePlayPause();
    }
  });

  return <SafeAreaView style={commonStyles.screenContainer}>
    {/** To trigger events on Android TV, there should be at least one focusable element on screen */}
    <Pressable style={commonStyles.emptyPressable} />
    <View style={styles.videoContainer}>
      {isFocused && <Video
        ref={videoRef}
        onEnd={() => {
          setIsPlaying(false);
          setCurrentPosition(0);
          onEndVideoTimeoutRef.current = setTimeout(() => {
            videoRef.current?.seek(0);
            if (onEndVideoTimeoutRef.current) {
              clearTimeout(onEndVideoTimeoutRef.current);
            }
          }, 100);
        }}
        onLoad={(e) => {
          setDuration(e.duration);
          setCurrentPosition(e.currentTime);
        }}
        onProgress={(e) => {
          setCurrentPosition(e.currentTime);
        }}
        paused={!isPlaying}
        rate={1}
        repeat={false}
        resizeMode="contain"
        source={require('../../assets/sample.mp4')}
        style={styles.videoContainer}
        volume={1}
      />}
    </View>
    <View style={styles.controlsContainer}>
      <Text style={styles.text}>{formatTime(currentPosition) + ' / ' + formatTime(duration)}</Text>
      <ProgressView
        progress={duration === 0 ? 0 : currentPosition / duration}
        progressTintColor={theme.primary}
        trackTintColor={theme.background}
      />
    </View>
  </SafeAreaView>;
};

export default VideoExample;
