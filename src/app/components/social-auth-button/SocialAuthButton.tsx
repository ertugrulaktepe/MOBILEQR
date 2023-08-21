import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {SvgUri, SvgXml} from 'react-native-svg';
type IProps = {
  svgUri: string;
  title: string;
};
const SocialAuthButton = (props: IProps & TouchableOpacityProps) => {
  const {svgUri, title} = props;
  return (
    <TouchableOpacity style={{marginTop: 20}} {...props}>
      <View style={styles.buttonContainer}>
        {/* <SvgUri uri={svgUri} width={30} height={30} /> */}
        <SvgXml xml={svgUri} width={30} height={30} />
        <Text style={{fontSize: 16, fontWeight: '700'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialAuthButton;

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    justifyContent: 'center',
    paddingLeft: 45,
    paddingRight: 55,
    minWidth: Dimensions.get('screen').width / 1.2,
    gap: 20,
  },
});
