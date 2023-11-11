import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Grid() {
  return <View style={styles.body}>
          <View style={styles.main}>
        <View style={styles.columns}>
          <Pressable style={styles.btn}><Link href={'/leaderBoard'} style={styles.link}><View style={styles.center}><Text style={styles.item}>LeaderBoard</Text></View></Link></Pressable>
          <Pressable style={styles.btn}><Link href={'/powerUps'} style={styles.link}><View style={styles.center}><Text style={styles.item}>Specials</Text></View></Link></Pressable>
          <View style={styles.btn}><Text style={styles.item}>Rules</Text></View>
        </View>
        <View style={styles.columns}>
        <Pressable style={styles.btn}><Link href={'/powerUps'} style={styles.link}><View style={styles.center}><Text style={styles.item}>PowerUps</Text></View></Link></Pressable>
        <Pressable style={styles.btn}><Link href={'/friends'} style={styles.link}><View style={styles.center}><Text style={styles.item}>Friends</Text></View></Link></Pressable>
          <View style={styles.btn}><Text style={styles.item}>Bars</Text></View>
        </View>
      </View>
  </View>
};

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: -60
  },

  main: {
    backgroundColor: '#2D4356',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10

  },

  columns: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '35%',
    margin: 10,
  },

  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#82ffff',
    borderRadius: 10,
    height: '21%',
    width: '101%',
    margin: 10,
  },

  // link: {
  //   borderWidth: 2
  // },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

  item: {
    color: '#82ffff',
    alignItems: 'center',
  }
});