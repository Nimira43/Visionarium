import { TVShowAPI } from "./api/tv-show"

TVShowAPI.fetchPopulars()

function App() {
  return (
    <div className='app-container'>
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
