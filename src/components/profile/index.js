import React from 'react'

//importing components
import Footer from '../common/footer';
import Header from '../common/header';
import ProfileFields from './profileFields';

const ProfileComponent = () => {
  return (
    <>
     <Header  
      />
      <ProfileFields />
      
      <Footer />
    </>
  )
}

export default ProfileComponent;