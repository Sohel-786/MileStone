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

    let container = document.querySelector('.container');

    if(response.Response === 'False'){
        append_error(container);
    }else{
        append_movie(response, container);
    }
    
}catch(err){
        console.log(err);
    }
   
}

function append_movie(el, container){
    
    container.innerHTML = null;

        (el.Search).forEach((el) => {
            
            let div = document.createElement('div');
            div.setAttribute('class', 'box');

            let div2 = document.createElement('div');
            div2.setAttribute('style',`background-image: url(${el.Poster});`);

            let p = document.createElement('p');
            p.innerHTML = el.Title;
            
            let btn = document.createElement('button');
            btn.innerHTML = 'Watch Now'; 

            div.append(div2,p,btn);
            container.append(div);
        });
}


function append_error(container){
    container.innerHTML = null;

    container.innerHTML = '<div class="error"><h1>Opps, Movie not found!</h1></div>';
}