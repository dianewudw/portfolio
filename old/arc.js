export default function drawCircle(){

    document.getElementById("wrap").innerHTML = "";

    var text = "Welcome to my portfolio";
    // if(event){
    //     if(event.target.value !=""){
    //         text = event.target.value;
    //     }
    // }
    var word = text.split('');

    var quantity = word.length;

    var radius = 150;

    var padding = 300;

    var radians = 3.14; // Max radians value (full circle)

    var angle = 360/(2*Math.PI); //angle to radian relation

    var point = Math.PI/quantity;

    var step = (2*Math.PI)/quantity;


    for(var i = 0, j = 0; i<radians; i+=point, j++){

        var cat_oppos =  Math.sin(step*j) * radius;
        var cat_attach = Math.cos(step*j) * radius;

        var elm = document.createElement('div');
        elm.innerHTML = word[j];
        elm.classList.add("dot");

        elm.style.top = padding + cat_oppos + 'px';
        elm.style.left = padding + cat_attach + 'px';
        elm.style.transform = 'rotate('+((angle*(step*j))+90)+'deg)';

        document.getElementById("wrap").appendChild(elm);
    }


    var elm = document.createElement('div');
    elm.innerHTML = "<3";
    elm.classList.add("dot");

    elm.style.top = padding  + 'px';
    elm.style.left = padding  + 'px';


    document.getElementById("wrap").appendChild(elm);


}