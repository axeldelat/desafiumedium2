const urlFirebase = 'https://ajaxclass9g.firebaseio.com/hamaalax/medium/posts/.json'


//Axel--

let postList = []
let featuredPostList;
let popularPostList;
let editorsPick;

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
//Get Posts

const getPosts = () => {
    $.ajax({
        url: urlFirebase,
        method: "GET",
        success: data => {
            for ( const key in data ) {
                let post = {
                    id: key,
                    category: data[key].category,
                    content: data[key].content,
                    featured: data[key].featured,
                    editorsPick: data[key].editorsPick,
                    popular: data[key].popular,
                    imageUrl: data[key].imageUrl,
                    title: data[key].title,
                    author: newRandomAuthor() ,
                    date: newRandomDate() ,
                    timeToRead: newRandomRead(),
                }
                postList.push( post )
                featuredPostList = postList.filter( post => post.featured )
                popularPostList = postList.filter( post => post.popular )
                editorsPick = postList.filter( post => post.editorsPick )
            }
        },
        async: false
    });
}

//Post Printer
const postPrint = () => {
    let textnodeAllPost = ""
    for ( post in postList.reverse()) {
        textnodeAllPost = textnodeAllPost + `
        <li class="media mb-5" data-toggle="modal" data-target="#${postList[post].id}">
                        <div class="media-body row d-flex justify-content-between align-items-start">
                            <div class="col-8 pr-0">
                                <span class="origin-tag text-uppercase light-grey-text">Popular on Medium</span>
                                <h3 class="article-title darkest-grey-text mb-0">${postList[post].title}</h3>
                                <p class="article-extract light-grey-text pb-0">
                                ${postList[post].content.substr(0,100)}
                                ...</p>
                                <div class="meta-info row">
                                    <div class="meta-content col-8">
                                        <span class="article-author-info darkest-grey-text">
                                        ${postList[post].author}
                                        </span>
                                        <p class="article-date light-grey-text d-table-cell" data-toggle="tooltip" data-placement="top" title="Updated May 21">
                                            Aug 11 ·<span title="${postList[post].timeToRead} min read"> ${postList[post].timeToRead} min read</span>
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
                                <img src="${postList[post].imageUrl}" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="modal fade" id="${postList[post].id}">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1>${postList[post].title}</h1>
                                </div>
                                <div class="modal-body">
                                <p class="d-block"><img src="https://source.unsplash.com/random/${newProfileImage()}x${newProfileImage()}" class="rounded-circle mr-2"><strong>${postList[post].author}</strong> <button class="btn btn-outline-success">Follow</button></p>
                                <p>${postList[post].date} &middot; ${postList[post].timeToRead} min to read.</p>
                                <img src="${postList[post].imageUrl}" width="100%" class="mb-3">
                                <p class="text-center">${postList[post].content}</p>
                                </div>
                                <div class="modal-footer">
                                    <button value="close" data-dismiss="modal" class="btn btn-primary w-100">x</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </li>
        `
        $("#all-posts").html("");

        $( `${textnodeAllPost}` ).appendTo('#all-posts')
    }

    let featured4 = featuredPostList.reverse().slice(0,4)
    let textNodeFirstFeatured = `
    <img src="${featured4[0].imageUrl}" class="card-img-top" style="height: 150px;" data-toggle="modal" data-target="#${featured4[0].id}">
                    <div class="card-body" style="margin-left: 50px;" data-toggle="modal" data-target="#${featured4[0].id}"> 
                        <h3 class="article-title">${featured4[0].title}</h3> 
                        <p class="card-text" style="color:#757575;">${featured4[0].content.substr(0,100)} ...</p>
                        <div class= "main-article-footer d-flex justify-content-between">
                            <div>
                                <p class="m-0">${featured4[0].author}</p>
                                <div class="">
                                    <div>
                                        <p style="color:#757575" data-toggle="tooltip" data-placement="top" title="Updated Ago 21">${featured4[0].date}- ${featured4[0].timeToRead} min read
                                            <span>
                                                <svg
                                                width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path></svg>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span class="svgIcon svgIcon--moreFilled svgIcon--25px is-flushRight"><svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="${featured4[0].id}">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1>${featured4[0].title}</h1>
                                </div>
                                <div class="modal-body">
                                <p class="d-block"><img src="https://source.unsplash.com/random/${newProfileImage()}x${newProfileImage()}" class="rounded-circle mr-2"><strong>${featured4[0].author}</strong> <button class="btn btn-outline-success">Follow</button></p>
                                <p>${featured4[0].date} &middot; ${featured4[0].timeToRead} min to read.</p>
                                <img src="${featured4[0].imageUrl}" width="100%" class="mb-3">
                                <p class="text-center">${featured4[0].content}</p>
                                </div>
                                <div class="modal-footer">
                                    <button value="close" data-dismiss="modal" class="btn btn-primary w-100">x</button>
                                </div>
                            </div>
                        </div>
                    </div>
    `
    $( `${textNodeFirstFeatured}` ).appendTo('#first-featured-post')

    let textNode2to4 = `
    <li class="media" style="margin-bottom: inherit;" data-toggle="modal" data-target="#${featured4[1].id}">
    <img src="${featured4[1].imageUrl}" class="mr-3" style="width: 100px; heigth:100px;">
    <div class="media-body">
        <h4 class="mt-0 mb-1 cursor-pointer">${featured4[1].title}</h4>
                <div>
                <p class="m-0">${featured4[1].author}</p>
                <div class="d-flex justify-content-between">
                    <div>
                        <p style="color:#757575" data-toggle="tooltip" data-placement="top" title="Updated Ago 21">${featured4[1].date}- ${featured4[1].timeToRead} min read
                            <span>
                                <svg
                                width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path></svg>
                            </span>
                        </p>
                    </div>
                    <div>
                    <span class="svgIcon svgIcon--moreFilled svgIcon--25px is-flushRight"><svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg></span>
                    </div>
                </div>
            </div>
    </div>
    <div class="modal fade" id="${featured4[1].id}">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1>${featured4[1].title}</h1>
                                </div>
                                <div class="modal-body">
                                <p class="d-block"><img src="https://source.unsplash.com/random/${newProfileImage()}x${newProfileImage()}" class="rounded-circle mr-2"><strong>${featured4[1].author}</strong> <button class="btn btn-outline-success">Follow</button></p>
                                <p>${featured4[1].date} &middot; ${featured4[1].timeToRead} min to read.</p>
                                <img src="${featured4[1].imageUrl}" width="100%" class="mb-3">
                                <p class="text-center">${featured4[1].content}</p>
                                </div>
                                <div class="modal-footer">
                                    <button value="close" data-dismiss="modal" class="btn btn-primary w-100">x</button>
                                </div>
                            </div>
                        </div>
                    </div>
</li>
<li class="media" style="margin-bottom: inherit;" data-toggle="modal" data-target="#${featured4[2].id}">
    <img src="${featured4[2].imageUrl}" class="mr-3" style="width: 100px; heigth:100px;">
    <div class="media-body">
        <h4 class="mt-0 mb-1 cursor-pointer">${featured4[2].title}</h4>
                <div>
                <p class="m-0">${featured4[2].author}</p>
                <div class="d-flex justify-content-between">
                    <div>
                        <p style="color:#757575" data-toggle="tooltip" data-placement="top" title="Updated Ago 21">${featured4[2].date}- ${featured4[2].timeToRead} min read
                            <span>
                                <svg
                                width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path></svg>
                            </span>
                        </p>
                    </div>
                    <div>
                    <span class="svgIcon svgIcon--moreFilled svgIcon--25px is-flushRight"><svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg></span>
                    </div>
                </div>
            </div>
    </div>
    <div class="modal fade" id="${featured4[2].id}">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1>${featured4[2].title}</h1>
                                </div>
                                <div class="modal-body">
                                <p class="d-block"><img src="https://source.unsplash.com/random/${newProfileImage()}x${newProfileImage()}" class="rounded-circle mr-2"><strong>${featured4[2].author}</strong> <button class="btn btn-outline-success">Follow</button></p>
                                <p>${featured4[2].date} &middot; ${featured4[2].timeToRead} min to read.</p>
                                <img src="${featured4[2].imageUrl}" width="100%" class="mb-3">
                                <p class="text-center">${featured4[2].content}</p>
                                </div>
                                <div class="modal-footer">
                                    <button value="close" data-dismiss="modal" class="btn btn-primary w-100">x</button>
                                </div>
                            </div>
                        </div>
                    </div>
</li>
<li class="media" style="margin-bottom: inherit;" data-toggle="modal" data-target="#${featured4[3].id}">
    <img src="${featured4[3].imageUrl}" class="mr-3" style="width: 100px; heigth:100px;">
    <div class="media-body">
        <h4 class="mt-0 mb-1 cursor-pointer">${featured4[3].title}</h4>
                <div>
                <p class="m-0">${featured4[3].author}</p>
                <div class="d-flex justify-content-between">
                    <div>
                        <p style="color:#757575" data-toggle="tooltip" data-placement="top" title="Updated Ago 21">${featured4[3].date}- ${featured4[3].timeToRead} min read
                            <span>
                                <svg
                                width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path></svg>
                            </span>
                        </p>
                    </div>
                    <div>
                    <span class="svgIcon svgIcon--moreFilled svgIcon--25px is-flushRight"><svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg></span>
                    </div>
                </div>
            </div>
    </div>
    <div class="modal fade" id="${featured4[3].id}">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1>${featured4[3].title}</h1>
                                </div>
                                <div class="modal-body">
                                <p class="d-block"><img src="https://source.unsplash.com/random/${newProfileImage()}x${newProfileImage()}" class="rounded-circle mr-2"><strong>${featured4[3].author}</strong> <button class="btn btn-outline-success">Follow</button></p>
                                <p>${featured4[3].date} &middot; ${featured4[3].timeToRead} min to read.</p>
                                <img src="${featured4[3].imageUrl}" width="100%" class="mb-3">
                                <p class="text-center">${featured4[3].content}</p>
                                </div>
                                <div class="modal-footer">
                                    <button value="close" data-dismiss="modal" class="btn btn-primary w-100">x</button>
                                </div>
                            </div>
                        </div>
                    </div>
</li>
    `
    $( `${textNode2to4}` ).appendTo('#featured-3')

    let editorsPickFront = editorsPick.reverse()
    let textNodeEditorsPick = `
    <img src="${editorsPickFront[0].imageUrl}" class="card-img-top" style="height: 150px;" data-toggle="modal" data-target="#${editorsPickFront[0].id}">
    <div class="card-body" style="margin-left: -20px;" data-toggle="modal" data-target="#${editorsPickFront[0].id}">
        <h3>${editorsPickFront[0].title}</h3>
        <p class="card-text" style="color:#757575;">${editorsPickFront[0].content.substr(0,100)} ...</p>
        <div class= "main-article-footer d-flex justify-content-between">
            <div>
                <p class="m-0">${editorsPickFront[0].author}</p>
                <div class="">
                    <div>
                        <p style="color:#757575" data-toggle="tooltip" data-placement="top" title="Updated Ago 21">${editorsPickFront[0].date}- ${editorsPickFront[0].timeToRead} min read
                            <span>
                                <svg
                                width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path></svg>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <span class="svgIcon svgIcon--moreFilled svgIcon--25px is-flushRight"><svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg></span>
            </div>
        </div>
    </div>
    <div class="modal fade" id="${editorsPickFront[0].id}">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1>${editorsPickFront[0].title}</h1>
                                </div>
                                <div class="modal-body">
                                <p class="d-block"><img src="https://source.unsplash.com/random/${newProfileImage()}x${newProfileImage()}" class="rounded-circle mr-2"><strong>${editorsPickFront[0].author}</strong> <button class="btn btn-outline-success">Follow</button></p>
                                <p>${editorsPickFront[0].date} &middot; ${editorsPickFront[0].timeToRead} min to read.</p>
                                <img src="${editorsPickFront[0].imageUrl}" width="100%" class="mb-3">
                                <p class="text-center">${editorsPickFront[0].content}</p>
                                </div>
                                <div class="modal-footer">
                                    <button value="close" data-dismiss="modal" class="btn btn-primary w-100">x</button>
                                </div>
                            </div>
                        </div>
                    </div>
    `
    $( `${textNodeEditorsPick}` ).appendTo('#editors-pick')

    let popular4 = popularPostList.reverse().slice(0,4)
    popular4.forEach(post => {
        let TextNodePopularPosts = `
            <li class="media mb-3" data-toggle="modal" data-target="#${post.id}">
                            <div class="media-body row d-flex justify-content-between align-items-start">
                                <div class="popularity col-2 text-right pr-0 super-light-grey-text">
                                    <span>${popular4.indexOf(post)+1}</span>
                                </div>
                                <div class="col-10 pr-0">
                                    <h4 class="article-title darkest-grey-text ">${post.title}</h4>
                                    <p class="article-extract light-grey-text mb-0">
                                        Lorem ipsum dolor sit.
                                    </p>
                                    <div class="meta-info row">
                                        <div class="meta-content col-12">
                                            <span class="article-author-info darkest-grey-text">
                                            ${post.author}
                                            </span>
                                            <p class="article-date light-grey-text d-table-cell" data-toggle="tooltip" data-placement="top" title="Updated May 21">
                                                Aug 11 ·<span title="${post.timeToRead} min read"> ${post.timeToRead} min read</span>
                                            <span>
                                                <svg class="svg-fill-light-grey"
                                                width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path>
                                                </svg>
                                            </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="${post.id}">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1>${post.title}</h1>
                                    </div>
                                    <div class="modal-body">
                                    <p class="d-block"><img src="https://source.unsplash.com/random/${newProfileImage()}x${newProfileImage()}" class="rounded-circle mr-2"><strong>${post.author}</strong> <button class="btn btn-outline-success">Follow</button></p>
                                    <p>${post.date} &middot; ${post.timeToRead} min to read.</p>
                                    <img src="${post.imageUrl}" width="100%" class="mb-3">
                                    <p class="text-center">${post.content}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button value="close" data-dismiss="modal" class="btn btn-primary w-100">x</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        </li>
            `
        $( `${TextNodePopularPosts}` ).appendTo('.popular-posts')
    });
}
const newProfileImage = () => {
    let num = Math.floor(Math.random() * 52);
    while(num < 47){
        num = Math.floor(Math.random() * 52);
    }
    return num;
    // let profileImageUrl;
    // request = new XMLHttpRequest();
    // request.open("GET", "https://source.unsplash.com/random/${newProfileImage()}x${newProfileImage()}", false);
    // request.send(null);
    // request.onreadystatechange = function() {
    //     if (request.readyState === 4) {
    //         if (request.status === 200) {
    //             console.log(request.responseURL);            
    //             return request.profileImageUrl;
    //         }
    //     }
    // }
    // profileImageUrl = request.responseURL;
    // return profileImageUrl;
}


