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
task :build => 'sass:run' do
  `cp src/index.html dist/index.html`
  `cp src/sitemap.xml dist/sitemap.xml`
  `cp src/robots.txt dist/robots.txt`
  `cp -r src/images dist/images`
end
