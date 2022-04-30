import data from "./data2";

export default function handler(req, res) {
  if (req.method ==="GET") {
  res.status(200).json(data);
  }
}
