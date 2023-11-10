import { StyleSheet, View } from 'react-native';

export default function Exo1() {
  return (
<View style={styles.container}>
      <View style={styles.redZone}></View>
      <View style={styles.greenZone}>
        <View style={styles.yellowSquare}></View>
        <View style={styles.yellowSquare}></View>
        <View style={styles.yellowSquare}></View>
      </View>
      <View style={styles.blueZone}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  redZone: {
    flex: 1/5,
    backgroundColor: 'red',
  },
  greenZone: {
    flex: 1/5,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  yellowSquare: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderWidth: 3,
    borderColor: 'black',
  },
  blueZone: {
    flex: 3/5,
    backgroundColor: 'blue',
  },
});
