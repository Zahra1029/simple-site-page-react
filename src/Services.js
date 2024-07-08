import Col from './Col'
import './Services.css'
function Services(){
  let servicesItems=[
    {
      id:1,
      icon : "bi bi-briefcase",
      title : "WEB DESIGN",
      info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magnitempora perferendis eum non provident."
    },
    {
      id:2,
      icon : "bi bi-card-checklist",
      title : "WEB DEVELOPMENT",
      info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magnitempora perferendis eum non provident."
    },
    {
      id:3,
      icon : "bi bi-bar-chart",
      title : "PHOTOGRAPHY",
      info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magnitempora perferendis eum non provident."
    },
    {
      id:4,
      icon : "bi bi-binoculars",
      title : "RESPONSIVE DESIGN",
      info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magnitempora perferendis eum non provident."
    },
    {
      id:5,
      icon : "bi bi-brightness-high",
      title : "GRAPHIC DESIGN",
      info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magnitempora perferendis eum non provident."
    },
    {
      id:6,
      icon : "bi bi-calendar4-week",
      title : "MARKETING SERVICES",
      info : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magniadipisci eaque autem fugiat! Quia, provident vitae! Magnitempora perferendis eum non provident."
    }
  ]
    return(
        <section id="services">
          <div className="container">
            <div className="section-info">
              <h2 className="section-title">SERVICES</h2>
              <p className="section-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div  className="row">
             {servicesItems.map(item => <Col key ={item.id} {...item}/>)}
            </div>
         </div>
        </section>
    )
}
export default Services