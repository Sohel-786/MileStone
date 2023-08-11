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
                        
    let blogs = localStorage.getItem('All_Blogs');

    if(blogs){
        blogs.
    }
}