import { useState, useLayoutEffect } from "react";

export default function ControlledCheckbox({
  label,
  state,
  setState,
  options,
  ...rest
}) {
  const [optionsState, setOptionsState] = useState([]);

  useLayoutEffect(() => {
    setOptionsState(
      options.map((option) => (state.includes(option.value) ? true : false))
    );
  }, [options, state]);

  return (
    <div className="form__box">
      <label className="form__label">{label}</label>
      <div {...rest} className="checkbox">
        {options.map((option, optionIndex) => (
          <div
            key={option.value}
            onClick={() => {
              setState((previous) =>
                previous.includes(option.value)
                  ? previous.filter((entry) => entry !== option.value)
                  : [...previous, option.value]
              );
            }}
            className={
              optionsState[optionIndex]
                ? "checkbox__option checkbox__option--checked"
                : "checkbox__option"
            }
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
}
