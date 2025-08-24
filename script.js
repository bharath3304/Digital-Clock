setInterval(()=>{
  let d=new Date(),
  h=d.getHours(),
  m=d.getMinutes(),
  s=d.getSeconds();
  document.getElementById("am").innerText=h>=12?"PM":"AM";
  h=h%12||12;
  document.getElementById("hour").innerText=h.toString().padStart(2,"0");
  document.getElementById("min").innerText=m.toString().padStart(2,"0");
  document.getElementById("sec").innerText=s.toString().padStart(2,"0");
},1000);
