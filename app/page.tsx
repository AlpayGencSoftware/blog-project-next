import Image from 'next/image'
import Posts from './components/Posts'

export const revalidate=10;

export default function Home() {
  return (
    <main className='px-6 mx-auto'>
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
         Hello and Welcome 👋 &nbsp;
         <span className='whitespace-nowrap'>
             I&#39;m <span className='font-bold'>Alpay</span>.
         </span>  
      </p>
        <Posts/>
    </main>
  )
}