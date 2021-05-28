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
          default:
            break;
        }
        return response.json()
      })
      .then(res => {
        switch (error) {
          case 400:
            let message = 'error 400';
            const error_400 = { message };
            throw error_400;
          default:
            return res;
        }
      })
  )
};