import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/dw_videos', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})