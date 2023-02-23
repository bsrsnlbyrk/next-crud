import { collection, query, getDocs, DocumentData } from "firebase/firestore";
import { database } from '@/firebaseConfig'
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const q = query(collection(database, "articles"));
    const data: DocumentData[] = [];

    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
        });
        res.status(200).json({ data });
    } catch {
        res.status(500).send('occured an error');
    }
}
