import '../SCSS/index.scss'
import '../SCSS/css/all.css'
import { HomePage } from './HomePage/HomePage'
import { Router } from '@core/Router'
import { Navigation } from './Navigation/Navigation'
import { AboutPage } from './AboutPage/AboutPage'
import { ConfiguratorPage } from './ConfiguratorPage/ConfiguratorPage'


const homePage = new HomePage('home')
const configuratorPage = new ConfiguratorPage('configurator')
const aboutPage = new AboutPage('about')

const navigation = new Navigation(true)

new Router(navigation, [
    { path: '/', page: homePage },
    { path: '/configurator', page: configuratorPage },
    { path: '/about', page: aboutPage },
])


