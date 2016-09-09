import React, {Component} from 'react';
import {Modal, View, TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';

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
    let {source, visible, close, imageStyle} = this.props;

    return <Modal
        animationType={'fade'}
        transparent={true}
	onRequestClose={close}
        visible={visible}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={close}>
          <Image resizeMode={'contain'} source={source} style={[styles.image, imageStyle]} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>;
  }
}

ImagePreview.propTypes = {
  visible: React.PropTypes.bool,
  close: React.PropTypes.func,
  source: React.PropTypes.object,
  imageStyle: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.object
  ]),
  children: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array
  ])
};

