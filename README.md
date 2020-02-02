reactjs-global-store is a pacakge for managing global state for React. Its based on ContextApi.

### Features

- Its just 4.1 kB.
- Easy to use
- Required only two steps for config.
- Reactive by nature.


#How to use

1. **Install the package**
`npm install --save reactjs-global-store`

2. **Import at top level and wrap your app**
  

    /* eslint-disable react/jsx-filename-extension */
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { ContextProvider } from 'reactjs-global-store';
    
    import { Routing } from './src';
    
    import './src/style/index.less';
    
    ReactDOM.render(
      <ContextProvider>
        <Routing />
      </ContextProvider>,
      document.getElementById('app'),
    );
    

3 . **To access the values**
 

    import React, { Component } from 'react';
    import { Context } from 'reactjs-global-store';
    
    
    export class PropertyView extends Component {
      constructor(props) {
        super(props);
        this.state = {
        };
      }
    
      render() {
        console.log('TCL: PropertyView -> render -> this.context', this.context);
        return (
          <div />
        );
      }
    }
    PropertyView.contextType = Context;
    


**To update the store**


     const { updateContext } = this.context || {};
     updateContext({ coordsList:[ ], search: true });

**To set default store values**



     <ContextProvider
        defaultState={{ coordsList: [] }}
      >
        <Routing />
      </ContextProvider>

