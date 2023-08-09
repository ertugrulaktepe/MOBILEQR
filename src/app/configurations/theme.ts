import {Platform} from 'react-native';
import {DefaultTheme, MD3LightTheme, configureFonts} from 'react-native-paper';
import {Fonts, ThemeProp} from 'react-native-paper/lib/typescript/types';

const fontConfig = {
  bodyLarge: {
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  bodyMedium: {
    letterSpacing: 0.25,
    lineHeight: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  bodySmall: {
    letterSpacing: 0.25,
    lineHeight: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
};

export const theme: ThemeProp = {
  ...MD3LightTheme,
  fonts: configureFonts({config: fontConfig}),
  colors: {
    ...MD3LightTheme.colors,
    primary: '#FFC700',
  },
};
