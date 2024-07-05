import { Container } from "react-bootstrap"

function Footer({
  props
}){
  return(<>
    <footer>
      <div>

      </div>
      <div
        className="bg-dblue d-flex flex-row justify-content-evenly text-white"
      >
        <div>
          <p className="footerTitle">ADRESSE:</p>
          <p className="footerItem">185 Av. de Fabron, 06200 Nice</p>
          <p className="footerTitle">HORAIRES:</p>
          <p className="footerItem">
            Du Lundi au Vendredi
            8h - 19h
            & Samedi
            8h - 18h
          </p>
          <p className="footerTitle">TEL:</p>
          <p className="footerItem">04 20 53 12 12</p>
          <p className="footerTitle">MAIL:</p>
          <p className="footerItem">contact@aesflash.fr</p>
        </div>
        <div>
          <p className="footerTitle">A PROPOS:</p>
          <p className="footerItem">Solutions particuliers</p>
          <p className="footerItem">Solutions professionnels</p>
          <p className="footerItem">Copropriété</p>
          <p className="footerItem">Partenariat</p>
          <p className="footerItem">Notre expertisse</p>
          <span></span>
          <p className="footerItem">FAQ</p>
        </div>
        <div>
          <p className="footerTitle">SERVICE COMMERCIAL</p>
          <p className="footerItem">Devis particulier</p>
          <p className="footerItem">Devis professionnels</p>
          <span></span>
          <p className="footerItem">Recrutement</p>
        </div>
      </div>
      <div>

      </div>
    </footer>
  </>)
}

export default Footer