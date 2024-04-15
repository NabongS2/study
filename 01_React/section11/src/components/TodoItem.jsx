import './TodoItem.css'
import { memo } from 'react';

const TodoItem = ({
        id,
        isDone,
        content,
        date,
        onUpdate,
        onDelete,
    }) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onclickDelete = () => {
        onDelete(id);
    }
    
    return(
        <div className="TodoItem">
            <input 
            onChange={onChangeCheckbox}
            checked={isDone} type="checkbox"/>
            <div className='content'>{content}</div>
            <div className='date'>
                {new Date(date).toLocaleDateString()}
            </div>
            <button
            onClick={onclickDelete}
            >삭제</button>
        </div>
    )
};

// 두 개의 props를 과거와 현재 비교하는데
// 객체 값은 매번 다른 주소 값을 갖기 때문에 변화가 됐다고 인지하고 다시 리렌더링 해버림... 
// -> memo를 적용한다고 해서 무조건 최적화 하지 않음...
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환 값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // T -> 안바뀜 -> 리렌더링 X
//     // F -> 바뀜 -> 리렌더링 O

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);