//Haro--
function resetFormModal() {
    $("#create-post-form").reset()
}
const savePost = () => {
    let title = $("#inputTitle").val();
    let content = $("#textareaContent").val();
    let category = $("#inputCategory").val();
    let editorsPick = ""     
    let featured = ""
    let popular = ""
    let imageUrl     
    // let randomURL = 'https://source.unsplash.com/random/200x200';    
    request = new XMLHttpRequest();
    request.open("GET", "https://source.unsplash.com/random/1920x1080/?wallpaper,landscape", false);
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                console.log(request.responseURL);            
                return request.responseURL
            }
        }
    }
    imageUrl = request.responseURL
    $("input:checkbox[id=editorsPickCheck]:checked").val() ? editorsPick = "true": editorsPick = "false"
    $("input:checkbox[id=featuredCheck]:checked").val() ? featured = "true": featured = "false"
    $("input:checkbox[id=popularCheck]:checked").val() ? popular = "true": popular = "false"
    let postToSave = { title, content, category, editorsPick, featured, popular, imageUrl }
    console.log(postToSave)
    $.ajax({
        url: `https://ajaxclass9g.firebaseio.com/hamaalax/medium/posts/.json`,
        method:"POST",
        data: JSON.stringify(postToSave),
        success: ( response) => {
            console.log("Saved post")
        },
        error: ( error ) => {
            console.log("Don't saved post")
        }
    })
    $("#inputTitle").val("")
    $("#textareaContent").val("")
    $("#inputCategory").val("Other")
    $("#editorsPickCheck").prop('checked', false);
    $("#featuredCheck").prop('checked', false);
    $("#popularCheck").prop('checked', false);

    $('#all-posts').empty()
    $('#first-featured-post').empty()
    $('#featured-3').empty()
    $('#editors-pick').empty()
    $('.popular-posts').empty()
    location.reload()
    getPosts()
    postPrint()
}
// $("#savePost").click(savePost)
document.getElementById("savePost").addEventListener("click", () => {
    let title = $("#inputTitle").val()
    let content = $("#textareaContent").val()
    if (title === null || title === '' || content === null || content === '') {
        console.log('No se puede ingresar post vacío')
    } else {
        savePost();
    }
})


//Mauro

let categories = [];
let theUl = document.getElementById("categoryUl");

//Inicio
$(document).ready(function(){
    getPosts()
    postPrint(postList);
    postList.forEach(post =>{
        if (!categories.includes(post.category)){
            categories.push(post.category);
        }
    });
    categories.forEach(category =>{
        $(theUl).append(`<li class="navli ml-5 mr-2 filterCategory">${category}<li>`);
    })
    $(".filterCategory").click(function (){
        // $("#all-posts").html("");
        let result = postList.filter(curr =>{
            if (curr.category === $(this).text()){
                return curr;
            }
        });
    // postPrint(result);
    console.log(result);
    });
    $(".filterAll").click(function (){
        $("#all-posts").html("");
        postPrint(postList);
    });
    // console.log('This it the Posts List ▼▼▼')
    // console.log(postList)
    // console.log('This it the Featured Posts List ▼▼▼')
    // console.log(featuredPostList)
    // console.log('This it the Popular Posts List ▼▼▼')
    // console.log(popularPostList)
    // console.log('This it the Editor´s Pick List ▼▼▼')
    // console.log(editorsPick)
})