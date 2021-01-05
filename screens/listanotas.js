import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Detalles from './detalles'
import * as Interface from '../components/interface'
import * as ConexionSqlite from '../components/conexionSQL'

function menu () {    
    const [mostrarDetalles, setMostrarDetalles] = useState(false)  
    const [listaTitulos, setListaTitulos] = useState([])
    
    
    useEffect(() =>{
        ConexionSqlite.leerTitulos().then(x => setListaTitulos(x))
    },[mostrarDetalles])
    

    useEffect(() =>{
        ConexionSqlite.crearTablas()
    },[])

    return(
        <View style={{flex:1}}>
            {!mostrarDetalles ?
            <>
                <View style={styles.head}>
                    <AntDesign style={styles.head_items} name="pluscircleo" size={35} onPress={() => setMostrarDetalles(true)}/>                    
                    <AntDesign style={styles.head_items} name="cloudo" size={35} />
                </View>
                <Text style={styles.head_text}>LISTA DE NOTAS</Text>

                <FlatList
                style={styles.lista_titulos}
                data={listaTitulos}
                keyExtractor={item => item.clave}
                renderItem={item => <TouchableOpacity onPress={()=>console.log(item.item.clave)}>
                                        <View style={{flexDirection:'row',borderBottomWidth:1, borderColor:Interface.colorText,justifyContent:'space-between'}}>
                                            <Text style={styles.texto_lista}>{item.item.nombre}</Text>
                                            <Text style={styles.fecha_lista}>{item.item.fecha}</Text>                                            
                                        </View>
                                    </TouchableOpacity>}

              
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
    },
    lista_titulos:{
        margin:10,
    },
    texto_lista:{
        color:Interface.colorText,
        marginTop:15,
        fontSize:18,
    },
    fecha_lista:{
        fontSize:10,
        color:Interface.colorText,
        marginTop:10,
    }
})

export default menu