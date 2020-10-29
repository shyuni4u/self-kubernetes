import React from 'react';
import Link from 'next/link';

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
   * Todo array
   */
  items?: TodoItemProps[];
}

export const Todo: React.FC<TodoProps> = ({
  title = 'TODO',
  items = []
}) => {
  return (
    <article>
      <h2>{title}</h2>
      {items.length > 0 && 
        <ul>
          {items.map((el, elIdx) => <li key={elIdx}>
            <Link href={`/${el.link}`}>
              <a>{el.name}</a>
            </Link>
          </li>)}
        </ul>
      }
    </article>
  );
};

export default Todo;
