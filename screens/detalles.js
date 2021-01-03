import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import * as Interface from '../components/interface'
import { AntDesign } from '@expo/vector-icons'


function detalles({accion}){    
    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <AntDesign style={styles.head_items} name="leftcircleo" size={30} onPress={() => accion(false)}/>
                <AntDesign style={styles.head_items} name="save" size={30}/>                   
            </View>
            <Text style={styles.text}>ESCRIBE TUS NOTAS</Text>
            <TextInput style={styles.input} multiline='true'/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{     
        flex:1,
    },
    text:{
        color:Interface.colorText,
        textAlign:'center',
    },
    head:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:15,
    },
    head_items:{
        marginRight:25,
        color:Interface.colorText,
    },
    input:{
        flex:1,
        borderWidth:5,
        borderColor:Interface.colorText,
        margin:10,
        borderRadius:10,
        color:Interface.colorText,
        fontSize:20,
    }
})

export default detalles