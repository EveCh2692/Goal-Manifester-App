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
  completeButton.textContent = `Complete: ${goalObject.completed}`

  li.append( title, goalParagraph, hr,completeButton)
  goalsUl().append(li)
  

  //between 19 and 21 create new p with text completed and check button
  //attach event click to button
  //handleclick will be callback
  //fire a patch fetch request to db.json
  //change info on page to show completed 
  //google html check mark

  //create an li
  //give div a unique id
  //creat an h3 for goal title
  //goal type, deadline and complete just paragraphs only use interpolation
  //append h3 and parapgraph to li
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
e.target.reset()
   

  fetch("http://localhost:3000/longTermGoals", confiObject)
    .then(response => response.json() )
    .then(goalObject => displayGoal(goalObject))





}

const fetchGoals= () => {
  fetch("http://localhost:3000/longTermGoals")
  .then(response => response.json() )
  .then(goalObjects => goalObjects.forEach(goalObject => displayGoal(goalObject)))

}
const handlePageLoaded = () => {
goalsForm().addEventListener("submit", handleSubmit )
fetchGoals()
}

document.addEventListener("DOMContentLoaded", handlePageLoaded)
