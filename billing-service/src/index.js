import { app } from './server.js';
import { PORT } from './config/envVariables';

const port = PORT || 4000;
app.listen(port, () => {
    console.log(`app started on PORT ${PORT}`);
});

export default app;
