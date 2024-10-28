var active = true;

function hide(){
    if(active){
        document.getElementById('nav').style.display= 'none';
        active = false;
    }else{
        document.getElementById('nav').style.display= 'flex';
        active = true;
    }
}