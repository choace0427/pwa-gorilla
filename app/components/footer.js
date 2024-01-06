import { secondary } from '../constants/color';
import { FooterLogo, facebook, instagram, youtube } from '../constants/svg';

export default function Footer() {
  return (
    <div style={{ backgroundColor: secondary }} className='p-8 rounded-xl'>
      <div className='flex justify-between'>
        {FooterLogo}
        <ul className='text-white font-semibold'>
          <li>Blog</li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
        <ul className='text-white font-semibold'>
          <li>Privacy Policy</li>
          <li>Refound Policy</li>
          <li>Terms of Service</li>
          <li>Shipping Policy</li>
        </ul>
        <ul className='text-white font-semibold'>
          <li>{youtube}</li>
          <li>{facebook}</li>
          <li>{instagram}</li>
        </ul>
      </div>
    </div>
  );
}
