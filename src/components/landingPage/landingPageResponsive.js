import React from 'react';
import '../../App.css';
import { Typography, Row, Col, Layout } from 'antd';
import { styles } from '../../styles/landingPageStyles';
import LandingSidebar from './landingSidebar';
import Breakpoint from 'react-socks';
import { LandingXSmall, LandingSmall, LandingMed, LandingLarge, LandingXLarge } from './landingPages';


export default class LandingPageResponsive extends React.Component {
    render() {
        return (
            <Layout>
                <Breakpoint xsmall only>
                    <LandingXSmall />
                </Breakpoint>
                <Breakpoint small only>
                    <LandingSmall />
                </Breakpoint>
                <Breakpoint medium only>
                    <LandingMed />
                </Breakpoint>
                <Breakpoint large only>
                    <LandingLarge />
                </Breakpoint>
                <Breakpoint xlarge only>
                    <LandingXLarge />
                </Breakpoint>
            </Layout>
        );
    }
}
