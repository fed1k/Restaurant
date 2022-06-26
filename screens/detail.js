import { View, Text, StyleSheet, Image, Modal, Pressable,
     TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

function Detail({ route }) {
  const { image, name } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    setPrice((e.target.value * 2).toFixed(2))
  }

  const alerter = () => {
    setModalVisible(!modalVisible)
    alert('Order placed successfully')
  }

  return (
    <View style={{ flex: 1, margin: 20, justifyContent: 'center' }}>
      <Modal animationType="fade" transparent={true} visible={modalVisible} style={style.parentModal}>
        <View style={style.modal}>
            <View style={{display: 'flex', flexDirection: 'row', gap: '30px', margin: '20px'}}>
                <Text>Quantity:</Text>
                <TextInput style={style.input} onChange={handleChange}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', gap: '30px'}}>
                <Text>Pricing($)</Text>
                <TextInput style={style.input} editable={false} value={price}/>
            </View>
          <Pressable onPress={() => 
            alerter()
            } style={{margin: '20px'}}>
            {/* <Text>close</Text> */}
            <Text style={{padding: '7px', backgroundColor: '#70C0FB', color: 'white', borderRadius: '8px', textAlign: 'center'}}>Confirm</Text>
          </Pressable>
        </View>
      </Modal>
      <View style={style.imgContainer}>
        <Image source={{ uri: image }} style={style.img} />
      </View>
      <View style={style.description}>
        <Text style={style.category}>{name.toUpperCase()}</Text>
        <TouchableOpacity style={style.toucOpacity} onPress={() => setModalVisible(true)}>Buy</TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    height: "60%",
    width: "80vw",
    marginTop: '100px',
    marginLeft: '40px',
    marginRight: '40px',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  },

  parentModal: {
    justifyContent: 'center',
    alignItems: 'center'
  },    
  imgContainer: {
    flex: 0.8,
    backgroundColor: "lightblue",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderRadius: "10px",
  },
  description: {
    flex: 0.2,
    backgroundColor: "#f1f1f1",
    textAlign: "center",
    alignItems: "center",
    marginTop: "20px",
  },

  descriptText: {
    width: "94vw",
    padding: 20,
    fontSize: 18,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  category: {
    fontWeight: "bold",
    fontSize: 28,
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
    border: "1px solid black",
  },
  toucOpacity: {
    backgroundColor: "#318CE7",
    color: "white",
    textAlign: "center",
    width: "30%",
    padding: "10px",
    alignItems: "center",
    borderRadius: "5px",
    marginTop: "30px",
    fontSize: "15px",
  },

  input: {
    width: '40%',
    border: '1px solid black',
    padding: '7px'
  },
});
export default Detail;
