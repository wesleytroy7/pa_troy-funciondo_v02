import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);
  console.log(inputRef.current);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Dica"
      className="bg-gray-300 appearance-none border-2 border-gray-500 rounded w-full py-1 px-4 text-center text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
      {...rest}
    />
  );
}
