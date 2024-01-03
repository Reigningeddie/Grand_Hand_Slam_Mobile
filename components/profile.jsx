import { StyleSheet, View, Text } from 'react-native';

const Profile = () => {
  return <View style={styles.body}>
    <Text style={styles.title}>Grand Hand Slam</Text>
    <View style={styles.pic}></View>
    <Text style={styles.user}>ReigningEddie</Text>
    <View style={styles.gridBox}>
      <View style={styles.grid}>
        <Text style={styles.num}>150</Text>
        <Text style={styles.item}>points</Text>
      </View>
      <View style={styles.grid}>
        <Text style={styles.num}>361</Text>
        <Text style={styles.item}>followers</Text>
      </View>
      <View style={styles.grid}>
        <Text style={styles.num}>253</Text>
        <Text style={styles.item}>following</Text>
      </View>
    </View>
    <Text style={styles.dez}>Description (add max characters)</Text>
  </View>
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    alignItems: 'center',
    borderTop: 'solid',
    borderTopWidth: 1,
  },

  title: {
    color: '#EAB2A0',
    fontSize: 45,
    fontWeight: 'bold',
  },

  pic: {
    border: 'solid',
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 3,
    backgroundColor: '#EAB2A0',
    borderColor: '#A76F6F'
  },

  user: {
    color: 'aliceblue',
    fontSize: 30,
    color: '#EAB2A0',
    fontWeight: 'bold'
  },

  gridBox: {
    color: 'aliceblue',
    flexDirection: 'row',
  },

  grid: {
    alignItems: 'center',
    color: 'aliceblue',
    padding: 10,

  },

  num: {
    color: 'aliceblue',
    fontSize: 25,
    fontWeight: 'bold'
  },

  item: {
    color: 'aliceblue',
    fontSize: 20,
    },

    dez: {
      color: 'aliceblue',
      fontSize: 20,
      marginHorizontal: 15,
    }
})



export default Profile;