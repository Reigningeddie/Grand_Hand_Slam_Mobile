import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Grid() {
  return <View style={styles.body}>
      <View style={styles.main}>
        <View style={styles.sides}>
          <Pressable style={styles.center}><Link href={'/leaderBoard'}><View><Text style={styles.item}>LeaderBoards</Text></View></Link></Pressable>
          <View style={styles.center}><Text style={styles.item}>Specials</Text></View>
          <View style={styles.center}><Text style={styles.item}>Rules</Text></View>
        </View>
        <View style={styles.sides}>
        <Pressable style={styles.center}><Link href={'/powerUps'}><View><Text style={styles.item}>PowerUps</Text></View></Link></Pressable>
          <View style={styles.center}><Text style={styles.item}>Friends</Text></View>
          <View style={styles.center}><Text style={styles.item}>Bars</Text></View>
        </View>
      </View>
  </View>
};

const styles = StyleSheet.create({
  body: {
    color: 'aliceblue',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10
  },

  
  main: {
    backgroundColor: '#2D4356',
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sides: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
  },

  center: {
    alignItem: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#82ffff',
    height: '15%',
    width: '80%',
    margin: 10,
  },

  item: {
    color: '#82ffff',
    textAlign: 'center'
  }



});