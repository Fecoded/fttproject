import React from 'react';

import { InputField } from './inputField-styles';

export const FormInput = ({ handleChange, type, placeholder }) => (
  <div>
    <InputField type={type} onChange={handleChange} placeholder={placeholder} />
  </div>
);
