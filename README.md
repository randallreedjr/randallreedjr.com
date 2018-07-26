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

Install gulp
```
npm install --global gulp-cli
```

### AWS CLI tool

Install AWS CLI
```
brew install awscli
```

If you encounter any issues, see http://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html for install instructions

Configure your AWS user
```
aws configure
```

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
