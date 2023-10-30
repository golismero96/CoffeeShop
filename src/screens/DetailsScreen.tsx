import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../theme/theme';

const DetailsScreen = () => {
  return (
    <View>
      <Text style={styles.sectionContainer}>DetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    color: COLORS.primaryBlackHex,
  },});

export { DetailsScreen };
