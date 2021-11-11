const goalsForm = () => document.querySelector("#create-goals form")
const goalsUl = () => document.querySelector("#goals-list")


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
    .then(goalObject => console.log(goalObject))

}


const handlePageLoaded = () => {
goalsForm().addEventListener("submit", handleSubmit )
}

document.addEventListener("DOMContentLoaded", handlePageLoaded)

