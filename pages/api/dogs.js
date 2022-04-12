import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("souldogs");

  switch (req.method) {
    case "GET":
      const dogs = await db.collection("dogs").find({}).toArray();
      res.json({ status: 200, data: dogs });
      break
  }
}
