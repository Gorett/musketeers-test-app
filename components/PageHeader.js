import React from "react";

import styles from '../styles/components/PageHeader.less';

export const PageHeader = ({ title }) => (
    <header className={styles['page-header']}>
        <h1>{title}</h1>
    </header>
);

export default PageHeader;
