const goalsForm = () => document.querySelector("#create-goals form")
const goalsUl = () => document.querySelector("#goals-list")

const displayGoal = (goalObject) => {
  
  //create an li
  //give div a unique id
  //creat an h3 for goal title
  //goal type, deadline and cpmpleted just paragraphs only use interpolation
  //append h3 ans parapgraph to li
  //append li to ul
  
  

  
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

   

  fetch("http://localhost:3000/longTermGoals", confiObject)
    .then(response => response.json() )
    .then(goalObject =>displayGoal(goalObject))





}


const handlePageLoaded = () => {
goalsForm().addEventListener("submit", handleSubmit )
}

document.addEventListener("DOMContentLoaded", handlePageLoaded)
