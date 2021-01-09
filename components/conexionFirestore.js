import DbFirestore from './configFirestore'

const data ={
    titulo:'orale',
    uno:'primero',
    dos:'segundo',
    estado:'false'
}

//DbFirestore.collection('ejemplo').add(data)
//DbFirestore.collection('ejemplo').doc(data.titulo).set(data)

//DbFirestore.collection('ejemplo').get()
//.then(item=> item.(x => console.log(x.data())))


//DbFirestore.collection('ejemplo').doc('z9zmivG81h8Nk832IViD').delete().then(()=> console.log('hecho'))

export const borrarNube= () =>{
    DbFirestore.collection('ejemplo').get()
    .then((snapshot) => {
        // When there are no documents left, we are done
        if (snapshot.size === 0) {
        return 0;
        }

        // Delete documents in a batch
        let batch = DbFirestore.batch();
        snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
        });

        return batch.commit().then(() => {
            return snapshot.size;
        })
    }
    )
}

export const subirNube = (titulos) =>{        
    let data =[...titulos]    
    data.forEach((x,index) => {
        DbFirestore.collection('ejemplo').doc(x.hola).set(x).catch(e => console.log(e))
    })
    console.log('exito')
}

export const descargarNube = ()=>{
    DbFirestore.collection('ejemplo').get()
    .then(item=> item.forEach(x => console.log(x.data())))
}


