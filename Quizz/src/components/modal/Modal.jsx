import './Modal.css'
import PropTypes from "prop-types";


const Modal = ({score}) => {
  return (
    <div className='modal'>
        <div className='modal-title'>Skor: {score}</div>
        <div onClick={() => window.location="/"} className='modal-btn'>Retry</div>

    </div>
  )
};

Modal.propTypes= {
  score: PropTypes.number.isRequired,
};

export default Modal