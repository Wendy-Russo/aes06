import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Map from "./Map";
import Newsletter from "./Newsletter";
import Partners from "./Partners";
import Qualifications from "./Qualifications";
import Reviews from "./Reviews";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/900.css"; // Defaults to weight 400
import "@fontsource/poppins/500.css"; // Defaults to weight 400
import "@fontsource/jost"; // Defaults to weight 400

function App() {
  return (
    <div className="App">
      <Header/>
      <Card
        title={<img src={require("./logo/aes06_logo_aesflash_blanc_bornes_de_recharge_alpes_maritimes.png")} alt=""/>}
        subTitle={""}
        buttonText={"INSTALLATEUR DE BORNE ELECTRIQUE"}
        flip="center"
        height="80vh"
        imageID={0}
      />
      <section
        style={{
          display:"flex",
          flexWrap:"wrap",
          padding:"3rem 3rem 0",
          gap:".5rem"
        }}
      >
        <Card
          title={`NOS\nSOLUTIONS\nPARTICULIERS`}
          subTitle={`
            Devis sur-mesure & gratuit
          `}
          buttonText={"Découvrez nos solutions particuliers"}
          imageID={1}
        />
        <Card
          title={`NOS\nSOLUTIONS\nPROFESSIONNELS`}
          subTitle={`
            Devis sur-mesure & gratuit
          `}
          buttonText={"Découvrez nos solutions pro"}
          imageID={2}
        />
      </section>
      <Card //LA POMPE
        title={`
          ENSEMBLE
          LA TRANSITION
          ENERGETIQUE !
        `}
        subTitle={`
          Devenez partenaire AESflash et bénéficiez de notre
          savoir-faire pour développer vos compétences en
          installation de bornes de recharge
        `}
        buttonText={"Devenir partenaire"}
        margin={'3rem'}
        imageID={3}
      />
      <Card //AUTONNE
        title={`
          BENEFICIEZ DU
          CREDIT D'IMPOT
          POUR L'INSTALLATION
          DE VOTRE BORNE DE RECHARGE
        `}
        subTitle={`
          Vous faites installer une borne de recharge pour votre véhicule électrique ? Profitez
          d'un crédit d'impôt de l'État français sous certaines conditions. Nous vous
          accompagnons dans vos démarches pour une installation simple et économique.
        `}
        buttonText={"Comment obtenir mon crédit d'impot ?"}
        height="auto"
        imageID={4}
      />
      <Card //NEONS VOITURE
        title={`
          BORNES
          DE RECHARGE
          EN COPROPRIETE
          SIMPLIFIEZ-VOUS LA VIE !
        `}
        subTitle={`
          Vous souhaitez installer une borne de recharge dans
          votre copropriété ? AESflash vous accompagne à
          chaque étape du projet
        `}
        buttonText={"Passer à l'électrique !"}
        margin={'3rem'}
        imageID={5}
      />
      <Card //MEC AVEC LE CASQUE
        title={`
          LA QUALITE & LA SECURITE
          AVANT TOUT, NOTRE
          SAVOIR-FAIRE
          A VOTRE SERVICE
        `}
        subTitle={`
          Avec AESflash, bénéficiez d'une installation de bornes de recharge en
          toute sérénité. Nos électriciens qualifiés assurent un service de qualité,
          du conseil personnalisé à la mise en service.
        `}
        buttonText={"Notre savoir-faire"}
        height="auto"
        flip={"right"}
        imageID={6}
      />
      <section
        style={{
          display:"flex",
          padding:"3rem",
          flexWrap:"wrap",
          gap:"1rem"
        }}
      >
        <Card
          useShadow={true}
          innerPadding="1rem"
          title={`
            ELECTRICITE
            GENERALE
          `}
          imageID={7}
        />
        <Card
          useShadow={true}
          innerPadding="1rem"
          title={`
            SECURITE
            & DOMOTIQUE
          `}
          imageID={8}
        />
        <Card
          useShadow={true}
          innerPadding="1rem"
          title={`
            DEPANNAGE
          `}
          imageID={9}
        />
        <Card
          innerPadding="0rem"
          titleColor="#325A70"
          subTitleColor="#BBBBBB"
          buttonColor="#325A70"
          title={`
            NOS AUTRES
            SERVICES
          `}
          subTitle={`
            Besoin d'un électricien ? AESflash c'est aussi AES06, l'électricité générale, la sécurité, la domotique et le dépannage.

            Découvrez toutes nos solutions sur notre site dédié.
          `}
          buttonText={"Je découvre"}
          imageID={-1}
        />
      </section>
      <Map/>
      <Partners/>
      <Newsletter/>
      <Reviews/>
      <section
        style={{
          display:"flex",
          flexWrap:"wrap",
          padding:"3rem",
          gap:"1rem"
        }}
      >
        <Card
          height="300px"
          imageID={10}
        />
        <Card
          height="300px"
          imageID={11}
        />
        <Card
          height="300px"
          imageID={12}
        />
      </section>
      <Qualifications/>
      <Footer/>
    </div>
  );
}


export default App;
