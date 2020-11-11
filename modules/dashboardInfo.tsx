export const DASHBOARD_INFO_SET = 'DASHBOARD-INFO/SET';
export const DASHBORAD_DATA_UPDATE = 'DASHBOARD-DATA/UPDATE';

export type dashboardDataState = {
  data?: Object;
};

export type dashboardInfoState = {
  nvidia: {
    realtime: Array<string>;
    ignore: Array<string>;
  };
  amd: {
    realtime: Array<string>;
    ignore: Array<string>;
  };
  data?: Object;
};

export const initialState: dashboardInfoState = {
  nvidia: {
    realtime: [
      'gpu_util',
      'gpu_temp',
      'gpu_temp_max_threshold',
      'gpu_temp_slow_threshold'
    ],
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
      'serial',
      'driver_model',
      'accounting_mode_buffer_size',
      'accounting_mode',
      'persistence_mode',
      'display_active',
      'display_mode',
      'product_brand',
      'multigpu_board',
      'vbios_version',
      'minor_number',
      'gpu_part_number',
      'compute_mode',
      'ecc_mode',
      'clock_policy',
      'max_customer_boost_clocks',
      'id',
      'clocks_throttle_reasons',
      'uuid'
    ]
  },
  amd: { realtime: [], ignore: [] },
  data: {}
};

export const setDashboardData = (obj: dashboardDataState) => ({
  type: DASHBORAD_DATA_UPDATE,
  data: obj.data
});

export const setDashboardIfno = (obj: dashboardInfoState) => ({
  type: DASHBOARD_INFO_SET,
  nvidia: {
    realtime: obj.nvidia.realtime,
    ignore: obj.nvidia.ignore
  },
  amd: {
    realtime: obj.amd.realtime,
    ignore: obj.amd.ignore
  },
  data: obj.data
});

type actions = {
  type: string;
} & dashboardInfoState;

const reducer = (
  state: dashboardInfoState = initialState,
  action: actions
): dashboardInfoState | undefined => {
  switch (action.type) {
    case DASHBORAD_DATA_UPDATE:
      return {
        ...state,
        data: action.data
      };
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
