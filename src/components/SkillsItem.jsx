const SkillsItem = ({ img, title }) => {
    return (
        <div className="skills-data">
            <div className="skills-blob">
                <img src={img} alt='' className="skills-img"></img>
            </div>
            <h3 className="skills-name">{title}</h3>

        </div>
    )
}
export default SkillsItem;