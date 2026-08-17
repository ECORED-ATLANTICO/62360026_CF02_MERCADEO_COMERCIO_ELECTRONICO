<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid", alt="Persona interactuando con una pantalla táctil digital que muestra la ficha de un producto en una tienda de ropa")
      .col-12.col-lg-8
        p.mb-4(data-aos="zoom-in-right") La transformación de los entornos digitales ha modificado la forma en que las organizaciones presentan, promocionan y comercializan productos y servicios. En este contexto, el mercadeo visual aplicado al comercio electrónico adquiere un papel estratégico al integrar elementos de comunicación, diseño, organización de contenidos y tecnología que favorecen la exhibición de productos y fortalecen la experiencia de los usuarios durante su proceso de búsqueda y compra.
        .cajon.color-acento-botones.py-4.px-5(data-aos="zoom-in-right")
          p.mb-0 La exhibición digital no consiste únicamente en publicar productos dentro de un canal de venta. Requiere seleccionar categorías adecuadas, estructurar la información de manera organizada, emplear recursos visuales acordes con las características de la oferta y considerar las particularidades de los diferentes canales de comercio electrónico. Asimismo, implica aplicar criterios relacionados con la identidad de marca, la comunicación visual, la producción de contenidos audiovisuales y el cumplimiento de las disposiciones legales y comerciales que regulan las actividades desarrolladas en entornos digitales.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-4(data-aos="zoom-in-right") Este componente formativo presenta los principales fundamentos que orientan la planificación y organización de la exhibición digital de productos. En primer lugar, aborda los criterios para clasificar productos y definir sus requerimientos de exhibición; posteriormente, analiza los canales de comercio electrónico y los elementos del #[i visual marketing] que fortalecen la comunicación con los usuarios. De igual forma, desarrolla la importancia de los recursos audiovisuales, las estrategias de publicidad digital, el marco legal y las políticas comerciales que respaldan las actividades de comercialización en internet. Finalmente, integra estos conocimientos en la estructuración de propuestas de exhibición acordes con las características del producto, el canal de venta y las necesidades del público objetivo.
        .tarjeta.color-primario-10.py-4.px-5(data-aos="zoom-in-right")
          p.mb-0 La comprensión de estos contenidos permitirá al aprendiz reconocer los elementos que intervienen en la construcción de experiencias de exhibición digital organizadas, coherentes y orientadas al fortalecimiento de la presencia comercial de las organizaciones en los diferentes ecosistemas digitales.
      .col-8.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid", alt="Dos personas conversando frente a una pantalla táctil digital con la ficha de un producto en una tienda")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
