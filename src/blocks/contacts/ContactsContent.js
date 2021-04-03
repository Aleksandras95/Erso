import React from 'react';

import GoogleMaps from '../google-maps/GoogleMaps';
import ContactsAccordion from './ContactsAccordion';

const ContactsContent = () => {
    return (
        <div id="maps" className="maps style-default">
            <GoogleMaps />

            <ContactsAccordion />
        </div>
    );
};

export default ContactsContent;
