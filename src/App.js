import React from 'react';

import Routes from './routes';

/*deve-se incluir o component aqui para ser interpretado */
import Header from './Header';

import Article from './Article';

import Footer from './Footer';


/*as duas maneiras estão corretas*/

class  App extends React.Component{
  render (){
    return (
      <div>        
        <Header />
        <Article />
        <Footer />
      </div>
    );
  }
}


export default App;
