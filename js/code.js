
function loadDrivers () {
    fetch('js/data.json')
    .then(res => res.json())
    //que traiga la data del json y que despues formule una respuesta con lo que diga ahi 

    .then(drivers => {
    document.querySelector("section").innerHTML = drivers.map(driver => `<div><h2> ${driver.name} </h2> <h4> Drives for <strong>${driver.team}</strong></h4> <h6>Driver's age is: ${driver.age}</h6> <p> Has been in the sport for ${driver.years_in_f1} years.</p> <button class="btn"> Points in 2026: <strong>${driver.points}</strong></button></div>`).join("")
})
}

function changeStyles(){

document.body.classList.toggle('dark')

}



document.querySelector('.btn').addEventListener('click',loadDrivers)
document.querySelector('.btn_style').addEventListener('click',changeStyles)
    