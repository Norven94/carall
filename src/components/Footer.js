import footerstyle from "../css/Footer.module.css"


function Footer() {

  return (
    <footer className={` ${footerstyle.customfooter}  ${footerstyle.footernormal}`} >
      <div className={footerstyle.Info}>
        <div className={footerstyle.footerheader}>
          <h6>Contact Us</h6><p>Looking for the right car?</p>
        </div>
        <div className={footerstyle.footerContact}>
          <p >AdressLane 22A <br />
          21 211 Stockholm </p>
          <p>info@Carall.se</p>
          <p>+46 763 000 00</p>
        </div>
      </div>
      <div className={footerstyle.Social}>
        <img src="/assets/icons/f.svg" alt="Socialicon facebook" />
        <img src="/assets/icons/i.svg" alt="Socialicon Instagram" />
        <img src="/assets/icons/t.svg" alt="Socialicon Twitter" />
      </div>
    </footer>
  )
}

export default Footer;
