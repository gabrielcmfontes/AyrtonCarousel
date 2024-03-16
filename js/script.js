    //Elementos
    const one = document.getElementById("radio1");
    const two = document.getElementById("radio2");
    const three = document.getElementById("radio3");
    const four = document.getElementById("radio4");
    const btn1 = document.getElementById("auto-btn1");
    const btn2 = document.getElementById("auto-btn2");
    const btn3 = document.getElementById("auto-btn3");
    const btn4 = document.getElementById("auto-btn4");
    
    const imagem = document.getElementById("img");

    //Starts & Updates
    var count = 1;
    radio1.checked = true;
    verificarMarcado();

    setInterval(function(){
        nextImage();
    }, 5000)



//Events
one.addEventListener("change", function(event){
    count = 1;
    imagem.style.marginLeft = "0%";
    verificarMarcado();
})
two.addEventListener("change", function(event){
    count = 2;
    imagem.style.marginLeft = "-100%";
    verificarMarcado();
})
three.addEventListener("change", function(event){
    count = 3;
    imagem.style.marginLeft = "-200%";
    verificarMarcado();
})
four.addEventListener("change", function(event){
    count = 4;
    imagem.style.marginLeft = "-300%";
    verificarMarcado();
})

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        // Tecla de seta para a esquerda pressionada
        count--;
        if(count < 1){
            count = 4;
        }
        changeImage();
        verificarMarcado();
        // Adicione o código que você quer executar quando a seta para a esquerda é pressionada
    } else if (event.key === "ArrowRight") {
        // Tecla de seta para a direita pressionada
        count++;
        if(count > 4){
            count = 1;
        }
        changeImage();
        verificarMarcado();
        // Adicione o código que você quer executar quando a seta para a direita é pressionada
    }
});




//Funções
function changeImage(){
    switch(count){
        case 1:  imagem.style.marginLeft = "0%";
        break;
        case 2: imagem.style.marginLeft = "-100%";
        break;
        case 3: imagem.style.marginLeft = "-200%";
        break;
        case 4: imagem.style.marginLeft = "-300%";
        break;
    }
}

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    changeImage();  
    document.getElementById("radio"+count).checked = true;
    verificarMarcado();
}


function verificarMarcado(){
    if(count == 1){
        btn1.style.backgroundColor = "#1E90FF";
    }else{
        btn1.style.backgroundColor = "";
    }
    
    if(count == 2){
        btn2.style.backgroundColor = "#1E90FF";
    }else{
        btn2.style.backgroundColor = "";
    }

    if(count == 3){
        btn3.style.backgroundColor = "#1E90FF";
    }else{
        btn3.style.backgroundColor = "";
    }
    if(count == 4){
        btn4.style.backgroundColor = "#1E90FF";
    }else{
        btn4.style.backgroundColor = "";
    }
}
