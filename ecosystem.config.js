module.exports = {
  apps : [
    {
      name      : "EC2 Demo App",
      script    : "./kiwi start",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],
  deploy : {
    production : {
      user : "ubuntu",
      key  : "/Users/samuelthomas/.ssh/MyFirstInstanceKeyPair.pem",
      host : "ec2-35-165-207-107.us-west-2.compute.amazonaws.com",
      ref  : "origin/master",
      "pre-setup": 'eval "$(ssh-agent -s)"; ssh-add ~/.ssh/id_rsa',
      repo : "git@github.com:samuelfullerthomas/sample-express-app.git",
      path : "/home/ubuntu/sample-express-app",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
}
