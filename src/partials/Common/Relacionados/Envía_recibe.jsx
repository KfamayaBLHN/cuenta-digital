import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images';

export default props => {
  return <Card>
    <Img name="Envía_recibeSvg" className="card-img"/>
    <CardBody>
      <h3 className="fs-5 pb-1 pt-2">
      Envía y recibe
      </h3>
      <p>
      dinero 24/7
      </p>
    </CardBody>
  </Card>
}