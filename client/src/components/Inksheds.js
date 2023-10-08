// ResponsesPage.js

import React from 'react';

const Content = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
      const fetchAllContent = async () => {
          try{
              const res = await axios.get("http://localhost:3001/api/inksheds");
              setContent(res.data);
          } catch(err) {
              console.log(err);
          }
      };
      fetchAllContent();
  }, []);
  return (
      <div>
          <div className="inkshed">
              {inksheds.map((inkshed)=> (
                  <div className="inkshed" key={inkshed.id}>
                      <h2>Separator</h2>
                      <p>{inkshed.content}</p>
                  </div>
              ))}
          </div>
          <button><Link to="/App"></Link></button>
      </div>
  )
}
