
function Reviews({
  props
}){
  return(<>
    <section
      className="py-5  text-white d-flex flex-column gap-2 justify-content-center align-items-center"
    >
      <h3
        className="fs-3 text-blue fw-bold"
      >
        ILS EN PARLENT
      </h3>
      <div
        className="w-100"
        style={{
          backgroundColor : "hsl(0,0%,90%)"
        }}
      >
        <div className="w-100 px-5 m-auto d-flex flex-wrap gap-5 justify-content-center align-content-center py-4">
          <div
            style={{
              width:"20%",
              minWidth:"20rem",
              position:"relative",
              display:"flex",
              flexDirection:"column",
              justifyContent:"flex-start"
            }}
          >
            <h3
              className="fs-5 w-100 text-start text-secondary fw-bold"
            >
              KEVIN GIRARD
            </h3>
            <img
              style={{
                position:"absolute",
                left:0,
                top:'2rem'
              }}
              src={require("./Ico/aes06_icone_etoile_bornes_de_recharge_alpes_maritimes.png")}
              alt=""
            />
            <p
              className="fs-5 pt-4 text-secondary text-start"
            >
            Je tiens à remercier Fabien qui
            m'a accompagné pour une
            installation neuve pour la
            construction de ma maison et qui
            es d'excellents conseil et un
            artisan qui a ces s'adapter en
            fonction des aléas des chantier
            et qui es présent même en cas
            de dépannage n'hésitez pas à
            faire appel à ses services.
            </p>
          </div>

          <div
            style={{
              width:"20%",
              minWidth:"20rem",
              position:"relative",
            }}
          >
            <h3
              className="fs-5 w-100 text-start text-secondary fw-bold"
            >
              CHLOE WILKINS
            </h3>
            <img
              style={{
                position:"absolute",
                left:0
              }}
              src={require("./Ico/aes06_icone_etoile_bornes_de_recharge_alpes_maritimes.png")}
              alt=""
            />
            <p
              className="fs-5 pt-4 text-secondary text-start"
            >
            Nous avons rénové notre maison
            et avons dû tout recâbler parce
            que nous voulions que tout soit
            neuf et conforme aux exigences
            du code. Fabian est très
            professionnel et fait un travail
            impeccable. Nous le
            recommandons vivement ! :)
            </p>
          </div>
          <div
            style={{
              width:"20%",
              minWidth:"20rem",
              position:"relative",
            }}
          >
            <h3
              className="fs-5 w-100 text-start text-secondary fw-bold"
            >
              RICHARD BERRO
            </h3>
            <img
              style={{
                position:"absolute",
                left:0
              }}
              src={require("./Ico/aes06_icone_etoile_bornes_de_recharge_alpes_maritimes.png")}
              alt=""
            />
            <p
              className="fs-5 pt-4 text-secondary text-start"
            >
            Fabien a réalisé les travaux de
            rénovation complète de
            l’électricité de notre
            appartement avec grand
            professionnalisme et en
            respectant les délais. Il est
            d’excellent conseil en amont et
            sait s’entourer d’artisans de
            qualité avec qui il forme une
            équipe très performante.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default Reviews