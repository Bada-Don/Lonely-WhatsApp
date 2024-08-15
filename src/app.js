document.addEventListener('DOMContentLoaded', () => {
    let voiceMsg = document.getElementById("voiceMsg");
    let sendMsg = document.getElementById("sendMsg");
    let message = document.getElementById("message");

    // Function to toggle button visibility
    const toggleButtons = () => {
        if (message.value.trim() !== "") {
            sendMsg.style.display = "block"; // show send button
            voiceMsg.style.display = "none"; // hide voice button
        } else {
            sendMsg.style.display = "none"; // hide send button
            voiceMsg.style.display = "block"; // show voice button
        }
    };

    // Initial call to set the correct state on page load
    toggleButtons();

    // Add event listener for input changes
    message.addEventListener('input', toggleButtons);
});

// All Unread and Groups Categories logic
document.addEventListener("DOMContentLoaded", () => {
    const categories = ["All", "Unread", "Groups"];
    
    categories.forEach(category => {
        const element = document.getElementById(category);
        
        element.addEventListener("click", () => {
            if (!element.classList.contains("selected")) {
                // Remove the 'selected' class from any other category
                document.querySelector(".selected")?.classList.remove("selected");

                // Add the 'selected' class to the clicked category
                element.classList.add("selected");
            }
        });
    });
});

// Selected chat logic
document.addEventListener("DOMContentLoaded", () => {
    const chats = document.getElementsByClassName('chat');  
    for(chat of chats){
        chat.addEventListener('click', () => {
            chat.classList.toggle('selectedChat');
            });
    }
    });
