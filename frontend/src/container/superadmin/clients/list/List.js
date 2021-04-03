import { navigate } from "@reach/router";
import { Button, Spin, Table } from "antd";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useInjectReducer } from "../../../../utils/injectReducer";
import { Title } from "../../../components";
import { selectLoading, reduxKey, selectClientsList } from "./selectors";
import reducer from "./reducers";
import * as mapDispatchToProps from "./actions";
import { useEffect } from "react";

const List = ({ loading, getClientsList, clients }) => {
  useInjectReducer({ reducer, key: reduxKey });

  useEffect(() => {
    getClientsList();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tables",
      dataIndex: "numberOfTables",
      key: "numberOfTables",
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      render: (_, record) => (
        <>
          <Button onClick={() => navigate(`./view/${record.id}`)}>View</Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Title
        sideContent={
          <Button type="primary" onClick={() => navigate(`./create`)}>
            Add Clients
          </Button>
        }
      >
        Client List
      </Title>
      <Spin tip="Loading Clients" spinning={loading}>
        <Table columns={columns} dataSource={clients} />
      </Spin>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  clients: selectClientsList,
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
