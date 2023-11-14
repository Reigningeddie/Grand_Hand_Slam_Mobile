import { View, Text, StyleSheet } from 'react-native';
import Back from '../components/back';

export default function powerUps() {
  return (
    <View style={styles.body}>
      
      <View style={styles.main}>
      <Back />
      <View style={styles.grid}>
        <View style={styles.columns}>
          <View style={styles.center}><Text style={styles.item}>#1</Text></View>
          <View style={styles.center}><Text style={styles.item}>#3</Text></View>
        </View>
        <View style={styles.columns}>
        <View style={styles.center}><Text style={styles.item}>#2</Text></View>
        <View style={styles.center}><Text style={styles.item}>#4</Text></View>
        </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#435B66',
    alignItems: 'center',
    justifyContent: 'center'
  },

  main: {
    backgroundColor: '#2D4356',
    width: '90%',
    height: '95%',
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15
  },

  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '95%',
    flexDirection: 'row'
  },

  columns: {
    width: '35%',
    margin: 10,
  },

  center: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#82FFFF',
    alignItems: 'center',
    height: '17%',
    width: '100%',
    justifyContent: 'center',
    margin: 10
  },

  item: {
    color: '#82FFFF',
  }

})