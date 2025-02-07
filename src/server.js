const { errorHandler, notFoundHandler } = require('./middlewares');
const { app, express, morgan, cors } = require('./models');
const { authRouter, userRouter } = require('./routes');

require('dotenv').config();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

app.use('/auth', authRouter)
app.use('/user', userRouter)

app.use(errorHandler)
app.use('*',notFoundHandler)

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));