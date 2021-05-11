function adauga(){
    var section=document.getElementById("c1");
    var p=document.createElement("p");
    p.innerText = "Sherman was born on January 19, 1954, in Glen Ridge, New Jersey, the youngest of the five children of Dorothy and Charles Sherman.";
    section.appendChild(p);
}

function sterge(){
    var section = document.getElementById("c1");
    section.removeChild(section.lastChild);
}

function imagine1(){
    var image = document.getElementById("c1p");
    var source = image.getAttribute("src");
    if(source == "Imagini/Cindy Sherman.jpg") {
        image.setAttribute("src", "Imagini/c1p.jpg");
        image.width=300;
        image.height=400;
    } else {
        image.setAttribute("src", "Imagini/Cindy Sherman.jpg");
        image.width=200;
        image.height=250;
        
    }
}

function adauga2(){
    var section=document.getElementById("c2");
    var p=document.createElement("p");
    p.innerText = "Academic background and early career Artist Takashi Murakami with early work Polyrhythm at Galerie Mars in Tokyo 1992. Photo by Ithaka Darin PappasMurakami was born and raised in Tokyo, Japan. From early on, he was a fan of anime and manga (Japanese comics), and hoped to work in the animation industry. He attended Tokyo University of the Arts to acquire the drafting skills necessary to become an animator, but eventually majored in Nihonga, the 'traditional' style of Japanese painting that incorporates traditional Japanese artistic conventions, techniques and subjects. He earned his master's degree in 1988. Though he would go on to earn a Ph.D. in Nihonga (1993), he gradually became disillusioned with its insular, highly political world and started to explore more contemporary artistic styles, media, and strategies.";
    section.appendChild(p);
}

function sterge2(){
        var section = document.getElementById("c2");
        section.removeChild(section.lastChild);
}

function adauga3(){
    var section=document.getElementById("c3");
    var p=document.createElement("p");
    p.innerText = "Mircea Cantor este un artist complex ce creează de la instalaţii vizuale, la lucrări realizate prin intermediul focului, a betonului şi la opere de artă video.";
    section.appendChild(p);
}

function sterge3(){
        var section = document.getElementById("c3");
        section.removeChild(section.lastChild);
}
