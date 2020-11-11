import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import {
  dashboardInfoState,
  dashboardDataState,
  setDashboardIfno,
  setDashboardData
} from '../modules/dashboardInfo';

const reducerDashboardInfo = () => {
  const dispatch = useDispatch();

  const dashboardInfo = {
    get: useSelector((state: RootState) => state.dashboardInfoModule),
    set: useCallback(
      (value: dashboardInfoState) => dispatch(setDashboardIfno(value)),
      [dispatch]
    )
  };
  const dashboardData = {
    get: useSelector((state: RootState) => state.dashboardInfoModule.data),
    set: useCallback(
      (value: dashboardDataState) => dispatch(setDashboardData(value)),
      [dispatch]
    )
  };

  return {
    dashboardInfo,
    dashboardData
  };
};

export default reducerDashboardInfo;
