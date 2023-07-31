import data from './constants/data.js';
import modals from './model/newsSchema.js';
const DefaultData = async () => {
    try {
       await modals.insertMany(data);
        console.log("data imported successfully");
    } catch (error) {
        console.log("Error ", error.message);
    }
}


export default DefaultData;