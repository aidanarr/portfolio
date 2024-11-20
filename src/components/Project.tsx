import { ReactNode } from "react";

const Project = ({desc, info}:{desc: string | undefined, info:{title:string, technologies:(string)[], img:string, url:string}}) => {

  const renderTechnologies = ():ReactNode => {
    return info.technologies.map((item:string) => {
      return <p>{item}</p>
    })
  }

  const handleClick = ():void => {
    window.open(info.url, '_blank');
  }

  return (
    <article onClick={handleClick} className={`project ${info.img}`}>
      <h3 className="project__title">{info.title}</h3>
      <div className="project__desc">
        <div className="project__desc--tech">
          {renderTechnologies()}
        </div>
        <p>{desc}</p>
      </div>
      <div className="project__white"></div>
    </article>
  )
}

export default Project