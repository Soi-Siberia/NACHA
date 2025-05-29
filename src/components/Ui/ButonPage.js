
import './ButonPage.scss'

const ButonPage = ({ title, handleClick }) => {
    return (
        <>
            <button className='button-page'
                onClick={handleClick}
            >
                {title}
            </button>
        </>
    )
}

export default ButonPage