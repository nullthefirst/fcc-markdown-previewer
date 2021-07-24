import React from 'react';
import marked from 'marked';
import html from 'html-react-parser';
import { defaultMarkdown } from './markdown';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultMarkdown,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    const rawHtml = marked(this.state.input);
    const parsedHtml = html(rawHtml);

    return (
      <div id="board">
        <textarea
          id="editor"
          rows="20"
          cols="10"
          value={this.state.input}
          onChange={this.handleInput}></textarea>
        <br />
        <div id="preview">{parsedHtml}</div>
      </div>
    );
  }
}

export default Editor;
