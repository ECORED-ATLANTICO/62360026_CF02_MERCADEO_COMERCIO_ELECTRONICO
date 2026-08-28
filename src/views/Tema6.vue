<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Exhibición digital y propuesta de exhibición

    .bloque-texto-t.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema6/img_1.png', alt="Maniquíes con prendas de vestir junto a bolsas de compras y pantallas con fotografías de productos")
      .bloque-texto-t__texto.col-12.col-lg-10.mb-0
        p.mb-0 La exhibición digital constituye la etapa en la que convergen los diferentes elementos del comercio electrónico para presentar productos y servicios de manera organizada, atractiva y funcional dentro de los canales digitales. Su desarrollo integra aspectos relacionados con la organización de la oferta, el mercadeo visual, los recursos audiovisuales, la comunicación comercial y las condiciones técnicas que facilitan la interacción entre las organizaciones y los usuarios.

    .row.align-items-center.mb-3
      .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_2.png', class="img-fluid", alt="Carrito de compras con bolsas y cajas sobre un computador portátil que muestra el catálogo de una tienda de ropa")
      .col-12.col-lg-8
        p.mb-3(data-aos="zoom-in-right") Una exhibición digital efectiva no depende únicamente de la calidad de los recursos gráficos utilizados, sino también de la forma en que se estructuran las categorías, se presenta la información, se articulan los contenidos y se facilita el recorrido del usuario dentro del canal de comercio electrónico. Estos elementos contribuyen a fortalecer la experiencia de navegación, favorecer la comprensión de la oferta y apoyar el proceso de decisión de compra.
        .tarjeta.tarjeta--gris.py-4.px-5(data-aos="zoom-in-right")
          p.mb-0 En este capítulo se presentan los principales aspectos relacionados con la exhibición digital y la elaboración de una propuesta de exhibición, abordando sus tipos, las herramientas y recursos que apoyan su desarrollo, las posibilidades de representación digital de los productos y los elementos necesarios para estructurar una propuesta acorde con los objetivos comerciales de la organización.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Concepto y tipos de exhibición digital
    .mb-0

    .row.align-items-center.mb-4
      .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_3.png', class="img-fluid", alt="Computador portátil con una pantalla de tienda virtual y una lupa sobre un ícono de carrito de compras")
      .col-12.col-lg-8
        p.mb-3(data-aos="zoom-in-right") La exhibición digital corresponde al proceso de organizar, presentar y comunicar productos o servicios dentro de los canales de comercio electrónico mediante recursos visuales, información comercial y elementos de navegación que facilitan la interacción con los usuarios. Su propósito consiste en estructurar la oferta de manera clara y coherente para favorecer la localización de los productos, fortalecer la experiencia de navegación y apoyar la toma de decisiones durante el proceso de compra.
        .tarjeta.tarjeta--gris.py-4.px-5(data-aos="zoom-in-right")
          p.mb-0 En el comercio electrónico, la exhibición digital integra diferentes elementos como la organización por categorías, las fichas de producto, los recursos audiovisuales, las estrategias de comunicación y la identidad visual de la marca. La articulación de estos componentes permite construir una experiencia consistente, donde la información, la presentación de los productos y los recorridos de navegación responden a las necesidades del usuario y a los objetivos comerciales de la organización.

    .tarjeta.color-primario-5.py-4.px-5.mb-5(data-aos="zoom-in-right")
      .row.align-items-center
        .col
          p.mb-0 La forma en que se desarrolla la exhibición puede variar según el tipo de producto, el canal utilizado y la estrategia comercial implementada. Por esta razón, es posible identificar diferentes tipos de exhibición digital, cada uno orientado a responder a necesidades específicas de presentación, organización o promoción de la oferta. Revisaremos, a continuación, algunos tipos de exhibición digital:
        .col-2.col-xl-1.d-lg-block.d-none
          figure
            img(src='@/assets/curso/tema6/img_4.svg', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-0
        .tarjeta.tarjeta--fondo-img-01.p-2.p-md-4.px-3.p-lg-4.p-xl-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0.p-0
            SlyderA.py-2.px-5(tipo="a")
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Exhibición por categorías
                p.mb-0 Organiza los productos en grupos relacionados según sus características, función o línea comercial, facilitando la localización de la oferta. Aplicación: adecuada para tiendas virtuales con catálogos amplios y diversidad de referencias.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Exhibición por campañas
                p.mb-0 Presenta productos asociados a promociones, temporadas, lanzamientos o eventos comerciales con el propósito de destacar una oferta específica. Aplicación: se utiliza para fortalecer la visibilidad de campañas temporales o estrategias promocionales.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Exhibición por experiencias
                p.mb-0 Relaciona los productos con escenarios de uso, estilos de vida o soluciones que permiten comprender mejor sus beneficios y aplicaciones. Aplicación: recomendada para productos cuya decisión de compra depende del contexto o de la experiencia de uso.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Exhibición personalizada
                p.mb-0 Organiza la oferta según intereses, preferencias o comportamientos de los usuarios para ofrecer una experiencia más pertinente. Aplicación: frecuente en plataformas que utilizan información de navegación para recomendar productos relacionados.
      .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_5.png', class="img-fluid", alt="Mano tocando una tableta con prendas de vestir holográficas y etiquetas de precio")

    .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-5.py-4.px-5.mb-3(data-aos="zoom-in-right")
      .row.align-items-center
        .col-2.col-lg-2.d-lg-block.d-none
          figure
            img(src='@/assets/curso/tema2/img_12.svg', class="img-fluid")
        .col
          h5.etiqueta.color-acento-botones.mb-2 Ejemplo aplicado
          p.mb-0 Una empresa dedicada a la comercialización de artículos para el hogar organizó su tienda virtual mediante categorías permanentes, incorporó campañas estacionales para destacar productos de temporada y creó espacios ambientados para mostrar diferentes estilos de decoración. Esta organización permitió facilitar la búsqueda de productos y fortalecer la experiencia de navegación de los usuarios.
        .col-2.col-xl-1.d-lg-block.d-none
          figure.mt-4
            img(src='@/assets/curso/tema1/img_10.svg')

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Herramientas y arquitectura de la exhibición
    .mb-0

    .bloque-texto-g.color-primario-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/img_6.png')})`}"
        role="img"
        aria-label="Exhibidores de tienda con prendas y accesorios junto a pantallas digitales y etiquetas de precio"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las herramientas para la exhibición digital facilitan la organización, administración y actualización de los productos, categorías y recursos utilizados dentro de un canal de comercio electrónico. Su utilización permite gestionar la información comercial, incorporar contenidos visuales y audiovisuales, mantener actualizados los catálogos y fortalecer la interacción entre los usuarios y la oferta presentada por la organización.

    .row.align-items-center.mb-4
      .col-12.col-lg-7.order-2.order-lg-1
        p.mb-3(data-aos="zoom-in-right") La efectividad de estas herramientas depende de una adecuada arquitectura de la exhibición, entendida como la forma en que se organizan las categorías, subcategorías, fichas de producto, recursos complementarios y recorridos de navegación dentro del canal digital. Una arquitectura bien estructurada facilita la localización de los productos, mejora la experiencia del usuario y contribuye a que la información se presente de manera clara, coherente y accesible.
        .tarjeta.tarjeta--gris.py-4.px-5(data-aos="zoom-in-right")
          p.mb-0 La organización de la exhibición debe responder a criterios de jerarquía, usabilidad y coherencia visual. Esto implica que los usuarios puedan identificar fácilmente las categorías disponibles, acceder a la información de los productos, relacionar contenidos complementarios y desplazarse entre las diferentes secciones del canal sin dificultades. De esta manera, la arquitectura de la exhibición se convierte en un elemento estratégico para fortalecer la experiencia de compra y apoyar el cumplimiento de los objetivos comerciales.
      .col-12.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_7.png', class="img-fluid", alt="Pantalla digital de una tienda mostrando la ficha de un producto con opciones de talla y color")

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 6.
          |  Herramientas de exhibición y su integración con la arquitectura digital
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption
              p <b>Nota.</b> SENA, (2026).
            thead
              tr
                th.col-auto.col-lg-3 Herramienta de exhibición
                th.col-auto.col-lg-3 Descripción
                th.col-auto.col-lg-3 Relación con la arquitectura de la exhibición
                th.col-auto.col-lg-auto Ejemplo aplicado
            tbody
              tr.bg-table-01
                td.text-start
                  b Recursos de presentación del producto
                td.text-start Permiten presentar cada referencia mediante imágenes, videos, especificaciones y demás contenidos incorporados en la ficha de producto para facilitar su comprensión.
                td.text-start Se integran en las fichas de producto para ampliar la información disponible y fortalecer la experiencia de consulta dentro del canal.
                td.text-start Una tienda virtual de sillas ergonómicas incorpora fotografías desde varios ángulos, acercamientos al soporte lumbar y especificaciones técnicas para facilitar la evaluación del producto.
              tr.bg-table-02
                td.text-start
                  b Recursos de organización del catálogo
                td.text-start Facilitan la clasificación de los productos mediante categorías, subcategorías y agrupaciones que estructuran la oferta comercial.
                td.text-start Constituyen la base de la arquitectura de la exhibición al organizar la navegación y permitir que los usuarios localicen los productos de manera ordenada.
                td.text-start Un comercio electrónico de accesorios para estudio organiza su catálogo en categorías como escritorios, lámparas, archivadores y organizadores para facilitar la búsqueda de referencias.
              tr.bg-table-01
                td.text-start
                  b Recursos de contextualización visual
                td.text-start Relacionan los productos con escenarios, ambientes o situaciones de uso que enriquecen su presentación y facilitan la comprensión de sus aplicaciones.
                td.text-start Complementan las categorías y las fichas de producto mediante recursos visuales que fortalecen la experiencia de navegación y la interpretación de la oferta.
                td.text-start Una marca de decoración presenta mesas de noche y lámparas en una habitación ambientada para mostrar cómo se integran dentro de un espacio real.
              tr.bg-table-02
                td.text-start
                  b Recursos de apoyo a la experiencia digital
                td.text-start Incorporan elementos que orientan la navegación y favorecen la interacción del usuario con los contenidos disponibles en el canal.
                td.text-start Refuerzan la arquitectura mediante filtros, rutas de navegación, productos relacionados, etiquetas y accesos complementarios que optimizan el recorrido del usuario.
                td.text-start Una tienda virtual de mobiliario incorpora filtros por categoría, migas de pan, productos relacionados y promociones destacadas para facilitar la exploración del catálogo.
      .col-12.col-lg-10
        p.mb-0 Desde una perspectiva estratégica, las herramientas de exhibición digital también cumplen una función de articulación entre la operación comercial y la comunicación visual. No basta con tener recursos disponibles; es necesario que estos se seleccionen y se utilicen en función de la naturaleza del producto, del tipo de canal y del objetivo de la exhibición. Una herramienta puede servir para mostrar mejor una referencia, para facilitar la consulta del usuario o para sostener una propuesta visual más consistente dentro del catálogo. Por ello, trabajar este subtema implica comprender que las herramientas son mediaciones concretas entre la oferta y su puesta en escena digital.

    .row.justify-content-center.mb-3
      .col-12.col-lg-8
        .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-3.py-4.px-5(data-aos="zoom-in-right")
          .row.align-items-center
            .col-8.col-lg-3.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema1/img_8.svg', class="img-fluid")
            .col-12.col-lg-8
              h5.etiqueta.color-acento-contenido.mb-2 Clave estratégica
              p.mb-0 Las herramientas de exhibición digital no solo sirven para mostrar productos; su valor está en ayudar a organizar la oferta, enriquecer su interpretación y construir una experiencia comercial más clara dentro del canal.
            .col-8.col-lg-1.d-lg-block.d-none
              figure.mt-5
                img(src='@/assets/curso/tema1/img_10.svg')

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.3 Recursos de representación digital: diseño CAD y renderizado 3D
    .mb-0

    .row.align-items-center.mb-4
      .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_8.png', class="img-fluid", alt="Envase cosmético renderizado digitalmente en tonos lila sobre un fondo del mismo color")
      .col-12.col-lg-8
        p.mb-3(data-aos="zoom-in-right") Los recursos de representación digital permiten crear modelos e imágenes que apoyan la presentación de productos dentro de los canales de comercio electrónico. Entre los más utilizados se encuentran el diseño asistido por computador (CAD) y el renderizado 3D, herramientas complementarias que facilitan representar con precisión las características, dimensiones y apariencia de un producto antes o después de su fabricación.
        .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-2.py-4.px-5(data-aos="zoom-in-right")
          p.mb-0 El diseño CAD constituye la base para elaborar modelos digitales que describen la forma, estructura y proporciones de un producto. A partir de estos modelos, el renderizado 3D genera imágenes con apariencia realista mediante la incorporación de materiales, texturas, iluminación y escenarios, permitiendo presentar el producto en diferentes perspectivas y contextos de uso. La combinación de ambos recursos favorece una exhibición digital más completa, facilita la comprensión de la oferta y amplía las posibilidades de comunicación visual cuando no se dispone del producto físico o cuando se requiere representar configuraciones, variantes o soluciones personalizadas.

    p.mb-5(data-aos="zoom-in-right") Su aplicación fortalece la exhibición digital al proporcionar representaciones precisas y coherentes con la identidad visual de la organización, contribuyendo a mejorar la comprensión del producto y a enriquecer la experiencia de navegación dentro del canal de comercio electrónico.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema3/img_5.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h3.subtitulo-destacado__texto Proceso de representación digital para la exhibición

    .row.align-items-center.mb-5
      .col-12.col-lg-7.order-2.order-lg-1
        TabsA.color-acento-botones.uno(data-aos="zoom-in-right")
          .tarjeta.color-adicional-1.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Paso 1")
            h4.mb-4 Diseño CAD
            p.mb-0 Se construye el modelo digital del producto definiendo su forma, dimensiones, estructura y componentes principales.
          .tarjeta.color-adicional-1.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Paso 2")
            h4.mb-4 Renderizado 3D
            p.mb-0 El modelo incorpora materiales, texturas, iluminación y escenarios para generar imágenes con apariencia realista.
          .tarjeta.color-adicional-1.p-4.h-100.d-flex.flex-column.justify-content-center(titulo="Paso 3")
            h4.mb-4 Integración en la exhibición digital
            p.mb-0 Las representaciones obtenidas se incorporan a fichas de producto, catálogos, campañas comerciales y otros recursos utilizados dentro del canal de comercio electrónico.
      .col-12.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema6/img_9.png', class="img-fluid", alt="Mujer observando bocetos y una representación 3D de una prenda de vestir en una pantalla")

    .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-5.py-4.px-5.mb-5(data-aos="zoom-in-right")
      .row.align-items-center
        .col-2.col-lg-2.d-lg-block.d-none
          figure
            img(src='@/assets/curso/tema2/img_12.svg', class="img-fluid")
        .col
          h5.etiqueta.color-acento-botones.mb-2 Ejemplo aplicado
          p.mb-0 Una organización dedicada a la comercialización de exhibidores y mobiliario modular buscaba fortalecer la presentación de sus productos en el canal digital. Aunque disponía de fotografías, algunos clientes tenían dificultades para comprender la estructura, las dimensiones y las diferentes configuraciones de los módulos. Para mejorar la exhibición, la empresa desarrolló modelos mediante diseño CAD y posteriormente generó imágenes renderizadas que mostraban distintas perspectivas, acabados y formas de instalación. Estas representaciones complementaron las fotografías tradicionales, facilitaron la comprensión de los productos y fortalecieron la comunicación comercial dentro de la tienda virtual.
        .col-2.col-xl-1.d-lg-block.d-none
          figure.mt-4
            img(src='@/assets/curso/tema1/img_10.svg')

    .row.justify-content-center.mb-3
      .col-12.col-lg-8
        .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-5.py-4.px-5(data-aos="zoom-in-right")
          .row.align-items-center
            .col-2.col-lg-3.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema1/img_16.svg', class="img-fluid", alt="Icono de una ventana de navegador con gráfico de barras y una silueta decorativa sobre fondo circular amarillo")
            .col
              h5.etiqueta.color-acento-botones.mb-2 Frase de reflexión
              p.mb-0 La representación digital fortalece la exhibición cuando transforma información técnica en recursos visuales que permiten comprender el producto antes de interactuar con él.
            .col-2.col-xl-1.d-lg-block.d-none
              figure.mt-4
                img(src='@/assets/curso/tema1/img_10.svg')

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.4 Customización
    .mb-0

    .row.align-items-center.mb-4
      .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_10.png', class="img-fluid", alt="Hombre interactuando con prendas de vestir mostradas en una pantalla holográfica interactiva")
      .col-12.col-lg-8
        p.mb-3(data-aos="zoom-in-right") La customización corresponde al proceso de adaptar la exhibición digital, los contenidos o la presentación de los productos de acuerdo con las características, necesidades o preferencias de los usuarios. En el comercio electrónico, esta estrategia busca ofrecer experiencias más pertinentes mediante la organización de la información, la recomendación de productos y la presentación de contenidos acordes con los intereses de cada público.
        .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-2.py-4.px-5(data-aos="zoom-in-right")
          p.mb-0 La personalización puede aplicarse en diferentes niveles de la exhibición digital. Algunas organizaciones adaptan categorías destacadas, recomendaciones de productos o promociones según el comportamiento de navegación, mientras que otras permiten configurar características del producto, seleccionar acabados, colores, dimensiones o combinaciones específicas antes de realizar la compra. Estas posibilidades fortalecen la interacción con la oferta y contribuyen a una experiencia más cercana a las expectativas del usuario.

    p.mb-5(data-aos="zoom-in-right") La implementación de estrategias de customización debe mantener coherencia con la arquitectura de la exhibición y con la identidad visual de la organización. Una personalización adecuada facilita la navegación, mejora la comprensión de la oferta y favorece la toma de decisiones sin afectar la organización general del canal de comercio electrónico.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema3/img_5.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h3.subtitulo-destacado__texto Estrategias de customización

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_11.png', class="img-fluid", alt="Pantalla interactiva de tienda mostrando la configuración de color y talla de una prenda de vestir")
      .col-12.col-lg-7.mb-0
        .tarjeta.tarjeta--fondo-img-01.p-2.p-md-4.px-3.p-lg-4.p-xl-4.mb-0(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0.p-0
            SlyderA.py-2.px-5(tipo="a")
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Personalización del contenido
                p.mb-0 La personalización del contenido adapta la presentación de productos, categorías o promociones según los intereses o comportamientos del usuario, favoreciendo una experiencia de navegación más pertinente y facilitando el acceso a información relacionada con sus preferencias.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Configuración del producto
                p.mb-0 La configuración del producto permite seleccionar características como color, tamaño, material o accesorios antes de realizar la compra, ofreciendo alternativas que responden a las necesidades del usuario sin modificar la organización general de la exhibición.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Recomendaciones relacionadas
                p.mb-0 Las recomendaciones relacionadas presentan productos complementarios o similares durante la navegación, ampliando las opciones disponibles y fortaleciendo la relación entre las diferentes categorías del catálogo.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Experiencia personalizada
                p.mb-0 La experiencia personalizada organiza la exhibición según el perfil, comportamiento o contexto del usuario, facilitando recorridos de navegación más relevantes y una interacción más eficiente con la oferta comercial.

    .row.justify-content-center.mb-3
      .col-12.col-lg-8
        .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-5.py-4.px-5(data-aos="zoom-in-right")
          .row.align-items-center
            .col-2.col-lg-3.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema1/img_16.svg', class="img-fluid", alt="Icono de una ventana de navegador con gráfico de barras y una silueta decorativa sobre fondo circular amarillo")
            .col
              h5.etiqueta.color-acento-botones.mb-2 Frase de reflexión
              p.mb-0 Exhibir con integridad significa representar el producto con honestidad, claridad y respeto por la decisión del usuario. Una exhibición digital estratégica no manipula la percepción: organiza, explica y contextualiza la oferta para que la elección se construya sobre comprensión real y no sobre confusión visual o promesas vacías.
            .col-2.col-xl-1.d-lg-block.d-none
              figure.mt-4
                img(src='@/assets/curso/tema1/img_10.svg')

    Separador

    #t_6_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.5 Propuesta de exhibición
    .mb-0

    .bloque-texto-g.color-primario-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/img_12.png')})`}"
        role="img"
        aria-label="Mano tocando la pantalla de una tableta"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La propuesta de exhibición es un documento o planteamiento que organiza la forma en que los productos serán presentados dentro de un canal de comercio electrónico. Su propósito consiste en estructurar la oferta de manera coherente con las características del producto, el perfil del público objetivo, la identidad visual de la organización y los objetivos comerciales definidos para el canal.

    p.mb-4(data-aos="zoom-in-right") La construcción de una propuesta de exhibición requiere integrar aspectos relacionados con la organización del catálogo, la arquitectura de la exhibición, los recursos visuales y audiovisuales, las estrategias de comunicación, las posibilidades de personalización y las condiciones comerciales que acompañan la oferta. Esta integración permite que la presentación de los productos responda a criterios de claridad, accesibilidad y coherencia durante todo el recorrido del usuario.
    p.mb-5(data-aos="zoom-in-right") Una propuesta bien estructurada facilita la planificación de la exhibición antes de su implementación, favorece la articulación entre los diferentes recursos utilizados por la organización y contribuye a ofrecer una experiencia de navegación consistente dentro del comercio electrónico.

    .row.justify-content-center.mb-5.align-items-center
      .col-2.col-lg-1.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema6/img_13.svg')
      .col-12.col-lg-11
        .tarjeta.color-primario-5.py-3.px-4(data-aos="zoom-in-right")
          p.mb-0.text-center A continuación, se presenta una tabla comparativa de una propuesta de exhibición sin y con planificación estructurada:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 7.
          |  Comparación entre una exhibición sin planificación y una propuesta de exhibición estructurada
        .tabla-a.mb-5(data-aos="flip-left")
          table
            caption
              p <b>Nota.</b> SENA, (2026).
            thead
              tr
                th.col-auto.col-lg-3 Aspecto
                th.col-auto.col-lg-4 Exhibición sin propuesta
                th.col-auto.col-lg-auto Propuesta de exhibición estructurada
            tbody
              tr.bg-table-01
                td.text-start
                  b Organización del catálogo
                td.text-start Los productos se presentan sin una lógica común ni relación entre categorías.
                td.text-start La oferta se organiza en categorías y soluciones que facilitan la navegación.
              tr.bg-table-02
                td.text-start
                  b Presentación de los productos
                td.text-start Las fichas presentan información y recursos visuales con diferentes formatos y niveles de detalle.
                td.text-start Las fichas mantienen una estructura uniforme, información clara y recursos visuales consistentes.
              tr.bg-table-01
                td.text-start
                  b Contextualización
                td.text-start Los productos se muestran de manera individual, sin relacionarlos con situaciones de uso.
                td.text-start Los productos se presentan en contextos que ayudan a comprender su aplicación y beneficios.
              tr.bg-table-02
                td.text-start
                  b Comunicación comercial
                td.text-start Predominan mensajes aislados sin una estrategia que relacione la oferta.
                td.text-start Los mensajes orientan al usuario, destacan beneficios y mantienen coherencia con la identidad de la organización.
              tr.bg-table-01
                td.text-start
                  b Experiencia de navegación
                td.text-start El recorrido resulta poco organizado y dificulta la localización de soluciones relacionadas.
                td.text-start La arquitectura del canal facilita la exploración mediante categorías, productos relacionados y recorridos intuitivos.
              tr.bg-table-02
                td.text-start
                  b Información comercial
                td.text-start Las condiciones de compra pueden encontrarse dispersas o poco visibles.
                td.text-start Las políticas, beneficios y condiciones comerciales se presentan de forma clara y accesible.
              tr.bg-table-01
                td.text-start
                  b Resultado
                td.text-start El usuario necesita mayor esfuerzo para comprender la oferta y tomar una decisión.
                td.text-start La organización de la exhibición facilita la comprensión de la oferta y fortalece la decisión de compra.

    p.mb-5(data-aos="zoom-in-right") La comparación evidencia que una propuesta de exhibición no consiste únicamente en organizar productos dentro de un canal digital. Su elaboración implica integrar criterios de organización, comunicación, recursos visuales, arquitectura de navegación e información comercial para ofrecer una experiencia coherente que facilite la comprensión de la oferta y apoye el proceso de decisión del usuario.

    .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-5.py-4.px-5.mb-5(data-aos="zoom-in-right")
      .row.align-items-center
        .col-2.col-lg-2.d-lg-block.d-none
          figure
            img(src='@/assets/curso/tema2/img_12.svg', class="img-fluid")
        .col
          h5.etiqueta.color-acento-botones.mb-2 Ejemplo aplicado
          p.mb-0 Una empresa dedicada a la comercialización de productos para oficina diseñó una propuesta de exhibición para su nueva tienda virtual organizando el catálogo por categorías, incorporando imágenes renderizadas, recomendaciones de productos relacionados y políticas comerciales visibles. La integración de estos elementos permitió ofrecer una experiencia de navegación coherente con la identidad de la marca y facilitar la consulta de la oferta.
        .col-2.col-xl-1.d-lg-block.d-none
          figure.mt-4
            img(src='@/assets/curso/tema1/img_10.svg')

    p.mb-5(data-aos="zoom-in-right") La propuesta de exhibición constituye una herramienta de planificación que integra los diferentes recursos estudiados a lo largo del componente para estructurar una experiencia comercial organizada, coherente y orientada a las necesidades de los usuarios.

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
              p.mb-0 ¿Por qué una tienda virtual con buenos productos y recursos visuales puede seguir siendo débil comercialmente si no formula una propuesta de exhibición que articule su oferta dentro del canal?

    Separador

    #t_6_6.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.6 Estructura de la propuesta
    .mb-0

    .row.align-items-center.mb-4
      .col-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_14.png', class="img-fluid", alt="Mujer sosteniendo una tableta con la vista de realidad aumentada de una tienda, rodeada de un remolino de colores")
      .col-12.col-lg-8
        p.mb-3(data-aos="zoom-in-right") La estructura de una propuesta de exhibición organiza la información necesaria para planificar la presentación de productos dentro de un canal de comercio electrónico. Su elaboración permite documentar los criterios que orientan la organización de la oferta, la selección de recursos visuales, las estrategias de comunicación y las condiciones necesarias para implementar la exhibición de manera coherente con los objetivos comerciales.
        .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-2.py-4.px-5(data-aos="zoom-in-right")
          p.mb-0 Una estructura organizada facilita el trabajo de los diferentes actores que participan en la gestión del canal digital y contribuye a mantener criterios uniformes durante la implementación y actualización de la exhibición.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema3/img_5.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h3.subtitulo-destacado__texto Estructura de una propuesta de exhibición digital

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema6/img_15.png', class="img-fluid", alt="Mujer usando un teléfono para ver la realidad aumentada de una prenda de vestir en una tienda")
      .col-12.col-lg-7.mb-0
        .tarjeta.tarjeta--fondo-img-01.p-2.p-md-4.px-3.p-lg-4.p-xl-4.mb-0(data-aos="zoom-in-right")
          .tarjeta.tarjeta--blanca.mb-0.p-0
            SlyderA.py-2.px-5(tipo="a")
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Identificación del producto
                p.mb-0 Se definen las características del producto o servicio, los requerimientos de exhibición y las necesidades de presentación que orientarán el desarrollo de la propuesta.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Definición del canal
                p.mb-0 Se establece el canal de comercio electrónico donde se implementará la exhibición y la forma en que se organizará la oferta según las características de ese entorno digital.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Organización de la exhibición
                p.mb-0 Se estructura la arquitectura del catálogo mediante categorías, subcategorías, fichas de producto y recorridos de navegación que faciliten la consulta de la oferta.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Integración de recursos
                p.mb-0 Se seleccionan imágenes, recursos audiovisuales, representaciones digitales, elementos de personalización y demás apoyos que fortalecerán la presentación de los productos.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Comunicación y condiciones comerciales
                p.mb-0 Se incorporan mensajes comerciales, promociones, información de apoyo, políticas de compra y demás contenidos que complementan la experiencia del usuario.
              .py-3.px-4.p-md-4.p-lg-3.p-xl-5
                h3.h5 Verificación de la propuesta
                p.mb-0 Se revisa la coherencia entre la organización de la oferta, los recursos utilizados, la experiencia de navegación y los objetivos comerciales antes de implementar la exhibición.

    .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-5.py-4.px-5.mb-5(data-aos="zoom-in-right")
      .row.align-items-center
        .col-2.col-lg-2.d-lg-block.d-none
          figure
            img(src='@/assets/curso/tema2/img_12.svg', class="img-fluid")
        .col
          h5.etiqueta.color-acento-botones.mb-2 Ejemplo aplicado
          p.mb-0 Antes de publicar una nueva categoría de productos tecnológicos, una organización documentó el objetivo comercial, organizó el catálogo, definió los recursos visuales, incorporó estrategias de comunicación y verificó la coherencia de la propuesta antes de su implementación. Este proceso permitió mantener una exhibición organizada y consistente dentro del canal digital.
        .col-2.col-xl-1.d-lg-block.d-none
          figure.mt-4
            img(src='@/assets/curso/tema1/img_10.svg')

    p.mb-5(data-aos="zoom-in-right") El caso evidencia que la estructura de la propuesta de exhibición no es un requisito formal sin función práctica, sino una herramienta para organizar la relación entre producto, canal y recursos de presentación. Cuando la organización estructura su propuesta con claridad, logra que la exhibición responda a una lógica comercial más sólida y que la experiencia del usuario sea más comprensible dentro del comercio electrónico.

    .tarjeta.color-secundario-5.py-3.px-4.mb-5(data-aos="zoom-in-right")
      p.mb-0.text-center A continuación, lo invitamos a consultar este pódcast para ampliar los conceptos para estructurar una propuesta de exhibición estratégica y coherente:

    .row.justify-content-center.mb-5
      .col-12.col-lg-8
        .tarjeta.tarjeta--fondo-img-03.p-4.p-lg-0(data-aos="zoom-in-right")
          .row.align-items-center
            .col-12.col-lg-4.mb-3.mb-lg-0.pb-0.pt-4.ps-5.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema2/img_14.png', class="img-fluid", alt="Mujer sonriente usando una tableta frente a un dispositivo de escaneo, con íconos de idea y objetivo")
            .col-12.col-lg-8.pe-3.pe-lg-5
              TarjetaAudio.color-secundario.mb-0(
                texto="Propuesta estratégica de exhibición"
                :audio="require_src('@/assets/curso/podcast/podcast_2.mp3')"
                tiempo
              )

    .row.align-items-center.mb-5
      .col-12.col-lg-11
        p.mb-0 La exhibición digital integra la organización de la oferta, las herramientas tecnológicas, los recursos de representación, las estrategias de personalización y la planificación comercial para construir experiencias coherentes dentro de los canales de comercio electrónico. La elaboración de una propuesta de exhibición permite articular estos elementos en un proceso organizado que favorece la presentación de productos, fortalece la interacción con los usuarios y contribuye al cumplimiento de los objetivos comerciales de la organización.
      .col-2.col-lg-1.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema6/img_13.svg', class="img-fluid")

    .row.justify-content-center.mb-0
      .col-12.col-lg-8
        .tarjeta.tarjeta-fondo.tarjeta-fondo--tema1-5.py-4.px-5(data-aos="zoom-in-right")
          .row.align-items-center
            .col-2.col-lg-3.d-lg-block.d-none
              figure
                img(src='@/assets/curso/tema1/img_16.svg', class="img-fluid", alt="Icono de una ventana de navegador con gráfico de barras y una silueta decorativa sobre fondo circular amarillo")
            .col
              h5.etiqueta.color-acento-botones.mb-2 Frase de reflexión
              p.mb-0 Una propuesta de exhibición con integridad no busca impresionar por acumulación de recursos, sino ordenar la oferta con criterio, claridad y coherencia. Cuando la organización piensa la exhibición como una solución estructurada, demuestra respeto por el producto, por el canal y por el usuario que necesita comprender antes de decidir.
            .col-2.col-xl-1.d-lg-block.d-none
              figure.mt-4
                img(src='@/assets/curso/tema1/img_10.svg')
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
