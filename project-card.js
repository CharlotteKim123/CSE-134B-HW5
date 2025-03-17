class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>

                .card {
                    display: flex;
                    padding: 60px;
                    align-items: center;
                    justify-content: center;
                    color: black;
                    border: 2px solid black;
                }


                h2 {
                    font-size: 30px;
                }

                picture img {
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
            <div class="card">
                <h2></h2>
                <picture>
                    <img src="" alt="">
                </picture>
                <p><a href="#" target="_blank">""</a></p>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector("h2").textContent = this.getAttribute("title") || "Cipher";
        this.shadowRoot.querySelector("img").src = this.getAttribute("image") || "Cipher.jpg";
        this.shadowRoot.querySelector("img").alt = this.getAttribute("alt") || "Cipher";
        this.shadowRoot.querySelector("p").textContent = this.getAttribute("description") || "This program uses a cipher to encrypt the inputted files.";
        this.shadowRoot.querySelector("a").href = this.getAttribute("link") || "https://github.com/CharlotteKim123/Cipher";
    }
}

customElements.define("load", ProjectCard);
