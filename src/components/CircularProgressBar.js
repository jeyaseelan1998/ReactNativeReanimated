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
      <View style={styles.loader}>
        <CircularProgress
          value={97}
          radius={120}
          inActiveStrokeOpacity={0.5}
          activeStrokeWidth={15}
          inActiveStrokeWidth={20}
          progressValueStyle={{fontWeight: '100', color: 'white'}}
          activeStrokeSecondaryColor="yellow"
          inActiveStrokeColor="black"
          duration={5000}
          dashedStrokeConfig={{
            count: 50,
            width: 4,
          }}
        />
      </View>
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
  loader: {
    backgroundColor: '#222',
    padding: 20,
    marginTop: 50,
  },
});
