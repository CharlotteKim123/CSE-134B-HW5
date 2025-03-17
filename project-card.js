class ProjectCard extends HTMLElement {
    constructor() {
        super();
        element.attachShadow({ mode: "open" });

        // Create card template
        element.shadowRoot.innerHTML = `
            <style>
                
                project-card {
                    background: var(--card-bg);
                    border: var(--card-border);
                    border-radius: var(--card-radius);
                    padding: var(--card-padding);
                    box-shadow: var(--card-shadow);
                    transition: all 0.3s ease;
                    max-width: 300px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }


                h2 {
                    margin: 10px 0;
                    font-size: 1.5em;
                    color: black;
                }

                picture {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 300px;
                    width: device-width;
                }

                p {
                    padding: 40px;
                }

            </style>
            <project-card>
                <picture>
                    <source media="" srcset="">
                    <img src="" alt="">
                </picture>
                <h2></h2>
                <p><a href="#" target="_blank">Learn More</a></p>
                <a href="#" target="_blank">Learn More</a>
            </div>
        `;
    }

    connectedCallback() {
        element.shadowRoot.querySelector("h2").textContent = element.getAttribute("title") || "Cipher";
        element.shadowRoot.querySelector("img").src = element.getAttribute("image") || "Cipher,jpg";
        element.shadowRoot.querySelector("img").alt = element.getAttribute("alt") || "Cipher";
        element.shadowRoot.querySelector("p").textContent = element.getAttribute("description") || "This program uses a cipher to encrypt the inputted files.";
        element.shadowRoot.querySelector("a").href = element.getAttribute("link") || "https://github.com/CharlotteKim123/Cipher";
    }
}

// Define the custom element
customElements.define("project-card", ProjectCard);
