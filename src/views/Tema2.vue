<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Canales de comercio electrónico

    .fondo-decorativo.fondo-decorativo--tema2

      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          img(src='@/assets/curso/tema2/img_2.png')
        .bloque-texto-t__texto.col-12.col-lg-10.mb-0
          p.mb-0 Los canales de comercio electrónico constituyen los espacios digitales mediante los cuales las organizaciones exhiben, promocionan y comercializan productos y servicios. Cada canal posee características particulares relacionadas con el tipo de público, las formas de interacción, las funcionalidades disponibles y las estrategias de comunicación que pueden implementarse. Por esta razón, la selección del canal influye directamente en la manera como se organiza la información, se presentan los productos y se desarrolla la experiencia de compra.

      .tarjeta.color-primario-5.py-4.px-5(data-aos="zoom-in-right")
        .row.align-items-center
          .col-2.col-xl-1.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema2/img_3.svg', class="img-fluid")
          .col
            p.mb-0 En el mercadeo visual, la elección del canal no depende únicamente de la tecnología disponible, sino también de los objetivos comerciales, las características del producto y las necesidades del público objetivo. Comprender las particularidades de los diferentes canales permite estructurar propuestas de exhibición coherentes, optimizar la comunicación con los usuarios y fortalecer la presencia digital de las organizaciones.

      Separador

      #t_2_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.1 Concepto
      .mb-0

      .bloque-texto-g.color-primario-10.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-right")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img_4.png')})`}"
          role="img"
          aria-label="Mano sosteniendo un teléfono móvil con íconos de compra y conexiones digitales alrededor"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los canales de comercio electrónico son entornos digitales que facilitan la exhibición, promoción y comercialización de productos y servicios mediante diferentes plataformas tecnológicas. Además de permitir las transacciones comerciales, estos canales organizan la información, favorecen la interacción con los usuarios y contribuyen a fortalecer la presencia digital de las organizaciones.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Tipos de canales
    .mb-0

    .tarjeta.color-primario-5.py-4.px-5.mb-5(data-aos="zoom-in-right")
      .row.align-items-center
        .col-2.col-xl-1.d-lg-block.d-none
          figure
            img(src='@/assets/curso/tema2/img_3.svg', class="img-fluid")
        .col
          p.mb-0 Los tipos de canales de comercio electrónico corresponden a las distintas formas en que una organización puede estructurar su presencia comercial en entornos digitales. Esta diferenciación es relevante porque no todos los canales operan bajo la misma lógica de exhibición, interacción o circulación de la oferta, cada tipo de canal establece condiciones particulares para la presentación de productos, la relación con el usuario y la forma en que se gestiona el proceso comercial, razón por la cual su elección influye directamente en la estrategia de visualización y venta.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_5.png', class="img-fluid", alt="Computador portátil mostrando el catálogo de una tienda virtual en línea")
      .col-12.col-lg-7.mb-0
        .tarjeta.tarjeta--fondo-img-01.p-2.p-md-4.px-3.p-lg-4.p-xl-4.mb-0(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0.p-0
            SlyderA.py-2.px-5(tipo="a")
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Atención al cliente
                p.mb-0 Brinda orientación y acompañamiento antes, durante y después de la compra, resolviendo consultas, suministrando información oportuna y ofreciendo soluciones que fortalecen la confianza, la satisfacción y la relación con el cliente.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Administración de pedidos
                p.mb-0 Coordina el registro, procesamiento, preparación, despacho y entrega de los pedidos, garantizando información actualizada, cumplimiento de los tiempos establecidos y control de cada etapa del proceso logístico.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Soporte técnico
                p.mb-0 Atiende inconvenientes relacionados con la plataforma, los medios de pago, el acceso a la cuenta o el funcionamiento de los servicios digitales, asegurando una solución ágil que facilite la continuidad de la compra.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Gestión de reclamos
                p.mb-0 Recibe, analiza y resuelve las inconformidades presentadas por los clientes, aplicando procedimientos establecidos que permitan ofrecer respuestas oportunas, soluciones adecuadas y acciones para prevenir situaciones similares.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Seguimiento de solicitudes
                p.mb-0 Controla el estado de consultas, requerimientos, cambios, devoluciones y demás solicitudes, manteniendo comunicación permanente con el cliente hasta confirmar la atención y el cierre satisfactorio del proceso.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Mejora continua de la experiencia de compra
                p.mb-0 Evalúa resultados, recopila opiniones y analiza indicadores para identificar oportunidades de mejora que optimicen los procesos, incrementen la satisfacción del cliente y fortalezcan la calidad del servicio ofrecido.

    .tarjeta.color-acento-botones-5.py-4.px-5.mb-5(data-aos="zoom-in-right")
      .row.justify-content-around.align-items-center
        .col-3.col-lg-2.d-lg-block.d-none
          figure
            img(src="@/assets/curso/tema2/img_7.svg", class="img-fluid")
        .col
          .row.justify-content-between.align-items-center
            .col-12.col-lg.mb-4.mb-lg-0
              h4.mb-3 Página oficial de Herbalife latino
              p.mb-0 Lo invitamos a visitar el siguiente enlace en donde podrá apreciar un ejemplo de la compañía Herbalife, de cómo implementa la tienda en redes.
            .col-auto
              a.boton.color-acento-botones-70(href="https://www.instagram.com/herbalifelatino/" target="_blank")
                span Enlace web
                i.fas.fa-file-code

    .tarjeta.color-primario-10.py-3.px-4.mb-5(data-aos="zoom-in-right")
      p.mb-0.text-center Adicionalmente, le presentamos una tabla con los principales aportes de las tiendas en redes en el #[i visual marketing]:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 2.
          |  Aportes de la tienda en redes al #[i visual marketing]
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption
              p <b>Nota.</b> SENA, (2026).
            thead
              tr
                th.col-auto.col-lg-4 Aporte
                th.col-auto.col-lg-auto Descripción
            tbody
              tr.bg-table-01
                td.text-start
                  b Integración entre contenido y oferta
                td.text-start Permite exhibir productos dentro de publicaciones, historias y formatos que amplían su contexto comercial.
              tr.bg-table-02
                td.text-start
                  b Interacción inmediata con el usuario
                td.text-start Favorece la comunicación directa alrededor del producto, fortaleciendo consulta, aclaración y cercanía con la marca.
              tr.bg-table-01
                td.text-start
                  b Exhibición adaptada al formato social
                td.text-start Exige organizar la oferta según la lógica visual y de navegación propia de cada plataforma.
              tr.bg-table-02
                td.text-start
                  b Relación entre visibilidad y comercialización
                td.text-start Facilita que la exposición del producto se vincule con dinámicas de alcance, interés e intención de compra.

    .row.justify-content-center.mb-3
      .col-12.col-lg-8
        .tarjeta.tarjeta--fondo-img-02.p-5.mb-0(data-aos="zoom-in-right")
          .tarjeta--fondo-img-02__img.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema2/img_8.png')
          .row.align-items-center
            .col-lg-5.d-lg-block.d-none
            .col-12.col-lg-7
              h4.mb-3 Pregunta de aplicación
              p.mb-0 ¿Cómo cambia la estrategia de exhibición de un producto cuando se presenta en una tienda virtual propia, en un #[i marketplace] y en una tienda en redes?

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3 Criterios para la selección del canal

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema2/img_10.png')
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 Los criterios de los canales de comercio electrónico corresponden a los elementos de análisis que permiten valorar su pertinencia para la exhibición y comercialización de productos en entornos digitales. No se trata únicamente de identificar dónde puede publicarse una oferta, sino de comprender en qué condiciones conviene hacerlo, qué exigencias impone el canal y cómo estas afectan la organización del catálogo, la visibilidad del producto y la interacción con el usuario. Por ello, los criterios funcionan como una guía para la toma de decisiones comerciales y visuales.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 3.
          |  Criterios de los canales de comercio electrónico y sus características
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption
              p <b>Nota.</b> SENA, (2026).
            thead
              tr
                th.col-auto.col-lg-4 Criterio
                th.col-auto.col-lg-auto Características
            tbody
              tr.bg-table-01
                td.text-start
                  b Coherencia entre el canal y el tipo de producto
                td.text-start La selección del canal debe responder a las características del producto y a la forma en que requiere ser presentado. Algunos productos demandan mayor información, recursos visuales o interacción con el usuario. Elegir un canal coherente favorece una exhibición clara y facilita la decisión de compra.
              tr.bg-table-02
                td.text-start
                  b Condiciones de exhibición y organización de la oferta
                td.text-start El canal debe permitir organizar los productos mediante categorías, clasificaciones y recorridos de navegación que faciliten su localización. También es importante que ofrezca suficiente control sobre la presentación de la información y la estructura del catálogo para fortalecer la experiencia del usuario.
              tr.bg-table-01
                td.text-start
                  b Interacción y la experiencia del usuario dentro del canal
                td.text-start La elección del canal debe considerar la facilidad con la que los usuarios consultan productos, navegan por el catálogo, comparan alternativas e interactúan con la organización. Una experiencia de navegación clara, ágil y organizada favorece el acceso a la información y fortalece el proceso comercial.

    .fondo-decorativo.fondo-decorativo--tema2-2

      .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-5.py-4.px-5.mb-5(data-aos="zoom-in-right")
        .row.align-items-center
          .col-2.col-lg-2.d-lg-block.d-none
            figure
              img(src='@/assets/curso/tema2/img_12.svg', class="img-fluid")
          .col
            h5.etiqueta.color-acento-botones.mb-2 Ejemplo aplicado
            p.mb-0 Una empresa dedicada a la comercialización de artículos deportivos desea ampliar sus ventas mediante canales digitales. Después de analizar las características de sus productos y el comportamiento de sus clientes, decide implementar una tienda virtual para administrar su catálogo, complementar la estrategia con un #[i marketplace] para aumentar la visibilidad y utilizar una tienda en redes sociales para fortalecer la interacción con los usuarios. La combinación de estos canales permite ampliar el alcance de la oferta y responder a diferentes necesidades comerciales.
          .col-2.col-xl-1.d-lg-block.d-none
            figure.mt-4
              img(src='@/assets/curso/tema1/img_10.svg')

      .tarjeta.color-secundario-5.py-3.px-4.mb-5(data-aos="zoom-in-right")
        p.mb-0.text-center A continuación, lo invitamos a consultar este pódcast para ampliar los conceptos para una eficiente y efectiva gestión de canales:

      .row.justify-content-center.mb-5
        .col-12.col-lg-8
          .tarjeta.tarjeta--fondo-img-03.p-4.p-lg-0(data-aos="zoom-in-right")
            .row.align-items-center
              .col-12.col-lg-4.mb-3.mb-lg-0.pb-0.pt-4.ps-5.d-lg-block.d-none
                figure
                  img(src='@/assets/curso/tema2/img_14.png', class="img-fluid", alt="Mujer sonriente usando una tableta frente a un dispositivo de escaneo, con íconos de idea y objetivo")
              .col-12.col-lg-8.pe-3.pe-lg-5
                TarjetaAudio.color-secundario.mb-0(
                  texto="Gestión estratégica de canales"
                  :audio="require_src('@/assets/curso/podcast/podcast_1.mp3')"
                  tiempo
                )

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_15.png', class="img-fluid", alt="Mano tocando la pantalla de una tableta con íconos holográficos de carritos de compra y aplicaciones, sobre un mosaico de íconos de apps")
        .col-12.col-lg-8
          p.mb-4(data-aos="zoom-in-right") Los canales de comercio electrónico constituyen el medio mediante el cual las organizaciones presentan su oferta y establecen relaciones con los usuarios en entornos digitales. La selección del canal debe responder a las características del producto, los objetivos comerciales y las necesidades del público objetivo, garantizando que la exhibición favorezca la navegación, la consulta de información y la experiencia de compra.
          .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-2.py-4.px-5(data-aos="zoom-in-right")
            p.mb-0 Comprender las particularidades de cada canal permite tomar decisiones más acertadas sobre la forma de organizar los contenidos y presentar los productos. Estos fundamentos servirán de base para abordar, en el siguiente capítulo, las estrategias de #[i visual marketing] orientadas a fortalecer la comunicación visual y la identidad de marca en los diferentes entornos digitales.

    .row.justify-content-center.mb-0
      .col-12.col-lg-8
        .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-5.py-4.px-5(data-aos="zoom-in-right")
          .row.align-items-center
            .col-8.col-lg-3.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema1/img_16.svg', class="img-fluid", alt="Icono de una ventana de navegador con gráfico de barras y una silueta decorativa sobre fondo circular amarillo")
            .col-12.col-lg-8
              h5.etiqueta.color-acento-botones.mb-2 Frase de reflexión
              p.mb-0 Elegir un canal comercial también es un acto de responsabilidad: la integridad no solo se refleja en lo que se vende, sino en la decisión consciente de ofrecer cada producto en el entorno donde pueda ser presentado con claridad, respeto por el usuario y coherencia con la promesa de valor.
            .col-8.col-lg-1.d-lg-block.d-none
              figure.mt-5
                img(src='@/assets/curso/tema1/img_10.svg')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
