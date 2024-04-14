import { useState } from 'react';

function useIuput() { // 커스텀 훅은 use를 붙여주기만 하면 됨
    const [input, setIput] = useState("");
    const onChange = (e) => {
        setIput(e.target.value);
    }
    return [input, onChange]
}

export default useIuput;

