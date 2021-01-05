import * as SQLITE from 'expo-sqlite'
const db = SQLITE.openDatabase("db.db");

export const borrarTablas = () =>{
    db.transaction(
        tx => {  
            tx.executeSql(`drop table detalles;`, [])        
            tx.executeSql(`drop table lista;`, []) 
        },(e) => console.log(e),
        () => console.log('borrado'))
}

export const crearTablas = () =>{
    db.transaction(tx => {
        tx.executeSql("create table if not exists lista (clave text, nombre text, fecha date)");
        tx.executeSql("create table if not exists detalles (clave text, descripcion text)");        
        tx.executeSql("create table if not exists usuarios (login text, password text PRIMARY KEY)");        
       
        tx.executeSql("select * from usuarios", [],  (tx, res) =>  {            
            let resul = [];let index = 0;
            while (index < res.rows.length) {
                resul = [...resul,res.rows.item(index)]
                index++              
            }              
            
            if (!resul.length) tx.executeSql("insert into usuarios (login, password) values (?, ?)", ['RUBEN', 'avla'])
        })
        
      },(e) => alert(e));
}

export const guardarDatos = ({titulo,descripcion}) => {
    let date = new Date().getDate()+'/'+new Date().getMonth() + 1+'/'+new Date().getFullYear()
    const clave = Math.random()
    db.transaction(tx => {             
        tx.executeSql("insert into lista values (?, ?, ?)", [clave,titulo,date]);        
        tx.executeSql("insert into detalles values (?, ?)", [clave,descripcion]);        
      },(e) => console.log(e),
      () => alert('se guardo correctamente'));
}

export const leerTitulos = () => new Promise((resolve, reject) =>{
    let resul = []
    db.transaction(tx => {       
        tx.executeSql("select * from lista", [],  (tx, res) =>  {            
            let index = 0;
            while (index < res.rows.length) {
                resul = [...resul,res.rows.item(index)]
                index++              
            }               
            resolve(resul)            
        })        
      },(e) => alert(e));
})

