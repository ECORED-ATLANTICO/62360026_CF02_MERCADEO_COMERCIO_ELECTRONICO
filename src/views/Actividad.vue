<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Mercadeo visual para comercio electrónico.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Verificar la comprensión de los conceptos, principios, recursos y aplicaciones del componente formativo relacionados con productos, canales, <em>visual marketing</em>, contenidos audiovisuales, publicidad digital, marco legal, exhibición digital, políticas comerciales y propuesta de exhibición en comercio electrónico.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué permite la clasificación de productos dentro del comercio electrónico estratégico actual?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar la oferta según características, usos o relaciones dentro del canal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar la necesidad de estructurar fichas dentro del catálogo comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir las políticas comerciales aplicadas a cada referencia exhibida digitalmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar la gestión de contenidos por criterios publicitarios de campaña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la función principal de los requerimientos de exhibición del producto?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la cantidad de recursos visuales empleados en la tienda virtual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Orientar la forma de presentar el producto según sus necesidades comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir la descripción del producto por escenas de uso ambientadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la organización del catálogo a una sola categoría comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué caracteriza a un canal de comercio electrónico dentro del componente formativo?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ser un documento normativo para regular las transacciones comerciales digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ser un sistema exclusivo de pagos para operaciones entre organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser el entorno digital donde se exhiben y comercializan productos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Ser un recurso gráfico para diseñar campañas de visual marketing.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Para qué sirven los criterios del canal en comercio electrónico aplicado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para reemplazar la propuesta de exhibición por lineamientos de publicidad digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para eliminar la necesidad de definir recursos de presentación del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para establecer el precio final de todas las referencias del catálogo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para orientar la selección y organización de la oferta dentro del canal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué aporta el <em>visual marketing</em> a la exhibición de productos en línea?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Convierte las políticas comerciales en recursos promocionales dentro del catálogo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituye la clasificación de productos por contenidos audiovisuales exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Limita la presentación visual a imágenes sin relación con la marca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplaza la propuesta de exhibición por acciones de atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué busca una estrategia de <em>visual marketing</em> en un canal digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir la organización del catálogo por promociones temporales de precio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Articular recursos visuales para fortalecer la presentación comercial del producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Convertir la garantía en un recurso de navegación dentro del sitio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar la ficha del producto por mensajes de redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la finalidad del <em>branding</em> dentro del mercadeo visual digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar cambios y devoluciones según las políticas del canal comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Clasificar productos por requerimientos de exhibición y recursos de diseño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Construir identidad y reconocimiento de la marca en la oferta digital.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir la comunicación online por campañas de publicidad segmentada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué integra la lógica 3V en la comunicación comercial de la tienda?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Visualización, validación y variación del precio de cada referencia comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Viralidad, valor y venta dentro de la estrategia de comunicación digital.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Velocidad, volumen y variedad para clasificar productos en el catálogo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Visibilidad, verificación y virtualidad como normas del comercio electrónico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué función cumple una tienda en redes dentro del comercio electrónico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actuar como espacio de exhibición y comercialización dentro de plataformas sociales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente el catálogo del sitio web institucional de la marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar la política de cambios por mensajes directos al usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar la interacción comercial a campañas audiovisuales de corta duración.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué aporta un embajador de marca a la exhibición comercial digital estratégica?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organiza las categorías del catálogo según requerimientos técnicos del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Fortalece la representación y conexión de la marca con sus públicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplaza la publicidad digital por contenidos legales del canal comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituye el renderizado 3D por imágenes de ambientación del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué caracteriza a los contenidos audiovisuales dentro del comercio electrónico actual?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Son recursos digitales que comunican información mediante imagen, sonido o movimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Son normas legales aplicadas al uso de plataformas y marketplaces comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Son políticas de garantía vinculadas con la experiencia de compra digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Son fichas técnicas utilizadas exclusivamente en procesos de devolución comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Para qué sirve la gestión de contenidos audiovisuales en una tienda virtual?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para definir el marco legal aplicable a la publicidad del canal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para organizar, actualizar y articular recursos visuales según la estrategia comercial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para reemplazar la clasificación de productos por campañas de branding.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para eliminar la necesidad de fichas y descripciones dentro del catálogo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué papel cumple la metodología en la producción de contenidos audiovisuales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituye los criterios del canal por decisiones de diseño asistido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Define la secuencia de trabajo para construir recursos visuales con coherencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplaza la propuesta de exhibición por acciones de promoción comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organiza exclusivamente las políticas de garantía y devoluciones del canal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cómo se relaciona la arquitectura web con la exhibición de productos digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Regula jurídicamente el uso de influenciadores dentro de campañas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituye la propuesta de exhibición por criterios de visual marketing aplicado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organiza la estructura del entorno digital para facilitar navegación y consulta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reemplaza la gestión de contenidos por políticas de cambios y devoluciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué finalidad tiene la publicidad digital dentro del comercio electrónico estratégico?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer las garantías aplicables a cada producto exhibido en la tienda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar las categorías del catálogo según criterios de exhibición comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir los requerimientos técnicos del renderizado 3D y la customización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Difundir la oferta y fortalecer su visibilidad dentro de entornos digitales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué aborda el marco legal de internet en este componente formativo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente la creación de contenidos audiovisuales para redes sociales comerciales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo la organización visual de categorías dentro del comercio electrónico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente el uso de marketplaces para ventas entre consumidores finales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solamente la selección de influenciadores y embajadores de marca digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué define la exhibición digital dentro del comercio electrónico del componente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La creación de normas legales para regular campañas de publicidad digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La organización y presentación visual de productos dentro de entornos electrónicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La clasificación de políticas comerciales según cambios, devoluciones y garantías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La construcción de embajadores de marca para tiendas en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es el aporte del renderizado 3D a la exhibición digital estratégica?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituye la arquitectura web por escenas interactivas de navegación comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elimina la necesidad de fichas descriptivas dentro del canal de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite representar productos con mayor detalle, volumen y contextualización visual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reemplaza las políticas comerciales por recursos de comunicación audiovisual aplicada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué función cumple la customización dentro de la exhibición digital del producto?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organiza exclusivamente las devoluciones asociadas a productos con variaciones comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite mostrar opciones configurables sin perder claridad en la oferta presentada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplaza la clasificación de productos por contenidos audiovisuales de campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituye la ficha del producto por experiencias inmersivas de navegación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué integra una propuesta de exhibición dentro del comercio electrónico aplicado?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo imágenes del producto y promociones activas dentro del marketplace.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Únicamente políticas comerciales para garantizar la seguridad de la compra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Producto, canal, recursos de presentación y condiciones comerciales de exhibición.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente acciones de branding e influenciadores para redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
