import React from 'react';
import Priyanka from '../../Priyanka.jpg';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <img src={Priyanka} alt="Placeholder" height={500} width={400}/>
      </main>
    </div>
  );
}

export default HomePage;