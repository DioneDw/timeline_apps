import Image from 'next/image'
import { User } from 'lucide-react'

export default function Home() {
  return <main className='grid min-h-screen grid-cols-2'>
    {/* Left */}
    <div className='flex flex-col bg-[url(../assets/bg-stars.svg)] bg-coveritems-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 px-28 py-16'>
      <div className='absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2
       bg-purple-700 opacity-50 rounded-full blur-full'>

      </div>
      {/* Stripes */}
      <div className='absolute right-2 top-0 bottom-0 w-2 bg-stripes'/>

        <a href="" className='flex items-center gap-3 text-left hover:text-gray-50 transition-colos'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400'>
            <User className='h-5 w-5 text-gray-500'/>
          </div>
          <p className='max-w-[140px] text-sm leading-snug'><span className='underline'>Crie a sua conta</span> e salve suas mémorias!</p>
        </a>
    </div>
    {/* Right */}
    <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover'>
      <div className='flex flex-1 items-center justify-center'>
        <p className='w-[360px] text-center leading-relaxed'>Você ainda não registrou nenhuma lembrança, comece a{' '}
        <a href="" className='underline hover:text-gray-50'>criar agora</a>
         !
        </p>
      </div>
    </div>
  </main>
}
