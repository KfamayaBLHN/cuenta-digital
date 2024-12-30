import React from "react";
import Accordion from "@/components/Accordion"

export default props => {
  return <section className="section-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-md-center">
          <h2 className="h2 pb-5">¿Tienes dudas? Aquí te ayudamos</h2>
        </div>
      </div>
        
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10">
        <Accordion>

            <Accordion.Item class="title" label="¿Cuáles son las restricciones de la  Cuenta Digital?" index={0}>
            <p>Debes ser mayor de edad y puedes ahorrar un límite de $4,000 o su equivalente en lempiras, 
              si necesitas mayor capacidad puedes visitar nuestras sucursales y solicitar un producto que 
              cubra tu necesidad. </p>
            </Accordion.Item>

            <Accordion.Item label="¿La cuenta incluye una Tarjeta de Débito?" index={1}>
              <p>Así es, puedes adquirir una Tarjeta de Débito VISA Internacional sin ningún costo. 
                Además, si realizas el primer depósito, obtendrás de inmediato una Tarjeta Virtual 
                para tus compras en línea. </p>
            </Accordion.Item>

            <Accordion.Item label="¿Me envían la Tarjeta de Débito a domicilio?" index={2}>
              <p>¡Por supuesto! Tu tarjeta de Débito será entregada en tu domicilio, solo tienes que indicarnos 
                en el formulario tu dirección exacta. </p>
            </Accordion.Item>

            <Accordion.Item label="¿Cuál es el monto de apertura de la Cuenta Digital?" index={3}>
              <p>La Cuenta Digital puedes aperturarla desde L 100 o más</p>
            </Accordion.Item>

            <Accordion.Item label="¿Puedo hacer transferencia a otros bancos?" index={4}>
              <p>Sí, puedes hacer transferencias a cualquier banco local por ACH o a cuentas LAFISE.</p>
            </Accordion.Item>
            
          </Accordion>
        </div>
      </div>
    </div>
    </div>
  </section>
}