function getApiUri(forceProduction = false) {
  if (forceProduction === true) {
    return `https://octalysis-proxy-server-svu2hashgq-ew.a.run.app`;
  }
  return process.env.NODE_ENV !== 'production'
    ? `http://localhost:3030`
    : `https://octalysis-proxy-server-svu2hashgq-ew.a.run.app`;
}

async function fetchMessages(setMessages) {
  const url = `${getApiUri()}/api/messages?year=2021&month=05&day=02`;
  try {
    const response = await fetch(url, { method: 'GET' });
    if (response.ok) {
      const messages = await response.json();
      console.log('messages: ', messages);
      setMessages(messages);
    } else {
      console.log('response: ', response);
    }
  } catch (err) {
    console.error('Error on fetch: ', err);
  }
}

export { fetchMessages };
