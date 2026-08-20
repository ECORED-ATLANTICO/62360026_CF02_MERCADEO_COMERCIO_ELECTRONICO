<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 El componente formativo <b>Exhibición digital de productos</b>, ofrece al aprendiz una visión aplicada sobre los elementos que intervienen en la construcción de la exhibición de productos dentro del comercio electrónico. A partir del estudio de productos, canales, <em>visual marketing</em>, contenidos audiovisuales, publicidad digital y marco legal, el componente permite comprender que la presentación de la oferta no depende de decisiones aisladas, sino de la articulación entre recursos visuales, información comercial y condiciones propias del entorno digital.
    p.mb-3 De manera complementaria, el componente profundiza en la exhibición digital, las políticas comerciales y la propuesta de exhibición como ejes que conectan la visibilidad del producto con la experiencia de compra. Esta integración fortalece la capacidad del aprendiz para reconocer requerimientos de presentación, organizar soluciones de exhibición y estructurar propuestas coherentes con el canal de venta, favoreciendo decisiones más consistentes en la gestión visual y comercial de productos en entornos electrónicos.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
