let lists = document.getElementsByClassName("lists");
let left = document.getElementById("left");
let right = document.getElementById("right")
for(list of lists){
    ///////////////////////////////////////////////
    list.addEventListener("dragstart",function(e){
        let selected = e.target;
        right.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        right.addEventListener("drop",function(){
            right.appendChild(selected);
            selected= null;
        });
        left.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        left.addEventListener("drop",function(){
            left.appendChild(selected);
            selected= null;
        });
    })
   ///////////////////////////////////////////////////
}
