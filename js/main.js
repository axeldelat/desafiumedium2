const urlBase = 'https://ajaxclass9g.firebaseio.com/hamaalax/medium/posts/.json'

//Alfredo--

//Axel--
//Get Posts
const postList = []
const newRandomDate = () => {
    let months = [ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' ,'Jun' , 'Jul' , 'Aug', 'Sep', 'Oct', 'Nov', 'Dic']
    let randomMonth = months[Math.floor(Math.random() * 11)]
    let randomDay = Math.floor(Math.random() * 30)
    let randomDate = `${randomMonth} ${randomDay}`
    return randomDate
}

const newRandomRead = () => {
    let randomMinute = Math.floor(Math.random() * 10)
    return randomMinute
}

const newRandomAuthor = () => {
    let authors = [ 'José Haro' , 'Mauro Ochoa' , 'Alfredo Santos' , 'Axel de la Torre' , 'Israel Salinas' ,'Eddy Ruíz' , 'Luis Bastida' , 'Jorge Camarillo', 'Aarón Barcenas', 'Borja', 'Mauricio Serrano', 'Walter Ritter']
    let randomAuthor = authors[Math.floor(Math.random() * 11)]
    return randomAuthor
}

const getPosts = () => {
    $.get( urlBase, function( data ) {
        console.log( typeof data ); // string
        for ( const key in data ) {

            let post = {
                id: key,
                category: data[key].category,
                content: data[key].content,
                featured: data[key].featured,
                popular: data[key].popular,
                imageurl: data[key].imageurl,
                title: data[key].title,
                author: newRandomAuthor() ,
                date: newRandomDate() ,
                timeToRead: newRandomRead(),
            }
            postList.push( post )
        }
        });
}
//Post Printer
const postPrint = () => {
    console.log(postList)
    for (const post in postList) {
        console.log(post)
        let tectnode = `
        <li class="media mb-5">
                        <div class="media-body row d-flex justify-content-between align-items-start">
                            <div class="col-8 pr-0">
                                <span class="origin-tag text-uppercase light-grey-text">Popular on Medium</span>
                                <h3 class="article-title darkest-grey-text mb-0">Lorem ipsum dolor sit amet</h3>
                                <p class="article-extract light-grey-text pb-0">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                                <div class="meta-info row">
                                    <div class="meta-content col-8">
                                        <span class="article-author-info darkest-grey-text">
                                            Mario López
                                        </span>
                                        <p class="article-date light-grey-text d-table-cell" data-toggle="tooltip" data-placement="top" title="Updated May 21">
                                            Aug 11 ·<span title="3 min read"> 3 min read</span>
                                        <span>
                                            <svg class="svg-fill-light-grey"
                                            width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path>
                                            </svg>
                                        </span>
                                        </p>
                                    </div>
                                    <div class="active-state col-4 d-flex justify-content-end align-items-center">
                                        <span class="svgIcon ">
                                            <svg class="svgIcon-use svg-fill-light-grey" width="25" height="25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 00.706.03L12.5 16.85l5.662 4.126a.508.508 0 00.708-.03.5.5 0 00.118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 00-.676 0z" fill-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                        <span class="svgIcon  svg-fill-light-grey">
                                            <svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="article-thumbnail col-4">
                                <img src="https://source.unsplash.com/random/200x200" class="img-fluid" alt="">
                            </div>
                        </div>
                    </li>
        `
        $( `${tectnode}` ).appendTo('#laaa')
    }
}

//Haro--

//Mauro--