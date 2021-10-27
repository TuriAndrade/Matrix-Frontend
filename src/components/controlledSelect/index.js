import { useLayoutEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ArrowDown, Times } from "../../svgs/icons";

export default function ControlledSelect({
  label,
  state,
  setState,
  defaultValue = "escolha uma opção",
  error,
  options,
  keepCase = false,
  ...rest
}) {
  const [optionsIn, setOptionsIn] = useState(false);
  const [text, setText] = useState(null);

  useLayoutEffect(() => {
    options.map((option) => option.value === state && setText(option.text));
  }, [state, defaultValue, options]);

  return (
    <div className="form__box">
      <label
        className={error ? "form__label form__label--error" : "form__label"}
      >
        {label}
      </label>
      <div {...rest} className={error ? "select select--error" : "select"}>
        <CSSTransition
          in={optionsIn}
          timeout={300}
          classNames="select__closeSection"
          unmountOnExit
          onClick={() => setOptionsIn(false)}
        >
          <div className="select__closeSection"></div>
        </CSSTransition>
        <div
          className={
            keepCase
              ? "select__selectedOption select__selectedOption--keepCase"
              : "select__selectedOption"
          }
          onClick={() => setOptionsIn((previous) => !previous)}
        >
          {text || defaultValue}
        </div>
        <div
          className="select__optionsBtn"
          onClick={() => setOptionsIn((previous) => !previous)}
        >
          <ArrowDown />
        </div>
        <CSSTransition
          in={optionsIn}
          classNames="select__optionsBox"
          timeout={300}
          unmountOnExit
        >
          <div className="select__optionsBox">
            <div className="select__optionsBoxHeading">
              {label}
              <Times
                className="select__closeBtn"
                onClick={() => setOptionsIn((previous) => !previous)}
              />
            </div>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  setState(option.value);
                  setOptionsIn((previous) => !previous);
                }}
                className={
                  keepCase
                    ? "select__option select__option--keepCase"
                    : "select__option"
                }
              >
                {option.text}
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
      {error && <p className="form__errorMessage">{error}</p>}
    </div>
  );
}
