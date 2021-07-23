function onLoad(){
    grepExample()
}

function grepExample(){
    let dummyData = [{
        'name':'Boris',
        'surname':'Dodon',
        'age':31
    },
    {
        'name':'Vladilen',
        'surname':'Minin',
        'age':21
    },
    {
        'name':'Anna',
        'surname':'Karenina',
        'age':30
    },
    {
        'name':'Samanta',
        'surname':'Koroleva',
        'age':31
    },
    {
        'name':'Ivars',
        'surname':'Lacis',
        'age':31
    }
    ]

    let resultArray = jQuery.grep(dummyData , function(data){
        return data.name==='Samanta' && data.age>20
    })

    console.log(resultArray)


}

function arrayExample(){
    cars = ['BMW' , 'Audi' , 'Volvo' , 'Volkswagen']

    for (let index = 0; index < cars.length; index++) {
        if(cars[index] === 'BMW')
            alert('Found')

        
    }
    document.write('Array has finished to check')
}