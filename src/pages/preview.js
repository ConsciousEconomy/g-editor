import React from 'react';
import renderHTML from 'react-render-html';

class Preview extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      rendered: '',
    };
  }
  componentDidMount () {
    const page = JSON.parse(localStorage.getItem('g-editor-page'));


    if (page) {
      this.setState({
        rendered: page.content ? page.content.rendered : '',
      });
    }
  }
  render () {
    const { rendered } = this.state;
    return rendered ? renderHTML(rendered) : <center><em>Add your custom block in the editor</em></center>;
  }
}

export default Preview;