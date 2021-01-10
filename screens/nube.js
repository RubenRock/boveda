import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import * as Interface from '../components/interface'
import { AntDesign } from '@expo/vector-icons'
import * as ConeccionFirestore from '../components/conexionFirestore'
import * as ConexionSqlite from '../components/conexionSQL'


function nube ({accion}) {    
    
    const subirNube = async() =>{
        const titulos = await ConexionSqlite.leerTitulos() 
        await ConeccionFirestore.borrarNube()       
        ConeccionFirestore.subirNube(titulos)
    }

    const descargarNube = async() =>{
        let resul = []        
        let index = 0
        let titulo, descripcion, clave, fecha

        resul = await ConeccionFirestore.descargarNube()        

        ConexionSqlite.limpiarDatos()

        while (index < resul.length) {
            console.log(resul[index])
            titulo = resul[index].nombre
            descripcion = resul[index].detalle
            clave = resul[index].clave
            fecha = resul[index].fecha
            ConexionSqlite.guardarDatosNube({titulo,descripcion,clave,fecha})
            index++            
            if (index == resul.length) 
                alert('proceso termiando') 
        }
    }

    return(
        <View style={styles.container} >
            <View style={styles.head}>
                <AntDesign style={styles.head_items} name="leftcircleo" size={30} onPress={() => accion(false)}/>                
            </View>

            <Text style={styles.head_text}>GUARDAR / CARGAR DESDE LA NUBE</Text>

            <View style={styles.body}>
                <AntDesign style={styles.head_items} name="cloudupload" size={120} onPress={() => subirNube()} />
                <AntDesign style={styles.head_items} name="clouddownload" size={120} onPress={() => descargarNube()}/>
            </View>
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
        marginTop:20,
    },
    head_items:{
        marginRight:25,
        color:Interface.colorText,      
    },
    body:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    head_text:{
        color:Interface.colorText,
        textAlign:'center',
        fontSize:22,
        marginTop:20,
    },
})

export default nube