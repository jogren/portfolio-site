export const postNewMessage = async (name, email, company, message) => {
  const url = 'https://portfolio-site-api.herokuapp.com/api/v1/messages';
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, company, message })
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw Error('There was an issue posting your message.');
    }
  
    const message = await response.json();
    return message;
  } catch(error) {
    throw new Error(error.message)
  }
}