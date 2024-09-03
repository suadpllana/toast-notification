const toastBox = document.getElementById("toastBox")

const successMessage = `✅Successfully completed!`;
const invalidMessage = `🟨Invalid input! Please try again`;
const errorMessage = `⛔Error! Try Again`;

function showToast(msg){
    const toast = document.createElement("div");
    toast.classList.add("notification");
    toast.innerHTML = msg;

    const timing = document.createElement("div");
    timing.classList.add("timing")

    toastBox.appendChild(toast).appendChild(timing);

    setTimeout(() => {
       toast.remove()
    },5000)


    if(msg.includes("Error")){
        timing.style.background = "red"
    }
    else if( msg.includes("Invalid")){
        timing.style.background = "yellow"
    }
    else{
        timing.style.background = "green"
    }
}