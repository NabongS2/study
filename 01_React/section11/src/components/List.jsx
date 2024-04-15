import './List.css'
import TodoItem from './TodoItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => {
    
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if(search  === "") {
            return todos;
        }
        
        return todos.filter((todo) =>
            todo.content
            .toLowerCase()
            .includes(search.toLowerCase())
        )
    }

    const filteredTodos = getFilteredData();

    // 첫번째 인수 콜백 함수를 반환
    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        console.log("getAnalyzedData 호출!");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        };

    }, [todos]);
    // 첫 번째 콜백 함수를 두번 째 전달 할 deps를 기준으로 메모리제이션 한당
    // 의존성 배열 : deps 
    // [] -> todos 를 넣으면 목록이 변경 될 때만 호출 됨

    return(
        <div className="List">
            <h4>Todo List 🍀</h4>
            <div>total : {totalCount}</div>
            <div>done : {doneCount}</div>
            <div>notDone : {notDoneCount}</div>
            <input 
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요."
            />

            <div className='todos_wrapper'>
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo}/>;
                })}
            </div>
        </div>
    )
};

export default List;