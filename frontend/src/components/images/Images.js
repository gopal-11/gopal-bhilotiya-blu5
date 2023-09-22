import './index.css';

// Renders the images on the ui
const Images = ({ images }) => {
  return (
    <div className="image-container">
      <div>
        {
          <>
            <div className="items">
              {images.map((item, index) => {
                if (item?.links?.length > 0) {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '10px',
                        width: '280px',
                        boxShadow: '0 3px 10px 0 black',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        paddingBottom: '10px',
                        margin: '10px',
                      }}
                      key={index}
                    >
                      <img
                        src={item?.links[0]?.href}
                        style={{
                          objectFit: 'cover',
                          height: '300px',
                          borderTopLeftRadius: '4px',
                          borderTopRightRadius: '4px',
                        }}
                        alt={item.title}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Images;
