import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <section className='min-h-screen bg-grid-zinc-50'>
      <MaxWidthWrapper className='relative pb-24 pt-10 sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52'>
        <div className='hidden lg:block absolute inset-0 top-8'>
          {/* circle */}
        </div>

        <div className='px-6 lg:[x-0 lg:pt-4'>
          <div className='relative mx-auto text-center flex flex-col items-center'>
            <h1 className='relative leading-snug w-fit tracking-tight text-balance mt-16 font-bold text-gray-900 text-5xl md:text-6xl'>
              What do you{" "}
              <span className='whitespace-nowrap'>
                th
                <span className='relative'>
                  i
                  <span className='absolute inset-x-0 -top-2 -translate-x-3'>
                    <Icons.brain className='h-7 w-7 md:h-8 md:w-8' />
                  </span>
                </span>
                nk
              </span>{" "}
               about...
            </h1>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
