import React from 'react';
import Axios from 'axios';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute, AuthProvider } from './auth';

// 404
import NotFound from './../pages/error/404';

// settings
import Settings from './../settings'
import { Layout } from './../components/layout/layout'

const client = new ApolloClient({
    uri: "http://localhost:5000/api/graphql",
    cache: new InMemoryCache(),
});

const __DEV__ = process.env.NODE_ENV !== "production"

if (__DEV__) { // This check is important for development mode
    loadDevMessages();
    loadErrorMessages();
}

const routes = [

  ...require('./../routes/auth').default,
  ...require('./../routes/app').default,

]

export default function App(){

    const user = JSON.parse(localStorage.getItem('user'));
    Axios.defaults.baseURL = Settings[process.env.NODE_ENV].server_url;

    if (user?.token){

        // add auth token to api header calls
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
    }

    // render the routes
    return(
        <ApolloProvider client={client}>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        { 
                            routes.map(route => {
                                return (
                                    <Route 
                                        key={ route.path } 
                                        path={ route.path }
                                        element={ 
                                            route.permission ? 
                                                <PrivateRoute permission={ route.permission }>
                                                    <Layout>
                                                        {route.view}
                                                    </Layout>
                                                </PrivateRoute> 
                                                :
                                                route.view
                                        }
                                    />
                                )
                            })
                        }

                        { /* 404 */}
                        <Route path='*' element={ <NotFound /> }/>

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </ApolloProvider>
    );
}
