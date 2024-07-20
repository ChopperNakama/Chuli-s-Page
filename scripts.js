function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    
    document.getElementById('time').textContent = `Hora: ${time}`;
    document.getElementById('date').textContent = `Fecha: ${date}`;
}

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            document.getElementById('location').textContent = `Ubicación: Lat ${latitude.toFixed(2)}, Lon ${longitude.toFixed(2)}`;
        }, () => {
            document.getElementById('location').textContent = 'Ubicación: No se pudo obtener la ubicación';
        });
    } else {
        document.getElementById('location').textContent = 'Ubicación: Geolocalización no soportada';
    }
}

setInterval(updateTime, 1000);
updateLocation();
