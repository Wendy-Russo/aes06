
function Map({
  props
}){
  return(<>
    <section
      className="d-flex flex-column color-blue position-relative  "
      style={{
        height:"28rem"
      }}
    >
      <iframe
        title='map'
        style={{
          position:"absolute",
          left:"10%",
          top:0,
          border:0,
          height:"100%",
          width:"60%",
          filter:"saturate(0.6)"
        }}
        src={`
          https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11540.326002618267!2d7.223521!3d43.688069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd1cae0214469%3A0x50b53afd5335b863!2sAES06!5e0!3m2!1sen!2sfr!4v1720145777500!5m2!1sen!2sfr`}
        loading={"lazy"}
        referrerpolicy={"no-referrer-when-downgrade"}
      />
      <div
        className="w-100  d-flex justify-content-end align-center"
      >
        <div
          style={{
            width:"30%"
          }}
          className="text-start p-3 fw-bold"
        >
        <h3
          className="text-blue fw-bolder"
        >
          AES06 <br/>
          & AESFLASH
        </h3>
        <p
          className="text-lblue border-top border-3 "
        >
          A 10MIN DE L'AUTOROUTE
        </p>
        </div>
      </div>
      <div
        className="w-100 text-white d-flex justify-content-end align-center"
        style={{
          backgroundColor:"#325A70",
        }}
      >
        <div
          style={{
            width:"30%"
          }}
          className="text-start p-3"
        >
          <h4
            className="fs-6"
          >
              ADRESSE:
          </h4>
          <p
            className="fs-6"
          >
            185 Av. de Fabron, 06200 Nice
          </p>
          <h4
            className="fs-6 mt-3"
          >
            HORAIRES:
          </h4>
          <p
            className="fs-6"
          >
            Du Lundi au Vendredi <br/>
            8h - 19h  <br/>
            Samedi<br/>
            8h - 18h<br/>
          </p>
        </div>
      </div>

    </section>
  </>)
}

export default Map