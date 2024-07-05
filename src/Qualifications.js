
function Qualifications({
  props
}){
  return(<>
    <section
      className=" d-flex flex-wrap"
    >
      <div
        className="d-flex flex-wrap justify-content-start align-start bg-lblue justify-content-evenly py-5 gap-5"
        style={{
          width:"100%",
          height:"100%"
        }}
      >
        <div
          className="qualificationCard"
        >
          <img
            style={{
              height:"10rem"
            }}
            className=""
            src={require("./Ico/aes06_icone_conseils_personnalise_bornes_de_recharge_alpes_maritimes.png")}
            alt=""
          />
          <p
           className="fs-2 fw-bold text-white"
          >
            Conseils
          </p>
          <p
           className="fs-2 fw-bold text-black bottomQual"
           style={{
            opacity:0.5
           }}
          >
            personnalisés
          </p>
        </div>
        <div
          className="qualificationCard"
        >
          <img
            style={{
              height:"10rem"
            }}
            className=""
            src={require("./Ico/aes06_icone_demarches_simplifier_bornes_de_recharge_alpes_maritimes.png")}
            alt=""
          />
          <p
           className="fs-2 fw-bold text-white"
          >
            Démarches
          </p>
          <p
           className="fs-2 fw-bold text-black bottomQual"
           style={{
            opacity:0.5
           }}
          >
            simplifiées
          </p>
        </div>
        <div
          className="qualificationCard"
        >
          <img
            style={{
              height:"10rem"
            }}
            className=""
            src={require("./Ico/aes06_icone_solutions_sur_mesur_bornes_de_recharge_alpes_maritimes.png")}
            alt=""
          />
          <p
           className="fs-2 fw-bold text-white"
          >
            Solutions
          </p>
          <p
           className="fs-2 fw-bold text-black bottomQual"
           style={{
            opacity:0.5
           }}
          >
            sur mesure
          </p>
        </div>
        <div
          className="qualificationCard"
        >
          <img
            style={{
              height:"10rem"
            }}
            className=""
            src={require("./Ico/aes06_icone_installation_bornes_de_recharge_alpes_maritimes.png")}
            alt=""
          />
          <p
           className="fs-2 fw-bold text-white"
          >
            Installations
          </p>
          <p
           className="fs-2 fw-bold text-black bottomQual"
           style={{
            opacity:0.5
           }}
          >
            clé en main
          </p>
        </div>
        <div
          style={{
            minWidth:"30rem",
            gap:"2rem",
            width:"25%",
            display:"flex",
            alignItems:"center",
            flexDirection:"row"
          }}
        >
          <img
            style={{
              height:"10rem",
              objectFit:"contain",
            }}
            className="rounded-5"
            src={require("./Ico/aes06_icone_qualifelec_big_bornes_de_recharge_alpes_maritimes.png")}
            alt=""
          />
          <p
            className="text-white fs-6 text-start"
          >
            AES06 est fière d'être certifiée
            QUALIFELEC, un gage de qualité et de
            sécurité pour vos installations
            électriques.
            <br/>
            <br/>
            Cette certification témoigne de notre
            expertise et de notre savoir-faire
            dans le domaine de l'électricité.
          </p>
        </div>
      </div>
    </section>
  </>)
}

export default Qualifications