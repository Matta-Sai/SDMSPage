let useridInput = document.getElementById("userId")
let submitButton = document.getElementById("clickHereButton")
const urlStart = "http://appsdms75.maruti.com:7779/forms/frmservlet?config=ggsmcnnoc1&p_user_id="
const urlCenter = "&p_sid="
const urlEnd = "&p_pmc=2"

function onClickSubmit() {
    let today = new Date()
    let minutes = today.getMinutes() - 1
    minutes = minutes.toString()
    minutes.length === 1 ? minutes = "0" + minutes : minutes = minutes
    let hours = today.getHours()
    hours = hours.toString()
    hours.length === 1 ? hours = "0" + hours : hours = hours
    let year = today.getFullYear().toString()
    let month = today.getMonth() + 1
    let date = today.getDate()
    month = month.toString()
    month.length === 1 ? month = "0" + month : month = month
    year = year.substring(2)
    
    window.open(`${urlStart}${useridInput.value}${urlCenter}${minutes}${hours}${year}${month}${date}${urlEnd}`)
}
submitButton.addEventListener("click", onClickSubmit)
