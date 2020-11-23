import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../components/atoms/Button';

import { Todo, TodoProps } from '../components/organisms/Todo';
import Wrapper from '../components/organisms/Wrapper';
import ClusterChart from '../components/organisms/ClusterChart';
import ClusterHex from '../components/organisms/ClusterHex';

export enum ClusterMode {
  none = '',
  hex = 'hex',
  chart = 'chart'
}

export const Index: React.FC = () => {
  const { t } = useTranslation();
  const [moreh, setMoreh] = useState<boolean>(false);
  const [mode, setMode] = useState<string>(ClusterMode.hex);

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
  const doc: TodoProps = {
    title: 'Document',
    items: [
      {
        name: 'README',
        link: 'doc/readme'
      },
      {
        name: 'dev test',
        link: 'doc/test'
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
      <h1 style={{ margin: '10px 0', textAlign: 'center', fontWeight: 600 }}>Admin Page</h1>
      <nav>
        <Button primary={moreh} onClick={() => setMoreh((prev) => !prev)}>
          {moreh ? 'Moreh > User' : 'User > Moreh'}
        </Button>
        {!moreh && (
          <>
            <Button
              style={{
                backgroundColor: mode === ClusterMode.hex ? '#b06601' : '',
                color: mode === ClusterMode.hex ? '#ffd36b' : ''
              }}
              onClick={() => setMode(ClusterMode.hex)}
            >
              hex
            </Button>
            <Button
              style={{
                backgroundColor: mode === ClusterMode.chart ? '#b06601' : '',
                color: mode === ClusterMode.chart ? '#ffd36b' : ''
              }}
              onClick={() => setMode(ClusterMode.chart)}
            >
              chart
            </Button>
          </>
        )}
      </nav>

      {!moreh && mode === ClusterMode.chart && <ClusterChart />}
      {!moreh && mode === ClusterMode.hex && <ClusterHex />}

      {moreh && (
        <>
          <Todo {...etc} />
          <Todo {...doc} />
          <Todo {...nvidia} />
          <Todo {...amd} />
          <Todo {...kubernetes} />
        </>
      )}
    </Wrapper>
  );
};

export default Index;
