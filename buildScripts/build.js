/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));
webpack(webpackConfig).run((err, status)=>{
  if (err) { // so a fatal error occurred. Stop here
    console.log(chalk.red(err));
    console.log(chalk.red(status));

    return 1;
  }
  return 0;
});
