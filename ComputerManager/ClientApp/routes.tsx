import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './pages/shared/Layout';
import { HomePage } from './pages/HomePage';
import { DiskInfoPage } from './pages/DiskInfoPage';

export const routes = <Layout>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/disk-info' component={DiskInfoPage} />
</Layout>;
