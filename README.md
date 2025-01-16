# randallreedjr.com

## Setup

### python
npm requires [python 3](https://opensource.com/article/19/5/python-3-default-mac).
```
brew install pyenv
pyenv install 3.11.4
pyenv global 3.11.4
pyenv version
```

### node packages

Install node
```
nvm install 14.19.1
nvm alias default 14.19.1
```

Install other [npm dependencies](https://dev.to/hasantezcan/solution-of-cant-find-python-executable-python-node-error-35i5)
```
npm install
```

Install gulp
```
npm install --global gulp-cli
```

### ruby
```
rvm get stable
rvm install 3.2.6
```

### bundler
```
gem install bundler
bundle install
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
