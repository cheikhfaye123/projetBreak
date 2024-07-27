

document.addEventListener("DOMContentLoaded", function() {
    const bouton = document.getElementById("btn1");
    const result = document.getElementById("resultat");

   
    function afficherLiens() {
        result.innerHTML = ''; 

        
        const nameLinks = JSON.parse(localStorage.getItem("nameLinks")) || [];
        
        
        nameLinks.forEach(linkObj => {
            let linkBox = document.createElement("div");
            linkBox.classList.add("link-box");
            
            let linkElement = document.createElement("a");
            linkElement.href = linkObj.url;
            linkElement.textContent = linkObj.name;
            linkElement.target = "_blank"; 

            linkBox.appendChild(linkElement);
            result.appendChild(linkBox);
        });
    }

   
    afficherLiens();

    bouton.onclick = () => {
        let nameLink = document.getElementById("nameLink").value;
        let link = document.getElementById("link").value;

        if (nameLink && link) {
            let nameLinks = JSON.parse(localStorage.getItem("nameLinks")) || [];
            nameLinks.push({ name: nameLink, url: link });
            localStorage.setItem("nameLinks", JSON.stringify(nameLinks));
            afficherLiens();
        } else {
            console.log("Both fields must be filled out");
        }
    }
});

