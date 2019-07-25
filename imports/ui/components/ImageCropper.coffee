import React, { Component } from 'react'
import Cropper from 'react-cropper'

import '../../../node_modules/cropperjs/dist/cropper.css'

export default class ImageCropper extends Component
  constructor: (props) ->
    super props

  crop: =>
    console.log @refs.cropper.getCroppedCanvas().toDataURL()
  
  render: ->
    { src } = @props

    <Cropper 
      ref="cropper"
      src={src}
      style={{ height: 400, width: "100%", margin:"1em 0" }}
      aspectRatio={16 / 9}
      guides={false}
      crop={@crop}
    />
