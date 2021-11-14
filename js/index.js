const goalsForm = () => document.querySelector("#create-goals form")
const goalsUl = () => document.querySelector("#goals-list")





const displayGoal = (goalObject) => {

   const li = document.createElement("li")
  li.id=`new-goal-${longTermGoals.id}`

  const title = document.createElement("h3") 
  title.textContent = longTermGoals.title
    
  const goalParagraph = document.createElement("goalParagraph")
  goalParagraph.textContent = `Type: ${longTermGoals.type}-Deadline: ${longTermGoals.deadline}`
  
  li.append( title, goalParagraph)
  goalsUl().append(li)
  

  //create an li
  //give div a unique id
  //creat an h3 for goal title
  //goal type, deadline and complete just paragraphs only use interpolation
  //append h3 and parapgraph to li
  //append li to ul
  
}

const

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
    .then(goalObject => displayGoal(goalObject))





}


const handlePageLoaded = () => {
goalsForm().addEventListener("submit", handleSubmit )
}

document.addEventListener("DOMContentLoaded", handlePageLoaded)
