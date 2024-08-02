import gridimage from '/photo-grid.png'

export default function Navbar(){
    return(
        <section className="hero--section">
            <img src={gridimage} className="grid--image"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.            </p>
        </section>
    )
}