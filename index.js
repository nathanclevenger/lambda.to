export const api = {
  icon: '入',
  name: 'lambda.do',
  description: 'Instant Globally-distributed Lambda Functions as APIs',
  url: 'https://lambda.to/api',
  type: 'https://apis.do/lambda',
  endpoints: {
    listSources: 'https://lambda.to/sources',
  },
  site: 'https://lambda.to',
  login: 'https://lambda.to/login',
  signup: 'https://lambda.to/signup',
  subscribe: 'https://lambda.to/subscribe',
  repo: 'https://github.com/nathanclevenger/lambda.to',
}

export default {
  fetch: (req, env) => {
    const { user, origin, requestId, method, body, time, pathname, pathSegments, pathOptions, url, query } = await env.CTX.fetch(req).then(res => res.json())
    if (pathname != '/api' && !user.profile) return Response.redirect(origin + '/login')
    
    return new Response(JSON.stringify({ api, source, resource, error, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}
