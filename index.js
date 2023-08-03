const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
const headerImg = document.querySelector('header img')
const para = document.getElementsByClassName('para')
const spanTag = document.getElementsByClassName('span')

const h3 = document.querySelector('.list--of--features h3')
const listOfFeaturesP = document.querySelector('.list--of--features p')
const listOfFeaturesImg = document.querySelector('.list--of--features img')
const FAQs = document.querySelector('.FAQs')

const shapeInList = document.querySelector('.list--of--features .shape')


const form = document.querySelector('form')
const email = document.querySelector('input')
const error = document.querySelector('.error')
const inputImg = document.querySelector('.form--container img')

const pError = document.querySelector('.error p')



// console.log(h3)
// console.log(listOfFeaturesP)
// console.log(listOfFeaturesImg)



// const p = document.querySelector('change span')


menu.addEventListener('click',function(){
    menu.classList.toggle('active')
    nav.classList.toggle('active')
    headerImg.classList.toggle('filter--white')
})


document.addEventListener('click',function(e){
    
    if(e.target.dataset.num ){
        const span = document.getElementById(`s${e.target.dataset.num}`)

        handleClick(e.target.dataset.num, span)

    }
    else if(e.target.dataset.div){
        triggeringAns(e.target.dataset.div)
    }
})
function remove(){
    for(const s of spanTag){
        s.style.display='none'
    }

    for(const pg of para){
        pg.classList.remove('active')

    }
}
function handleClick(id,span){
    remove()
    console.log(shapeInList)
 
    const p = document.getElementById(id)

    p.classList.add('active')

    if(p.classList.contains('active')){
        span.style.display = 'block'
    }

    if(p.textContent === 'Simple Bookmarking'){
        h3.textContent = 'Bookmark in one click'
        listOfFeaturesP.textContent = 
        ` 
            Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.
        `
        listOfFeaturesImg.src = `images/illustration-features-tab-1.svg`
        shapeInList.style.cssText = `
        transform: translate(-47%, 18%);
        height: 99%;
        `

    }else if(p.textContent === 'Speedy Searching'){
        h3.textContent = 'Intelligent search'
        listOfFeaturesP.textContent = `
        Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks.
        `
        listOfFeaturesImg.src = 'images/illustration-features-tab-2.svg'
        if(window.innerWidth <= 700){
            shapeInList.style.cssText = `
            transform: translate(-50%, 17%);
            height: 95%;
            `
        }
        else{
            shapeInList.style.cssText = `
            transform: translate(-54%, 17%);
            height: 95%;
            `
        }
    }else{
        h3.textContent = 'Share your bookmarks'
        listOfFeaturesP.textContent = `
        Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button.
        `
        listOfFeaturesImg.src = 'images/illustration-features-tab-3.svg'
       
        if(window.innerWidth <= 700){
            shapeInList.style.cssText = `
            transform: translate(-50%, 17%);
            height: 95%;
            `
        }
        else{
            shapeInList.style.cssText = `
            transform: translate(-54%, 17%);
            height: 95%;
            `
        }
    }


}


function triggeringAns(dataAttr){
    const parent = document.querySelector(`[data-div = ${dataAttr}]`).parentElement
    
    parent.addEventListener('click',function(){
        const arrow = parent.querySelector('.arrow')
        const answer = parent.querySelector('.answer')

        arrow.classList.toggle('active')
        if(arrow.classList.contains('active')){
            answer.style.display = 'block'
        }else{
            answer.style.display = 'none'
        }
    })
    
}

function handleError(message ,width){
    error.style.display = 'block'
    pError.textContent = message
    pError.style.width = width
    inputImg.style.display = 'block'
    email.focus()
}

function validEmail(emailValue){
    const regularExpresion =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(email.value === ''){
        handleError('Please Provide An email if You want to contact us', '142%')
    }else if(!emailValue.match(regularExpresion)){
        handleError('Whoops, make sure it’s an email', '98%')
    }else{
        error.style.display = 'none'
        inputImg.style.display = 'none'
        email.value =''
        alert('Thank you we will reply to you shortly')
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    console.log(email.value)
    validEmail(email.value)
})


