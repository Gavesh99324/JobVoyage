import React from 'react';
import jobvoyage from '../assets/jobvoyage.jpg'
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'> 
        <img src={jobvoyage} alt='logo' className='w-[100px] ml-[30px] rounded-4xl' />
        <div className='flex gap-4 max-sm:text-xs'>
            <Button variant="contained" color="primary" sx={{ borderRadius: '9999px', px: 3, mr: 2 }} size='small'>Recruiter Login</Button>
            <Button variant='outlined' color="secondary" sx={{ borderRadius: '9999px', px: 3 }} size='small'>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
 