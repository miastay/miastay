import styles from '@/styles/widget.module.scss'

import * as React from "react";

export interface Props {
    style: String,
    children: React.ReactComponentElement<any>;
}

const Widget: React.FC<Props> = props => {
    return (
      <>
        <div className={styles.widget + ' p-sm dark:bg-surf-700 bg-white ' + props.style}>
            {props.children}
        </div>
      </>
    )
  }

export default Widget;