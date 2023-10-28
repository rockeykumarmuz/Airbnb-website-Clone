let heart = document.getElementsByClassName('heart');

for(let i=0; i<heart.length; i++) {
    heart[i].addEventListener('click', filColor); 
}

function filColor(event) {
    if(!event.target.classList.contains('setColor')) {
        // console.log(event.target, event.target.parentNode);
        event.target.classList.add('setColor');
        event.target.classList.add('fa-solid');
    } else {
        event.target.classList.remove('setColor');
        event.target.classList.remove('fa-solid');
    }
}

let localStorageData = JSON.parse(localStorage.getItem('search-data'));
console.log(localStorageData);

async function apiFunction (){
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${localStorageData.locationToBeSearched}&checkin=${localStorageData.checkIn}&checkout=${localStorageData.checkOut}&adults=${localStorageData.guest}&children=0&infants=0&pets=0&page=1&currency=USD`;
    // console.log(url);
    const options = {
        method: 'GET',
        headers: {   
            'X-RapidAPI-Key': '6dbf1fc012mshf21946cbe993fb9p10cd99jsn3edcfa990b94',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    
}

// apiFunction();

let innerHTML = "";

// function renderHotel() {

//     let hotelImage = document.getElementsByClassName('hotelimage')[0];
//     hotelImage.innerHTML = `<img src="${localStorageData[0].images}" alt="image"/></img>`;
//     let previewAmenities = document.getElementById('amenities');

//     let arr = localStorageData[0].previewAmenities;
//     let previewAmenitiesArray = arr.trim().split(" ");
//     let previewString = "";

//     for(let i=0; i<previewAmenitiesArray.length; i++) {
//         previewAmenities += previewAmenitiesArray[i];
//         if(i!=previewAmenitiesArray.length-1) {
//             previewAmenities += ". ";
//         }
//     }
//     console.log(previewString);
//     previewAmenities.innerText = `${previewString}`;

// }

// renderHotel();

function randerHotels(data){
    let dataSummery = document.querySelector('.list-1>p');
    dataSummery.innerText = `${data.length}+ stays in ${parameters.loc}`;

    let container = document.querySelector('.hotel-list');

    let div1 = document.createElement('div');
    div1.className = 'card-division';
    container.innerHTML = '';
    container.append(div1);

    localStorageData.forEach((e) => {
        let card = document.createElement('a');
        card.href = `location.html?data=${JSON.stringify(e)}`;
        card.className = 'hotel-card';
        card.innerHTML = `
            <div class="hotel-img">
                <img src="${e.images[0]}" alt="">
            </div>
            <div class="hotel-data">
                <div class="hotel-data-1">
                    <div class="written">
                        <p>${e.name}</p>
                        <p>${e.name}</p>
                    </div>
                    <div class="like">
                        <img src="./Icons/black-heart.png" alt="">
                    </div>
                </div>
                <div class="hz-line"></div>
                <div class="hotel-data-2">
                    <p>${e.persons} guests · ${e.type} · ${e.beds} beds · ${e.bathrooms} bath</p>
                    <p>${e.previewAmenities.join(' · ')}</p>
                </div>
                <div class="hz-line"></div>
                <div class="hotel-data-3">
                    <div class="rating">
                        <p>${e.rating}</p>
                        <img src="./Icons/star.png" alt="">
                        <p>(${e.reviewsCount} reviews)</p>
                    </div>
                    <div class="price">
                        <p>$${e.price.total}</p>
                        <p>/night</p>
                    </div>
                </div>
            </div>
        `;

        let division = document.createElement('div');
        division.className = 'card-division';

        container.append(card, division);
    })
}
