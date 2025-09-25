import React from 'react'
// import image1 from '../assets/formula/excel_001.png'

function Card({image, name, link, para, content, sample, application}) {
  return (

    <>

        <div className="card-container" id={link}>
          <div className="card-img">
            <img src={image} alt={image} />
          </div>
          <div className="card-content">
                <h5 className="card-title">函數: {name}</h5>
                <p className="card-text">{content}</p>
                <h5 className="card-title">參數:</h5>
                <p className="card-text">{para}</p>
                <h5 className="card-title">範例解說:</h5>
                <p className="card-text">{sample}</p>
                <h5 className="card-title">常用情景:</h5>
                <p className="card-text">{application}</p>
                <a href={link} class="btn btn-primary">短片</a>
          </div>
        </div>


        {/* <div className="card mb-3" id={link}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt='test'/>
            </div>
            <div className="col-md">
              <div className="card-body">
                <h5 className="card-title">公式: {name}</h5>
                <p className="card-text">{content}</p>
                <h5 className="card-title">函數:{para}</h5>
                <h5 className="card-title">範例解說:</h5>
                <p className="card-text">{sample}</p>
                <h5 className="card-title">常用情景:</h5>
                <p className="card-text">{application}</p>
                <a href='＃' class="btn btn-primary">短片</a>
              </div>
            </div>
          </div>
        </div> */}

    </>
  )
}

export default Card


        {/* <div class="card card-meat" >
            <img src={image} class="card-img-top" alt={alt}/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                <a href={link} class="btn btn-primary">詳細資料</a>
            </div>
        </div> */}

        {/* <div className="card card-meat mb-3" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start" alt={alt}/>
            </div>
            <div className="col-md">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
              <a href={link} class="btn btn-primary">詳細資料</a>
              </div>
            </div>
          </div>
        </div> */}