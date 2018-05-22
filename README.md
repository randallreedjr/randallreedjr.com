# randallreedjr.com

## Setup

### node packages

Install node
```
brew install node
```

Install other dependencies
```
npm install
```

### AWS CLI tool

See http://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html for install instructions

### Rake tasks

Compile handlebars templates and scss files
```
rake build
```

Display preview in web browser
```
rake open
```

Deploy to aws hosting
```
rake deploy
```

Deployment is also configured through Codeship. Any push to the `master` branch will trigger a deploy.
