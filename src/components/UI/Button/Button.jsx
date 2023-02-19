import styles from './button.module.scss';

const Button = ({type, children}) => {
    return (
        <button type={type} className={styles.button}>{children}</button>
    )
}

export default Button;