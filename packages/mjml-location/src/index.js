import { MJMLElement } from 'mjml-core'
import MJMLImage from 'mjml-image'
import MJMLText from 'mjml-text'
import React, { Component } from 'react'

const tagName = 'mj-location'
const defaultMJMLDefinition = {
  attributes: {
    'color': '#3aa7ed',
    'font-family': 'Roboto, sans-serif',
    'font-size': '18px',
    'font-weight': 500,
    'padding': '10px 25px',
    'img-src': 'http://i.imgur.com/DPCJHhy.png'
  }
}
const endingTag = true
const columnElement = true

@MJMLElement
class Location extends Component {

  styles = this.getStyles()

  getStyles () {
    const { mjAttribute } = this.props

    return {
      text: {
        color: mjAttribute('color'),
        textDecoration: 'none'
      }
    }
  }

  getAttributes () {
    const { mjAttribute } = this.props

    return {
      text: {
        'font-family': mjAttribute('font-family'),
        'font-size': mjAttribute('font-size'),
        'font-weight': mjAttribute('font-weight'),
        'text-decoration': mjAttribute('text-decoration'),
        'padding': 0
      },
      img: {
        'padding': 0,
        'src': mjAttribute('img-src')
      }
    }
  }

  render () {
    const { mjAttribute } = this.props
    const attrs = this.getAttributes()

    const address = `http://maps.google.com/maps?q=${encodeURIComponent(mjAttribute('address'))}`
    const text = mjAttribute('text') || mjAttribute('address')

    return (
      <table width="100%">
        <tbody>
          <MJMLImage
            {...attrs.img}
            href={address} />
          <MJMLText
            {...attrs.text}
            align="center">
            <a
              href={address}
              style={this.styles.text}
              target="_blank">
              {text}
            </a>
          </MJMLText>
        </tbody>
      </table>
    )
  }
}

Location.tagName = tagName
Location.defaultMJMLDefinition = defaultMJMLDefinition
Location.endingTag = endingTag
Location.columnElement = columnElement

export default Location
