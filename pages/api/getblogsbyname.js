import { readFile } from 'fs/promises'; // Note: Use fs/promises for async/await support
export default async function getBlogs(req, res) {
  try {
    console.log(req.query)
    const data = await readFile(`C:/Users/Hazwar/Desktop/Next Js/my-next-app/blogs/${req.query.slug}`, 'utf-8');
    const jsonData = JSON.parse(data);

    return res.status(200).json(jsonData);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'An error occurred while reading the file.' });
  }
}
// end piont to get blogs by slug 
// http://localhost:3000/api/getblogs 