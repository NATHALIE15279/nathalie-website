<template>
  <body>
    <header class="nat-header">
      <section class="nat-wrapper border-b border-b-gray-300">
        <div class="nat-container py-2 sm:py-3 md:py-4 z-0">
          <nav class="nat-nav flex justify-between items-center text-gray-500">
            <div>
              <a
                href="#home"
                class="whitespace-nowrap text-black flex justify-start items-center space-x-2 md:space-x-4"
              >
                <span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 md:w-12"
                  >
                    <path
                      d="M23.9994 42.75C34.3547 42.75 42.7494 34.3553 42.7494 24C42.7494 13.6447 34.3547 5.25 23.9994 5.25C13.6441 5.25 5.24939 13.6447 5.24939 24C5.24939 34.3553 13.6441 42.75 23.9994 42.75Z"
                      fill="#1777E5"
                      stroke="#1777E5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.25 20.25C18.25 20.8023 17.8023 21.25 17.25 21.25C16.6977 21.25 16.25 20.8023 16.25 20.25C16.25 19.6977 16.6977 19.25 17.25 19.25C17.8023 19.25 18.25 19.6977 18.25 20.25Z"
                      fill="white"
                      stroke="white"
                      stroke-width="2.5"
                    />
                    <path
                      d="M31.7494 20.25C31.7494 20.8023 31.3017 21.25 30.7494 21.25C30.1971 21.25 29.7494 20.8023 29.7494 20.25C29.7494 19.6977 30.1971 19.25 30.7494 19.25C31.3017 19.25 31.7494 19.6977 31.7494 20.25Z"
                      fill="white"
                      stroke="white"
                      stroke-width="2.5"
                    />
                    <path
                      d="M31.8012 28.5C31.0082 29.8661 29.8704 31 28.5015 31.7882C27.1326 32.5764 25.5808 32.9913 24.0012 32.9913C22.4216 32.9913 20.8697 32.5764 19.5008 31.7882C18.132 31 16.9941 29.8661 16.2012 28.5"
                      stroke="white"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="font-bold"> Nathalie Kay </span>
              </a>
            </div>
            <div class="md:block hidden">
              <ul class="flex justify-end items-center space-x-4">
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li><a href="#contact">Contact</a></li>
                <li>
                  <a
                    href="mailto:hello@nathaliekay.me"
                    class="nat-btn nat-btn-primary"
                  >
                    hello@nathaliekay.me
                  </a>
                </li>
              </ul>
            </div>
            <div class="md:hidden block">
              <button class="border border-gray-200 p-2 rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </section>
    </header>
    <main>
      <section class="nat-wrapper z-0">
        <div class="nat-container py-16 sm:py-24 z-0">
          <div class="nat-profile flex justify-between items-center space-x-8">
            <div class="w-1/2 nat-images">
              <img
                src="assets/img/NA-40.jpg"
                class="w-[480px] rounded-md"
                alt="NA"
              />
            </div>
            <div class="w-1/2">
              <div class="nat-web text-blue-700">
                <p>WEB DESIGNER</p>
                <p>WEB DEVELOPER</p>
              </div>
              <div class="my-8 nat-pro space-x-3 font-bold text-7xl">
                <h1>Hello,i'm Nathalie.</h1>
              </div>
              <div class="nat-prof flex justify-end items-center">
                <p>
                  Hello.i'm a passionate Web Designer, Web Developer and part
                  time freelancer with a keen eye for details.
                </p>
              </div>

              <div class="mt-8">
                <ul class="flex justify-start items-center space-x-4">
                  <li>
                    <a
                      href="mailto:hello@nathaliekay.me"
                      class="nat-btn nat-btn-blue"
                      >Say Hello</a
                    >
                  </li>
                  <li>
                    <a
                      href="mailto:hello@nathaliekay.me"
                      class="nat-btn nat-btn-secondary"
                      >View Portofolio</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="bg-white border border-gray-200 p-4 sm:p-8 nat-shadow flex space-x-6 justify-between items-center"
          >
            <div class="nat-web images w-[200px]">
              <img
                src="assets/img/NA-40.jpg"
                class="w-[120px] h-[120px] object-cover rounded-full"
                alt="NA"
              />
            </div>
            <div class="w-auto">
              <h1 class="font-bold text-2xl mb-4">
                Web Designer & Web Developer.
              </h1>
              <p class="max-w-4xl">
                I have always been drawn in to the creative side of design, and
                the ability to translate ideas into something visual is
                incredibly satisfying,i love the challenge of crafting a
                beautiful and functional website.
              </p>
            </div>
            <div class="nat-detail">
              <ul class="flex flex-col items-center space-y-2">
                <li class="py-2">
                  <a
                    href="mailto:hello@nathaliekay.me"
                    class="nat-btn nat-btn-blue whitespace-nowrap"
                    >Request Quotation</a
                  >
                </li>
                <li class="py-2">
                  <div class="">
                    <a
                      href="mailto:hello@nathaliekay.me"
                      class="nat-btn nat-btn-secondary whitespace-nowrap"
                    >
                      Download Resume
                      <img
                        class="w-[30px] mx-4 py-3"
                        src="public/img/down.png"
                        alt=""
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        class="-mt-48 nat-wrapper bg-[url(/public/img/BG.png)] bg-cover bg-center"
      >
        <div class="relative nat-container py-24">
          <div class="nat-ressourc flex justify-start space-x-8 py-16">
            <div class="nat-ressource">
              <div class="nat-ress text-blue-700 text-3xl">
                <h2>Education</h2>
              </div>
              <div class="nat-year text-blue-700 py-4">
                <p>2024-Present .DRC</p>
              </div>
              <p>Website Design Course</p>
              <div class="nat-years text-blue-700 py-4">
                <p>2019-2023 . University of Rwanda</p>
              </div>
              <div class="font-bold">
                <h3>Bachelor in Business Information and Technology (BIT)</h3>
              </div>
              <div class="text-gray-400">
                <p>
                  Coursework-Git, WordPress,<br />
                  html, css. javascript, Figma Android, appleos
                </p>
              </div>
            </div>
            <div class="nat-parcours">
              <div class="nat-parcour text-red-700 text-2xl">
                <h3>WORK HISTORY</h3>
              </div>
              <div class="nat-parcourir text-red-700 py-4">
                <p>2024-Present Wito XR STUDIO</p>
              </div>
              <div class="font-bold">
                <p>Team Lead of UI/UX Designer</p>
              </div>
              <div class="text-gray-400">
                <p>
                  collaborate with creative and development<br />
                  teams on the execution of ideas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="space-x-4">
            <h7 class="text-green-600 font-bold mb-60 px-12">TOOLS I USE</h7>
            <ul>
              <li>
                <div class="">
                  <img class="w-[60px]" src="public/img/slack.png" alt="" />
                  <span class="font-bold">Slack</span>
                </div>
              </li>
              <li>
                <div class="">
                  <img class="w-[60px]" src="public/img/figma.png" alt="" />
                  <span class="font-bold">Figma</span>
                </div>
              </li>
              <li>
                <div>
                  <img class="w-[60px]" src="public/img/sketch.png" alt="" />
                  <span class="font-bold">Sketch</span>
                </div>
              </li>
              <li>
                <div>
                  <img class="w-[60px]" src="public/img/photoshop.png" alt />
                  <span class="font-bold">Photoshop</span>
                </div>
              </li>
              <li>
                <div>
                  <img
                    class="w-[60px]"
                    src="public/img/illustrator.png"
                    alt=""
                  />
                  <span class="font-bold">Illustrator</span>
                </div>
              </li>
              <li>
                <div>
                  <img class="w-[60px]" src="public/img/Adobe.png" alt="" />
                  <span class="font-bold">Adobe XD</span>
                </div>
              </li>
              <li>
                <div>
                  <img class="w-[60px]" src="public/img/notion.png" alt="" />
                  <span class="font-bold">Notion</span>
                </div>
              </li>
              <li>
                <div>
                  <img class="w-[60px]" src="public/img/webflow.png" alt="" />
                  <span class="font-bold">Web</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="nat-wrapper">
        <div class="nat-container">
          <div class="nat-process flex py-10">
            <div class="nat-work max-w-md">
              <div class="font-bold">
                <h4>LET'S WORK TOGETHER!</h4>
              </div>
              <div class="text-gray-400">
                <p>
                  I am taking on new projects. Waiting to hear about new
                  projects, so if you'd like to chat please get in touch.
                </p>
              </div>
              <a
                href="mailto:hello@nathaliekay.me"
                class="my email text-blue-700 line-height:1rem"
                >nathaliekay64@gmail.com</a
              >
            </div>
            <div class="nat-work detail justify-end">
              <div class="font-bold text-4xl py-4">
                <h5>Working process</h5>
              </div>
              <div class="text-gray-400 py-4">
                <p>
                  My passion is all about building elegant and professional user
                  interfaces.
                </p>
              </div>
              <ul class="items-center space-x-2">
                <li class="flex">
                  <div class="flex">
                    <img
                      class="w-[30px]"
                      src="public/img/handshake-icon.jpg"
                      alt=""
                    />
                    <p class="">1.Project Introduction</p>
                  </div>
                </li>

                <li>
                  <div class="flex">
                    <img class="w-[30px]" src="public/img/pen.png" alt="" />
                    <p class="">2.Vweb Design</p>
                  </div>
                </li>

                <li>
                  <div class="flex">
                    <img class="w-[30px]" src="public/img/laptop.png" alt="" />
                    <p class="">3.Web Development</p>
                  </div>
                </li>

                <li>
                  <div class="flex">
                    <img
                      class="w-[30px]"
                      src="public/img/Yellow-Like.png"
                      alt=""
                    />
                    <p class="">4.Service & Delivery</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        class="nat-wrapper bg-[url(/public/img/BG.png)] bg-cover bg-center"
      >
        <div class="nat-container flex flex-col justify-center sm:py-24 py-24">
          <div class="text-center">
            <h1 class="font-bold text-3xl">Service I provide</h1>
            <p class="text-gray-400 py-4">
              My passion is all about building elegant and professional<br />
              user interfaces
            </p>
          </div>
          <div class="py-10">
            <ul class="flex space-x-8">
              <li class="w-1/4 bg-white py-20">
                <div>
                  <img
                    class="w-[60px] mx-auto"
                    src="public/img/deux-marteaux-croisé.jpg"
                    alt=""
                  />
                  <p class="font-bold text-center">User Interface Design</p>
                </div>
              </li>
              <li class="w-1/4 bg-white py-20">
                <div>
                  <img
                    class="w-[60px] mx-auto"
                    src="public/img/red-black-megaphone.png"
                    alt=""
                  />
                  <p class="font-bold text-center">Product Marketing</p>
                </div>
              </li>
              <li class="w-1/4 bg-white py-20">
                <div>
                  <img
                    class="w-[60px] mx-auto"
                    src="public/img/fusee.jpg"
                    alt=""
                  />
                  <p class="font-bold text-center">Web development</p>
                </div>
              </li>
              <li class="w-1/4 bg-white py-20">
                <div>
                  <img
                    class="w-[60px] mx-auto"
                    src="public/img/hands.png"
                    alt=""
                  />
                  <p class="font-bold text-center">Content Writing</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="mt-8 flex justify-center items-center">
            <a
              href="mailto:hello@nathaliekay.me"
              class="nat-btn nat-btn-blue whitespace-nowrap"
              >Request Quote</a
            >
          </div>
        </div>
      </section>
      <section class="nat-wrapper">
        <div class="nat-container flex">
          <div class="">
            <img
              class="w-[90px] py-14 bg-gray-100"
              src="public/img/diploma b.png"
              alt=""
            />
          </div>
          <div class="justify-start bg-white">
            <h1 class="font-bold px-4 py-2">
              Site of the Years for University of<br />
              Rwanda
            </h1>
            <p class="text-gray-400 px-4">
              University of Rwanda offers practical,goal-oriented education for
              undergraduate student,graduate.
            </p>
          </div>
          <div class="justify-end px-20">
            <h2 class="font-bold text-4xl">My achievements</h2>
            <p class="text-gray-400 py-4">
              Streamlined user experience with a redesigned interface,made the
              platform more accessible reaching a wider audience,led the
              design/development of a successfull project.
            </p>

            <h3 class="py-4 px-6 bg-gray-100">LANGUAGE I CAN SPEAK</h3>
            <ul class="flex justify-between px-3 py-8 bg-gray-100">
              <li class="text-blue-700 px-4">English</li>
              <li class="text-violet-600">French</li>
              <li class="text-green-800">Swahili</li>
              <li class="text-orange-500">Lingala</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        class="nat-wrapper bg-[url(/public/img/BG.png)] bg-cover bg-center py-20 mt-20"
      >
        <div class="nat-container">
          <div class="">
            <h1 class="font-bold text-4xl text-center">
              Have a project idea in mind.<br />Get in touch and let's chat!
            </h1>
          </div>
          <div class="">
            <div class="">
              <ul class="flex justify-center space-x-8 py-20">
                <li>
                  <div class="">
                    <img
                      class="w-[30px] mx-4 py-5"
                      src="public/img/send.png"
                      alt=""
                    />
                    <p class="text-gray-400">Email Address</p>
                    <a
                      href="mailto:hello@nathaliekay.me"
                      class="my email text-blue-700 line-height:1rem font-bold"
                      >nathaliekay64@gmail.com</a
                    >
                  </div>
                </li>
                <li>
                  <div class="">
                    <img
                      class="w-[30px] mx-4 py-3"
                      src="public/img/phone-icon.png"
                      alt=""
                    />
                    <p class="text-gray-400">Phone Number</p>
                    <a href="tel:+250782449473" class="font-bold"
                      >+250782449473<br />
                      +243980810942</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <section class="nat-wrapper bg-white">
        <div class="nat-container">
          <div class="text-center text-gray-400 py-4">
            <p>
              All content@-Current Nathalie Kayembe and Respective Copyright
              Holders.
            </p>
          </div>
        </div>
      </section>
    </footer>
  </body>
</template>
