const api = {
    key: "78bbfa459b676b3e4c68ea2df9c26fb6",
    baseurl: "https://api.openweathermap.org/data/2.5/"
  }
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    if(weather.weather[0].main == 'Clear') {
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.YYYhW_qvySbr5FWKUrSyzQHaE6?pid=ImgDet&rs=1')";
        
    } else if(weather.weather[0].main == 'Clouds') {

        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1818/sky-clouds-cloudy-forest.jpg?cs=srgb&dl=sky-clouds-cloudy-forest-1818.jpg&fm=jpg')";
        
    } else if(weather.weather[0].main == 'Haze') {

        document.body.style.backgroundImage = "url('https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/a/1b/a1b72118-8ddc-11e8-bd38-035e52eeb30d/5b54cc2209e42.image.jpg?resize=1200%2C753')";
        
    } else if(weather.weather[0].main == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://www.insurancejournal.com/app/uploads/2016/01/Rain.jpg')";
        
    } else if(weather.weather[0].main == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://wallup.net/wp-content/uploads/2018/09/25/620962-snow-winter-nature-landscape.jpg')";
    
    } else if(weather.weather[0].main == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://www.weatherforecast.co.za/images/easyblog_articles/135/thunderstorm-orig.jpg')";
    }else if(weather.weather[0].main == 'Fog') {
    
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.28aj_CpBNrLB1vF6HFTXkwHaFj?pid=ImgDet&rs=1')";
        
    } else if(weather.weather[0].main == 'Mist') {
    
        document.body.style.backgroundImage = "url('https://c.wallhere.com/photos/0b/dd/morning_trees_sky_mist_nature_misty_fog_clouds-936729.jpg!d')";
    }
    else if(weather.weather[0].main == 'Smoke') {
    
        document.body.style.backgroundImage = "url('https://th.bing.com/th/id/OIP.FfxZU7sdU1sgWSy-F70dRgHaD0?pid=ImgDet&rs=1')";
    }

  }
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }