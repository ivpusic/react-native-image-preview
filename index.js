import React, { Component } from 'react';
import { Modal, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  image: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  }
});

export default class ImagePreview extends Component {
  render() {
    let { source, visible, close, imageStyle, indicator, overlayStyle } = this.props;

    return (<Modal
      animationType={'fade'}
      transparent={true}
      onRequestClose={close}
      visible={visible}>
      <View style={[styles.overlay, overlayStyle]}>
        <TouchableWithoutFeedback onPress={close}>
          <Image indicator={indicator || ProgressBar} indicatorProps={this.props.indicatorProps} resizeMode={'contain'} source={source} style={[styles.image, imageStyle]} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>);
  }
}

ImagePreview.propTypes = {
  indicator: PropTypes.func,
  visible: PropTypes.bool,
  close: PropTypes.func,
  source: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  indicatorProps: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  imageStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  overlayStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};
