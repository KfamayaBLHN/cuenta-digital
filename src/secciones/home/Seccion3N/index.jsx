import Images from "@/components/Images"

export default props => {

  const sources = {
    phone: {
      "src": "/imagenes/pics/IMG-secondary-BLH-Section4_CD__02@2x.png",
      "src_2x": "/imagenes/pics/IMG-secondary-BLH-Section4_CD__02@2x.png",
      "alt": "",
      "title": "",
      "w": 571,
      "h": 677
    }
  }
  return <section className="section-3N pt-4" id="requisitos">
    <article className="container-fluid">
      <div className="row align-items-end align-items-xl-center flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6">
          <h2 className="h2">La única Cuenta en darte una Tarjeta Virtual</h2>
          <p className="pb-5 pt-1">
            Mientras preparamos tu Tarjeta de Débito Física, 
            recibirás al instante tu Tarjeta Virtual para comprar en línea
          </p>
          <a href='https://www.lafise.com/blh/banca-personal/cuenta-digital/abre-tu-cuenta-digital' className="btnsection3">¡Descúbrela aquí!</a>
        </div>
        <div className="col-12 col-md-5 text-center">
          <Images className="img-section-3N" source={sources} name="phone"/>
        </div>
      </div>
    </article>
  </section>
}