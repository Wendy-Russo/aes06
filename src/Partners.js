
function Partners({
  props
}){
  return(<>
    <section
      className="pt-5"
    >
      <h3
        className="fs-3 text-blue fw-bolder"
      >
        NOS PARTENAIRES
      </h3>
      <div
        className="d-flex flex-row justify-content-between align-items-center overflow-hidden"
        style={{
          backgroundColor:"hsl(0,0%,90%)",
          height:"4rem"
        }}
      >
        <img
          className="partner-logo"
          src={require("./logo/aes06_logo_antos_bornes_de_recharge_alpes_maritimes.png")}
          alt=""
        />
        <img
          className="partner-logo"
          src={require("./logo/aes06_logo_borne+_bornes_de_recharge_alpes_maritimes.png")}
          alt=""
        />
        <img
          className="partner-logo"
          src={require("./logo/aes06_logo_cahors_bornes_de_recharge_alpes_maritimes.png")}
          alt=""
        />
        <img
          className="partner-logo"
          src={require("./logo/aes06_logo_legrand_bornes_de_recharge_alpes_maritimes.png")}
          alt=""
        />
              <img
          className="partner-logo"
          src={require("./logo/aes06_logo_antos_bornes_de_recharge_alpes_maritimes.png")}
          alt=""
        />
        <img
          className="partner-logo"
          src={require("./logo/aes06_logo_borne+_bornes_de_recharge_alpes_maritimes.png")}
          alt=""
        />
        <img
          className="partner-logo"
          src={require("./logo/aes06_logo_cahors_bornes_de_recharge_alpes_maritimes.png")}
          alt=""
        />
        <img
          className="partner-logo"
          src={require("./logo/aes06_logo_legrand_bornes_de_recharge_alpes_maritimes.png")}
          alt=""
        />
      </div>
    </section>
  </>)
}

export default Partners