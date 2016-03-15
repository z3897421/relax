import Component from 'components/component';
import React from 'react';
import velocity from 'velocity-animate';
import {findDOMNode} from 'react-dom';

export default class AnimateProps extends Component {
  static propTypes = {
    props: React.PropTypes.object,
    options: React.PropTypes.object,
    children: React.PropTypes.node
  };

  static defaultProps = {
    props: {},
    options: {}
  };

  componentDidMount () {
    var dom = findDOMNode(this);
    velocity(dom, this.props.props, this.props.options);
  }

  render () {
    return this.props.children;
  }
}
