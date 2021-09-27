//https://api.openweathermap.org/data/2.5/weather?q=Mosckow&appid=c24cddf3d199d8f7c05182073cee5102
//https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=c24cddf3d199d8f7c05182073cee5102
const input=document.getElementById('cityName');
const btn=document.getElementById('search');

$(".data").hide();
$(".type").hide();
btn.addEventListener("click",()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=c24cddf3d199d8f7c05182073cee5102`)
    .then((value)=>value.json())
    .then((result)=>
    {
        console.log(result);
        const city= document.getElementById("city");
        const tmp=document.getElementById("tmp");
        const hum=document.getElementById("hum");
        city.textContent=`${result.name}, ${result.sys.country}`;
        tmp.textContent=`${parseInt(result.main.temp)}°C`;
        hum.textContent=`${result.main.humidity}%`;

        $(".data").slideDown(500);
        $(".type").fadeIn(700);

        const umid=result.main.humidity;
        console.log(umid);


        if(umid>70){

            document.body.style.backgroundImage="url(img/rain.gif)";
        }
        else{
            document.body.style.backgroundImage="url(img/sun.jpg)";
        }

        $("#c").addClass("active");
        $("#c").on("click",()=>{

            tmp.textContent=`${parseInt(result.main.temp)}°C`;

            if($("#f").hasClass("active")){

                $("#f").removeClass("active");
                $("#c").addClass("active");
            }
        });

        $("#f").on("click",()=>{
            const f=(parseInt(result.main.temp)*9)/5+32;
            tmp.textContent=`${parseInt(f)}°F`;
            if($("#c").hasClass("active")){

                $("#c").removeClass("active");
                $("#f").addClass("active");
            }
        });

    }
    );
});