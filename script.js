
let searchButton = document.getElementById('search-btn');
searchButton.addEventListener('click', searchLocation);

function searchLocation(event) {

    event.stopPropagation();

    let locationToBeSearched = document.getElementById('location').value;
    let checkIn = document.getElementById('checkin').value;
    let checkOut = document.getElementById('checkout').value;
    let guest = document.getElementById('guests').value;

    // if(locationToBeSearched===undefined || checkIn===undefined || guest===undefined || checkOut===undefined) {
    //     alert('Please enter valid details');
    // }

    console.log(locationToBeSearched, checkIn, checkOut, guest);

    // let link = document.createElement('a');
    // link.href = `location.html?location=${locationToBeSearched}&checkin=${checkIn}&checkout=${checkOut}&guest=${guest}`; 
    // link.click();
    
    const data = {locationToBeSearched: locationToBeSearched, checkIn: checkIn,
    checkOut: checkOut, guest: guest};

    localStorage.setItem('search-data', JSON.stringify(data));
    window.location.href = 'location.html';

}


