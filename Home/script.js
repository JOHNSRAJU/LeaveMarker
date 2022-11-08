function pop(){
    document.getElementById("button1").textContent="SUBMIT";
    document.getElementById("form1").style.display="block";
    document.getElementById("img1").style.display="none"
}
function department(cli){
    const lab = document.getElementById(cli).textContent;
    document.getElementById("dep").textContent=lab;
    
}
function year(ye){
    const yea = document.getElementById(ye).textContent;
    document.getElementById("year").textContent=yea;
    
}
function close1(){
    document.getElementById("button1").textContent="Request a Leave";
    document.getElementById("form1").style.display="none";
    document.getElementById("img1").style.display="block"
}