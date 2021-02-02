import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl } from 'umi';
import {Card,Button} from 'antd'

const Dashboard = () => {
  const intl = useIntl();

  return (
    <PageHeaderWrapper
      content={intl.formatMessage({
        id: 'pages.admin.dashboard.title',
        defaultMessage: 'Super Dashboard',
      })}
    >
    <Card>
    <Button>clients list</Button>
     </Card>
    </PageHeaderWrapper>
  );
};

export default Dashboard;
