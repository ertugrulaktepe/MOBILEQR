// React 
import{ useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Paper
import { ProgressBar } from 'react-native-paper';

const Loading = () => {

    // Local State
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const loadApp = async () => {
        let progressValue = 0;
        const interval = setInterval(() => {
          if (progressValue < 1) {
            progressValue += 0.05;
            setProgress(progressValue);
          } else {
            clearInterval(interval);
          }
        }, 100);
      };
  
      loadApp();
    }, []);

  return (
    <View style={styles.container}>
        <View style={styles.animationContainer}>
            <ProgressBar 
                progress={progress}
                color="#ff7112"
                style={{ width: 200 }}
            />
            <Text style={styles.loadingText}> Yükleniyor... </Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10
  },
  loadingText: {
    paddingTop:10,
    color:"#ff7112",
    fontSize:12,
    fontWeight:'500'
  }
});

export default Loading;