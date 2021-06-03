export const Spinner = ({ size }) => (
  <div 
    className="spinner-border text-primary" 
    role="status"
    style={{
      height: size ? `${size}px` : 'auto',
      width: size ? `${size}px` : 'auto'
    }}
  ></div>
)