import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useEffect, useState} from "react";

export default function EffectSection() {
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        async function fetchUsers() {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            setUsers(users);
            setLoading(false);
        }

        fetchUsers();
    }, []);

    return (
        <section>
            <h3>Effects</h3>

            <Button style={{marginBottom: '1rem'}} onClick={() => setModal(true)}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur cumque delectus
                    deserunt error eum excepturi, expedita laboriosam magni maiores quae quasi, quisquam repellendus
                    similique sit suscipit, tenetur vel velit?
                </p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>

            <div>
                <input type="text" className='control' placeholder='Поиск' value={name}
                       onChange={(event) => setName(event.target.value)}/>
            </div>

            {loading && <p>Loading...</p>}
            {!loading &&
                <ul>
                    {users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
                        .map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
            }
        </section>
    )
}