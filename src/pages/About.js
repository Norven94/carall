import * as ReactBootstrap from 'react-bootstrap'
import Footer from '../components/Footer'

function About() {

  return (
    <div className="About">
      <ReactBootstrap.Jumbotron>
        <h1>About Us</h1>
        <div className="container py-5">
          <p>Carall is an international company with 30 years of history
          selling used cars, trucks and motorcycles.
          During our work we managed to create a unique service for
          the sale and delivery of cars around the world.
          We are the leader in global car retail, teaching and inspiring
          clients to play in a world of beauty. Owned by LVMH Moët Hennessy,
          the world’s leading luxury goods group, Carall has earned its reputation
         as a car trailblazer with its expertise, innovation, and entrepreneurial spirit.</p>
        </div>
      </ReactBootstrap.Jumbotron>
      <div className="container about py-5">

        <h2>Contact Information</h2>
        <h3>Carall AB</h3>
        <p>Organisation number: 000 000 000</p>
        <p>Adressfield 1234 Malmö</p>
        <p>Tel: +46 00 000 000 0</p>
        <p>Email: info@Carall.se</p>
        <img src="/assets/images/f-coral.png" alt="facebook-icon" />
        <img src="/assets/images/t-coral.png" alt="twitter-icon" />
        <img src="/assets/images/i-coral.png" alt="instagram-icon" />
      </div>
      <Footer/>
    </div>
  )
}

export default About