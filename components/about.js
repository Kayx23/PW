class About extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>

        </style>
        
        <h2>ABOUT</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae commodi unde fugiat ratione id officiis, voluptas minima quis cupiditate blanditiis, incidunt,
            ducimus
            eaque tenetur! Officia officiis cumque voluptatum praesentium voluptatibus.</p>
        <h2>PROJECTS</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae commodi unde fugiat ratione id officiis, voluptas minima quis cupiditate blanditiis, incidunt,
            ducimus
            eaque tenetur! Officia officiis cumque voluptatum praesentium voluptatibus.</p>
        <h2>CONTACT</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae commodi unde fugiat ratione id officiis, voluptas minima quis cupiditate blanditiis, incidunt,
            ducimus
            eaque tenetur! Officia officiis cumque voluptatum praesentium voluptatibus.</p>
        <h2>WHO AM I</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae commodi unde fugiat ratione id officiis, voluptas minima quis cupiditate blanditiis, incidunt,
            ducimus
            eaque tenetur! Officia officiis cumque voluptatum praesentium voluptatibus.</p>
        <h2>WHO AM I</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae commodi unde fugiat ratione id officiis, voluptas minima quis cupiditate blanditiis, incidunt,
            ducimus
            eaque tenetur! Officia officiis cumque voluptatum praesentium voluptatibus.</p>
      `;
    }
}

customElements.define('about-component', About);