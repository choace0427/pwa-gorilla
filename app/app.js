'use client';

import { RecoilRoot, useRecoilState } from 'recoil';
import Header from './components/header';
import Footer from './components/footer';
import { Typography } from '@material-tailwind/react';
import { nameState } from './recoil/atom';

export default function App({ children }) {
  return (
    <RecoilRoot>
      <main className='p-6 w-full'>
        <Header />
        {children}
        <Footer />
      </main>
    </RecoilRoot>
  );
}
