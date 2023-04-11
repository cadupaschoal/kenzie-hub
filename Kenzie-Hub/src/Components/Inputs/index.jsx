import { forwardRef, useState } from 'react';
import eye from '../../assets/images/eye.svg';

export const Input = forwardRef(({ label, type, ...rest }, ref) => {
  const [visible, setVisible] = useState('password');

  const setPassword = () => {
    if (visible === 'password') {
      setVisible('text');
    } else {
      setVisible('password');
    }
  };

  return type !== 'password' ? (
    <div className="input__box">
      {label ? <label>{label}</label> : null}
      <input type={type} ref={ref} {...rest} />
    </div>
  ) : (
    <div className="input__box">
      {label ? <label>{label}</label> : null}
      <div className="password-input">
        <input type={visible} ref={ref} {...rest} />
        <button onClick={setPassword} type="button">
          <img src={eye} alt="Olho" />
        </button>
      </div>
    </div>
  );
});
