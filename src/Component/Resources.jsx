import React, { useState } from 'react';
import '../App.css';
import NavBar from './NavBar';

const pages = [
    {
        title: 'Introduction to Strategic Finance',
        subtitle: 'The role of the finance function has been evolving. What does it actually take to be a strategic finance leader?',
        chapter: 'CHAPTER 01',
        content: [
            {
                number: '1',
                title: 'Why SaaS Finance Controllers Deserve a Seat at The Table',
                description: 'As a new-age finance controller in SaaS, you\'re no longer just a backstage coordinator.',
            }
        ]
    },
    {
        title: 'Modern Accounting',
        subtitle: 'Accounting practices have evolved with technology. Learn the modern ways of managing your books.',
        chapter: 'CHAPTER 02',
    },
    {
        title: 'Billing Operations',
        subtitle: 'Efficient billing operations are crucial for cash flow. Discover best practices in billing.',
        chapter: 'CHAPTER 03',
    },
    {
        title: 'Reporting & Forecasting',
        subtitle: 'Accurate reporting and forecasting are essential for strategic decision-making. Get insights here.',
        chapter: 'CHAPTER 04',
    },
];

const Resources = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = () => {

        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);

    
    
    };

    for (var i=0;  i<pages.length; i++){

    }






    return (
        <div className="bg-black relative w-full h-screen text-white flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-700 via-transparent to-transparent flex flex-col items-center justify-center text-center">
                <NavBar />
                <h1 className="text-4xl font-bold mb-4">{pages[currentPage].title}</h1>
                <p className="text-lg mb-6">{pages[currentPage].subtitle}</p>
                <div className="chapter-list">
                    {pages.map((page, index) => (
                        <div key={index} className={`chapter-item ${index === currentPage ? 'active' : ''}`}>
                            <h2 className="text-2xl font-bold cursor-pointer">{page.chapter}</h2>
                            <p className="text-lg mb-4">{page.title}</p>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-10 cursor-pointer animate-bounce" onClick={handleNextPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Resources;
