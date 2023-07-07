//load express for our backend
const express = require('express')
const mongoose = require('mongoose')
//allows us to control the app's Cross Origin Resource sharing
const cors = require('cors')

const userRoutes = require('./routes/userRoutes')


const app = express();
//we create an app variable that stores result of the express function that initialize our express application and allow us to access different methods that will make backend creation easy

mongoose.connect("mongodb+srv://admin:Bananalong17@sandbox.qvmwvkz.mongodb.net/an22_sample_datebase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true

	})
mongoose.connection.once('open', () => console.log('Now connected to Mongodb atlas.'))

//allows all resource to access our backend application
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//define the /users string to be included for all the users routes defined in the 'user' route file

app.use('/users', userRoutes);

app.listen(process.env.PORT || 4000, () => {
	console.log(`Server Running on Localhost: ${process.env.PORT || 4000}`)
})