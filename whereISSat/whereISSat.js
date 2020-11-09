const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

var mymap = L.map('issMap').setView([0, 0], 2);

var myIcon = L.icon({
    iconUrl: 'iss200.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
});

const marker = L.marker([0, 0], {icon: myIcon}).addTo(mymap);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;  
const tiles = L.tileLayer( tileUrl, { attribution });
tiles.addTo(mymap);

// var firsttime = true;

async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    //const latitude = data.latitude;
    const latitude = -34.89152908132704;
    //const longitude = data.longitude;
    const longitude = 138.52273558770236;

    marker.setLatLng([latitude, longitude]);
    mymap.setView([latitude, longitude], 2);

    // below code for not moving map every time to center the marker
    // if (firsttime) {
    //     mymap.setView([latitude, longitude], 2);
    //     firsttime = false;
    // }
    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2);
    setTimeout(getISS, 1000);
};
