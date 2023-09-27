import * as fs from 'fs'// Note: Use fs/promises for async/await support
export default async function getBlogs(req, res) {
  try {
    let data = await fs.promises.readdir('C:/Users/Hazwar/Desktop/Next Js/my-next-app/blogs',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            // console.log(data)
            // let allblogs = []
            // data.array.forEach(element => {
            //     fs.readFile('C:/Users/Hazwar/Desktop/Next Js/my-next-app/blogs/'+data,(err,data)=>{
            //         allblogs.push(element)
            //     })
            // });  
        //    return res.status(200).json(allblogs)
        }
    })
    console.log(data)
    let mybllogs;
    let blogs = [];
      for (let index = 0; index < data.length; index++) {
        let item = data[index]
        mybllogs =  await fs.promises.readFile('C:/Users/Hazwar/Desktop/Next Js/my-next-app/blogs/'+item,'utf-8')
      console.log(mybllogs)
      blogs.push(JSON.parse(mybllogs))
      }
      return res.status(200).json(blogs)
   
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'An error occurred while reading the file.' });
  }
}
// end piont to get blogs by slug 
// http://localhost:3000/api/getallblogs    