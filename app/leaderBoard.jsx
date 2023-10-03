import { View, Text, StyleSheet } from 'react-native';
import BackBtn from '../components/back';

export default function LeaderBoard() {
  return (
    <View style={styles.body}>
      <View style={styles.main}>
      <BackBtn style={styles.btn} />
        <View style={styles.rank}>
          <View style={styles.top}>
            <View style={styles.one}>
              <Text style={styles.num}>#1</Text>
            </View>
          </View>
            <View style={styles.oneData}>
              <View>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.points}>101pts</Text>
              </View>
              
            </View>
            <View style ={styles.rest}>
              <Text style={styles.others}>#2</Text>
              <Text style={styles.others}>#3</Text>
              <Text style={styles.others}>#4</Text>
              <Text style={styles.others}>#5</Text>
              <Text style={styles.others}>#6</Text>
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
  },

  main: {
    backgroundColor: '#2D4356',
    width: '90%',
    height: '95%',
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 15
  },


  rank: {
    paddingTop: 80,
    width: '90%',
    alignItems: 'center'
  },

  top: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 60
  },

  one: {
    backgroundColor: '#00728d',
    borderWidth: 2,
    height: 150,
    width: 150,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  oneData: {
    backgroundColor: '#00728d',
    borderWidth: 2,
    borderRadius: 10,
    height: 80,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },

  name: {
    color: 'aliceblue'
  },

  points: {
    color: 'aliceblue'
  },

  num: {
    color: 'aliceblue',
    fontSize: 30
  },

  others: {
    color: 'aliceblue',
    fontSize: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#338ea4',
    height: 50,
    width: 250
  },
})