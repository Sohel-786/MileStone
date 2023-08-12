function handleBlog(){

    event.preventDefault();

    let form = document.querySelector('form');

    class Blog {
        constructor(url,title,desc,blog){
            this.url = url;
            this.title = title;
            this.desc = desc;
            this.blog = blog;
        }
    }

    let blog = new Blog(
                        form.url.value,
                        form.title.value,
                        form.desc.value,
                        form.blog.value
                        );
                        
    let blogs_data = localStorage.getItem('All_Blogs');

    if(blogs_data){

        blogs_data = JSON.parse(blogs_data);
        
    }else{
        blogs_data = [];
    }
    
    blogs_data.push(blog);
    
    localStorage.setItem('All_Blogs', JSON.stringify(blogs_data))

    window.location.reload();
}

function handleBlogList(){

    let blogs_data = localStorage.getItem('All_Blogs');

    if(!blogs_data){
        return;
    }

    blogs_data = JSON.parse(blogs_data);
    
    blogs_data = blogs_data.map( (el, i) => {
        
        let title =   (el.title).slice(0,50);
        let desc = (el.desc).slice(0,70);

        return `<div><img src=${el.url}/></div><h3>${title}</h3><p>${desc}</p><button id=${i} onclick='showBlog(event)'>Read</button>`
    });

    let container = document.querySelector('#container');

    blogs_data.forEach(el => {
        let div = document.createElement('div');
        div.innerHTML = el;
        div.setAttribute('class', 'card');

        container.appendChild(div);
    });

}

handleBlogList();

function handleNewBlog(){
    let inputSection = document.getElementById('input-section');

    inputSection.setAttribute('style','display:flex');
}


function closeInputSection(){
    let inputSection = document.getElementById('input-section');

    inputSection.setAttribute('style','display:none'); 
}

let data;

function showBlog(e) {
    let blogs_data = localStorage.getItem('All_Blogs');

    if(!blogs_data){
        return;
    }

    blogs_data = JSON.parse(blogs_data);

    data = blogs_data[e.target.id];

    if(!data){
        return;
    } 

    window.location.href = './blogpage.html';
}