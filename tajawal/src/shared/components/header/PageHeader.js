import React, { Component } from 'react';
import { PageHeader as BootstrapPageHeader } from 'react-bootstrap';
import './PageHeader.css';

class PageHeader extends Component {
    render() {
        return (
            <BootstrapPageHeader className="PageHeader">
                <img src="https://tjwlcdn.com/cms/assets/logo/logo-rebrand-ltr.svg" className="PageHeader-logo img-responsive" alt="tajawal" />
            </BootstrapPageHeader>
        );
    }
}

export default PageHeader;
