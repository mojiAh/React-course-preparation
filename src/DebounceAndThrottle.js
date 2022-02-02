import { useState } from 'react';
const App = () => {
    const [mode, setMode] = useState('debounce');
    const [searchKey, setSearchKey] = useState('');
    const [timerId, setTimerId] = useState(null);

    const handleSearch = (e) => {
        e.stopPropagation();
        setSearchKey(e.target.value);
        console.log("input value", searchKey)
        if(mode === 'debounce') {
            searchWithDebounce(searchKey);
        }
        if(mode === 'throttle') {
            searchWithThrottle(searchKey);
        }

    } 

    const searchWithDebounce = (item) => {
        if(timerId) {
            clearTimeout(timerId);
        }

        setTimerId(setTimeout(()=> console.log("search with debounce",item), 1000));
    };

    const searchWithThrottle = (item) => {
        if(!timerId) {
            setTimerId(setTimeout(()=> {
                console.log("search with throttle",item)
                setTimerId(null);
            }, 1000));
        }

    };
    return(
        <div>
            <input type="text" value={searchKey} onChange={handleSearch}/>

            <div>
                <input type="radio" value="debounce" checked={mode==="debounce"} name="group1" onChange={()=> {setMode('debounce'); setTimerId(null)}} /> Debounce
                <br />
                <input type="radio" value="throttle" checked={mode==="throttle"} name="group1" onChange={()=> {setMode('throttle'); setTimerId(null)}}/> Throttle
            </div>
        </div>
    );
};

export default App;
