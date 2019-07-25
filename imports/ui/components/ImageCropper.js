import React, { Component } from 'react';
import Cropper from 'react-cropper';

import '../../../node_modules/cropperjs/dist/cropper.css';

export default class ImageCropper extends Component {
  constructor(props) {
    super(props);
    
    this.crop = this.crop.bind(this);
  }

  crop() {
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  render() {
    const { src } = this.props;

    return (
      <Cropper 
        ref="cropper"
        src={src}
        style={{ height: 400, width: "100%", margin:"1em 0" }}
        aspectRatio={16 / 9}
        guides={false}
        crop={this.crop}
      />
    );
  }
}
