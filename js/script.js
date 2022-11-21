let element=document.getElementById('element')
let area=document.getElementById('area')

let left = 0;
let topPx = 0;
let count=0;



document.body.onkeydown =(e) => {

    if(e.keyCode === 40){
        topPx+=5
        element.style.top=`${topPx}%`
    }
    if(e.keyCode === 37){
        left-=5
        element.style.left=`${left}%`
    }
    if(e.keyCode === 38){
        topPx-=5
        element.style.top=`${topPx}%`
    }
     
    if(e.keyCode === 39){
        left+=5

        element.style.left=`${left}%`
        console.log(left)
    }
    
    if(left===50  && topPx===50 ){
        count++
        document.getElementById('count').innerHTML=count;
        area.style.backgroundColor='green';
        document.getElementById('element').style.left=0 +"%"
        document.getElementById('element').style.top=0 +"%"
        left = 0;
        topPx = 0;
        setTimeout(() => {
            alert('You Win')
            area.style.backgroundColor='red';
        }, 300);
        
     }
     
   
    


}



