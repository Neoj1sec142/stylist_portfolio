

const SkillCard = ({skill}) => {
    return(
        <a href='#!' className="nolink"><div className="card text-center">
            <h2 className="card-header">{skill.title}</h2>
            <p className="card-text">{skill.description}</p>
        </div></a>
    )
}
export default SkillCard