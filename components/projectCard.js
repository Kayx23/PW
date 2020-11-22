// use shadow DOM for project cards

const projectCard = document.createElement('template');
projectCard.innerHTML = `
<style>

    *{
        margin: 0;
        padding: 0;
    }

    .flex-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    .card {
    background: rgb(117, 79, 79);
    height: 17rem;
    width: 17rem;
    transition: 0.6s all ease;
    border-radius: 2rem;
    margin: 0rem 1.5rem 1.5rem 1.5rem;
    }

    .cardTop {
    transition: 0.4s all ease;
    height: 65%;
    border-radius: 2rem 2rem 0rem 0rem;
    background: url("https://user-images.githubusercontent.com/39619599/99891579-62f65180-2c39-11eb-8709-314d223a1b0c.png");
    background-size: cover;
    }

    .cardBottom {
    height: 35%;
    transition: 0.4s all ease;
    }

    .cardText {
    min-height: 100%;
    padding: 20px;
    }

    .cardTitle {
    font-size: 24px;
    font-weight: 900;
    }

    .cardInfo {
    padding-top: 10px;
    font-size: 18px;
    font-weight: 500;
    color: orange;
    }

    /* only show on hover */

    .cardHoverText {
    visibility: hidden;
    }

    /* Hover effect */

    .card:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
    }

    /* Using className + hover followed by child element allows you to change child elements when parent is hovered */

    .cardHoverText {
        margin: 1rem;
    }

    .card:hover .cardHoverText {
    transition: 0.4s all ease;
    visibility: visible;
    transition-delay: 0.2s;

    }

    .card:hover .cardBottom {
    transition: 0.4s all ease;
    height: 65%;
    opacity: 1;
    }

    .card:hover .cardTop {
    height: 35%;
    opacity: 0.8;
    transition: 0.4s all ease;
    }
</style>

    <div class="flex-wrapper">
        <div class="card">
            <div class="cardTop"></div>
            <div class="cardBottom">
                <div class="cardText">

                    <h3 class="cardTitle">Title</h3>
                    <h4 class="cardInfo">Short Description</h4>

                    <div class="cardHoverText">
                        Lorem Ipsum
                        <ul>
                            <li>What is Lorem Ipsum?</li>
                            <li>rambled it to make a type specimen book. It has survived</li>
                            <li>centuries, but also the leap into electronic typesettingessent</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div class="card">
            <div class="cardTop"></div>
            <div class="cardBottom">
                <div class="cardText">

                    <h3 class="cardTitle">Title</h3>
                    <h4 class="cardInfo">Short Description</h4>

                    <div class="cardHoverText">
                        Lorem Ipsum
                        <ul>
                            <li>What is Lorem Ipsum?</li>
                            <li>rambled it to make a type specimen book. It has survived</li>
                            <li>centuries, but also the leap into electronic typesettingessent</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div class="card">
            <div class="cardTop"></div>
            <div class="cardBottom">
                <div class="cardText">

                    <h3 class="cardTitle">Title</h3>
                    <h4 class="cardInfo">Short Description</h4>

                    <div class="cardHoverText">
                        Lorem Ipsum
                        <ul>
                            <li>What is Lorem Ipsum?</li>
                            <li>rambled it to make a type specimen book. It has survived</li>
                            <li>centuries, but also the leap into electronic typesettingessent</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>


`;


class Project extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(projectCard.content);
    }
}

customElements.define('project-card', Project);