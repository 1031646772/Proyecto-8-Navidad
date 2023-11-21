const clock = document.querySelector(".cuentaRegresiva");
const mensajito=document.querySelector(".mensaje");
const Containerboton=document.querySelector(".container_botones");
const papa=document.querySelector(".papa");
function ObtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date()
    console.log(ahora);
    let tiempo_faltantante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    console.log(tiempo_faltantante);
    let segundosFaltantes = ('0' + Math.floor(tiempo_faltantante % 60)).slice(-2)
    let minutosFaltantes = ('0' + Math.floor(tiempo_faltantante / 60 % 60)).slice(-2)
    let horasFaltantes = ('0' + Math.floor(tiempo_faltantante / 3600 % 60)).slice(-2)
    let DiasFaltantes = ('0' + Math.floor(tiempo_faltantante / (3600 * 24))).slice(-2)
    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        DiasFaltantes,
        tiempo_faltantante
    }
}
function cuentaRegresiva(tiempo_faltantante,mensaje){
    const tiempo=setInterval(()=>{
        let fal=ObtenerTiempoFaltante(tiempo_faltantante);
        clock.innerHTML=`<div class="container"><div class="time">${fal.DiasFaltantes}</div><div class="letra">D</div></div> <div class="container"><div class="time">${fal.horasFaltantes}</div><div class="letra">H</div></div> <div class="container"><div class="time">${fal.minutosFaltantes}</div><div class="letra">M</div></div><div class="container"><div class="time">${fal.segundosFaltantes}</div><div class="letra">S</div></div>     `;
        if(fal.tiempo_faltantante < 1){
            clock.innerHTML=`<div class="container"><div class="time">00</div><div class="letra">D</div></div> <div class="container"><div class="time">00</div><div class="letra">H</div></div> <div class="container"><div class="time">00</div><div class="letra">M</div></div><div class="container"><div class="time">00</div><div class="letra">S</div></div>     `;
            mensajito.innerHTML=mensaje;
            Containerboton.style.display="block";
            papa.classList.add("Baila");
        }
    },1000)     
};

cuentaRegresiva('Nov 21 2023 16:39:00  GMT-0500','¡Feliz Navidad!');
const botonplay=document.getElementById("play");
        const botonpause=document.getElementById("pause");
        let audio=new Audio("./Music/Musica.mp3")
        botonpause.addEventListener("click",()=>{
        audio.pause();
        const boton1=document.querySelector(".boton1");
        const boton2=document.querySelector(".boton2");
        boton2.classList.add("Botoncito")
        boton1.classList.remove("Botoncito")
        })
        botonplay.addEventListener("click",()=>{
        audio.play();
        const boton1=document.querySelector(".boton1");
        const boton2=document.querySelector(".boton2");
        boton1.classList.add("Botoncito")
        boton2.classList.remove("Botoncito");
        })