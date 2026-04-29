import './Button.css';

export const Button = ({ children, variant = 'primary', onClick, isActive }) => {
  const className = `btn btn-${variant} ${isActive ? 'active' : ''}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};