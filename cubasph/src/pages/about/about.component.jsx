import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './about.styles.scss';

import Image from './Cubas1.jpg';
import ContactForm from '../../components/contact-form/contact-form.component';
import {selectToggleContact} from '../../redux/contact/contact.selectors';
import {toggleContactForm} from '../../redux/contact/contact.actions';


class aboutPage extends React.Component {

    // componentWillUnmount() {
    //     this.props.toggleContactForm();
    // }

    render(){
        return(
            <div className="about-info">
                <img  src= {Image} alt="About Me"/>
                <div className="text">
                    <h1>Conoce Sobre Mi</h1>
                    <p>Viajar y aventurar son cosas que siempre me han apasionado. Para mi el capturar un momento en el tiempo
                    o un recuerdo es algo que no tiene precio. Las fotgrafías de paisajes son de las ftografías que mas me 
                    apasionan. Por lo tanto el poder tener una plataforma donde pueda vender mis fotografías siempre ha sido 
                    un pequeño sueño mío. Por eso cree esta plataforma como página web donde se pueden cotizar mis 
                    fotografías y enmarcarlas para diferentes ambientes que queden a imaginción de las personas.  </p>                    
                    <button onClick ={() => {
                        this.props.toggleContactForm();
                    }}>Contactar</button>
                </div>        
                {
                    this.props.hiddenForm ? (<ContactForm/>) : (null)
                }
            
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector ({
    hiddenForm: selectToggleContact
});

const mapDispatchToProps = dispatch => ({
    toggleContactForm: () => dispatch(toggleContactForm())
});


export default connect(mapStateToProps, mapDispatchToProps)(aboutPage);