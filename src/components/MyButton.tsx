import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MyButtonProps {
  title: string;
}

const MyButton = ({ title }: MyButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19DB8A',
    borderRadius: 8,
  },
});
