module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://10.10.10.219:3000",
          changOrigin: true
        }
      }
      /* before(app) {
        app.get('/api/login', (req, res) => {
          const { username, password } = req.query;
          if(username === 'anjin' && password === '123') {
            res.json({ code:1, token: 'jilie' })
          } else {
            res.status(401).json({code:0, message: '用户名或密码错误!'})
          }
        })
        function auth(req, res, next) {
          if (req.headers.token) {
            next()
          } else {
            res.status(401)
          }
        }

        app.get(`/api/userinfo`, auth, (req, res) => {
          res.json({code: 1, data: {name: 'Anjin'}})
        })
        app.get(`/api/shopList`, (req, res) => {
          res.json({code: 1, data: [{name: 'Anjin'}, {name: 'Baozi'}]})
        })
      } */
    }
  }
}
