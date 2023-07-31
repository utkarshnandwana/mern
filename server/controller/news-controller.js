import modals from "../model/newsSchema.js"




export const getNews = async (req, res) => {
    try {
        let newData = await modals.find({});
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({message: newData.message});
    }

}

