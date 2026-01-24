import { useEffect, useState } from 'react'
import { TVShowAPI } from './api/tv-show'
import { backdrop_base_url } from './config'

TVShowAPI.fetchPopulars()

function App() {
  const [currentTVShow, setCurrentTVShow] = useState()

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars()

    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0])
    }    
  }

  useEffect(() => {
    async function load() {
      const popularTVShowList = await TVShowAPI.fetchPopulars()
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0])
      }
    }

    load()
  }, [])


  console.log(currentTVShow)

  return (
    <div
      className='app-container'
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55),  rgba(0, 0, 0, 0.55)), url("${backdrop_base_url}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : 'black'
      }}
    >
      <div className='header'>
        <div className='row'>
          <div className='col-4'>
            <div className='logo'>Visiōnārium</div>
            <div>Subtitle</div>
          </div>
          <div className='col-md-12 col-lg-4'>
            <input 
            style={{ width: '100%' }}
            type='text' 
            />
          </div>
        </div>
      </div>
      <div className='tv-show-detail'>
        TV Show Details
      </div>
      <div className='recommended-tv-shows'>
        Recommended TV Shows
      </div>
    </div>
  )
}

export default App
