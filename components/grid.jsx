import { View, Text, StyleSheet } from 'react-native';

export default function Grid() {
  return <View style={styles.body}>
      <View style={styles.main}>
        <View style={styles.sides}>
          <Text style={styles.item}>LeaderBoards</Text>
          <Text style={styles.item}>Specials</Text>
          <Text style={styles.item}>Rules</Text>
        </View>
        <View style={styles.sides}>
          <Text style={styles.item}>Power-Ups</Text>
          <Text style={styles.item}>Friends</Text>
          <Text style={styles.item}>Bars</Text>
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

  item: {
    textAlign: 'center',
    textAlignVertical: 'center',
    border: 'solid',
    borderWidth: 2,
    borderColor: '#82ffff',
    height: '15%',
    width: '80%',
    margin: 10,
    color: '#82ffff'
  }

});