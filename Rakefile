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

desc 'Build files for distribution'
task :build do
  `gulp`
end

desc 'Deploy updates to Amazon S3'
task :deploy => 'build' do
  branch = `git rev-parse --abbrev-ref HEAD`.strip
  if branch == 'master'
    puts "Deploying to aws!".green
    `aws s3 cp ./dist s3://randallreedjr.com --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers`
  else
    puts "Error! Cannot deploy from branch '#{branch}', only 'master'".red
  end
end
