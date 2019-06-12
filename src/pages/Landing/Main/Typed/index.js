import React, { Component } from 'react';
import Typed from 'typed.js';

import './styles.css';

class TypedReactDemo extends Component {
  componentDidMount () {
    const { strings } = this.props;
    // other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
    this.typed.start();
  }

  componentWillUnmount () {
    // Make sure to destroy Typed instance on unmounting
    this.typed.destroy();
  }

  render () {
    return (
      <div className='wrap'>
        <div className='type-wrap'>
          <span
            style={{ whiteSpace: 'pre' }}
            ref={el => {
              this.el = el;
            }}
          />
        </div>
      </div>
    );
  }
}

const About = () => (
  <TypedReactDemo
    strings={[
      `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At atque culpa autem
        maxime velit et dolore accusamus,
        ducimus consequuntur debitis repellat facere adipisci quaerat id? Excepturi,
        consequatur sint. Consequuntur, animi?

      Lorem ipsum dolor sit amet consectetur adipisicing elit. At atque culpa autem
      maxime velit et dolore accusamus,
      ducimus consequuntur debitis repellat facere adipisci quaerat id? Excepturi,
      consequatur sint. Consequuntur, animi?
      `,
    ]}
  />
);
export default About;
