import '../styles/globals.css'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar';
import Sidemenu from '../components/sidemenu'
import Textbox from '../components/Textbox'
import Home from '../components/Home';

export default function App({ Component, pageProps }) {
  const router=useRouter();
  const paths=["/","/auth/login","/auth/register"];

  if(paths.includes(router.pathname)) return <Component {...pageProps} />

  return <div>
    <Navbar />
    <div className='flex justify-center'>
      <div className='w-[16%] bg-gray-100'>
        {/* <Sidemenu />
         */}
         <Home/>
      </div>
      <div className='w-[90%]'>
        <Component {...pageProps} />
      </div>
    </div>
  </div>
}
