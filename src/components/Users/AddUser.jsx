import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

import styles from './add-user.module.scss';

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="">Username</label>
                <input id="" type="text" />
                <label htmlFor="">Age (Years)</label>
                <input id="" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        
    );
};

export default AddUser;