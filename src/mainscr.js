window.addEventListener("DOMContentLoaded", () => {
    const butt = document.getElementById("questioncr");
    const label = document.getElementById("labelcr");
    const formnew = document.getElementById("buttor");
    
    formnew.addEventListener("click", (ev) => {
        label.style.visibility = "visible";
        butt.style.visibility = "visible";
    })
})

