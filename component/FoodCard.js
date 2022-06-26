import { View, Text, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react"

const  FoodCard = ({name, image, navigation}) => {
    return (
        <View style={{flex:1, alignItems: 'center'}}>
            <View style={style.main}>
                <View style={style.imgContainer}>
                    <Image source={{uri: image}} style={style.image}/>
                </View>
                <View>
                    <Text style={style.text}>{name}</Text>
                    <Text style={{textAlign: 'center', marginTop: 10}} onPress={()=> navigation.navigate('Details', {name, image})}>Checkout</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    main: {
        width: '90vw',
        height: '40vh',
        backgroundColor: 'red',
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'aliceblue',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    imgContainer : {
        flex: 0.8,
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    }
})
export default FoodCard;