import { PageHeader } from "antd";

const Title = ({ children, sideContent, subtitle = "" }) => {
  const extraContent = (
    <div
      style={{
        display: "flex",
        width: "max-content",
        justifyContent: "flex-end",
      }}
    >
      {sideContent}
    </div>
  );

  return (
    <>
      <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title={children}
        subTitle={subtitle}
        extra={extraContent}
      />
    </>
  );
};
export default Title;
