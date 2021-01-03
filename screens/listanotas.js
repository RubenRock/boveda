import React, { useState } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Detalles from './detalles'
import * as Interface from '../components/interface'

function menu () {    
    const[mostrarDetalles, setMostrarDetalles] = useState(false)   

    return(
        <View style={{flex:1}}>
            {!mostrarDetalles ?
            <>
                <View style={styles.head}>
                    <AntDesign style={styles.head_items} name="pluscircleo" size={35} onPress={() => setMostrarDetalles(true)}/>
                    <AntDesign style={styles.head_items} name="delete" size={35} onPress={() => console.log('pushado borrar')}/>       
                </View>
                <Text style={styles.head_text}>LISTA DE NOTAS</Text>

                <FlatList

              
                />
             </> 
            :
                <Detalles accion={setMostrarDetalles}/>
            }

            
        </View>
    )
}

const styles = StyleSheet.create({
    head_text:{
        color:Interface.colorText,
        textAlign:'center',
        fontSize:22,
        marginTop:20,
    },
    head:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:15,
    },
    head_items:{
        marginRight:25,
        color:Interface.colorText,
    }
})

export default menu