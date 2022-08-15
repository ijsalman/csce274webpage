import { useState, useEffect } from "react";

export default () => {
    const [lectures, setLectures] = useState([])
    
    useEffect(() => {
        fetch('https://tempapi.proj.me/api/WwJZfJdXf')
            .then(response => response.json())
            .then(data => setLectures(data));
    }, []);

    return <div className="page-lectures">
        <h1 className="margin-top-3">Lectures</h1>
        <div className="lectures-list">
            <table>
                <tr className='table-header'>
                    <th>Topic</th>
                    <th>Readings</th>
                </tr>
                {
                    lectures.map((lecture) => (
                    <tr>
                    <th><a target='_blank' href={lecture.link}>{lecture.topic}</a></th>
                    <th>{lecture.reading}</th>
                    </tr>
                    ))
                }
            </table>  
        </div>
    </div>
}