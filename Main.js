var content = [];
content = document.getElementsByClassName('menu-content');

function showContent(selector) {
    for(i=0; i< content.length; i++){
        content[i].style.display = 'none';
    }
    let navs = [];
    navs = document.getElementsByClassName('menu-btn');
    const color = selector == 'home' ? 'white' : 'rgb(228, 128, 58)';
    for( i=0; i< navs.length; i++) {
        navs[i].style.color = color;
        navs[i].addEventListener("mouseover", function() {
            console.log(this);
            this.style.color = color == 'white' ? 'rgb(228, 128, 58)' : 'white';
          });
          navs[i].addEventListener("mouseout", function() {
            this.style.color = color;
          });
    }
 
   document.getElementById(selector).style.display = 'block';
}

 function changeNav(e) {
     console.log(e);
     showContent(e);
}; 

window.onload = function() {
    showContent('home');
    createCards();
};

function appendData(input){
    data = input['section2']
    var mainContainer = document.getElementsByClassName("mainGallery")[0];
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class","gallery");
        var img = document.createElement("img");
        img.src='./images/'+data[i]['image'];
        var innerheading = document.createElement("div");
        innerheading.setAttribute("class","desc Heading");
        innerheading.innerHTML = data[i]['heading']
        var innertext = document.createElement("div");
        innertext.setAttribute("class","desc");
        innertext.innerHTML = data[i]['text'];
        div.appendChild(img);
        div.appendChild(innerheading);
        div.appendChild(innertext);
        console.log("div",div,"mainContainer",mainContainer);
        mainContainer.appendChild(div);
    } 
    data = input['section3'];
    var container = document.getElementsByClassName("grid-container")[0]; 
    var div1 = document.createElement("div");
    div1.setAttribute("class", "grid-item");
    div1.innerHTML = data.text;
    var div2 = document.createElement("div");
    div2.setAttribute("class","grid-item");
    var img = document.createElement("img");
    img.src = './images/lasky.png';
    div2.appendChild(img);
    container.appendChild(div1);
    container.appendChild(div2);
};

function addContenttosection4(data){
    data  =data['section4']

    for(i=0; i< data.length;i++) {
        let cssClass = i%2 == 0 ? "desc sec4Heading" : "desc sec4Heading rightfloat";
        var mainContainer = document.getElementsByClassName("section4")[0];
        var div1 = document.createElement("div");
        div1.setAttribute("class","grid-container");
        
        var imagediv = document.createElement("div");
        imagediv.setAttribute("class","grid-item4");
        var img = document.createElement("img");
        img.src='./images/'+data[i]['image'];
        imagediv.appendChild(img);
    
        var textdiv = document.createElement("div");
        textdiv.setAttribute("class","grid-item4");
        var innerheading = document.createElement("div");
        innerheading.setAttribute("class",cssClass);
        innerheading.innerHTML = data[i]['heading']
        var innertext = document.createElement("div");
        innertext.setAttribute("class","desc");
        innertext.innerHTML = data[i]['text'];
        textdiv.appendChild(innerheading);
        textdiv.appendChild(innertext);
        if (i%2 == 0){
            div1.appendChild(imagediv);
            div1.appendChild(textdiv);
        } else {
            div1.appendChild(textdiv);
            div1.appendChild(imagediv);
        }
       
        mainContainer.appendChild(div1);
    }
}

function createCards(){
    fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
        addContenttosection4(data);
    })
    .catch(function (err) {
        console.log(err);
    });


};


