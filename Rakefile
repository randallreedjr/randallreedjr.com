require 'colorize'

namespace :sass do
  desc 'Watch Sass for changes'
  task :watch do
    `sass --watch src/style.scss:dist/style.css`
  end

  desc 'Compile Sass one time'
  task :run do
    `sass src/style.scss dist/style.css`
  end
end

desc 'Setup dev environment'
task :setup do
  puts 'Installing Ruby gems'
  `bundle install`
  puts 'Install gulp'
  `npm install -g gulp`
  puts 'Installing node modules'
  `npm install`
end

desc 'Build files for distribution'
task :build do
  puts "Building..."
  `gulp`
end

desc 'Open file in web browser for viewing'
task :open do
  `open dist/index.html`
end

desc 'Deploy updates to Amazon S3'
task :deploy => 'build' do
  branch = `git rev-parse --abbrev-ref HEAD`.chomp
  status = `git status -s`.chomp
  if branch == 'main' && status.empty?
    puts "Deploying to aws!".green
    `aws s3 cp ./dist s3://randallreedjr.com --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers`
  elsif branch != 'main'
    puts "Error! Cannot deploy from branch '#{branch}', only 'main'".red
  elsif !status.empty?
    puts "Error! Cannot deploy with uncommited changes".red
  end
end
