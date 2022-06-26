import { View, Text, StyleSheet, Image, ImageBackground } from "react-native"
import { Button, ScrollView } from "react-native-web";

function Card({ description, img, category, navigation }) {

    return (
      <View style={{ margin: 10 }}>
        <View style={style.imgContainer}>
            <Image source={{uri: img}} style={style.img} />
        </View>
        <View style={style.description}>
            <Text style={style.category}>{category.toUpperCase()}</Text>
            <ScrollView>
                <Text style={style.descriptText}>{description}</Text>
                <Text onPress={()=> navigation.navigate('SelectedCategory', {name: category})} style={{textDecorationLine: 'underline', fontWeight: 'bold', color: 'grey'}}>See more</Text>
            </ScrollView>
        </View>
      </View>
    );
}
const style = StyleSheet.create({
    imgContainer: {
        flex: 0.8,
        backgroundColor: 'lightblue',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    description: {
        flex: 0.8,
        backgroundColor: '#f1f1f1',
        textAlign: 'center'
    },

    descriptText: {
        width: '94vw',
        padding: 20,
        fontSize: 18
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'center',
    },
    category: {
        fontWeight: 'bold',
        fontSize: 28
    }
})
export default Card