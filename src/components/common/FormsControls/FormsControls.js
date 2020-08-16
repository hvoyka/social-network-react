import React from "react";
import css from './FormsControls.module.css';

const FormControl = ({input, meta, child, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={css.formControl + " " + (hasError ? css.error : "")} >
      {props.children}
      {hasError && <p>{meta.error}</p>}      
    </div>
  );
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <FormControl {...props}>
      <textarea {...restProps} {...input}/>
    </FormControl>
 );
}
export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
      <FormControl {...props}>
       <input {...restProps} {...input}/>
      </FormControl>
  );
}