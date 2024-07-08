import './Blog.css'
import Blogcol from './Blogcol'
function Blog(){
  let blogItems =[
    { id:1,
      src:"./img/post-1.jpg",
      title : 'post title 1',
      desc : "Proin eget tortor risus. Pellentesque in ipsum id orci portadapibus Praesent sapien massa convallis a pellentesque necegestas non nisi.",
      author: "Milad Bahrami",
      date : "10 min"
    },
    { id:2,
      src:"./img/post-2.jpg",
      title : 'post title 2',
      desc : "Proin eget tortor risus. Pellentesque in ipsum id orci portadapibus Praesent sapien massa convallis a pellentesque necegestas non nisi.",
      author: "Zahra Araghi",
      date : "10 min"
   },
   {  id:3,
      src:"./img/post-3.jpg",
      title : 'post title 3',
      desc : "Proin eget tortor risus. Pellentesque in ipsum id orci portadapibus Praesent sapien massa convallis a pellentesque necegestas non nisi.",
      author: "Mohsen Bagheri",
      date : "10 min"
  }
  ]
    return(
        <section id="blog">
        <div className="container">
          <div className="section-info">
            <h2 className="section-title">BLOG</h2>
            <p className="section-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="row">
          {blogItems.map(item =>  <Blogcol key = {item.id}{...item}  />)}
          
          </div>
        </div>
      </section>
     )
}
export default Blog
