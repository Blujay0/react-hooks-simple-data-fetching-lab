// create your App component here
import { useEffect, useState } from 'react'

function App() {
  const [imageUrl, setImageUrl] = useState('')
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(dog => {
        setImageUrl(dog.message);
        setIsLoaded(true);
    });
}, []);

// if the data hasn't been loaded, show a loading indicator
if (!isLoaded) return <h3>Loading...</h3>

  return <img src={imageUrl} alt="A Random Dog"/>
}

export default App