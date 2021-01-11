import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import * as Interface from '../components/interface'
import { AntDesign } from '@expo/vector-icons'
import * as ConexionSqlite from '../components/conexionSQL'


function detalles({accion, datos}){            
    const [titulo, setTitulo] = useState(datos.titulo)
    const [descripcion, setDescripcion] = useState(datos.detalle)

    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <AntDesign style={styles.head_items} name="leftcircleo" size={30} onPress={() => accion({estado:false})}/>
                <AntDesign style={styles.head_items} name="save" size={30} onPress={() => ConexionSqlite.guardarDatos({titulo, descripcion, datos})}/>                   
                {datos.clave ?  //si abrimos una nota puede aparecer el boton de borrar
                    <AntDesign style={styles.head_items} name="delete" size={30} onPress={() => {ConexionSqlite.eliminarTitulo(datos)
                                                                                                  accion({estado:false})      }}/>       
                    :null            
                }   
            </View>
            
            <View style={{height:70}}>
                <Text style={styles.text}>TITULO</Text>
                <TextInput style={styles.input} onChangeText={(x) => setTitulo(x) } value={titulo}/>
            </View>

            <Text style={styles.text}>ESCRIBE TUS NOTAS</Text>
            <TextInput style={styles.input} multiline={true} onChangeText={(x) => setDescripcion(x)} value ={descripcion}/>

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
        marginBottom:10,
    },
    head_items:{
        marginRight:25,
        color:Interface.colorText,
    },
    input:{
        flex:1,
        borderWidth:2,
        borderColor:Interface.colorText,
        margin:10,
        borderRadius:10,
        color:Interface.colorText,
        fontSize:20,
        paddingHorizontal:5,
        textAlignVertical:'top',
    }
})

export default detalles