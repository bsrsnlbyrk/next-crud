import { collection, addDoc } from "firebase/firestore";
import { database } from '@/firebaseConfig'
import { NextApiRequest, NextApiResponse } from "next";

// Add a new document in collection "cities"
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        await addDoc(collection(database, "articles"), JSON.parse(req.body));
        res.status(200).send('successfully created');
    } catch(error)  {
        res.status(500).send('occured an error');
    }
}
