import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Administra from './Administra';
import Envía_recibe from './Envía_recibe';
import Ahorra from './Ahorra';
import Acumula from './Acumula';
import Recibe from './Recibe';
import HazTusCompras from './HazTusCompras';


const Relacionados = (props) => {
  const backgroundColor = "bg-gray-1";
  return (
    <section className={`py-5 overflow-hidden ${backgroundColor}`}>
      <div className="container-fluid">{props.children}</div>
    </section>
  );
};


const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 576 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1
  }
};

const Item = props => {
  return <div className="carousel-container h-100">
    <div className="h-100 px-2">
      {props.children}
    </div>
  </div>
}

const Cards = props => {
  return <div className="card-groud-n3">
    <article >
      {
        props.type == 'cards' && <>
          <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={3000} showDots={true}>
            <Item>
              <Administra />
            </Item>
            <Item>
              <Ahorra />
            </Item>
            <Item>
              <Envía_recibe />
            </Item>
            <Item>
              <Recibe />
            </Item>
            <Item>
              <HazTusCompras />
            </Item>
            <Item>
              <Acumula />
            </Item>
          </Carousel>
        </>
      }
    </article>
  </div>
}

const Title = props => {
  return <div className="row">
    <div className="col-12 text-center pb-3">
      <h2 className="h2">{props.children}</h2>
    </div>
  </div>
}

Relacionados.Title = Title;
Relacionados.Cards = Cards;

export default Relacionados