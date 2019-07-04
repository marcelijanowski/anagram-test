import * as http from 'http';
import app from './src/app';
import routes from './src/routes';

try {
  app.use('/', routes());
  const httpServer = http.createServer(app);
  httpServer.listen(8000);
} catch (error) {
  process.exit(1);
}
