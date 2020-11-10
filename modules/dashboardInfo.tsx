export const DASHBOARD_INFO_SET = 'DASHBOARD-INFO/SET';

export type dashboardInfoState = {
  nvidia: {
    realtime: Array<string>;
    ignore: Array<string>;
  };
  amd: {
    realtime: Array<string>;
    ignore: Array<string>;
  };
};

export const initialState: dashboardInfoState = {
  nvidia: {
    realtime: [],
    ignore: [
      'pci',
      'ecc_errors',
      'supported_graphics_clock',
      'ibmnpu',
      'gpu_virtualization_mode',
      'gpu_operation_mode',
      'inforom_version',
      'board_id',
      'performance_state',
      'fan_speed',
      'accounted_processes',
      'serial'
    ]
  },
  amd: { realtime: [], ignore: [] }
};

export const setDashboardIfno = (obj: dashboardInfoState) => ({
  type: DASHBOARD_INFO_SET,
  nvidia: {
    realtime: obj.nvidia.realtime,
    ignore: obj.nvidia.ignore
  },
  amd: {
    realtime: obj.amd.realtime,
    ignore: obj.amd.ignore
  }
});

type actions = {
  type: string;
} & dashboardInfoState;

const reducer = (
  state: dashboardInfoState = initialState,
  action: actions
): dashboardInfoState | undefined => {
  switch (action.type) {
    case DASHBOARD_INFO_SET:
      return {
        ...state,
        nvidia: {
          realtime: action.nvidia.realtime,
          ignore: action.nvidia.ignore
        },
        amd: {
          realtime: action.amd.realtime,
          ignore: action.amd.ignore
        }
      };
    default:
      return state;
  }
};

export default reducer;
