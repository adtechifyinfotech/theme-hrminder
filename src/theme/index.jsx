import { ConfigProvider } from "antd";
const ThemeConfig = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "var(--font-primary)",
          colorPrimary: "#e25319",
          colorInfo: "#e25319",
          colorSuccess: "#3fc28a",
          colorWarning: "#efbe12",
          colorError: "#f45b69",
          colorBgBase: "#131313",
          colorTextBase: "#ffffff",
          fontSize: "var(--text-xl)",
        },
        components: {
          Layout: {
            bodyBg: "var(--clr-black)",
            headerBg: "var(--clr-black)",
            siderBg: "rgba(var(--clr-gray-rgb),0.05)",
          },
          Menu: {
            itemBg: "rgba(var(--clr-gray-rgb),0.0005)",
            itemColor: "var(--clr-white)",
            itemHoverBg: "rgba(226,83,25,0.050980392156862744)",
            itemHoverColor: "var(--clr-white)",
            itemActiveBg: "rgba(var(--clr-primary-rgb),0.10)",
            itemSelectedBg: "rgba(var(--clr-primary-rgb),0.050980392156862744)",
            iconMarginInlineEnd: "var(--space-lg)",
            iconSize: "var(--space-2xl)",
            itemHeight: 50,
            margin: "var(--space-lg)",
            padding: "var(--space-lg)",
          },
          Button: {
            borderRadius: "var(--space-md)",
            controlHeight: "5.6rem",
            paddingInline: "var(--space-xl)",
            paddingBlock: "var(--space-xl)",
            contentFontSize: "var(--text-xl)",
            fontSize: "var(--text-xl)",
            defaultShadow: "none",
            primaryShadow: "none",
            dangerShadow: "none",
            onlyIconSize: "var(--icon)",
            defaultBorderColor: "rgba(var(--clr-gray-rgb),0.2)",
          },
          Breadcrumb: {
            itemColor: "rgb(255,255,255)",
            lastItemColor: "rgb(255,255,255)",
            linkColor: "rgb(226,83,25)",
            separatorMargin: 4,
            fontSize: 14,
            lineHeight: 1.57,
          },
          Pagination: {
            borderRadius: 8,
            margin: 5,
            fontSize: 14,
            lineHeight: 1.57,
            controlHeight: 36,
            itemSize: 36,
          },
          Input: {
            controlHeight: 56,
            paddingInline: 16,
            paddingBlock: 16,
            inputFontSize: 16,
            colorBorder: "rgba(var(--clr-gray-rgb),0.2)",
            activeBorderColor: "var(--clr-primary)",
            hoverBorderColor: "var(--clr-primary)",
            borderRadius: "var(--space-md)",
            colorText: "rgb(255,255,255)",
          },
          Checkbox: {
            colorBorder: "rgba(var(--clr-gray-rgb),0.2)",
            colorPrimaryBorder: "rgb(226,83,25)",
            colorPrimary: "rgb(226,83,25)",
          },
          Table: {
            footerColor: "rgb(19,19,19)",
            headerBg: "rgb(19,19,19)",
            borderColor: "rgba(var(--clr-gray-rgb),0.10196078431372549)",
          },
          Calendar: {
            itemActiveBg: "rgb(226,83,25)",
            colorPrimary: "rgb(255,255,255)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
