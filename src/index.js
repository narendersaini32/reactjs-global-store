import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

class ContextProvider extends Component {
    constructor(props) {
        super(props);
        const { defaultState = {} } = props;
        this.state = defaultState ;
    }


    updateContext = (data, callback = () => { }) => {
        this.setState(data, () => {
            if (callback) { callback(); }
        });
    }

    render() {
        const { children } = this.props;
        return (
            <Context.Provider
                value={{ ...this.state, updateContext: this.updateContext }}
            >
                {children}
            </Context.Provider>
        );
    }
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
    defaultState: PropTypes.instanceOf(Object)
};

ContextProvider.defaultProps = {
    defaultState: {}
}

export { ContextProvider, Context };
