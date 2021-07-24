import React from 'react';
import Editor from './Editor';
import Footer from './Footer';

function Previewer() {
  return (
    <div>
      <h1 id="title">Markdown Previewer</h1>
      <Footer />
      <Editor />
    </div>
  );
}

export default Previewer;
