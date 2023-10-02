import { View, Text, StyleSheet } from 'react-native';

export default function LeaderBoard() {
  return (
    <View style={styles.body}>
      <View style={styles.main}>
        <View style={styles.rank}>
          <View style={styles.top}><View style={styles.one}><Text style={styles.num}>#1</Text></View></View>
            <View style ={styles.rest}>
              <Text style={styles.others}>#2</Text>
              <Text style={styles.others}>#3</Text>
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
    justifyContent: 'center',
    color: 'aliceblue'
  },

  main: {
    backgroundColor: '#2D4356',
    width: '90%',
    height: '95%',
    borderRadius: 10,
    paddingTop: 100,
    alignItems: 'center'
  },

  rank: {
    width: '90%',
  },

  top: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 150
  },

  one: {
    borderWidth: 2,
    borderColor: 'aliceblue',
    height: 150,
    width: 150,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  num: {
    color: 'aliceblue'
  },

  others: {
    color: 'aliceblue',
  }


})