import Button from "./Button/Button.jsx";
import {useRef, useState} from "react";

function StateVsRef() {
    const input = useRef();
    const [show, setShow] = useState(false);

    function handleKeyDown(event) {
        if (event.key === 'Enter') setShow(true);
    }

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input ref={input} type="text" onKeyDown={handleKeyDown} className='control'/>
        </div>
    )
}

export default function FeedbackSection() {
    // const [name, setName] = useState('');
    // const [hasError, setHasError] = useState(false);
    // const [reason, setReason] = useState('help');

    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'help',
    })

    function handleNameChange(event) {
        // setName(event.target.value);
        // setHasError(event.target.value.trim().length === 0);

        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    return (
        <section>
            <h3>Обратная связь</h3>
            <form action="" style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id='name' className='control' value={form.name}
                       style={{border: !form.hasError ? null : '1px solid red'}} onChange={handleNameChange}/>

                <label htmlFor="reason">Причина обращения </label>
                <select id='reason' className='control' value={form.reason}
                        onChange={(event) =>
                            setForm((prev) => ({...prev, reason: event.target.value,}))}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>

            <hr/>

            <StateVsRef />
        </section>
    )
}