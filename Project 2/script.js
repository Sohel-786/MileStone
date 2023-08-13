function search_movie(e){

    if(e.key === 'Enter'){
        
        let name = document.querySelector('#name').value;
        if(name == ""){
            alert('please Enter a movie name first');
        }
        else{
            show_movie(name);
         }
    }
}


async function show_movie(name){

try{
    let response = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=611293cc`);
    response = await response.json();
    console.log(response);
    if(!response.status){
        alert('no movie found');
    }else{

        append_movie(response);
    }
    
}catch(err){
        console.log(err);
    }
   
}

function append_movie(el){
    let container = document.querySelector('.container');

    container.innerHTML = null;

        (el.Search).forEach((el) => {
            
            let div = document.createElement('div');
            div.setAttribute('class', 'box');

            let div2 = document.createElement('div');
            
            // let img = document.createElement('img');
            // img.src = el.Poster;
            div2.setAttribute('style',`background-image: url(${el.Poster});`);

            let p = document.createElement('p');
            p.innerHTML = el.Title;
            
            let btn = document.createElement('button');
            btn.innerHTML = 'Watch Now'; 

            div.append(div2,p,btn);
            container.append(div);
        });
}