import React from "react";
import css from './FormsControls.module.css';


const FormControl = ({ input, meta, fildType, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={css.formControl + " " + (hasError ? css.error : "")} >
      {React.createElement(fildType, {...input, ...props})} 
      {hasError && <p>{meta.error}</p>}
    </div>
  );
}
export const Textarea = (props) => {
  return (
    <FormControl {...props} fildType="textarea"/>
  );
}
export const Input = (props) => {
  return (
    <FormControl {...props} fildType="input"/>
  );
}