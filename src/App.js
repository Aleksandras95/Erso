import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';
import GalleryInside from './pages/GalleryInside';
import Clients from './pages/Clients';
import News from './pages/News';
import NewsSinglePage from './pages/NewsSinglePage';
import Reviews from './pages/Reviews';
import SearchResults from './pages/SearchResults';
import Services from './pages/Services';
import ServiceInside from './pages/ServiceInside';
import page404 from './pages/404';
import WhyUs from './pages/WhyUs';
import UserInterface from './pages/UserInterface';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={ `${ process.env.PUBLIC_URL + '/' }` } component={ Home } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/about-us' }` } component={ About } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/contacts' }` } component={ Contacts } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/gallery' }` } component={ Gallery } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/gallery-inside' }` } component={ GalleryInside } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/clients' }` } component={ Clients } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/news' }` } component={ News } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/news-single-page' }` } component={ NewsSinglePage } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/reviews' }` } component={ Reviews } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/search-results' }` } component={ SearchResults } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/services' }` } component={ Services } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/service-inside' }` } component={ ServiceInside } />

                <Route exact path={ `${ process.env.PUBLIC_URL + '/why-us' }` } component={ WhyUs } />

                {/*<Route exact path={ `${ process.env.PUBLIC_URL + '/ui' }` } component={ UserInterface } />*/}

                <Route exact component={ page404 } />
            </Switch>
        </Router>
    );
}

export default App;
