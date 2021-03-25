import * as ReactBootstrap from 'react-bootstrap'
import Footer from '../components/Footer'
import footerstyle from '../css/Footer.module.css'

function About() {
  return (
    <div className="About">
      <ReactBootstrap.Jumbotron className="Jumbotron" style={{ backgroundImage: "url(/assets/images/hero.png)" }}>
        <div className="AboutUs .col-md-4 .offset-md-4">
          <h1>About Us</h1>
          <div className="container">
            <p>Carall is a company with 40  years ofhistory of selling cars. We are the leader in global reuse, inspiring
          clients to play in a world of carretail. Carall  got its reputation as a  trailblazer innovation,  and entrepreneurial expertise.</p>
          </div>
        </div>
      </ReactBootstrap.Jumbotron>
      <div className="numberContainer">
        <div className="number"><h2>1348</h2><p>cars sold</p></div>
        <div className="number"><h2>904</h2><p>satisfied customers</p></div>
        <div className="number"><h2>136</h2><p>Deals Daily</p></div>
      </div>
      <div className="container text">
        <p>During our work we managed to create a unique service for the sale and delivery of cars around the world.
        A better way to travel lighter and eco friendly with reused cars. Travel with us with sustainability and securely into the future.
          </p>
      </div>
      <ReactBootstrap.Container className="GoalContainer">
        <div className="GoalImage"><img src="/assets/images/car.jpg" alt="employee making a sale" /></div>
        <div><h3>Our Goal</h3>
          <p>Once the empty cargo van manufactured the LCF 3500. The stabilizer bar dumped the heavy duty welder body because
          once the bumper decelerated the fire truck.
        </p>
        </div>
      </ReactBootstrap.Container>
      <div className={footerstyle.sticky}>
        <Footer />
      </div>
    </div>
  )
}

export default About