const btn = document.getElementById("header_nav_menu")
const sidebar = document.querySelector(".sidebar_header")
document.body.addEventListener("click", (e) => {
    if(sidebar.style.right == "0px" && e.target != btn)  {
         sidebar.style.right = '-100%'
    }
})
btn.addEventListener("click", (e) => {
    if(sidebar.style.right == "-100%") {
        sidebar.style.right= "0px"
    }
})
