import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject } from 'mobx-react';
import { asyncRouter, nomatch } from '@choerodon/boot';

const HelloIndex = asyncRouter(() => import('./organization/pro/table'));
const DemoIndex = asyncRouter(() => import('./organization/tableDemo'));

@inject('AppState')
class DEMOIndex extends React.Component {
  render() {
    const { match, AppState } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/hello`} component={HelloIndex} />
        <Route path={`${match.url}/demo`} component={DemoIndex} />
        <Route path="*" component={nomatch} />
      </Switch>
    );
  }
}

export default DEMOIndex;
