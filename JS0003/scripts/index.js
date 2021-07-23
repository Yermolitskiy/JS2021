

document.getElementById('submitForm').addEventListener('click' , validateFields)
const deleteBtn = document.getElementById('deleteStudent') || 'none'
const inputArr = document.getElementsByTagName('input')

if(deleteBtn !== 'none'){
    deleteBtn.addEventListener('click' , validateDelete)
}

function validateDelete(event){
    try{
        const personalCodeDeleteField = document.getElementById('personalCodeDelete').value
        checkPersonalCode(personalCodeDeleteField)
    }catch(e){
        event.preventDefault()
        let errorblock = document.getElementById('err-msg')
        errorblock.style.display = 'flex'
        errorblock.innerHTML = e
    }
}


function validateFields(event){

    const arr = Array.from(inputArr)
    console.log(arr)
    try{
        for(let el of arr){
            (el.id === 'firstName' || el.id === 'secondName')  && checkFirstLastName(el.value)
            el.id === 'Gender' && checkGender(el.value)
            el.id === 'Age' && checkAge(el.value)
            el.id === 'Mail' && checkMail(el.value)
            el.id === 'Phone' && checkPhone(el.value)
            el.id === 'personalCode' && checkPersonalCode(el.value)
        }
    }catch(e){
        event.preventDefault()
        let errorblock = document.getElementById('err-msg')
        errorblock.style.display = 'flex'
        errorblock.innerHTML = e

    }
   
}

function checkFirstLastName(value){
    if(!value || value.length < 3 || typeof value !== 'string')
        throw new Error('Name and Surname has to be longer than 3 symbols!')
}

function checkGender(value){
    if(value.trim().toLowerCase() !== 'male' 
        && value.trim().toLowerCase() !== 'female'
        || typeof value !== 'string')

        throw new Error('Gender has to be only male or female!')
}
function checkAge(value){
    if(typeof value !== 'number' && value < 20)
        throw new Error('Age can\'t be less than 20 years!')
}
function checkPhone(value){
    const re = /^\+{0,1}[(]{0,1}(371){0,1}[)]{0,1}[2][-\s\.]{0,1}[0-9]{7}$/
    if(!re.test(value))
        throw new Error('Wrong phone format (only latvian numbers)')
}
function checkMail(value){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(value))
        throw new Error('Please enter valid e-mail adress')
}

function checkPersonalCode(value){
    const re=/^(\d{2})(\d{2})(\d{2})-[012]\d{4}$/
    if(!re.test(value))
        throw new Error('Please enter valid personal-code format (******-*****)')
}