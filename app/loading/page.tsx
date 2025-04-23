import React from 'react';
import styles from './loading.module.css';

const Loading = () => {
    return (
      <section>
        <div className={styles.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </section>
    );
  };
  
  export default Loading;