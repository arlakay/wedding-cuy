import React, { useState } from 'react';
import Toast from '../Toast/Toast';

const BankDetailsDialog = ({ isOpen, onClose, bankDetails }) => {

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const showToastNotification = (message) => {
        setToastMessage(message);
        setShowToast(true);

        // Hide the toast after 3 seconds
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    if (!isOpen) return null;

    const copyToClipboard = (accountNumber, index) => {
        try {

            navigator.clipboard.writeText(accountNumber);
            // alert(`No rekening ${bankDetails[index].accountHolder} disalin!`);
            showToastNotification('No rekening disalin!')
        } catch (err) {
            showToastNotification('Gagal menyalin!')
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-eb-garamond font-semibold mb-4">Bank Details</h2>


                {bankDetails.map((detail, index) => (
                    <div key={index} className="flex flex-col items-center justify-center border p-4 rounded-lg shadow-md bg-gray-50 mb-4">
                        <div className="mb-0">
                            <img
                                src={detail.image}
                                alt={`${detail.bankName} logo`}
                                className="w-24 h-auto object-contain mb-4"
                            />
                        </div>
                        {/* <p className="mb-2 text-lg font-eb-garamond">{detail.bankName}</p> */}
                        <p className="mb-2 text-xl font-eb-garamond font-medium">{detail.accountNumber}</p>
                        <p className="mb-2 text-lg font-eb-garamond">{detail.accountHolder}</p>


                        <button
                            onClick={() => copyToClipboard(detail.accountNumber, index)}
                            className="bg-custom-brown text-champagne-gold py-2 px-4 rounded text-md font-eb-garamond font-medium"
                        >
                            Copy
                        </button>

                    </div>
                ))}

                {showToast && (
                    <Toast
                        message={toastMessage}
                        onClose={() => setShowToast(false)}
                    />
                )}
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className=" mt-4 bg-[#1e1e1e] text-white py-2 px-4 rounded font-eb-garamond"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BankDetailsDialog;
