var queryString = decodeURIComponent(window.location.search);

let blogs_data = localStorage.getItem('All_Blogs');

    if(!blogs_data){
        alert('No Blogs are available');
    }
    
    blogs_data = JSON.parse(blogs_data);
    
    let data = blogs_data[queryString[1]];
    
    if(!data){
        alert('No Data Available');
    } 


let Blogcontainer = document.getElementById('Blogcontainer');

Blogcontainer.innerHTML = null;

Blogcontainer.innerHTML = `<div><div><h2>${data.title}</h2><p>${data.desc}</p></div><div><img src=${data.url} alt="blogImg"></div></div><div><p>${data.blog}</p></div>`

function backTohome(){
    window.location.href = './homepage.html';
}