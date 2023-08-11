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
    
    blogs_data = blogs_data.map( (el) => {

        return `<div><div><img src=${el.url}/></div><h1>${el.title}</h1><p>${el.desc}</p><button>Read</button></div>`
    });

    // console.log(blogs_data);

    let container = document.querySelector('#container');

    blogs_data.forEach(el => {
        container.innerHTML = el;
    });

}

handleBlogList();