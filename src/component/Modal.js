import PropTypes from 'prop-types';

function Modal({ title, children, visible, handleClose }) {

  return (
    <div className={'modal ' + (visible ? 'is-active' : '')}>
      <div className='modal-background'></div>
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title is-size-5'>{title}</p>
          <button className='delete' aria-label='close' onClick={handleClose}></button>
        </header>
        <section className="modal-card-body is-size-6">
          {children}
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={handleClose}>閉じる</button>
        </footer>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: '',
  visible: false,
  handleClose: () => {},
};

export default Modal;
