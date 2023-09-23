import { StyleSheet, View, Text } from 'react-native';

const Home = () => {
  return <View style={styles.body}>
    <Text style={styles.title}>Welcome to Grand Hand Slam</Text>
    <View style={styles.pic}></View>
    <Text style={styles.user}>User Name</Text>
    <View style={styles.gridBox}>
      <View style={styles.grid}>
        <Text style={styles.item}>101</Text>
        <Text style={styles.item}>points</Text>
      </View>
      <View style={styles.grid}>
        <Text style={styles.item}>361</Text>
        <Text style={styles.item}>followers</Text>
      </View>
      <View style={styles.grid}>
        <Text style={styles.item}>253</Text>
        <Text style={styles.item}>following</Text>
      </View>

    </View>
    <Text style={styles.dez}>Description (add max characters)</Text>
  </View>
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    color: '#EAB2A0',
    fontSize: 30,
  },

  pic: {
    border: 'solid',
    height: '10%',
    width: '22%',
    borderRadius: 50,
    backgroundColor: '#EAB2A0'
  },

  dez: {
    color: 'aliceblue',
    fontSize: 25,
  },

  user: {
    color: 'aliceblue',
    fontSize: 20,
  },

  gridBox: {
    color: 'aliceblue',
    flexDirection: 'row',
  },

  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'aliceblue',
    padding: 10,
  },

  item: {
    color: 'aliceblue',
    fontSize: 20,

  }
})



export default Home;