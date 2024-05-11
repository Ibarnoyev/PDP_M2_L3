import { createStore } from 'redux';


const initialState = {
    meals : [{title : "Osh", have:false}]
};

const reducer = (state = initialState, action) =>{
    console.log(action);

    return state;

};

const initialState2={
    photoUrl: [{image:true, action: false}]
}

const store2= createStore(reducer)

const store = createStore(reducer);

export default store