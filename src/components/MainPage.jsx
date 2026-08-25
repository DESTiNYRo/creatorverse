import React, { useState, useEffect } from 'react'
import { supabase } from '../client.js'
import './MainPage.css'

const MainPage = (props) => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from('creators').select('*');
      console.log('Fetched creators:', data);
      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data || []);
      }
    };
    fetchCreators();
  }, []);

  return (
    <div className="main-page">
      <h2>Creators</h2>
      {creators && creators.length > 0 ? (
        <div className="creators-grid">
          {creators.map((c) => (
            <div className="creator-card" key={c.id}>
              <div className="creator-image-wrap">
                {c.imageURL ? (
                  // If `image` is a URL
                  <img src={c.imageURL} alt={c.name || 'creator image'} className="creator-image" />
                ) : (
                  <div className="creator-image placeholder">No image</div>
                )}
              </div>
              <div className="creator-body">
                <h3 className="creator-name">{c.name || 'Untitled'}</h3>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="creator-link">
                    Visit
                  </a>
                ) : (
                  <span className="creator-link disabled">No URL</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No creators found.</p>
      )}
    </div>
  )
}

export default MainPage;