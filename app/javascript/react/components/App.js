import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CerealsIndexContainer from './containers/CerealsIndexContainer'
import CerealsShowContainer
 from './containers/CerealsShowContainer'

const App = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CerealsIndexContainer}/>
                <Route exact path="/cereals" component={CerealsIndexContainer}/>
                <Route exact path="/cereals/:id" component={CerealsShowContainer}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App