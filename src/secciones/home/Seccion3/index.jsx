import FootageS4 from "./FootageS4"
import Images from "@/components/Images"

export default props => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;

  const sources = {
    phone: {
      "src": "/imagenes/pics/IMG_Secondary_Section03_TD_Phone_CD_Desktop_BLHN_01@2x.webp",
      "src_2x": "/imagenes/pics/IMG_Secondary_Section03_TD_Phone_CD_Desktop_BLHN_01@2x.webp",
      "alt": "",
      "title": "",
      "w": 571,
      "h": 677
    }
  }
  
  return <section className="section-3 py-xl-0" id="seccionbancanet">
    <div className="container-fluid text-box pb-xl-0 pt-5">
      <div className="row align-items-md-center">
        <div className="col-12 col-md-6 col-xl-6 text-center text-md-start col-n1 text-container textdesigns">
          <h2 className="h2">La única Cuenta en darte una Tarjeta Virtual</h2>
          <p className="pb-5 pt-1">
          Mientras preparamos tu Tarjeta de Débito Física,
          recibirás al instante tu Tarjeta Virtual para comprar en línea
          </p>
          <a href='https://www.lafise.com/blh/banca-personal/cuenta-digital/abre-tu-cuenta-digital' className="btnsection3">¡Descúbrela aquí!</a>
        </div>
        <div className="col-12 col-md-5 col-xl-6 text-center pt-3 pt-md-0 img-container imag">
          <Images className="img-section-3" source={sources} name="phone"/>
        </div>
      </div>
    </div>
  </section>
}