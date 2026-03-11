// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene
//  i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.


const getPostTitle = id => {
    const promise = new Promise((resolev, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolev(obj))
            .catch(reject)
    })
    return promise
}

getPostTitle(1).then(obj => console.log(obj)).catch(error => console.error(error))


// const getPost = id => {
//     const post = new Promise((resolve, reject) => {
//         fetch(`https://dummyjson.com/posts/${id}`)
//             .then(resolve => resolve.json())
//             .then(obj => resolve(obj))
//             .catch(reject)
//     });
//     const user = new Promise ((resolve, reject)=>{
//         fetch(`https://dummyjson.com/users/${post.userId}`)
//         .then(resolve=>resolve.json())
//         .then(obj => resolve(obj))
//         .catch(reject)
//     })

//     const userPost = {
//         User: user,
//         Post : post,
//     }
//     return userPost

// } 





const getPost = (id) => {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(post => {
            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(res => res.json())
                .then(user => {
                    return {
                        user: user,
                        Post: post,
                    }
                })
        })

}

getPost(1).then(obj => console.log(obj)).catch(error => console.error(error))



// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
// 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".