import { Modal, Button, Tabs } from "antd";
import { useEffect, useState } from "react";

const MediaLibrary = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const handleLibrary = () => <p>handleLibrary</p>;
  const handleUpload = () => <p>handleUpload</p>;

  const tabPane = (
    <Tabs>
      <Tabs.TabPane tab="Library" key="library">
        {handleLibrary()}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Upload" key="upload">
        {handleUpload()}
      </Tabs.TabPane>
    </Tabs>
  );
  return (
    <>
      {" "}
      <Button onClick={handleModalVisibility}>Add Thumbnail</Button>{" "}
      <Modal
        closable
        onCancel={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
      >
        {tabPane}
      </Modal>
    </>
  );
};

export default MediaLibrary;
