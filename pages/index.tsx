import React from 'react';
import { useTranslation } from 'react-i18next';
import { Todo, TodoProps } from '../components/organisms/Todo';
import Wrapper from '../components/organisms/Wrapper';

export const Index: React.FC = () => {
  const { t } = useTranslation();

  const kubernetes: TodoProps = {
    title: 'Kubernetes',
    subtitle: 'Kubernetes API test',
    items: [
      {
        name: 'API'
        // link: 'kubernetes/test'
      }
      // {
      //   name: 'login'
      // },
      // {
      //   name: 'token'
      // }
    ]
  };
  const nvidia: TodoProps = {
    title: 'NVIDIA',
    subtitle: 'dashboard (nvidia-smi)',
    items: [
      {
        name: 'p100',
        link: 'nvidia/dashboard'
      }
    ]
  };
  const amd: TodoProps = {
    title: 'AMD',
    subtitle: 'dashboard (rocm-smi)',
    items: [
      {
        name: 'rx51',
        link: 'amd/dashboard1'
      },
      {
        name: 'rx52',
        link: 'amd/dashboard2'
      }
    ]
  };
  const etc: TodoProps = {
    title: 'DASHBOARD',
    items: [
      {
        name: 'README',
        link: 'total/readme'
      },
      {
        name: 'manual',
        link: 'total/manual'
      },
      {
        name: 'p100 + rx51 + rx52',
        link: 'total/dashboard'
      }
    ]
  };

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
      <h1 style={{ marginBottom: '20px', textAlign: 'center', fontWeight: 600 }}>Admin Page</h1>
      <Todo {...kubernetes} />
      <Todo {...nvidia} />
      <Todo {...amd} />
      <Todo {...etc} />
    </Wrapper>
  );
};

export default Index;
