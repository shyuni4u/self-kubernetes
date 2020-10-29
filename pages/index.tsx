import React from 'react';
import { useTranslation } from 'react-i18next';
import { Todo, TodoProps } from '../components/organisms/Todo';
import Wrapper from '../components/organisms/Wrapper';

export const Index: React.FC = () => {
  const { t } = useTranslation();

  const todo: TodoProps = {
    title: 'Todo',
    items: [
      {
        name: 'readme.md test',
        link: 'readme'
      },
      {
        name: 'API test (get)',
        link: 'test'
      },
      {
        name: 'login'
      },
      {
        name: 'token'
      },
      {
        name: 'kubectl create'
      },
      {
        name: 'kubectl expose'
      },
      {
        name: 'kubectl run'
      },
      {
        name: 'kubectl set'
      },
      {
        name: 'kubectl explain'
      },
      {
        name: 'kubectl get'
      },
      {
        name: 'kubectl edit'
      },
      {
        name: 'kubectl delete'
      }
    ]
  }
  const doing: TodoProps = {
    title: 'Doing'
  }
  const done: TodoProps = {
    title: 'Done'
  }

  // const changelanguageToKo = () => i18n.changeLanguage('ko');
  // const changelanguageToEn = () => i18n.changeLanguage('en');
  return (
    <Wrapper>
      {/* <button type={'button'} onClick={changelanguageToKo}>
          한국어
        </button>
        <button type={'button'} onClick={changelanguageToEn}>
          English
        </button> */}
      <h1>Kubernetes Admin Page</h1>
      <Todo {...todo} />
      <Todo {...doing} />
      <Todo {...done} />
    </Wrapper>
  );
};

export default Index;
