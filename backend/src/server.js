import app from './app';
import options from './config/graphql';

app.start(options, ({ port, playground }) =>
  console.log(`Playground in http://localhost:${port}${playground}`)
);
