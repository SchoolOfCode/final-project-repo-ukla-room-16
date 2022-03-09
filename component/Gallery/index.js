

export default function Gallery() {


  return (
   <div>
        <h1>My Images</h1>

        <h2>Images</h2>

        <ul>
          {images.map(image => {
            return (
              <li key={image.id}>
                <a href={image.link} rel="noreferrer">
                  <div>
                    <Image width={image.width} height={image.height} src={image.image} alt="" />
                  </div>
                  <h3>
                    { image.title }
                  </h3>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
   
  )
}