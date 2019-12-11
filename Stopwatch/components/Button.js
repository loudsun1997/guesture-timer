import React from 'react';
import { StyleSheet, Button } from 'react-native';


type Props = {
  onPress: any,
  text: string,
};

const CustomizableButton = (props: Props) => {
  const { onPress, text } = props;
  return (
    <Button
      title={`${text}`}
      onPress={onPress}
      />
  );
};

export { CustomizableButton }