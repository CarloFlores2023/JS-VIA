import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        this.setTitle("Main");
    }

    async getHtml() {
        return `
        <section class="bg-white dark:bg-gray-900 py-14">
    <div class="container px-6 py-10 mx-auto">
      <div class="lg:flex lg:-mx-6">
        <div class="lg:w-3/4 lg:px-6">
          <img class="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
            src="https://img.freepik.com/vector-gratis/coleccion-moderna-cpus-vista-isometrica_23-2147966516.jpg?w=740&t=st=1661713909~exp=1661714509~hmac=e9c27e1c88543b767d6713bcfba5217f2e7b37735188da9afe6584d9c45aa734"
            alt="">

          <div>
            <p class="mt-6 text-sm text-blue-500 uppercase">SERVICIOS</p>

            <h1 class="max-w-lg mt-4 text-4xl font-semibold leading-tight text-gray-800 dark:text-white">
              Apoyamos en distinstas áreas de la organización.
            </h1>

            <div class="flex items-center mt-6">
              <img class="object-cover object-center w-10 h-10 rounded-full" src="assets/img/svg/logo_via.png" alt="">

              <div class="mx-4">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">VIA Asesores</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">S.A</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
          <div>
            <h3 class="text-blue-500 capitalize">Outsourcing IT</h3>

            <h1 class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
              Contamos con profesionales especializados en diferentes tecnologías de la información en los siguientes
              lenguajes y tecnologías: Oracle Developer, .NET, PHP, Java, Python, SAP y otros.
            </h1>
          </div>

          <hr class="my-6 border-gray-200 dark:border-gray-700">

          <div>
            <h3 class="text-blue-500 capitalize">Desarrollos a la medida</h3>

            <h1 class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
              A través del análisis, diseño, desarrollo de tecnología

            </h1>
          </div>

          <hr class="my-6 border-gray-200 dark:border-gray-700">

          <div>
            <h3 class="text-blue-500 capitalize">Asesoría Empresarial</h3>

            <h1 class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
              Consultoría de IT.
            </h1>
            <h1 class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
              Rediseño de procesos.
            </h1>
            </h1>
            <h1 class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
              Elaboración de DERCAS – Documento de especificaciones y criterios de aceptación.
            </h1>
            <h1 class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
              Administración de Proyectos.
            </h1>
            <h1 class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
              Formación empresarial.
            </h1>
          </div>

          <hr class="my-6 border-gray-200 dark:border-gray-700">
        </div>
      </div>
    </div>
  </section>
  `;
    }
}