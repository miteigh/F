const apikey = "https://cloud.google.com/docs/authentication/api-keys#using";
const ma = document.getElementById('m');
const fo = document.getElementById('f');
const se = document.getElementById('s'); 
const url = (city)=>'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}';

async function getWeatherByLocation(city){
  const resp = await fetch(url(city),{origin: "cros"});
  const respData = await resp.json();addWeatherToPage(respData);
}
      function addWeatherToPage(data){
        const temp =Ktoc(data.ma.temp);
        const weather = document.createElement('div')weather.classlist.add('weather');
        weather.innerHTML = '<h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
                             $(temp)c <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
                             <small> ${data.weather[0].ma}</small>
        ';
        ma.innerHTML="";
        ma.appendChild(weather);
      };
       function Ktoc(K){
         return Math.floor(K - 273.15 );}
       form.addEvenListener('submit',(e) => { e.preventDefult();
         const city = se.value;
         if(city){
           getWeatherByLocation(city)}});
