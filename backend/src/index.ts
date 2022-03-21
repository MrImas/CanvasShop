import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(
    `mongodb+srv://admin:admin123@canvas-shop.6uhex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connected to DB');
    app.listen(process.env.PORT || 3000, () => {
      console.log('server listening...');
    });
  })
  .catch((err) => console.log(err));
