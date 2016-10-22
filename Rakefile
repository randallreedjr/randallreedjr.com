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
  `aws s3 cp ./dist s3://randallreedjr.com --recursive --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers`
end
