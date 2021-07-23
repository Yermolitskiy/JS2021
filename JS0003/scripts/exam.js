
const questions = [
    {
        'questions':'2+2?',
        'options':[
            {'text':'5',
            'isCorrect':false    
            },
            {'text':'7',
            'isCorrect':false    
            },
            {'text':'4',
            'isCorrect':true    
            }
        ]

    },
    {
        'questions':'11-10?',
        'options':[
            {'text':'1',
            'isCorrect':true    
            },
            {'text':'7',
            'isCorrect':false    
            },
            {'text':'5',
            'isCorrect':false    
            }
        ]

    },
    {
        'questions':'What is todays year?',
        'options':[
            {'text':'2020',
            'isCorrect':false    
            },
            {'text':'2012',
            'isCorrect':false    
            },
            {'text':'2021',
            'isCorrect':true    
            }
        ]

    },
    {
        'questions':'What means USA?',
        'options':[
            {'text':'United States of Argentina',
            'isCorrect':false    
            },
            {'text':'United States of America',
            'isCorrect':true    
            },
            {'text':'United States of Albania',
            'isCorrect':false  
            }
        ]

    },
    {
        'questions':'First man that flew in space?',
        'options':[
            {'text':'Agnese Rozga',
            'isCorrect':false    
            },
            {'text':'Yuriy Gagarin',
            'isCorrect':true    
            },
            {'text':'Jack Bower',
            'isCorrect':false   
            }
        ]

    },
    {
        'questions':'How many months are in one year?',
        'options':[
            {'text':'12',
            'isCorrect':true    
            },
            {'text':'21',
            'isCorrect':false    
            },
            {'text':'1',
            'isCorrect':false    
            }
        ]

    },
    {
        'questions':'2+2*2?',
        'options':[
            {'text':'5',
            'isCorrect':false    
            },
            {'text':'7',
            'isCorrect':false    
            },
            {'text':'6',
            'isCorrect':true    
            }
        ]

    },
    {
        'questions':'2*2*2?',
        'options':[
            {'text':'5',
            'isCorrect':false    
            },
            {'text':'7',
            'isCorrect':false    
            },
            {'text':'8',
            'isCorrect':true    
            }
        ]

    },
    {
        'questions':'What is shape of moon?',
        'options':[
            {'text':'Round',
            'isCorrect':true    
            },
            {'text':'Sqare',
            'isCorrect':false    
            },
            {'text':'Triangle',
            'isCorrect':false    
            }
        ]

    },
    {
        'questions':'How long is one day on Earth?',
        'options':[
            {'text':'25 hours',
            'isCorrect':false    
            },
            {'text':'27 hours',
            'isCorrect':false    
            },
            {'text':'24 hours',
            'isCorrect':true    
            }
        ]

    },
    {
        'questions':'What is the capital of Latvia?',
        'options':[
            {'text':'Riga',
            'isCorrect':true    
            },
            {'text':'Liepaja',
            'isCorrect':false    
            },
            {'text':'Daugavpils',
            'isCorrect':false    
            }
        ]

    },
    {
        'questions':'The biggest mammal is...',
        'options':[
            {'text':'African elephant',
            'isCorrect':false    
            },
            {'text':'Blue whale',
            'isCorrect':true    
            },
            {'text':'Human',
            'isCorrect':false    
            }
        ]

    },
    {
        'questions':'What holiday is celebrated on June 23rd?',
        'options':[
            {'text':'Ligo',
            'isCorrect':true    
            },
            {'text':'New Year',
            'isCorrect':false    
            },
            {'text':'Easter',
            'isCorrect':false    
            }
        ]

    },
    {
        'questions':'How many legs has a spider?',
        'options':[
            {'text':'8',
            'isCorrect':true    
            },
            {'text':'6',
            'isCorrect':false    
            },
            {'text':'10',
            'isCorrect':false    
            }
        ]

    },
    {
        'questions':'Where is located Brazilia',
        'options':[
            {'text':'South America',
            'isCorrect':true    
            },
            {'text':'Asia',
            'isCorrect':false    
            },
            {'text':'Europe',
            'isCorrect':false    
            }
        ]

    }
]

