import React from 'react'

const Newsitem=(props)=> {
    let { title, discription, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2023/01/qrhr0zjnsp/windows-lhDjusLtpP4-unsplash.jpg" : imageUrl} className='card-img-top' alt='...' />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{source}</span></h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toString()}</small></p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read More</a>

          </div>
        </div>
      </div>
    )
  
}

export default Newsitem
