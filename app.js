const apiKey = `6a98237f83598797b84639ea23bc4634`;

const searchTemp = () => {
    const city = document.getElementById("city-name");
    const cityName = city.value;
    city.value = '';


    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    setInnerText('city', temp.name);
    setInnerText("temp", temp.main.temp);
    setInnerText("description", temp.weather[0].main);
    // set weather icon 
    const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const image = document.getElementById('icon');
    image.setAttribute('src', url);

}
