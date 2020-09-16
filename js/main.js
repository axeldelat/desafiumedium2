//Alfredo-- Coolio : class = article-author-info y class m-0
/* dejar claro que se va a filtrar, primer ensayo sería en base a autor y se puede luego agregar Tags. 
el html debería tener un class que sea filtrable, agregar class tag. 
- coleccion con todos  feature-article main-articles
*/
/*et primerArray = []
let articulosFeatured = () => document.getElementById(feature-article)
    console.log(articulosFeatured) */
   

    let postsObject
    let postsArray = []
     //este es el http request
    const getPostsFromFirebase = () => {
        let getPosts = new XMLHttpRequest()
        getPosts.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                postsObject = JSON.parse(this.responseText)
            }
        }
        getPosts.open("GET", "https://alfredoprueba-4cebf.firebaseio.com/medium/posts/.json", true)
        getPosts.send()
        
        for (const postID in postsObject) {
            postsArray.push(postsObject[postID])
        }
    }
    //para pegar postss al dom, como prueba
    const appendPostsToDom = () =>{
        postsArray.forEach((post) =>{
            let article = document.createElement("ARTICLE")  //*<article></article>
    
            let title = document.createTextNode(post.title) //*titulo
            let articleTitle = document.createElement("H1") //*<h1></h1>
    
            let author = document.createTextNode(post.author) //*autor
            let articleAuthor = document.createElement("H3") //*<h3></h3>
    
            let content = document.createTextNode(post.content) //*contenido
            let articleContent = document.createElement("P") //*<p></p>
    
            articleTitle.appendChild(title) //*<h1>titulo</h1>
            articleAuthor.appendChild(author) //*<h3>autor</h3>
            articleContent.appendChild(content) //*<p>contenido</p>
    
            article.appendChild(articleTitle) //*<article><h1>titulo</h1></article>
            article.appendChild(articleAuthor) //*<article><h1>titulo</h1><h3>autor</h3></article>
            article.appendChild(articleContent)//*<article><h1>titulo</h1><h3>autor</h3><p>contenido</p></article>
    
            document.getElementById("mainFilter").appendChild(article)
        })
    }
    //para borrar cada filtro
    const eraseAllPosts = () =>{
        postsArray = []
        document.getElementById("mainFilter").innerHTML = ""
    }
    
    document.getElementById("mainFilter").addEventListener("click", () => {
    
        eraseAllPosts()
    
        getPostsFromFirebase()
    
        appendPostsToDom()
    })
    
    document.getElementById("filtrarNew").addEventListener("click",()=>{
    
        eraseAllPosts()
    
        getPostsFromFirebase()
    
        postsArray = postsArray.filter((post)=>{
            if(post.tags.includes('new')){
                return true
            }
        })
    
        appendPostsToDom()
    })
    
    document.getElementById("filtrarPorAutor").addEventListener("click",()=>{
    
        eraseAllPosts()
    
        getPostsFromFirebase()
    
        postsArray = postsArray.filter((post)=>{
            if(post.author === 'Nome Cognome'){
                return true
            }
        })
    
        appendPostsToDom()
    })


/*
//Axel--

//Haro-- */

//Mauro