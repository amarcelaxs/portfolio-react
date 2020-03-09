import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Article = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Titulo do artigo</h1>
        <p className="lead">Conteúdo do artigo. </p>
      </Jumbotron>
    </div>
  );
};


export default Article;