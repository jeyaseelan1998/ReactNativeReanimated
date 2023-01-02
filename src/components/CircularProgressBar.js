import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import CircularProgress from 'react-native-circular-progress-indicator';

const CircularProgressBar = () => {
  return (
    <View style={styles.container}>
      <CircularProgress
        value={100}
        activeStrokeColor={'#2465FD'}
        activeStrokeSecondaryColor={'#C25AFF'}
        inActiveStrokeColor={'#2ecc71'}
        inActiveStrokeOpacity={0.2}
        progressValueColor={'#222'}
        valueSuffix={'%'}
        duration={2000}
      />
    </View>
  );
};

export default CircularProgressBar;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
