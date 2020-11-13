import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Todo, TodoProps } from '../components/organisms/Todo';
// import ApiTest from '../components/organisms/Test';
import Wrapper from '../components/organisms/Wrapper';
import Panel from '../components/atoms/Panel';
import Button from '../components/atoms/Button';

import reducerCount from '../reducers/reducerCount';

export const Index: React.FC = () => {
  const { t } = useTranslation();
  const [test, setTest] = useState<any>(null);
  const { gCount } = reducerCount();

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
        name: 'manual',
        link: 'total/manual'
      },
      {
        name: 'p100 + rx51 + rx52',
        link: 'total/dashboard'
      }
    ]
  };

  useEffect(() => {
    const onLoadTest = async () => {
      await axios
        .get(
          'https://searchconsole.googleapis.com/$discovery/rest?version=v1',
          {
            // params: { query: text }
          }
        )
        .then((response) => {
          setTest(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    onLoadTest();
  }, []);

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
      <h1
        style={{ marginBottom: '20px', textAlign: 'center', fontWeight: 600 }}
      >
        Admin Page
      </h1>
      <Todo {...kubernetes} />
      <Todo {...nvidia} />
      <Todo {...amd} />
      <Todo {...etc} />
      {/* <Panel>
        <span>{gCount.get}</span>
        <Button onClick={() => gCount.plus()}>plus</Button>
        <Button onClick={() => gCount.minus()}>minus</Button>
      </Panel>
      {test && test.data.description} */}
    </Wrapper>
  );
};

export default Index;
