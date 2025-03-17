const URL = "https://my-json-server.typicode.com/CharlotteKim123/CSE-134B-HW5";
const binURL = "https://api.jsonbin.io/v3/b/67d7aba98a456b7966774685";
const binKEY = "$2a$10$fCH5bN6IU6urUsaBiK9Wa.UoH.S.8TG3S0SwMej0rFP7hX5HoHSvu";


const Data = [
    { 
        id: 1, 
        title: "Cipher", 
        image: "Cipher.jpg",
        description: "This program uses a cipher to encrypt the inputted files.",
        link: "https://github.com/CharlotteKim123/Cipher"
    }
];


function loadLocal() {
    fetch(binURL, {
        method: "GET",
        headers: {
            "X-Master-Key": binKEY,  
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.record) {
            createCard(data.record);  
        } else {
            alert("No data found in JSONBin.");
        }
    })
}


function saveToBin(Data) {
    fetch(binURL, {
        method: "PUT",  // Use PUT to update existing data
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": binKEY,
        },
        body: JSON.stringify(Data),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data saved:", data);
    })
    .catch(error => {
        alert("Failed to save data to bin.");
    });
}


function loadRemote() {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            createCard(data);
        })
        .catch(error => {
            alert("Failed to load remote data.");
        });
}


function createCard(data) {
    const container = document.getElementById("projContainer");
    container.innerHTML = "";  
    data.forEach(item => {
        const card = document.createElement("project-card");
        card.setAttribute("title", item.title);
        card.setAttribute("image", item.image);
        card.setAttribute("alt", item.title);
        card.setAttribute("description", item.description);
        card.setAttribute("link", item.link);
        container.appendChild(card);
    });
}

saveToBin();
