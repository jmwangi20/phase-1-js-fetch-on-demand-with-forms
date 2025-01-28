const init = () => {
    const inputForm = document.querySelector("form")

    inputForm.addEventListener("submit",event => {

        event.preventDefault()
        const input = event.target["searchByID"].value
        inputForm.reset()

        fetch(`http://localhost:3000/movies/${input}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector("section#movieDetails h4")
            const summary = document.querySelector("section#movieDetails p")


        // change the contents of the summary and title base on the user input 
            title.textContent = data.title;
            summary.textContent = data.summary;
        })
    })
  
}

document.addEventListener('DOMContentLoaded', init);