export default {
  global: {
    Name: 'Exhibición digital de productos',
    Description:
      'El componente formativo Exhibición digital de productos desarrolla los fundamentos técnicos y estratégicos necesarios para estructurar la exhibición de productos en comercio electrónico, articulando producto, canal, recursos visuales, contenidos, publicidad, condiciones comerciales y propuesta de exhibición como base para una presentación digital coherente y orientada a la experiencia de compra.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Productos y requerimientos de exhibición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Categorías y clasificación de productos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Requerimientos de exhibición',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Canales de comercio electrónico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de canales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios para la selección de canal',
            hash: 't_2_3',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Visual marketing y comunicación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y estrategias del visual marketing',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '<em>Branding</em> e identidad visual',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estrategias de comunicación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Publicidad digital aplicada a la exhibición',
            hash: 't_3_4',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Recursos audiovisuales para la exhibición digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y tipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Gestión y metodología de contenidos audiovisuales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Aplicabilidad en la exhibición digital',
            hash: 't_4_3',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Marco legal y políticas comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Marco legal del comercio electrónico',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Propiedad intelectual e industrial',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Comunicación comercial y promoción',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Protección de datos y derechos del consumidor',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Políticas comerciales',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Garantías, cambios y devoluciones',
            hash: 't_5_6',
          },
        ],
      },

      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Exhibición digital y propuesta de exhibición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y tipos de exhibición digital',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Herramientas y arquitectura de la exhibición',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Recursos de representación digital: diseño CAD y renderizado 3D',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Customización',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Propuesta de exhibición',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Estructura de la propuesta',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62360026_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: '<em>Branding</em>',
      significado:
        'Proceso de construcción y fortalecimiento de identidad y reconocimiento de una marca en el mercado.',
    },
    {
      termino: 'Canal de comercio electrónico',
      significado:
        'Entorno digital mediante el cual se presentan, promueven y comercializan productos o servicios.',
    },
    {
      termino: 'Contenido audiovisual',
      significado:
        'Recurso digital que integra imagen, sonido o movimiento para comunicar información comercial o promocional.',
    },
    {
      termino: 'Customización',
      significado:
        'Adaptación o variación de un producto o de su presentación según opciones definidas en el canal.',
    },
    {
      termino: 'Exhibición digital',
      significado:
        'Organización y presentación visual de productos dentro de entornos electrónicos para facilitar su comprensión comercial.',
    },
    {
      termino: 'Influenciador',
      significado:
        'Persona con capacidad de incidir en audiencias digitales mediante contenidos, opinión o presencia en plataformas.',
    },
    {
      termino: '<em>Marketplace</em>',
      significado:
        'Espacio digital donde diferentes oferentes presentan y comercializan productos o servicios a múltiples usuarios.',
    },
    {
      termino: 'Política comercial',
      significado:
        'Conjunto de lineamientos que regulan condiciones de compra, cambios, devoluciones o garantías dentro del canal.',
    },
    {
      termino: 'Propuesta de exhibición',
      significado:
        'Formulación estructurada que organiza la manera en que un producto será presentado en comercio electrónico.',
    },
    {
      termino: 'Renderizado 3D',
      significado:
        'Representación digital tridimensional utilizada para visualizar productos, espacios o configuraciones dentro de la exhibición.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cámara Colombiana de Comercio Electrónico [CCCE]. (2025). <em>Informe de cierre del comportamiento del comercio electrónico en Colombia durante 2024</em>. Cámara Colombiana de Comercio Electrónico.',
      link: 'https://ccce.org.co/noticias/informe-de-cierre-del-comportamiento-del-comercio-electronico-en-colombia-durante-2024/',
    },
    {
      referencia:
        'Guzmán Duque, A. P., & Abreo Pinzón, C. A. (2021). <em>Influencia del comercio electrónico en el desempeño financiero de las pymes en Manizales, Colombia</em>. Revista Escuela de Administración de Negocios, (91).',
      link: 'https://www.redalyc.org/journal/818/81871935006/',
    },
    {
      referencia:
        'Mazabanda, M. A. C. (2022). <em>Merchandising visual y marketing digital: como estrategias de fortalecimiento de marca</em>. Revista Eruditus, 3(3), 41–54.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/8549538.pdf',
    },
    {
      referencia:
        'Minderest. (2020, 3 de junio). <em>La importancia del visual merchandising online</em>. Minderest.',
      link: 'https://www.minderest.com/es/blog/2020/06/03/la-importancia-del-visual-merchandising-online',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio [SIC]. (2021, agosto 1). <em>Todo usuario de una plataforma de comercio electrónico está protegido por los derechos del consumidor</em>. Sede Electrónica SIC.',
      link: 'https://sedeelectronica.sic.gov.co/publicaciones/boletin-juridico/boletin/todo-usuario-de-una-plataforma-de-comercio-electronico-esta-protegido-por-los-derechos-del-consumidor',
    },
    {
      referencia:
        'Uribe Beltrán, C. I., & Sabogal Neira, D. F. (2021). <em>Marketing digital en micro y pequeñas empresas de publicidad de Bogotá</em>. Universidad & Empresa, 23(40).',
      link: 'https://www.redalyc.org/journal/1872/187265084004/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolás Cruz Ríos',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andres Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
