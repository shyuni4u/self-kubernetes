import React from 'react';
import Router from 'next/router';

import { toast } from 'react-toastify';

import Panel from '../atoms/Panel';
import Button from '../atoms/Button';

export type TodoItemProps = {
  /**
   * Item name
   */
  name?: string;
  /**
   * Item link
   */
  link?: string;
}

export type TodoProps = {
  /**
   * Title
   */
  title?: string;
  /**
   * Sub title
   */
  subtitle?: string;
  /**
   * Todo array
   */
  items?: TodoItemProps[];
}

export const Todo: React.FC<TodoProps> = ({
  title = undefined,
  subtitle = undefined,
  items = []
}) => {
  return (
    <Panel>
      {subtitle && <h3 className={'panel-sub-title'}>{subtitle}</h3>}
      {title && <h2 className={'panel-title'}>{title}</h2>}
      {items.length > 0 && 
        <div className={'panel-content'}>
          {items.map((el, elIdx) =>
            <Button
              key={elIdx}
              // disabled={el.link === undefined}
              primary={el.link === undefined}
              onClick={() => {
              if (el.link === undefined) {
                toast.error('Not yet', {
                  position: 'top-center',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined
                });
              } else {
                Router.push({
                  pathname: `./${el.link}`,
                  query: { name: el.name }
                });
              }
            }}>
              {el.name}
            </Button>)}
        </div>
      }
    </Panel>
  );
};

export default Todo;
