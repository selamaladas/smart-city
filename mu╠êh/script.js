function GetInfo() {
const newName= document.getElementById("cityInput");
const cityName = document.getElementById("cityName");
cityName.innerHTML = "--"+newName.value+"--";


fetch("http://api.openweathermap.org/data/2.5/forecast?q=ankara&appid=178a2e80d5164af39e5624f320685ecb")
.then(response => response.json())
.then(data => {
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML ="Min:" + Number(data.list[i].main.temp_min - 271.15).toFixed(1)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" + Number(data.list[i].main.temp_max - 271.15).toFixed(2)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("img" +(i+1)).src ="  https://openweathermap.org/img/wn/" +
        data.list[i].weather[0].icon
        +".png";
    }
    console.log(data)
})

.catch(err => alert("Hata var"))
}
function DefaultScreen(){
    document.getElementById("cityInput").defaultValue ="istanbul";
    GetInfo();
}

const d =new Date();
const weekday =["pazar","Pazertesi","salı","çarşamba","perşembe","cuma","cumartesi"];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
    
}
for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}