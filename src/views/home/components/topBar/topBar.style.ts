import {StyleSheet} from 'react-native';
import theme from '../../../../app/configurations/theme';
export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#FFC700',
    gap: 3,
  },
  locationText: {
    fontSize: 13,
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  iconContainer: {
    width: 50,
    heigh: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#71747b6e',
    borderWidth: 2,
    borderRadius: 50,
    padding: 10,
  },
});
