import { ReactNode, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Home = ({handleKeyDown}:{handleKeyDown(ev: KeyboardEvent, left: string, right: string):void}) => {

  const nav: NavigateFunction = useNavigate();

  const handleNav = ():void => {
    nav("/about")
  }

  useEffect(() => {
    document.addEventListener("keydown", (ev:KeyboardEvent) => handleKeyDown(ev, "/", "/about"));

    return () => {
      document.removeEventListener("keydown", (ev:KeyboardEvent) => handleKeyDown(ev, "/", "/about"))
    };
  }, [])

  const renderTitle = (name: string, delay: number): ReactNode => {
    const characters: string[] = name.split("");

    return characters.map((chara, i) => {
      const styles: React.CSSProperties = {
        animationDelay: `${delay + i / 10}s`,
      };
      return (
        <span key={i} style={styles}>
          {chara}
        </span>
      );
    });
  };

  const renderSubtitle = (text: string): ReactNode => {
    const characters: string[] = text.split("");

    return characters.map((chara, i) => {
      const styles: React.CSSProperties = {
        animationDelay: `${1.6 + i / 20}s`,
      };
      return (
        <span key={i} style={styles}>
          {chara}
        </span>
      );
    });
  }

  return (
    <div className="home">
      <div className="main-title">
        <h1 className="main-title__title">
          {renderTitle("Aida ", 0.3)}
          <span className="surname">
            {renderTitle("Narros", 1)}
          </span>
        </h1>
        <h2 className="main-title__subtitle">
          {renderSubtitle("Frontend Developer")}
        </h2>
        <div className="main-title__circles">
          <div className="main-title__circles--big"></div>
          <div className="main-title__circles--small"></div>
        </div>
      </div>
      <div className="home__pic"></div>
      <i onClick={handleNav} className="fa-solid fa-chevron-right arrow-right"></i>
    </div>
  )
}

export default Home