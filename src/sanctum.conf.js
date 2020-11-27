export default {
  login_url: 'https://api.process.test/login',
  logout_url: 'https://api.process.test/logout',
  user_endpoint: process.env.API_URL + '/api/user',
  csrf_cookie: process.env.API_URL + '/sanctum/csrf-cookie'
}
