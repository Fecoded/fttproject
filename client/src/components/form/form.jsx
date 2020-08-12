import React from 'react';

import { Form } from './form-style';

export const Form = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);
