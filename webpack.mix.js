import mix from 'laravel-mix';

// Define your assets
mix.js('resources/js/Main.jsx', 'public/js')
  .sourceMaps();

// Add configuration for development
if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map',
    devServer: {
      hot: true,
      open: true,
      // Ensure you are specifying the correct host and port if needed
      // host: 'localhost',
      // port: 3000,
    },
  });
}

// Add versioning in production
if (mix.inProduction()) {
  mix.version();
}
