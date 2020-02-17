import app from './app';
import options from './config/graphql';

app.start(options, ({ port, playground }) =>
  // eslint-disable-next-line no-console
  console.log(`Playground in http://localhost:${port}${playground}`)
);
