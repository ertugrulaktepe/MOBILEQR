import {StyleSheet} from 'react-native';
import theme from '../../app/configurations/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      slideContainer: {
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        width:390
      },
      slideImage: {
        width: 390,
        height: 550,
        resizeMode: 'cover',
        borderBottomRightRadius: 125,
        marginBottom:24
      },
      slideText: {
        fontSize: theme.fontSizes.h1,
        color:theme.colors.orange600,
        textAlign:'center',
        fontFamily: theme.fonts.fontFamilySemiBold,
        paddingBottom: 8
      },
      slideDesc: {
        fontSize: theme.fontSizes.h3,
        color:theme.colors.textColor600,
        textAlign:'center',
        fontFamily: theme.fonts.fontFamilyMedium,
        paddingBottom: 8
      },
      slideButtonContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        paddingLeft: 20,
        marginTop: 20,
        position:'relative'
      },
      slideButton: {
        width:50,
        height:50,
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: theme.colors.orange500,
      },
      buttonContentStyle: {
        width:40,
        height:40,
        marginLeft:18
      },
      slideButtonText: {
        marginLeft: 8,
        fontFamily: 'bold',
        fontSize:theme.fontSizes.h2,
        color:theme.colors.textColor600
      },
      paginationContainer: {
        width:150,
        position:'absolute',
        right:0,
        bottom:15
      },
      paginationDot: {
        width: 25,
        height: 7,
        borderRadius: 4,
        marginHorizontal: -5,
        backgroundColor: theme.colors.orange500,
      },
      inactivePaginationDot: {
        width: 15,
        height: 15,
        borderRadius:100,
        backgroundColor: theme.colors.textColor600
      },
});
