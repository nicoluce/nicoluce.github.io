import { Layout } from "antd";
import DiceRoller from "components/DiceRoller";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "store";

const mapStateToProps = (state: AppState) => ({});

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = {} & PropsFromRedux;

const HomeView: React.FunctionComponent<Props> = props => {
  return (
    <Layout>
      <Layout.Header></Layout.Header>
      <Layout.Content style={{ display: "flex", alignItems: "baseline" }}>
        <DiceRoller />
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
};

export default connector(HomeView);
