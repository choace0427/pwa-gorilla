'use client';

import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import Header from './components/header';
import Footer from './components/footer';
import { Typography } from '@material-tailwind/react';
import { nameSelector, nameState } from './recoil/atom';

export default function Home() {
  const [name, setName] = useRecoilState(nameState);
  const nameSel = useRecoilValue(nameSelector);
  return (
    <main className='p-6 w-full'>
      {name}
      <Typography>{nameSel}</Typography>
    </main>
  );
}
