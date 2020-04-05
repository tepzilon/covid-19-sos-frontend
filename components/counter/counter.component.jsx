import React from 'react';

import classNames from 'classnames';

import { Button } from 'antd';
import styles from './counter.module.scss';

import { StoreConnect } from '../../store/store';
import { increase, decrease } from '../../store/counter/counter.actions';

const Counter = ({ value, increase, decrease }) => (
  <div className={styles.counter}>
    <p className={classNames(styles.class1, styles.class2)}>
      The number is {value}
    </p>
    <Button onClick={increase}>Increase</Button>
    <Button onClick={decrease}>Decrease</Button>
  </div>
);

const propsMapper = (store) => ({
  value: store.counter.state.value,
  increase: () => store.counter.dispatch(increase(5)),
  decrease: () => store.counter.dispatch(decrease(5)),
});

export default StoreConnect(propsMapper)(Counter);