function seedQuestions(){
    const container = document.querySelector('#questions')
    
    questions.forEach(question =>{
        let headerElement = document.createElement('h4')
        let headerContent = document.createTextNode(question.questions)
        headerElement.appendChild(headerContent)
        container.appendChild(headerElement)

        let optionContainer = document.createElement('div')
        optionContainer.style.display = 'flex'
        optionContainer.style.justifyContent = 'center'
        optionContainer.style.flexDirection = 'column'
        

        question.options.forEach(option =>{
          
            let optionEl = document.createElement('input')
            let optionLabelEl = document.createElement('label')
            let paragraphEl = document.createElement('p')
            let optionText = document.createTextNode(option.text)
            
            optionLabelEl.appendChild(optionText)
            optionLabelEl.setAttribute('for' , option.text)
            
            optionEl.setAttribute('type' , 'radio')
            optionEl.setAttribute('name' , question.questions)
            optionEl.setAttribute('value' , option.text)

            paragraphEl.appendChild(optionEl)
            paragraphEl.appendChild(optionLabelEl)
    
            optionContainer.appendChild(paragraphEl)

            

        })

        container.appendChild(optionContainer)
    })
}

function checkPersonalCode(value){
    const re=/^(\d{2})(\d{2})(\d{2})-[012]\d{4}$/
    if(!re.test(value))
        return false
    else 
        return true
}


function triggerAnimationInfo(string){
    document.getElementById('info').innerHTML = string
    document.getElementById('info').style.animation ='infoAppear 2s linear'
    setTimeout(() => {
        document.getElementById('info').style.animation =''
        document.getElementById('info').innerHTML = ''
    } , 3000)
}

function displayResults(points,grade){
    const resultBox = document.getElementById('resultBox')
    resultBox.innerHTML = 
    `<p>
        Points Earned: ${points}
    </p>
    <p>
        Your grade is : ${grade}
    </p>`;
    resultBox.style.display = 'block'
}

function disableButtons(){
    const container = document.querySelector('#questions')
    const anwsers = container.getElementsByTagName('div')
    const anwserArr = Array.from(anwsers)

    anwserArr.forEach(anwser => {
        const inputElements = anwser.getElementsByTagName('input')
        const inputElArr = Array.from(inputElements)
        inputElArr.forEach(input =>{
            input.disabled = true
        })
    })

    const submitBtn = document.getElementById('submitBtn')
    submitBtn.disabled = true
    submitBtn.style.backgroundColor = 'gray'



}

function CalculateQuestions(){
    

    let points = 0
    let userAnwsers = []
    const totalQuestions = questions.length
    const container = document.querySelector('#questions')
    const anwsers = container.getElementsByTagName('div')
    const anwserArr = Array.from(anwsers)

    //getting student anwsers by iterating over question container
    anwserArr.forEach(anwser => {
        const inputElements = anwser.getElementsByTagName('input')
        const inputElArr = Array.from(inputElements)
        inputElArr.forEach(input =>{
            if(input.checked)
                userAnwsers.push({anwser:input.value , question:input.name})
        })
    })

    //comparing student anwsers with correct anwsers and calculating points
    userAnwsers.forEach(anwsr => {
        const questionFromExam = questions.find(question => question.questions === anwsr.question)
        const correctAnwser = questionFromExam.options.find(option => option.isCorrect === true)
        if(anwsr.anwser === correctAnwser.text) points++
    })
    
    
    let grade = (points/totalQuestions * 10) >> 0

    // set minimal grade '1'
    grade = grade === 0 ? 1 : grade

    console.log('points:' , points)
    console.log('grade:' , grade)

    const personalCodeField = document.getElementById('personalCode')
    if(!checkPersonalCode(personalCodeField.value)){
        triggerAnimationInfo('Please provide valid personal code')
        return
    }
    const personalCode = personalCodeField.value

    const json = JSON.stringify({
        personalCode,
        points,
        grade
    })

    jQuery.ajax({
        type: "POST",
        url: '../php/exam.php',
        dataType: 'json',
        data: {json},
    
        success: function (obj, textstatus) {
                      if( !('error' in obj) ) {
                        triggerAnimationInfo(obj.message)
                        displayResults(points,grade)
                        disableButtons()
                      }
                      else {
                        triggerAnimationInfo(obj.error);
                      }
                }
    });
    
}

