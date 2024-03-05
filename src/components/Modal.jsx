import PropTypes from "prop-types";

function Modal({ isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <div className="fixed z-50 inset-0 flex items-center justify-center font-poppins bg-midnight bg-opacity-50">
                    <div className="bg-glass  rounded-lg p-8 w-1/2">
                        <h2 className="text-2xl font-bold mb-4">Tulis Komentar</h2>
                        <div className="">
                            <input type="text" placeholder="Masukkan Username "
                                   className="p-2 mb-4 w-full py-2 rounded-md  border border-midnight"/>
                            <input type="number" placeholder="Masukkan Rate "
                                   className="p-2 mb-4 w-full py-2 rounded-md border border-midnight"/>
                            <textarea
                                className="w-full h-32 resize-none border border-midnight rounded-md p-2 mb-4"
                                placeholder="Masukkan komentar..."
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-2 bg-primary text-white rounded-3xl mr-2 "
                            >
                                Submit
                            </button>
                            <button
                                className="px-4 py-2 text-white rounded-3xl bg-midnight"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
