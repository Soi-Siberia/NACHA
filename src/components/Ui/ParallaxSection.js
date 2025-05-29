import './ParallaxSection.scss'

const ParallaxSection = ({ title,
    backgroudImage,
    height = '500px',
    scrollTop = 0
}) => {

    return (
        <div className="Parallax-section"
            style={{
                backgroundImage: `url(${backgroudImage})`,
                height
            }}
        >
            <h1
                className="Parallax-title"
                style={{
                    transform: `translateY(${scrollTop * 0.4}px)`,
                    transition: 'transform 0.1s linear',
                }}
            >
                <span>{title}</span>
            </h1>
        </div>
    )
}

export default ParallaxSection;