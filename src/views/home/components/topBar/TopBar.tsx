import React, {useContext} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './topBar.style';
import {useTheme} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../../../../context/AuthContext';

const TopBar = () => {
  const theme = useTheme();
  const authUser = useContext(AuthContext);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        marginBottom: 12,
      }}>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BMjk1ZjgyOTgtZmY5ZS00NmYzLWFmNDktYmU5MmYxMGZlNDAzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
              }}
            />
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>Hi,Andy</Text>
            <View style={styles.locationContainer}>
              <FontAwesomeIcon icon={faMapMarkerAlt} color="gray" />
              <Text style={styles.locationText}>Netherlands</Text>
            </View>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faBell} size={25} color="black" />
          </View>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size={25} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;
