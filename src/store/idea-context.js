import React, { useState } from 'react'

export const TodosContext = React.createContext({
    items: [],
    addIdea: () => {},
    removeIdea: (id) => {},
});

const IdeaContextProvider = () => {

    const [idea, setIdea] = useState([])

    const addIdea = () => {
        const newIdea = ''
    }

}