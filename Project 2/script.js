function search_movie(){
    let name = document.querySelector('#name').value;
    if(name == ""){
        alert('please Enter a movie name first');
    }
    else{
        show_movie();
     }
}


async function show_movie(){
    let name = document.querySelector('#name').value;
try{
    let response = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=611293cc`);
    response = await response.json();
    console.log(response)
    append_movie(response);
    
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

            let img = document.createElement('img');
            img.src = el.Poster;

            let h1 = document.createElement('h1');
            h1.innerHTML = el.Title;

            let p = document.createElement('p');
            p.innerHTML = 'IMDB Ratings ' + el.imdbRating;
            
            let p2 = document.createElement('p');
            p2.innerHTML = 'Year' + `\n` + el.Year; 

            div.append(img,h1,p,p2);
            container.append(div);
        });
}