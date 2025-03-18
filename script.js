const URL = "https://my-json-server.typicode.com/CharlotteKim123/CSE-134B-HW5";
const localStorage = "https://api.jsonbin.io/v3/b/67d7aba98a456b7966774685";


function loadLocal() {
    var a = binURL.getItem("projectName");
    document.getElementById("load").innerHTML = a;
    var b = binURL.getItem("projectImage");
    document.getElementById("load").innerHTML = b;
    var c = binURL.getItem("projectLink");
    document.getElementById("load").innerHTML = c;
    var d = binURL.getItem("projectDescription");
    document.getElementById("load").innerHTML = d;
}


function saveToLocal() {
    const title = { title: "Cipher" };
    localStorage.setItem("projectName", title);
    localStorage.setItem("projectName", JSON.stringify(title));
    localStorage.setItem("projectImage", "Cipher.jpg");
    const link = { link: "https://github.com/CharlotteKim123/Cipher" };
    localStorage.setItem("projectLink", link);
    localStorage.setItem("projectLink", JSON.stringify(link));
    localStorage.setItem("projectDescription", "This program uses a cipher to encrypt the inputted files.");
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
