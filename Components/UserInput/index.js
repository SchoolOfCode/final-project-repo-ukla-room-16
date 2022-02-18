import React, {useState} from 'react';

const UserInput = () => {
    const [text, setText] = useState("");

    function onSubmit () {
        
    }

    function handleChange (e) {
        setText(e.target.value)
    }
    

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={onSubmit} />
        </div>
    
    )
}

export default UserInput;