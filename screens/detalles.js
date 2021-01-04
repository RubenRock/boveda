import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import * as Interface from '../components/interface'
import { AntDesign } from '@expo/vector-icons'
import * as ConexionSqlite from '../components/conexionSQL'


function detalles({accion}){    
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <AntDesign style={styles.head_items} name="leftcircleo" size={30} onPress={() => accion(false)}/>
                <AntDesign style={styles.head_items} name="save" size={30} onPress={() => ConexionSqlite.guardarDatos({titulo,descripcion})}/>                   
                <AntDesign style={styles.head_items} name="save" size={30} onPress={() => ConexionSqlite.verificarTablas()}/>                   
            </View>
            
            <View>
                <Text style={styles.text}>TITULO</Text>
                <TextInput style={styles.input} onChangeText={(x) => setTitulo(x) }/>
            </View>

            <Text style={styles.text}>ESCRIBE TUS NOTAS</Text>
            <TextInput style={styles.input} multiline='true' onChangeText={(x) => setDescripcion(x)}/>

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