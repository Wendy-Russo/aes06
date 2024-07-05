
function Card({
  margin = 0,
  width = "100%",
  height = "auto",
  imageID = 0,
  title="AESflash LA SOLUTION ELECTRIQUE",
  subTitle,
  buttonText,
  innerPadding = '3rem',
  flip = "left",
  style = {},
  useShadow = false,
  titleColor = "white",
  subTitleColor = "white",
  buttonColor = "white",
}){

  const images = [
    require("./img/aes06_installation_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_solutions_particuliers_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_solutions_professionnels_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_transition_energetique_partenariat_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_credit_impots_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_informations_installation_copropriete_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_expertise_savoir_faire_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_electricte_generale_nos_services_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_securite_et_domotique_nos_services_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_depannage_nos_services_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_bornes_intelligente_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_ou_installer_ma_bornes_de_recharge_bornes_de_recharge_alpes_maritimes.jpg"),
    require("./img/aes06_bornes_pour_ma_maison_bornes_de_recharge_alpes_maritimes.jpg"),
  ]

  let dir1 = "left"
  let dir2 = "start"
  let flexPos = "flex-start"

  if(flip === "right"){
    dir1 = "right"
    dir2 = "end"
    flexPos = "flex-end"
  }
  else if (flip === "center"){
    dir1 = "center"
    dir2 = "center"
    flexPos = "center"
  }
  return<>
    <article
      style={{
        overflow:"hidden",
        flex:1,
        minWidth:"300px",
        minHeight:"300px",
        width:width,
        height:height,
        boxSizing:"border-box",
        padding:margin,
        ...style
      }}
    >
      <div
        style={{
          width:"100%",
          height:"100%",
          display:"flex",
          backgroundImage:(imageID > -1) ? `url(${images[imageID]})` : '',
          flexDirection:"column",
          alignItems:dir2,
          textAlign:flip,
          justifyContent:flexPos,
          backgroundRepeat:"no-repeat",
          backgroundSize: "cover",
          padding:innerPadding,
          boxSizing:"border-box",
          gap:"1rem",
        }
      }>
        <h3
          style={{
            filter: useShadow ? "drop-shadow(0 0 .5rem hsla(0,0%,0%,0.5))" : "",
            color : titleColor
          }}
          className="cardTitle fw-bolder"
        >{title}</h3>

        {subTitle && <p
          style={{
            color : subTitleColor
          }}
          className="cardSubTitle"
        >{subTitle}</p>}

        { buttonText && <button
          style={{
            color : buttonColor,
            border: `2px solid ${buttonColor}`
          }}
          className="cardButton"
        > {buttonText} </button>}
      </div>
    </article>
  </>
}

export default Card