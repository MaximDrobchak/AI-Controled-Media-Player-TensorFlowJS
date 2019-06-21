import React, { Component } from 'react';
import Typed from 'typed.js';

import './styles.css';

class TypedReactDemo extends Component {
  componentDidMount () {
    const { strings } = this.props;
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
    };
    this.typed = new Typed(this.el, options);
    this.typed.start();
  }

  componentWillUnmount () {
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

export default () => (
  <TypedReactDemo
    strings={[
      `
      function (initialError = null, initialLoading = null){
        const [ error, setError ] = useState(initialError);
        useEffect(() => {
          if (error) setTimeout(() => {setError(null)}, 1000);
          [ error ],
        );

        const [ isLoading, setLoading ] = useState(initialLoading);
        useEffect(() => {
          if (isLoading) setTimeout(() => {setLoading(null)}, 1000);
          [ isLoading ],
        );
        const getError = error => setError(error);
        const getLoading = isLoading => setLoading(isLoading);
        return {
          error,
          getError,
          getLoading,
          isLoading,
        };
      }
      `,
    ]}
  />
);
