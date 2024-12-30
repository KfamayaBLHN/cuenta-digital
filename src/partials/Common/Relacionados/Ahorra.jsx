import { Card, CardImage, CardBody, CardFooter } from "@/partials/Common/Cards"
import Img from '@/partials/Common/Images'
// import Link from "next/link"
// import links from '@/config/links.json';
// const siteurl = process.env.NEXT_PUBLIC_SITEURL;
export default props => {
  return <Card>
    <Img name="AhorraSvg" className="card-img" />
    <CardBody>
      <h3 className="fs-5 pb-1 pt-2">
      Ahorra
      </h3>
      <p>
      hasta $4,000
      </p>
    </CardBody>
  </Card>
}