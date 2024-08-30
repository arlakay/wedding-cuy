import React, { useState, useEffect } from 'react';
import { FaRegClock, FaHeart } from 'react-icons/fa';

import classNames from 'classnames';
import heartIcon from '../../assets/heart-icon-jst.png';

const ITEMS_PER_PAGE = 5; // Number of items to display per page

const Wishes = () => {
    const [name, setName] = useState('');
    const [wish, setWish] = useState('');

    const [wishes, setWishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [headers, setHeaders] = useState([]);

    const googleSheetApiKey = "AIzaSyBz-lOhWdL0_TW3iAqjCPajjlrDfoSUyXw";
    const sheetId = '1PkO7a1NlO_67yqy6BiTmPM5Cr0tLYBGDuWNiOreKOP0';
    const range = 'Form Responses 1'; // Specify the sheet name

    const fetchData = async () => {
        try {
            const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${googleSheetApiKey}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();

            const rows = result.values || [];

            if (rows.length > 0) {
                const [headersRow, ...dataRows] = rows;
                setHeaders(headersRow); // Extract headers

                // const top20Rows = rows.slice(1, 21); // Adjust based on your sheet's structure
                const top20RowsDateEdit = rows.slice(1).map(row => ({
                    name: row[1],
                    wish: row[2],
                    timestamp: formatDate(new Date(row[0])) // Convert serial date
                }));

                top20RowsDateEdit.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

                setWishes(top20RowsDateEdit); // Extract data
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Function to fetch data from Google Sheets
        fetchData();
    }, []);

    console.log(`data ${wishes}`);
    console.log(`error ${error}`);

    const totalPages = Math.ceil(wishes.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = wishes.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the Google Form URL with UTM parameters for pre-filling
        const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfMitrAcKG74fWU0dULwMVILJk69o3CUGyLTWh98lzGExArfg/formResponse';

        // Map form data to Google Form input field names
        const params = new URLSearchParams({
            'entry.1747016377': name,
            'entry.305553560': wish,
        });

        // Use fetch to submit the data
        fetch(`${googleFormUrl}?${params.toString()}`, {
            method: 'POST',
            mode: 'no-cors'
        })
            .then(() => {
                alert('Form submitted successfully!');
                // Clear the form fields
                setName('');
                setWish('');
                // Refresh data
                fetchData();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Form submission failed.');
            });
    };

    const serialToDate = (serial) => {
        const startDate = new Date(1899, 11, 30); // 30 Dec 1899
        return new Date(startDate.getTime() + serial * 24 * 60 * 60 * 1000);
    };

    const formatDate = (date) => {
        const now = new Date();
        if (date.toDateString() === now.toDateString()) {
            return 'Today';
        }
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const selectedColumns = ["Nama", "Ucapan", "Timestamp"];
    const selectedIndices = selectedColumns.map(col => headers.indexOf(col)).filter(index => index !== -1);

    return (
        <div
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4 bg-base-6 shadow-md bg-cover bg-center"
        >
            <div className="flex flex-col h-screen">
                <div className="flex-grow flex flex-col justify-center px-4">
                    <div className="text-start">
                        <h1 className="text-4xl font-bold font-adora-bouton my-8">Wishes</h1>
                        <p className="my-1 text-xl font-normal font-cormorant">Berikan ucapan dan doa untuk kami.</p>
                    </div>

                    <div className="text-start bg-white max-w-lg rounded-lg p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col my-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="flex flex-col my-2">
                                <textarea
                                    placeholder="Enter your wishes here..."
                                    value={wish}
                                    onChange={(e) => setWish(e.target.value)}
                                    rows="5" // Adjust rows to fit your needs
                                    cols="40" // Adjust cols to fit your needs
                                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"

                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 bg-[#121212] text-champagne-gold font-kaushan text-lg py-2 px-5 rounded-lg sm:text-base sm:py-2.5 sm:px-5"
                            >
                                Submit
                            </button>
                        </form>
                    </div>


                    {/* // list wishes */}
                    {/* <div className="w-full  mx-auto p-6">
                        <ul className="space-y-1">
                            {currentWishes.map((wish, index) => (
                                <li key={index} className="p-3 border border-gray-300 rounded-md">
                                    {wish}

                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center mt-6">
                            <nav>
                                <ul className="flex space-x-2">
                                    {pageNumbers.map(number => (
                                        <li key={number}>
                                            <button
                                                onClick={() => paginate(number)}
                                                className={`px-4 py-2 border rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                                            >
                                                {number}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div> */}

                    <div className='w-full bg-[#F8F8F8] rounded-xl flex flex-col my-2'>
                        <ul>
                            {currentItems.map((item, index) => (
                                <>
                                    <li key={index} className="flex items-center p-2 border-b ">
                                        <div className="flex-shrink-0">
                                            {/* <FaHeart className="text-red-500 w-8 h-8" /> Example icon */}
                                            <img src={heartIcon} alt="Heart" className="w-8 h-8" />
                                        </div>
                                        <div className="ml-4">
                                            <p className='text-md  font-medium'>{item.name}</p>
                                            <p className='text-md  font-normal'>{item.wish}</p>
                                            <span className='flex flex-auto items-center my-1'><FaRegClock className='mr-2' /> <p className='text-xs font-light'>{item.timestamp}</p></span>
                                            {selectedIndices.map((colIndex, colIndexIdx) => (
                                                <>
                                                    {/* <p key={colIndexIdx} className="text-gray-700">
                                                        {`${item[colIndex] || 'N/A'}`}
                                                    </p> */}


                                                </>
                                            ))}
                                        </div>
                                    </li>
                                    <hr />
                                </>
                            ))}
                        </ul>

                        <div className="pagination grid grid-cols-3 gap-4 ">
                            <button
                                className={classNames('pagination-button', { 'disabled': currentPage === 1 })}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                Previous
                            </button>
                            <span>Page {currentPage} of {totalPages}</span>
                            <button
                                className={classNames('pagination-button', { 'disabled': currentPage === totalPages })}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Wishes;
