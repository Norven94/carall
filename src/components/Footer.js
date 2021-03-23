import footer from 'react-bootstrap'
import footerstyle from "../css/Footer.module.css"


function Footer() {

  return (
    <footer className={`text-center p-3 bg-warning ${footerstyle.footernormal}`} >
      <div class="text-info">Carall © 2020 Copyright</div>
    </footer>
  )
}

export default Footer;
