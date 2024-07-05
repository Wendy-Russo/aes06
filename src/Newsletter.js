
function Newsletter({
  props
}){
  return(<>
    <section
      className="py-5 bg-dblue text-white d-flex flex-column gap-2 justify-content-center align-items-center"
    >
      <h3
        className="fs-3 text-white fw-bold"
      >
        ABONEZ-VOUS A LA NEWSLETTER
      </h3>
      <p
        className="fw-semibold"
      >
      Devenez incollable sur la recharge électrique !
      </p>
      <p
        className=""
      >
        Inscrivez-vous à notre newsletter gratuite.
      </p>
      <input
        placeholder="VOTRE EMAIL ..."
        className="fs-5 my-3"
        style={{
          backgroundColor:"transparent",
          border:"2px solid white",
          borderRadius:"2rem",
          padding:"0.5rem 1rem",
          color:"white",
          width:"50%"
        }}
      >
      </input>
      <div>
        <p
          className=""
        >
          Retrouver nous sur les réseaux !
        </p>
        <img
          src={require("./Ico/aes06_icone_facebook_bornes_de_recharge_alpes_maritimes.png")}
          className=""
          alt=""
          style={{
            height:"2rem"
          }}
        />
        <img
          src={require("./Ico/aes06_icone_instagram_big_bornes_de_recharge_alpes_maritimes.png")}
          className=""
          alt=""
          style={{
            height:"2rem"
          }}
        />
        <img
          src={require("./Ico/aes06_icone_linkedin_bornes_de_recharge_alpes_maritimes.png")}
          className=""
          alt=""
          style={{
            height:"2rem"
          }}
        />
      </div>
    </section>
  </>)
}

export default Newsletter