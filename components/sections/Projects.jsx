import Image from 'next/image'
import React from 'react'
import application1_1 from '../../public/assets/application1.1.png'



function Projects() {
  return (
    <section className="py-16">
      <div className="mx-auto px-6 max-w-6xl text-gray-500">
        <div className="relative">
          <div className="relative z-10 grid gap-3 grid-cols-6">
            {/* Customizable Feature */}
            <div className="col-span-full lg:col-span-2 overflow-hidden flex  relative p-8 rounded-xl bg-[#f3f3f3] border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="size-fit m-auto relative flex flex-col items-center">
                <div className="relative h-24 w-56 flex items-center justify-center">
                     <Image src={application1_1}/>
                  
                </div>
                <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">Customizable</h2>
                <p className="text-sm text-gray-700 mb-4">Technical Sapien sought a chatbot solution to enhance community engagement and streamline access to resources. MetaUpSpace developed an AIpowered chatbot, integrated into Technical Sapien's platform, aimed at providing personalized assistance and improving user interaction.</p>
              </div>
            </div>

            {/* Secure by Default Feature */}
            <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div>
                <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                  <svg className="w-24 m-auto h-fit" viewBox="0 0 212 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG path data */}
                  </svg>
                </div>
                <div className="mt-6 text-center relative z-10 space-y-2">
                  <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">Secure by default</h2>
                  <p className="dark:text-gray-300 text-gray-700">Provident fugit and vero voluptate. magnam magni doloribus dolores voluptates a sapiente nisi.</p>
                </div>
              </div>
            </div>

            {/* Faster than Light Feature */}
            <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div>
                <div className="pt-6 lg:px-6">
                  <svg className="w-full" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG path data */}
                  </svg>
                </div>
                <div className="mt-14 text-center relative z-10 space-y-2">
                  <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">Faster than light</h2>
                  <p className="dark:text-gray-300 text-gray-700">Provident fugit vero voluptate. magnam magni doloribus dolores voluptates inventore nisi.</p>
                </div>
              </div>
            </div>

            {/* Graph Feature */}
            <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                  <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <svg className="size-6 m-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      {/* SVG path data */}
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">Faster than light</h2>
                    <p className="dark:text-gray-300 text-gray-700">Provident fugit vero voluptate. Voluptates a sapiente inventore nisi.</p>
                  </div>
                </div>
                <div className="overflow-hidden relative mt-6 sm:mt-auto h-fit -mb-[34px] -mr-[34px] sm:ml-6 py-6 p-6 border rounded-tl-lg dark:bg-white/5 dark:border-white/10">
                  <div className="absolute flex gap-1 top-2 left-3">
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                  </div>
                  <svg className="w-full sm:w-[150%]" viewBox="0 0 366 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG path data */}
                  </svg>
                </div>
              </div>
            </div>

            {/* Keep Your Loved Ones Safe Feature */}
            <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
              <div className="h-full grid sm:grid-cols-2">
                <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                  <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <svg className="size-6 m-auto" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                      {/* SVG path data */}
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 dark:text-white">Keep your loved ones safe</h2>
                    <p className="dark:text-gray-300 text-gray-700">Voluptate. magnam magni doloribus dolores voluptates a sapiente inventore nisi.</p>
                  </div>
                </div>
                <div className="mt-6 relative sm:-mr-[--card-padding] sm:-my-8 before:absolute before:w-px before:inset-0 before:mx-auto before:bg-gray-200 dark:before:bg-gray-800">
                  <div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
                    <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                      <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">Glodie</span>
                      <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                        <Image className="rounded-full border border-gray-950/5 dark:border-white/5 size-full" src={application1_1} alt="" width={28} height={28} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-[calc(50%-1rem)] relative">
                      <div className="size-8 ring-4 ring-white dark:ring-[--card-dark-bg]">
                        <Image className="rounded-full border border-gray-950/5 dark:border-white/5 size-full" src={application1_1} alt="" width={32} height={32} />
                      </div>
                      <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">M. Irung</span>
                    </div>
                    <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                      <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">B. Ng</span>
                      <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                        <Image className="rounded-full border border-gray-950/5 dark:border-white/5 size-full" src={application1_1} alt="" width={28} height={28} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
