import * as http from 'http';
import app from './src/app';
import routes from './src/routes';

try {
  const port = process.env.PORT || 3000
  app.use('/', routes());
  const httpServer = http.createServer(app);
  httpServer.listen(port);
} catch (error) {
  process.exit(1);
}
