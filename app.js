
const generateApi = document.getElementById("btn-generate");
const imgAppi = document.getElementById("imgCard");

const nameAppi = document.getElementById("nameCharacter");
const information = document.getElementById("infoCharacter");

generateApi.addEventListener("click", getApi)

function getApi() {

    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(response => response.json())

        .then((data) => {
            imgAppi.src = data[0].image
            nameAppi.textContent = data[0].character
            information.textContent = data[0].quote
        })
}
