const goalsForm = () => document.querySelector("#create-goals form")
const goalsUl = () => document.querySelector("#goals-list")






const displayGoal = (goalObject) => {

   const li = document.createElement("li")
  li.id=`new-goal-${goalObject.id}`

  const title = document.createElement("h3") 
  title.textContent = goalObject.title
    
  const goalParagraph = document.createElement("p")
  goalParagraph.textContent = `Type: ${goalObject.type}-Deadline: ${goalObject.deadline}`
  
  const  hr = document.createElement("hr")

  const completeButton = document.createElement("p")
  completeButton.textContent = "Complete"
   
     const input = document.createElement("input")  
     input.type = "checkbox"
     input.id = `goal-complete-${goalObject.id}`
  if (goalObject.completed) {

  input.checked = true
      
  }else{

 input.checked = false

  }
   input.addEventListener("click",(e) => handleClick(e,goalObject.completed)) 
   completeButton.append(input)
  li.append( title, goalParagraph,completeButton,hr)
  goalsUl().append(li)
  
}



const handleSubmit = (e) => {
e.preventDefault()
const goalType = e.target[0].value
const goalDeadline = e.target[1].value
const goalTitle = e.target[2].value
const confiObject = {
    method:"POST",
    headers: {
        'Content-Type': 'application/json'
        
      },
     body: JSON.stringify({
        "type": goalType,
        "title": goalTitle,
        "completed": false,
        "deadline": goalDeadline,
        "shortTerm": []
     })
    }
e.target.reset()
   

  fetch("http://localhost:3000/longTermGoals", confiObject)
    .then(response => response.json() )
    .then(goalObject => displayGoal(goalObject))
}



  

const fetchGoals= () => {
  fetch("http://localhost:3000/longTermGoals")
  .then(response => response.json() )
  .then(goalObjects => goalObjects.forEach(goalObject => displayGoal(goalObject)))
  .catch(error => alert(error))

}


const handlePageLoaded = () => {
goalsForm().addEventListener("submit", handleSubmit )
fetchGoals()
}

const handleClick = (e, completedBoolean) => {
const goalId = e.target.id.split("-").pop()
const confiObject = {
  method:"PATCH",
  headers: {
    'Content-Type': 'application/json'
    
  },
  body: JSON.stringify({
    completed: !completedBoolean
    
  })
}
fetch(`http://localhost:3000/longTermGoals/${goalId}`, confiObject)
    .then(response => response.json() )
    //.then(json => e.target.checked = !e.target.checked)
}


document.addEventListener("DOMContentLoaded", handlePageLoaded)
