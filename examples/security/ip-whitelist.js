// Blacklist IP addresses. 
// This snippet of code prevents a specific IP, 
// in this case '225.0.0.1', from connecting to the origin.

addEventListener('fetch', event => {
  event.respondWith(fetchAndApply(event.request))
})

async function fetchAndApply(request) {  
  let clientIp = request.headers.get('cf-connecting-ip')
  let whitelistedIP = new Set(
    [
      '225.0.0.1',
      '225.0.0.2'
    ]);
  
  
  if (!whitelistedIP.has(clientIp)) {
    
    return new Response('Sorry, this page is not available.',
        { status: 403, statusText: 'Forbidden' })
  }

  return fetch(request)
}
