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

  return <div className="tarjeta-wrapper">
    <div className="tarjeta-container">
      <Images className="tarjeta" siteUrl={site_url} source={sources} name="tarjeta" />
    </div>
  </div>
}