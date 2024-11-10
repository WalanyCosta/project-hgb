import express from 'express';
import renderViews from '../ejs/routes-views';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views/pages');
app.use(express.static('public'));

app.use(renderViews);

export default app;
