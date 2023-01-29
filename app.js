const documentBody = document.body;
const profileImg = document.querySelector('#profile-img');
const userName = document.querySelector('#name');
const cityCountry = document.querySelector('#location');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phoneNumber');
const adress = document.querySelector('#adress');

const generateUser = async() => {
    try {
        const url = 'https://randomuser.me/api/';
        const dataFromUrl = await fetch(url);
        const { results } = await dataFromUrl.json();
        const userData = results[0];
        
        profileImg.src = userData.picture.large;
        userName.textContent = userData.name.first + ' ' + userData.name.last;
        cityCountry.textContent = userData.location.city + ', ' + userData.location.country;
        email.textContent = userData.email;
        phoneNumber.textContent = String(userData.phone) + ' / ' + String(userData.cell);
        adress.textContent = userData.location.street.number + ', ' + userData.location.street.name + ', ' + userData.location.city;

        
    } catch (error) {
        console.log('Error');
    }
}

documentBody.onload = generateUser;








