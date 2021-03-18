import React, { Component } from "react";
import { Layout, message, Spin, Switch } from "antd";
import { Sun, Moon } from "@styled-icons/boxicons-solid";
import darkVars from "../../dark.json";
import lightVars from "../../light.json";
// import "../../styles/main.less";

class ThemeHandler extends Component {
  constructor(props) {
    super(props);
    let initialValue = lightVars;
    let vars = {};
    let themeName = localStorage.getItem("theme-name") || "light";

    try {
      vars = localStorage.getItem("app-theme");
      if (!vars) {
        vars = initialValue;
      } else {
        vars = Object.assign({}, JSON.parse(vars));
      }
    } catch (e) {
      vars = initialValue;
    } finally {
      this.state = {
        themeApplied: false,
        vars,
        initialValue,
        size: "default",
        disabled: false,
        themeName,
      };
      window.less
        .modifyVars(vars)
        .then(() => {
          this.setState({ themeApplied: true });
        })
        .catch((error) => {
          message.error(`Failed to update theme`);
        });
    }
  }

  resetTheme = () => {
    localStorage.setItem("app-theme", "{}");
    localStorage.setItem("theme-name", "light");
    this.setState({ themeName: "light" });
    this.setState({ vars: this.state.initialValue });
    window.less.modifyVars(this.state.initialValue).catch((error) => {
      message.error(`Failed to reset theme`);
    });
  };

  render() {
    const { themeApplied } = this.state;

    if (!themeApplied) {
      return (
        <Spin size="large">
          <Layout className="app" />
        </Spin>
      );
    }
    return (
      <>
        <Switch
          checked={this.state.themeName === "dark"}
          checkedChildren={<Sun size={18} />}
          unCheckedChildren={<Moon size={18} />}
          onChange={(v) => {
            let vars = !v ? lightVars : darkVars;
            let value = !v ? "light" : "dark";
            vars = {
              ...vars,
              "@white": "#fff",
              "@black": "#000",
            };
            this.setState({ vars, themeName: value });
            this.setState({ vars });
            localStorage.setItem("app-theme", JSON.stringify(vars));
            localStorage.setItem("theme-name", value);
            window.less.modifyVars(vars).catch((error) => {});
          }}
        />
      </>
    );
  }
}

export default ThemeHandler;
