    const titulo = document.querySelector('.titulo')
const cel = document.querySelector('.cel')
const email = document.querySelector('.email')

document.addEventListener('click',(e)=>{
    if(e.target.matches('.cel')){
        alert('Telefono : 3512364375')
    }
    if(e.target.matches('.email')){
        alert('Email:   aguirres979@gmail.com ')
    }
})