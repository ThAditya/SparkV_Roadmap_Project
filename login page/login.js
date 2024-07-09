const button = document.getElementById("sun");
const image = document.querySelector(".sun")
function images (){
    if(image.src.endsWith("moon-svgrepo-com.svg")){
        image.src = "sun-svgrepo-com.svg"
        document.getElementById("day").href = "LogInDarkThemeStyle.css"
    }else{
        image.src="moon-svgrepo-com.svg"
        document.getElementById("day").href = "LogInStyle.css"
        document.body.style.backgroundColor = "#0b0c10be"
    }
}
document.addEventListener("DOMContentLoaded", function() {
    button.addEventListener("click", images);
});