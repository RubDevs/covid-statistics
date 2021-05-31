export const Alert = ({ type, message }) => {
  switch (type) {
    case 'success':
      return (
        <div className="alert alert-success d-flex align-items-center" role="alert">
          <h3 className="text-success">
            {message}
          </h3>
        </div>
      )
    case 'error':
      return (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <h3 className="text-danger">
          {message}
          </h3>
        </div>
      )
    case 'info':
      return (
        <div className="alert alert-primary d-flex align-items-center" role="alert">
          <h3 className="text-primary">
          {message}
          </h3>
        </div>
      )
    default:
      return (null)
  }
}