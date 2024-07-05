import { Container } from "react-bootstrap"

function Footer({
  props
}){
  return(<>
    <footer className="pt-5">
      <div>

      </div>
      <div
        className="bg-dblue d-flex flex-wrap flex-column flex-md-row   justify-content-evenly text-white py-5"
      >
        <div
          className="w-100 pb-4 d-flex justify-content-start "
        >
          <img
            style={{
              left:"10%"
            }}
            className="w-25 position-relative"
            src={require("./logo/aes06_logo_aesflash_blanc_bornes_de_recharge_alpes_maritimes.png")}
            alt=""
          />
        </div>
        <div
          className="d-flex flex-column gap-2 border-top border-5 border-white"
        >
          <p className="footerTitle">ADRESSE:</p>
          <p className="footerItem">185 Av. de Fabron, 06200 Nice</p>
          <p className="footerTitle">HORAIRES:</p>
          <p className="footerItem text-left">
            Du Lundi au Vendredi <br/>
            8h - 19h<br/>
            & Samedi<br/>
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
          <p className="footerItem border-top border-2 pt-2 mt-2">FAQ</p>
        </div>
        <div>
          <p className="footerTitle">SERVICE COMMERCIAL</p>
          <p className="footerItem">Devis particulier</p>
          <p className="footerItem">Devis professionnels</p>
          <p className="footerItem border-top border-2 border-white pt-2 mt-2">Recrutement</p>
        </div>
      </div>
      <div>
        <p className="text-blue py-3">
        2024 | <b>AESFLASH</b> | MENTIONS LÉGALES | GESTION DES COOKIES | POLITIQUE DE CONFIDENTIALITÉ
        </p>
      </div>
    </footer>
  </>)
}

export default Footer