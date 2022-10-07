// ---Dependencies
import {component$,
        useStore,
        useWatch$, 
        useMount$, 
        useClientEffect$ } from "@builder.io/qwik";

export default component$(()=>{
    // -----------------------CONSTS, HOOKS, STATES
    const stateWatch = useStore({
        age:10,
        doublecounter:0  
    });
    const stateMount = useStore({
        age:20,
        doublecounter:0  
    });
    const state = useStore({
        age:20,
        doublecounter:0  
    });
    useWatch$(({track})=>{
        track(stateWatch,'age') 
       stateWatch.doublecounter = stateWatch.age *10
    })
    useMount$(()=>{
        stateMount.age = 100
    })
    useClientEffect$(()=>{
        const timer = setInterval(()=>{
            state.age++
        },1000)
        return()=>{
            clearInterval(timer)
        }
    })
    return(
        <div>
            ------------watch example-------------
            <br />
            <button onClick$={()=>{ 
                stateWatch.age++
            }}>
                add
            </button>
            <br />
            real: {stateWatch.age}
            <br />
            double : {stateWatch.doublecounter}
            <br />
            ---------------useMount---------------
            <br />
            real: {stateMount.age }
            <br />
            -------------useClientEffect-------------
            <br />
            real: {state.age}
            <br />
            double: {state.doublecounter}
        </div>
    )
})