import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className = 'w-full h-screen object-cover md:h-auto' src={BG_URL} alt="img" />
      </div>
      <div >
        <GptSearchBar/>
        <GptMovieSuggestions/>
      </div>
    </>
  )
}

export default GptSearch;