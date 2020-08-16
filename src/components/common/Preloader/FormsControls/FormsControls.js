import React from "react";
import css from './FormsControls.module.css';

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={css.formControl + " " + (hasError ? css.error : "")} >
      <textarea {...props} {...input}/>
      {hasError && <p>{meta.error}</p>}      
    </div>
  );
}