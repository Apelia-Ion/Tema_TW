// json-server --watch db.json

//event listener - mouse +  folosirea datelor din noduri
//
var buton1=document.getElementById("date");
buton1.addEventListener("click", function()
{
    let nume=document.getElementById("nume").value;
    let prenume=document.getElementById("prenume").value;
    let propozitie= nume+ " " + prenume + ", avem creatii extraordinare pentru tine!\n";  

    let sectiune=document.getElementById("interesat");
    sectiune.innerText=propozitie;
    afisare();
}
                    )


//event listener - tastatura
var textbox=document.getElementById("prenume");
textbox.addEventListener('keyup', function(event)    
{
    if(event.keyCode === 13) {
        //event.preventDefault();
        buton1.click();
    }  
}
                    )

///////////////////////AJAX/////////////////////////////

function afisare()    //GET
{
    
    fetch('http://localhost:3000/Obiecte', {
         method: 'get'
        }).then((response)=>{
            response.json().then((data)=>{
                var sectiuneOferte=document.getElementById("oferte")
                for (let i=0; i<data.length; i++)
                {
                    //nume opera
                    var nume= document.createElement("h3");
                    nume.innerText = data[i].name;
                    sectiuneOferte.appendChild(nume);
                    //creator
                    var artist=document.createElement("h5");
                    artist.innerText=data[i].artist;
                    sectiuneOferte.appendChild(artist);
                    //an aparitie
                    var an= document.createElement("p");
                    an.innerText=data[i].year;
                    sectiuneOferte.appendChild(an);
                    //imagine
                    var imagine=document.createElement("img");
                    imagine.setAttribute("src", data[i].img);
                    sectiuneOferte.appendChild(imagine);
                    //pret
                    var pret=document.createElement("p");
                    pret.innerText=data[i].sPrice;
                    sectiuneOferte.appendChild(pret);  
                    
                    /////////////////////////////////////  Delete 
                     var buton4=document.createElement("button");
                     buton4.innerText="Sterge";
                     buton4.addEventListener("click", function() {
                         //console.log(data[i].id)
                        deleteObiect(data[i].id);
                                                } )      
                     sectiuneOferte.appendChild(buton4);

                

                }

            })
        });                                          
     
}   

function deleteObiect(id) {
    fetch('http://localhost:3000/Obiecte/' + id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function(response) {
        window.location.reload();
    })
}

var optiune=document.getElementById("creator");
optiune.style.color='darkslateblue';                        //edit pe nod

function post()
{
    let section= document.getElementById("dateAdaugat");

    var textnume=document.createElement("p");
    textnume.innerText="Introdu numele creatiei:";
    var inume=document.createElement("input");
    inume.id="inume";
    inume.type='text';
    section.appendChild(textnume);
    section.appendChild(inume);
    console.log(document.getElementById("inume").value);

    var textautor=document.createElement("p");
    textautor.innerText="Introdu numele autorului:";
    var iautor=document.createElement("input");
    iautor.id="iautor";
    section.appendChild(textautor);
    section.appendChild(iautor);

    var textan=document.createElement("p");
    textan.innerText="Introdu anul lansarii creatiei:";
    var ian=document.createElement("input");
    ian.id="ian";
    section.appendChild(textan);
    section.appendChild(ian);

    var textimg=document.createElement("p");
    textimg.innerText="Introdu imaginea:";
    var img=document.createElement("input");
    img.id="img";
    img.placeholder="Imge URL";
    section.appendChild(textimg);
    section.appendChild(img);

    var textpret=document.createElement("p");
    textpret.innerText="Introdu pretul operei tale:";
    var ipret=document.createElement("input");
    ipret.id="ipret";
    ipret.type= 'number';
    section.appendChild(textpret);
    section.appendChild(ipret);

    var buton3=document.createElement("button");
    buton3.innerText="Trimite";
    buton3.onclick=function (){addelemente()}
    var linebreak = document.createElement("br");
    section.appendChild(linebreak);
    section.appendChild(buton3);
    
}

function addelemente(){

    let innume=document.getElementById("inume").value;
    var inautor=document.getElementById("iautor").value;
    var inan=document.getElementById("ian").value;
    var inimg=document.getElementById("img").value;
    var inpret=document.getElementById("ipret").value;

    var newObiect = {
        name: innume,
        artist: inautor,
        year: inan,
        sPrice: inpret,
        img: inimg
        
    }

    
        fetch('http://localhost:3000/Obiecte', {
        method: 'post', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObiect)
    }).then(function(response) {
        console.log(response);
    })
    
}