import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import Link from 'next/link';
import React from 'react';

const App: React.FC = () => (
  <Result
    icon={<SmileOutlined />}
    title="Boilerplate NextJs with AntDesign, Jest, Eslint, Prettier, and Pre-commit Husky"
    extra={<Button type="primary"><Link href="https://github.com/FandiAR/boilerplate-nextjs-typescript" target="_blank">Go To Repository</Link></Button>}
  />
);

export default App;