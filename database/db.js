import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-adcj7yl-shard-00-00.koglly6.mongodb.net:27017,ac-adcj7yl-shard-00-01.koglly6.mongodb.net:27017,ac-adcj7yl-shard-00-02.koglly6.mongodb.net:27017/?ssl=true&replicaSet=atlas-l71j80-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
    
};

export default Connection;