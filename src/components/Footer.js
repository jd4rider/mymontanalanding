import React from 'react';
import { Container } from 'reactstrap';

export default class Footer extends React.Component { 
    render() {
        if(window.screen.width > 505){
            return (
                <footer className="footer" style={{background: '#D1D1D1', height:'100px', 'vertical-align': 'middle'}}>
                    <Container>
                        <span className="text-muted lead" style={{'vertical-align': 'middle', 'line-height': '100px' }}>Dashboard Created by <a href='https://jfwebdesigns.altervista.org/' target='_blank' rel="noopener noreferrer">Jonathan Forrider Web Designs</a></span>
                    </Container>
                </footer>
            )
        } else {
            return (
                <footer className="footer" style={{background: '#D1D1D1', height:'100px', 'vertical-align': 'middle'}}>
                    <Container>
                        <span className="text-muted lead" style={{'vertical-align': 'middle', 'line-height': '50px' }}>Dashboard Created by</span><br />
                        <span className="text-muted lead" style={{'vertical-align': 'middle', 'line-height': '50px' }}><a href='https://jfwebdesigns.altervista.org/' target='_blank' rel="noopener noreferrer">Jonathan Forrider Web Designs</a></span>
                    </Container>
                </footer>
            )
        }
    }
}