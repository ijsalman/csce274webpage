import { useState, useEffect } from "react";

export default () => {
    const [lectures, setLectures] = useState([])
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ijsalman/data/main/empty.json')
            .then(response => response.json())
            .then(data => setLectures(data));
    }, []);

    return <div className="page-lectures">
        {
            lectures[0] ? 
            <>
            <h1 className="margin-top-3">Lectures</h1>
            <div className="lectures-list">
                    {
                        lectures.map((lecture) => (
                            <div className='lecture margin-buttom-5'>
                                <a className='lecture-title' target='_blank' href={lecture.link}>{lecture.topic}</a>
                                <div className="lecture-references">{lecture.reading ? 'References: ' : ''}{lecture.reading}</div>
                                <div className="lecture-date">{lecture.date ? 'Date: ' : ''}{lecture.date}</div>
                            </div>
                        )) 
                    }
            </div>
            </>:
            <h1>Lectures will be available here!</h1>
        }
        
    </div>
}