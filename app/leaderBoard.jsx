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
              <View style={styles.border}><Text style={styles.oNum}>#2</Text><View style={styles.oData}>
                <Text style={styles.oName}>name</Text>
                <Text style={styles.oPoints}>points</Text>
              </View></View>
              <View style={styles.border}><Text style={styles.oNum}>#3</Text><View style={styles.oData}>
                <Text style={styles.oName}>name</Text>
                <Text style={styles.oPoints}>points</Text>
              </View></View>
              <View style={styles.border}><Text style={styles.oNum}>#4</Text><View style={styles.oData}>
                <Text style={styles.oName}>name</Text>
                <Text style={styles.oPoints}>points</Text>
              </View></View>
              <View style={styles.border}><Text style={styles.oNum}>#5</Text><View style={styles.oData}>
                <Text style={styles.oName}>name</Text>
                <Text style={styles.oPoints}>points</Text>
              </View></View>
              <View style={styles.border}><Text style={styles.oNum}>#6</Text><View style={styles.oData}>
                <Text style={styles.oName}>name</Text>
                <Text style={styles.oPoints}>points</Text>
              </View></View>
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
    color: 'aliceblue',
    fontSize: 20
  },

  points: {
    color: 'aliceblue',
    fontSize: 20
  },

  num: {
    color: 'aliceblue',
    fontSize: 40
  },

  rest: {
    borderRadius: 50
  },

  border: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 30,
    margin: 5,
    padding: 5,
    backgroundColor: '#338ea4',
    height: 65,
    width: 300,
    flexDirection: 'row'
  },

  oNum: {
    color: 'aliceblue',
    fontSize: 20,
    width: 30,
    marginTop: 10
  },

  oData: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250
  },

  oName: {
    color: 'aliceblue',
    fontSize: 20
  },

  oPoints: {
    color: 'aliceblue',
    fontSize: 20
  }
})