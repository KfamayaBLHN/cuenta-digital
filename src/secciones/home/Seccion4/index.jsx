import Images from "@/components/Images"

export default props => {

  const sources = {
    ChicoSeccion4: {
      "src": "/imagenes/pics/IMG-secondary-BLH-Section4_CD__02@2x.png",
      "src_2x": "/imagenes/pics/IMG-secondary-BLH-Section4_CD__02@2x.png",
      "alt": "",
      "title": "",
      "w": 500,
      "h": 500
    }
  }
  return <section className="section-4 pt-4" id="requisitos">
    <article className="container-fluid">
      <div className="row align-items-end align-items-xl-center flex-column-reverse flex-md-row">
        <div className="col-12 col-md-5 text-center imag">
          <Images className="img-section-4" source={sources} name="ChicoSeccion4"/>
        </div>
        <div className="col-12 col-md-6">
          <h2 className="h2">Requisitos para abrir tu Cuenta Digital</h2>
          <ul className="list-unstyled list-bullet-check mb-0">
            <li>Ser mayor de 18 años</li>
            <li>Nacionalidad hondureña</li>
            <li>Documento de identidad vigente y a mano</li>
            <li>Apertura desde L100</li>
          </ul>
        </div>
      </div>
    </article>
  </section>
}