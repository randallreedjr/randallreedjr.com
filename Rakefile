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
