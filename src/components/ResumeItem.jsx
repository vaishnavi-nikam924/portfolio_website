import parse from 'html-react-parser';

export const ResumeItem = ({ icon, year, title }) => {
    return (
        <div className="resume-item">
            <div className="resume-icon">{icon}</div>

            <span className="resume-date">{year}</span>
            <h3 className="resume-subtitle">{parse(title)}</h3>
        </div>
    );
}

export default ResumeItem;