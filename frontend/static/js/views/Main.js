export default class extends AbstractView {
    constructor() {
      super();
        this.setTitle("Main");
    }

    async getHtml() {
        return `
<div class="w-3/4 text-center">
<p class="text-5xl text-white font-bold">INNOVACIÓN</p>
<p class="text-blue-100 font-bold text-xl font-mono">Es usar la tecnologia a nuestro favor</p>
<p class="text-gray-100 font-medium text-sm lg:text-xl mt-8 font-sas">Asesoraría y acompañamiento para la
  implementación de tecnologías y herramientas necesarias para el desarrollo de su negocio</p>
</div>
</section>




<main id="main">
<!-- ======= Services Section ======= -->

<!-- informacion -->

<section class="text-gray-600 body-font">
<div class="container flex flex-wrap px-5 py-8 mx-auto items-center">
  <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
    <img src="assets/img/svg/about1.png" alt="">
  </div>
  <div class="flex flex-col md:w-1/2 md:pl-12">
    <div class=" p-6 rounded-sm hover:border-blue-500 border-t-4">
      <div
        class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <i class="fa-solid fa-laptop text-5xl text-blue-500 pb-4"></i>
      </div>
      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">OUTSOURCING IT</h2>
      <p class="leading-relaxed text-base">Profesionales especializados en diferentes tecnologías</p>
    </div>
    <div class="p-6 rounded-sm hover:border-blue-500 border-t-4">
      <div
        class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <i class="fa-solid fa-handshake text-5xl text-blue-500 pb-4"></i>
      </div>
      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">ASESORÍA EMPRESARIAL</h2>
      <p class="leading-relaxed text-base">Asesoraría y acompañamiento para la implementación de tecnologías y
        herramientas necesarias para el desarrollo de su negocio</p>
    </div>
    <div class="p-6 rounded-sm  hover:border-blue-500 border-t-4">
      <div
        class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        <i class="fa-solid fa-chart-line text-5xl text-blue-500 pb-4"></i>
      </div>
      <h2 class="text-lg text-gray-900 font-medium title-font mb-2">DESARROLLO A LA MEDIDA</h2>
      <p class="leading-relaxed text-base">Sistematización de procesos, basado en las necesidades del cliente,
        cumpliendo con características especificas.</p>
    </div>
  </div>
</div>
</section>
<!-- end informacion -->

<!-- servicion -->
<section id="services" class="services bg-blue-500">
<div class="container">
  <div class="text-center">
    <h2 class="text-4xl font-bold text-gray-100 mb-8 pt-6">Productos</h2>
  </div>
  <div class="container px-5 pmx-auto text-center pl-16">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2">
        <div
          class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="assets/img/svg/project.svg">
          <div class="flex-grow sm:pl-8">
            <a class="title-font font-medium text-2xl text-gray-100 border-b-2 hover:text-gray-400"
              href="smartproject.html">Smart Project</a>
            <p class="mb-4 text-white mt-4">Administra y controla todos los procesos de sus proyectos</p>
            <span class="inline-flex">
              <a class="text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                  </path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div
          class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="assets/img/svg/buy.svg">
          <div class="flex-grow sm:pl-8">
            <a class="title-font font-medium text-2xl text-gray-100 hover:text-gray-400 border-b-2"
              href="smartbuy.html">Smart Buy</a>
            <p class="mb-4 mt-4 text-white">Administra los procesos de compra y ahorra con los beneficios de la
              subasta inversa
            </p>
            <span class="inline-flex">
              <a class="text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                  </path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div
          class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="assets/img/svg/operation.svg">
          <div class="flex-grow sm:pl-8">
            <a class="title-font font-medium text-2xl text-gray-100 border-b-2 hover:text-gray-400"
              href="smartoperation.html">Smart Operation</a>
            <p class="mb-4 mt-4 text-white">Controla y monitorea a tu personal en ruta</p>
            <span class="inline-flex">
              <a class="text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                  </path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div class="p-4 lg:w-1/2">
        <div
          class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="assets/img/svg/Finance.svg">
          <div class="flex-grow sm:pl-8">
            <a class="title-font font-medium text-2xl text-gray-100 hover:text-gray-400 border-b-2"
              href="smartpos.html">ERP - Administrativo Contable</a>
            <p class="mb-4 mt-4 text-white">Administra todas las áreas de tu organización haciendo los procesos
              eficientes</p>
            <span class="inline-flex">
              <a class="text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                  </path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-1/2">
        <div
          class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="assets/img/svg/smartanalytics.svg">
          <div class="flex-grow sm:pl-8">
            <a class="title-font font-medium text-2xl text-gray-100 hover:text-gray-400 border-b-2"
              href="smartanalytics.html">Smart Analytics</a>
            <p class="mb-4 mt-4 text-white">Analiza desde todas las perspectivas la información de tu negocio en
              tiempo real</p>
            <span class="inline-flex">
              <a class="text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
              <a class="ml-2 text-gray-100">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                  </path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<!-- End Services Section -->



<!-- ======= Cta Section ======= -->

<section class="body-font bg-cover bg-center"
style="background-image:linear-gradient(to bottom, #141e30c5, #243b55c0), url(https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=888&q=80) ;">
<div class="container flex flex-wrap px-5 py-8 mx-auto items-center">
  <div
    class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 text-white">
    <p class=" text-2xl sm:text-3xl font-semibold title-font mb-2 text-gray-200">Permitanos ser su aliado de
      negocios
    </p>
    <p class="leading-relaxed text-base text-white">Sera un gusto poder atender su solicitud. Complete el
      siguiente
      formulario y en breve nos comunicaremos con usted</p>
    <button
      class="border-2 border-gray-100 font-semibold rounded-xl mt-4 py-2 px-2 hover:text-blue-600 hover:bg-gray-100">Mas
      Informacion</button>
  </div>
  <div class="flex flex-col md:w-1/2 md:pl-12">
    <img src="assets/img/svg/Data analytics _Flatline.svg" alt="">

  </div>
</div>
</section>
<!-- End Cta Section -->

<!-- ======= About Us Section ======= -->
<section id="about" class="about bg-gray-100">
<div class="container py-20">
  <div class="text-center mb-20">
    <h2 class="text-3xl text-gray-600 font-bold mb-4 ">TESTIMONIALES</h2>

  </div>
  <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded w-96" alt="hero" src="assets/img/svg/business.svg">
    </div>
    <div
      class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <p class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-600"> Área de Farmacia, Municipalidad
        de Villa Nueva, Guatemala
        <br class="hidden lg:inline-block">
      </p>
      <p class="mb-8 leading-relaxed"> Colaboradores de la Farmacia de la Municipalidad de Villa Nueva se
        capacitan en el uso del sistema de Facturación, ORBIS Technology.</p>
      <div class="flex justify-center">
        <div class="border-l-4 border-blue-500 px-3">
          <div class="flex mb-3">
            <span class="h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center text-white">1</span>
            <p class="px-2 ">Control de Inventario</p>
          </div>
          <div class="flex mb-3">
            <span class="h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center text-white">2</span>
            <p class="px-2 ">Facturación</p>
          </div>
          <div class="flex">
            <span class="h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center text-white">3</span>
            <p class="px-2 ">Integración completa</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<!-- End About Us Section -->
</main>
<!-- End #main -->
`;
}
}