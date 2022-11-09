/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-class-component-methods */

/* eslint-disable prefer-const */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */

/* eslint-disable react/static-property-placement */
/**
 * react-native-flip-toggle-button
 * A cross-platform customisable toggle button built upon react-native's TouchableOpacity and Animated APIs
 * https://github.com/ashishpandey001/react-native-flip-toggle-button
 * Email:hmaster0@gmail.com
 * @ashishpandey001
 */

import React from 'react'
import { Text, View, TouchableOpacity, Animated } from 'react-native'

import PropTypes from 'prop-types'

class ToggleSwitch extends React.Component {
  static propTypes = {
    value: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    buttonOnColor: PropTypes.string,
    buttonOffColor: PropTypes.string,
    disabledButtonOnColor: PropTypes.string,
    disabledButtonOffColor: PropTypes.string,
    sliderOnColor: PropTypes.string,
    sliderOffColor: PropTypes.string,
    disabledSliderOnColor: PropTypes.string,
    disabledSliderOffColor: PropTypes.string,
    buttonWidth: PropTypes.number.isRequired,
    buttonHeight: PropTypes.number.isRequired,
    buttonRadius: PropTypes.number,
    sliderRadius: PropTypes.number,
    changeToggleStateOnLongPress: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    sliderMargin: PropTypes.number,
  }

  static defaultProps = {
    disabled: false,
    buttonOnColor: '#7EC152',
    buttonOffColor: '#757575',
    sliderOnColor: '#fff',
    sliderOffColor: '#fff',
    disabledButtonOnColor: '#bfe0ab',
    disabledButtonOffColor: '#b5b3b3',
    disabledSliderOnColor: '#fff',
    disabledSliderOffColor: '#fff',
    buttonRadius: 15,
    sliderRadius: 15,
    changeToggleStateOnLongPress: true,
    sliderMargin: 0,
  }

  constructor(props) {
    super(props)
    this.props = props
    let labelStyle = {}
    if (!this.props.labelStyle?.fontSize) {
      labelStyle = {
        ...this.props.labelStyle,
        fontSize: 0.1 * this.props.buttonWidth,
      }
    } else {
      labelStyle = { ...this.props.labelStyle }
    }
    this.labelStyle = labelStyle
    this.dimensions = this.calculateDimensions(this.props)
    this.offsetX = new Animated.Value(0)
    let toValue = 0
    if (this.props.value) {
      toValue = toValue =
        this.dimensions.buttonWidth - this.dimensions.translateX
    } else {
      toValue = 0
    }
    Animated.timing(this.offsetX, {
      toValue,
      duration: 0,
      useNativeDriver: true,
    }).start()
  }

  componentDidUpdate(prevProps) {
    const { props: currentProps } = this
    let labelStyle
    if (!currentProps.labelStyle.fontSize) {
      labelStyle = {
        ...currentProps?.labelStyle,
        fontSize: 0.1 * currentProps.buttonWidth,
      }
    } else {
      labelStyle = { ...currentProps.labelStyle }
    }
    this.labelStyle = labelStyle
    this.dimensions = this.calculateDimensions(currentProps)
    let toValue = 0
    if (currentProps.value) {
      toValue = toValue =
        this.dimensions.buttonWidth - this.dimensions.translateX
    } else {
      toValue = 0
    }
    Animated.timing(this.offsetX, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  calculateDimensions = (toggleProps) => {
    let sliderWidth = 0
    let sliderHeight = 0
    let sliderRadius = 0
    let margin = 0
    if (!toggleProps.sliderWidth && !toggleProps.sliderHeight) {
      sliderWidth = sliderHeight = 0.9 * toggleProps.buttonHeight
    } else if (!toggleProps.sliderHeight) {
      sliderWidth = toggleProps.sliderWidth
      sliderHeight = 0.9 * toggleProps.buttonHeight
    } else {
      sliderWidth = toggleProps.sliderWidth
      sliderHeight = toggleProps.sliderHeight
    }
    if (toggleProps.buttonRadius && !toggleProps.sliderRadius) {
      sliderRadius = toggleProps.buttonRadius
    } else {
      sliderRadius = toggleProps.sliderRadius
    }
    if (!toggleProps.margin) {
      margin = parseInt(0.02 * toggleProps.buttonWidth)
    }
    let dimensions = {
      buttonWidth: toggleProps.buttonWidth,
      buttonHeight: toggleProps.buttonHeight,
      buttonRadius: parseInt(
        (toggleProps.buttonRadius / 100) * toggleProps.buttonWidth,
      ),
      sliderWidth,
      sliderHeight,
      sliderRadius: parseInt((sliderRadius / 100) * sliderWidth),
      margin,
      translateX: 2 * parseInt(margin) + sliderWidth,
    }
    return dimensions
  }

  toggleCommon = () => {
    return !this.props.value
  }

  onTogglePress = (e) => {
    const newState = this.toggleCommon()
    this.props.onToggle(newState)
    e.stopPropagation()
  }

  onToggleLongPress = (e) => {
    let newState = this.props.value
    if (this.props.changeToggleStateOnLongPress) {
      newState = this.toggleCommon()
    }
    if (this.props.onToggleLongPress) {
      this.props.onToggleLongPress(newState)
    }
    e.stopPropagation()
  }

  setBackgroundColor = (component) => {
    if (this.props.disabled && this.props.value) {
      let key = `disabled${component}OnColor`
      let { [key]: data } = this.props
      return data
    }
    if (this.props.disabled && !this.props.value) {
      let key = `disabled${component}OffColor`
      let { [key]: data } = this.props
      return data
    }
    if (this.props.value) {
      let key = `${component}OnColor`
      let { [key]: data } = this.props
      return data
    }
    let key = `${component}OffColor`
    let { [key]: data } = this.props
    return data
  }

  render() {
    return (
      <View
        style={[styles.container]}
        pointerEvents={this.props.disabled ? 'none' : 'auto'}
      >
        <TouchableOpacity
          disabled={this.props.disabled}
          style={{
            justifyContent: 'center',
            borderRadius: this.dimensions.buttonRadius,
            height: this.dimensions.buttonHeight,
            width: this.dimensions.buttonWidth,
            backgroundColor: this.setBackgroundColor('button'),
          }}
          activeOpacity={1}
          onPress={(e) => this.onTogglePress(e)}
          /* Having an unwanted effect of not stopping parent event click */
          // onLongPress={(e) => this.onToggleLongPress(e)}
        >
          {!this?.props?.isNotEnabledLabel &&
            (this.props.value ? (
              <Text
                style={[
                  { alignSelf: 'flex-start', paddingLeft: 10 },
                  this.props.labelStyle,
                ]}
              >
                {this.props.onLabel}
              </Text>
            ) : (
              <Text
                style={[
                  { alignSelf: 'flex-end', paddingRight: 10 },
                  this.props.labelStyle,
                ]}
              >
                {this.props.offLabel}
              </Text>
            ))}

          <Animated.View
            style={{
              margin: this.dimensions.margin + (this?.props?.sliderMargin || 0),
              transform: [{ translateX: this.offsetX }],
              position: 'absolute',
              width: this.dimensions.sliderWidth,
              height: this.dimensions.sliderHeight,
              borderRadius: this.dimensions.sliderRadius,
              backgroundColor: this.setBackgroundColor('slider'),
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default ToggleSwitch

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}
