'use client';

import { Button, Input, Typography } from '@material-tailwind/react';
import { Logo } from '../constants/svg';

export default function Header() {
  return (
    <div className='flex w-full justify-between'>
      <div className='flex gap-3'>
        {Logo}
        <Button variant='outlined' className='rounded-xl'>
          Catalog
        </Button>
        <input type='text' placeholder='Outlined' className='border rounded-xl' />
      </div>
      <div className='flex justify-between items-center gap-10'>
        <Typography>About us</Typography>
        <Typography>Blog</Typography>
        <Typography>Contact</Typography>
      </div>
      <div className='flex gap-3'>
        <Button variant='outlined' className='rounded-xl'>
          CAD
        </Button>
        <Button variant='outlined' className='rounded-xl'>
          man
        </Button>
        <Button variant='outlined' className='rounded-xl'>
          bucket
        </Button>
      </div>
    </div>
  );
}
