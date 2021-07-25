let myLead = []
let i = 0

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
let ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function() {
    myLead.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLead) )
    renderLeads()
    inputEl.value = ""
})

deleteBtn.addEventListener("dblclick" , function() {
    localStorage.clear()
    myLead = []
    renderLeads()
})

if(leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    renderLeads()
}

function renderLeads() {
    let listItems = ""
    for(i=0; i<myLead.length ; i++)  {
        //listItems += "<li><a href = '"+myLead+"' target = '_blank'>" + myLead[i] + "</a></li>" - can broken down to following code
        listItems += `
            <li>
            <a target='_blank' href='${myLead[i]}'>${myLead[i]}</a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
