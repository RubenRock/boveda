import React, { useState } from 'react'
import {View, Text, StyleSheet,TouchableOpacity, TextInput, Image} from 'react-native'
import * as Interface from '../components/interface'
import * as ConexionSqlite from '../components/conexionSQL'
import Menu from './listanotas'

const imagen = require('../assets/seguridad.svg')

function login () {  
    const [usuario, setUsuario] = useState('')
    const [mostrarMenu, setmostrarMenu] = useState(false)

    const buscarUsuario = async  (usuario) =>{        
        const resul = await ConexionSqlite.buscarUsuario(usuario)
        if (resul)
            setmostrarMenu(resul)
        else    
            alert('Usuario incorrecto')
    }

    return(
        <View style={{flex:1}}>            
        {!mostrarMenu ?
            <View style={styles.container}>
                <View>
                    <Image source={imagen} style={styles.image} /> 
                </View>    
                <Text style= {styles.text}> INICIAR SESION  </Text>
                <TextInput secureTextEntry={true} 
                    onChangeText={texto => setUsuario(texto)} 
                    placeholderTextColor='rgba(155, 255, 155, 0.3)' 
                    placeholder='Contraseña' 
                    style={[styles.input,styles.text]} 
                />
                <TouchableOpacity style={styles.boton} onPress={ () => buscarUsuario(usuario)}>
                    <Text style={styles.textoBoton}  >Aceptar</Text>
                </TouchableOpacity>  
            </View>
        :
            <Menu />
        }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    text:{        
        color:Interface.colorText,
        fontWeight:"bold",
        fontSize:25,
        textAlign:'center',
        },
  
    input:{            
        marginTop:50,
        borderBottomWidth:2,
        borderColor:Interface.colorText,
        marginBottom:10,
        width:'80%'
    },
    boton:{
        backgroundColor:Interface.colorText,
        borderRadius:10,        
    },
    textoBoton:{        
        marginVertical:5,
        marginHorizontal:30,
        fontWeight:"bold",
        fontSize:19,
        textAlign:'center',
    },
    image: {        
        width: 50,
        height:50,     
        
      },
})


export default login