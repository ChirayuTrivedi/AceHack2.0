import React from 'react'

const Card = (props) => {
    console.log(props)

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
      };
  var trimmedString = getText(props.desc).substring(0, 20);
  const { dog } = props;

  return (
    <div className="carousel-item  c1">
            <h2>
              {dog.desc}
            </h2>
            <img
              className="testimonials-image"
              src={dog.img}
              alt="dog-profile"
            />
            <em>Beverly, Illinois</em>
          </div>
  )
}

export default Card