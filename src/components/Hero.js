import React from 'react';
import A from './buttons/A';
import MyLink from './buttons/MyLink';
import Button from './buttons/Button';
import Socials from './buttons/Socials';

export default function Hero({ next }) {
  const textBase = 'text-center lg:text-left font-bold py-4 leading-relaxed '
  const textN = 'text-xl sm:text-3xl lg:text-4xl ';
  const textL = 'text-2xl sm:text-4xl lg:text-5xl ';
  const gradient = 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'; // pr-0.5

  const textLink = textBase;

  return (
    <div>
      <div className='grid grid-cols-1 gap-2 lg:grid-cols-2'> {/* justify-self-center lg:justify-self-start */}
        <div className='text-center lg:text-left'>
          <h2 className={textBase + textL + gradient}>Evan Walter</h2> {/* <h2 className={text}>Hi, my name is <span className={gradient}>Evan Walter</span></h2> */}
          <h2 className={textBase + textN}>
            I am a Software Engineer specializing in React.
          </h2>
          <Socials addClassName='mx-4 my-4 text-3xl' />
        </div>
        <div>
          <iframe
            width='560'
            height='315'
            // width='590'
            // height='345'
            className='hero-vid m-auto'
            title='Welcome Video'
            frameBorder='0'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            src='https://www.loom.com/embed/cfb7f4e0581d48cc98a3ebb8c2ca4a06?autoplay=0'
          />
        </div>
      </div>
      <div className={'pt-12 text-lg text-center ' + gradient}>I built this portfolio from scratch with{' '}
        <A h='https://reactjs.org/' addClassName={textLink}>React,</A>
        {' '}
        <A h='https://gatsbyjs.com/' addClassName={textLink}>Gatsby,</A>
        {' '}and{' '}
        <A h='https://tailwindcss.com/' addClassName={textLink}>Tailwind</A>
        . Check out the source code{' '}
        <A h='https://github.com/Evan-Walter/portfolio/' addClassName={textLink}>
          here
        </A>.
      </div>
      <div className='pt-12 pb-2 text-center'>
        <MyLink to={next}>
          <Button textB='Know more' />
        </MyLink>
      </div>
    </div>
  );
}
