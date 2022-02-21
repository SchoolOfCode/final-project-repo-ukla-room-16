import css from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={css.title}>
        <span>My Career Portfolio</span>
      </h1>
    </div>
  )
}

export default Header