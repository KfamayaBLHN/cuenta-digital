import Images from "@/components/Images";

export default props => {

  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  const sources = {
    tarjeta: {
      "src": "/imagenes/pics/tarjeta-debito@1x.webp",
      "src_2x": "/imagenes/pics/tarjeta-debito@2x.webp",
      "alt": "",
      "title": "",
      "w": 219,
      "h": 294
    }
  }

  return <div className="footage-s4">
    <Images className="tarjeta animated-item n2" siteUrl={site_url} source={sources} name="tarjeta" />
    <span className="phone"></span>
    <span className="coin-n1 animated-item n3"></span>
    <span className="coin-n2 animated-item n4"></span>
  </div>
}