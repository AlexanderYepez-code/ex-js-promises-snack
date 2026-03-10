// Ottieni il titolo di un post con una Promise.

// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene
//  i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.


const getPostTitle = id => {
    const promise = new Promise ((resolev, reject)=>{
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(response=> response.json())
        .then(obj=> resolev(obj))
        .catch(reject)
    })
    return promise
}

getPostTitle(1).then(obj=> console.log(obj.title)).catch(error=>console.error(error))