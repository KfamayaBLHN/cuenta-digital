"use client"
import { useEffect } from 'react'
import Breadcrumbs from '@/secciones/home/Breadcrumbs';
import Hero from '@/secciones/home/Hero';
import Hero2 from '@/secciones/home/Hero2';
import Seccion2 from '@/secciones/home/Seccion2'
import Seccion3 from '@/secciones/home/Seccion3'
import Seccion4 from '@/secciones/home/Seccion4'
import Seccion5 from '@/secciones/home/Seccion5'
import Inview from '@/libs/inview'
import Seccion3N from '@/secciones/home/Seccion3N';
const inview = new Inview();

export default function Home() {

  useEffect(()=> {
    inview.start([
      {
        node: '#seccionbancanet',
        pos: -7000
      }
    ]);
  }, []);
  return (
    <>
      <main>
        <Hero />
        {/* <Hero2 /> */}
        <Breadcrumbs />
        <Seccion2 />
        <Seccion3 />
        {/* <Seccion3N /> */}
        <Seccion4 />
        <Seccion5 />
      </main>
       
    </>
  )
}
