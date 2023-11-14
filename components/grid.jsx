import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Grid() {
  return <View style={styles.body}>
          <View style={styles.main}>
        <View style={styles.columns}>
          <Link href={'/leaderBoard'} asChild><Pressable style={styles.btn}><View style={styles.center}><Text style={styles.item}>LeaderBoard</Text></View></Pressable></Link>
          <Link href={'/friends'} asChild><Pressable style={styles.btn}><View style={styles.center}><Text style={styles.item}>special</Text></View></Pressable></Link>
          <Link href={'/friends'} asChild><Pressable style={styles.btn}><View style={styles.center}><Text style={styles.item}>Rules</Text></View></Pressable></Link>
        </View>
        <View style={styles.columns}>
          <Link href={'/powerUps'} asChild><Pressable style={styles.btn}><View style={styles.center}><Text style={styles.item}>Power Ups</Text></View></Pressable></Link>
          <Link href={'/friends'} asChild><Pressable style={styles.btn}><View style={styles.center}><Text style={styles.item}>Friends</Text></View></Pressable></Link>
          <Link href={'/friends'} asChild><Pressable style={styles.btn}><View style={styles.center}><Text style={styles.item}>Bars</Text></View></Pressable></Link>
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