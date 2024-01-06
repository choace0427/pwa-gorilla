import Image from 'next/image';
import Header from './components/header';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='p-6 w-full'>
      <Header />
      <Footer />
    </main>
  );
}
