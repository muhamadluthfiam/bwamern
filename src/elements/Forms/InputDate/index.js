import React, { useState, useRef, useEffect } from "react"
import propTypes from 'prop-types'
import { DateRange } from "react-date-range"

import "./index.scss"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

import formatDate from "utils/format"
import iconCalendar from "assets/icons/ic_calendar.svg"

export default function Date(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePic kerChange = value => {
    const target = {
      target: {
        value: value.selection,
        name: name
      }
    };
    props.onchange(target)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  })
  return (
    <div>

    </div>
  )
}

Date.propTypes = {
  value: propTypes.object,
  onchange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string
}