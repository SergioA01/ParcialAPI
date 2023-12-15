const url = 'https://api-dishes.vercel.app/' 
function loadData(){
  return new Promise((resolve,reject)=>{
    fetch(url)
    .then( result => result.json( ) )
    .then( result => resolve(result) ) 
    .catch( err  => reject(err) )
    
  })
}

const loadFields = ()=>{

  const idDishValue = document.getElementById('idDish').value

  const nameValue = document.getElementById('name').value

  const caloriesValue = document.getElementById('calories').value

  const vegetarianValue = document.getElementById('isVegetarian').value
  
  const valueValue = document.getElementById('value').value
  
  const commentsValue = document.getElementById('comments').value

  const data = {"idDish":idDishValue,"name":nameValue,"calories":caloriesValue, "isVegetarian": vegetarianValue, "value": valueValue, "comments": commentsValue}

  return JSON.stringify(data)
}


document.getElementById('btnSend').addEventListener('click',()=>{
  const URI = 'https://api-dishes.vercel.app/'

  fetch(URI,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:loadFields()
    }).then( result => result.json())
      .then( result => {
        if( result.state ){
          alert('Completo')
        }else{
          alert('Algo salio mal')
        }
      }).catch( err => console.log(err))
})

