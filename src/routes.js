import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
/*
BrowserRouter para trabalhar com rotas

Switch para trabalhar um componente por pagina

Route para trabalhar com as rotas

*/

import Main from './pages/Main';
import SobreEmpresa from './pages/SobreEmpresa';
import Contato from './pages/Contato';

/*Route path= indica como vc deve esta acessando na url */
function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        
        <Route path="/" exact component={Main} />

        <Route path="/sobre-empresa" exact component={SobreEmpresa} />

        <Route path="/contato" exact component={Contato} />
      </Switch>
    </BrowserRouter>
  )
};


export default Routes;