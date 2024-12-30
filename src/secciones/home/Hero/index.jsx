import React from "react";
import Hero from "@/components/Hero";

const Banner = () => {
  const site_url = process.env.NEXT_PUBLIC_SITE_URL;
  console.log(site_url);
  return (
    <Hero className="hero-home" siterl={site_url}>
      <h1 className="text-white">
        Abre tu Cuenta Digital
        donde quiera que estés
      </h1>
      <div className="d-none d-md-block">
        <p className="h4 text-white pt-1 fw-normal">
          Sin complicaciones y sin tener que ir al banco,&nbsp;<br/>
          desde tu celular
        </p>
        <a href='https://www.lafise.com/blh/banca-personal/cuenta-digital/abre-tu-cuenta-digital' className="btn btn-light btn-lg mt-3">¡Quiero mi cuenta!</a>
      </div>
      <div className="d-sm-block d-md-none">
        <p className="h4 text-white pt-1 fw-normal">
          Sin complicaciones y sin tener que ir al banco, desde tu celular 
        </p>
        <a href='https://www.lafise.com/blh/banca-personal/cuenta-digital/abre-tu-cuenta-digital' className="btn btn-light btn-lg mt-3">¡Quiero mi cuenta!</a>
      </div>
    </Hero>
  );
};

export default Banner;
