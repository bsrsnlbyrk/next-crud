import { doc, deleteDoc } from "firebase/firestore";
import { database } from '@/firebaseConfig'
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        await deleteDoc(doc(database, "articles", JSON.parse(req.body).id));
        res.status(200).send('successfully deleted');
    } catch {
        res.status(500).send('occured an error');
    }
}
