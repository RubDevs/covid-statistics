// Create fetch API function
export default function apiCall(url, method, raw) {
  // error
  let error;
  // Token
  const token = "Bearer " + window.localStorage.getItem('Covid-Statistics-Token');

  // Request data
  let requestData = {
    method: method,
    body: raw,
    headers: {
      "Authorization": token,
      "Content-Type":  "application/json"
    }
  };

  return (
    fetch(url, requestData)
      .then(response => {
        switch (response.status) {
          case 400:
            error = 400;
            break;
          case 401:
            error = 401;
            if (window.localStorage.getItem('Covid-Statistics-Token')) {    
              window.localStorage.removeItem('Covid-Statistics-Token');
              window.location.reload();
            }
            break;
          case 403:
            error = 403;
            if (window.localStorage.getItem('Covid-Statistics-Token')) {    
              window.localStorage.removeItem('Covid-Statistics-Token');
              window.location.reload();
            }
            break;
          case 422:
            error = 422;
            break;
          case 500:
            error = 500;
            break;
          default:
            break;
        }
        return response.json()
      })
      .then(res => {
        switch (error) {
          case 400:
            const error_400 = { message: res.error };
            throw error_400;
          case 422:
            const error_422 = { message: res.error };
            throw error_422;
          case 500:
            const error_500 = { message: res.error };
            throw error_500;
          default:
            return res;
        }
      })
  )
};