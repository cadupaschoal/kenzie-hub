import { forwardRef } from 'react';

export const Option = forwardRef(({ text, ...rest }, ref) => {
  return (
    <option ref={ref} {...rest}>
      {text}
    </option>
  );
});
