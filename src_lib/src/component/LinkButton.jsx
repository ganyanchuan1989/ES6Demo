import { Component, PropTypes } from 'react';

class LinkButton extends Component {
    constructor (props) {
        super(props);
        this.state = {
            disabled: this.props.disabled,
            show: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.disabled !== this.props.disabled) {
            this.setState({ disabled: nextProps.disabled });
        }
    }

    handleClick() {
        alert(123);
    }

    render() {

        return (
            <button onClick={this.handleClick} >
                Button
            </button>
        );
    }
}

LinkButton.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    once: PropTypes.bool,
    status: PropTypes.string,
    style: PropTypes.object
};

module.exports = LinkButton;

