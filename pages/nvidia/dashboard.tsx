import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-toastify';

import Wrapper from '../../components/organisms/Wrapper';
import Panel from '../../components/atoms/Panel';
import Button from '../../components/atoms/Button';
import DashboardItem from '../../components/atoms/DashboardItem';

import auth from '../../.env/auth.json';

import reducerDashboardInfo from '../../reducers/reducerDashboardInfo';

const StyledHeader = styled.header`
  width: 100%;
  height: 114px;
  position: fixed;
  top: 0px;
  z-index: 1;
  margin-bottom: 10px;
  background-color: #000;
  ${({ theme }) => theme.media.tablet`
    height: auto;
    position: inherit;
  `}
  ${({ theme }) => theme.media.mobile`
    height: auto;
    position: inherit;
  `}
`;
const StyledBody = styled.article`
  margin-top: 114px;
  ${({ theme }) => theme.media.tablet`
    margin-top: 0;
  `}
  ${({ theme }) => theme.media.mobile`
    margin-top: 0;
  `}
`;

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  & > li {
    flex: 1 1 auto;
    align-self: center;
    text-align: center;
  }
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
  `}
`;
const StyledPageButton = styled.button.attrs({
  type: 'button'
})`
  line-height: 1.5;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #c77e19;
  color: #f7b10a;
  margin: 10px;
  padding: 6px 15px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #b06601;
    color: #ffd36b;
    outline-width: 0;
  }
  -webkit-transition: 0.2s;
  transition: 0.2s;
`;
const StyledImportInput = styled.input`
  background-color: #ddd;
  color: #333;
  width: calc(100% - 20px);
  margin: 0 10px 10px;
  padding: 10px;
`;

const dummy = {
  timestamp: 'Mon Nov  9 16:16:21 2020',
  driver_version: '440.33.01',
  cuda_version: '10.2',
  attached_gpus: '4',
  gpu: [
    {
      id: '00000000:05:00.0',
      product_name: 'Tesla P100-SXM2-16GB',
      product_brand: 'Tesla',
      display_mode: 'Enabled',
      display_active: 'Disabled',
      persistence_mode: 'Disabled',
      accounting_mode: 'Disabled',
      accounting_mode_buffer_size: '4000',
      driver_model: { current_dm: 'N/A', pending_dm: 'N/A' },
      serial: '0324816159322',
      uuid: 'GPU-0ee2696d-b209-c0cb-a8bc-2803f2235f2f',
      minor_number: '0',
      vbios_version: '86.00.26.00.02',
      multigpu_board: 'No',
      board_id: '0x500',
      gpu_part_number: '900-2H403-0000-000',
      inforom_version: {
        img_version: 'H403.0201.00.04',
        oem_object: '1.1',
        ecc_object: '4.1',
        pwr_object: 'N/A'
      },
      gpu_operation_mode: { current_gom: 'N/A', pending_gom: 'N/A' },
      gpu_virtualization_mode: {
        virtualization_mode: 'None',
        host_vgpu_mode: 'N/A'
      },
      ibmnpu: { relaxed_ordering_mode: 'N/A' },
      pci: {
        pci_bus: '05',
        pci_device: '00',
        pci_domain: '0000',
        pci_device_id: '15F910DE',
        pci_bus_id: '00000000:05:00.0',
        pci_sub_system_id: '116B10DE',
        pci_gpu_link_info: {
          pcie_gen: { max_link_gen: '3', current_link_gen: '3' },
          link_widths: { max_link_width: '16x', current_link_width: '16x' }
        },
        pci_bridge_chip: { bridge_chip_type: 'N/A', bridge_chip_fw: 'N/A' },
        replay_counter: '0',
        replay_rollover_counter: '0',
        tx_util: '0 KB/s',
        rx_util: '0 KB/s'
      },
      fan_speed: 'N/A',
      performance_state: 'P0',
      clocks_throttle_reasons: {
        clocks_throttle_reason_gpu_idle: 'Not Active',
        clocks_throttle_reason_applications_clocks_setting: 'Not Active',
        clocks_throttle_reason_sw_power_cap: 'Not Active',
        clocks_throttle_reason_hw_slowdown: 'Not Active',
        clocks_throttle_reason_hw_thermal_slowdown: 'Not Active',
        clocks_throttle_reason_hw_power_brake_slowdown: 'Not Active',
        clocks_throttle_reason_sync_boost: 'Not Active',
        clocks_throttle_reason_sw_thermal_slowdown: 'Not Active',
        clocks_throttle_reason_display_clocks_setting: 'Not Active'
      },
      fb_memory_usage: {
        total: '16280 MiB',
        used: '1529 MiB',
        free: '14751 MiB'
      },
      bar1_memory_usage: {
        total: '16384 MiB',
        used: '2 MiB',
        free: '16382 MiB'
      },
      compute_mode: 'Default',
      utilization: {
        gpu_util: '0 %',
        memory_util: '0 %',
        encoder_util: '0 %',
        decoder_util: '0 %'
      },
      encoder_stats: {
        session_count: '0',
        average_fps: '0',
        average_latency: '0'
      },
      fbc_stats: { session_count: '0', average_fps: '0', average_latency: '0' },
      ecc_mode: { current_ecc: 'Enabled', pending_ecc: 'Enabled' },
      ecc_errors: {
        volatile: {
          single_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          },
          double_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          }
        },
        aggregate: {
          single_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          },
          double_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          }
        }
      },
      retired_pages: {
        multiple_single_bit_retirement: {
          retired_count: '0',
          retired_pagelist: ''
        },
        double_bit_retirement: { retired_count: '0', retired_pagelist: '' },
        pending_blacklist: 'No',
        pending_retirement: 'No'
      },
      temperature: {
        gpu_temp: '41 C',
        gpu_temp_max_threshold: '85 C',
        gpu_temp_slow_threshold: '82 C',
        gpu_temp_max_gpu_threshold: 'N/A',
        memory_temp: 'N/A',
        gpu_temp_max_mem_threshold: 'N/A'
      },
      power_readings: {
        power_state: 'P0',
        power_management: 'Supported',
        power_draw: '42.89 W',
        power_limit: '300.00 W',
        default_power_limit: '300.00 W',
        enforced_power_limit: '300.00 W',
        min_power_limit: '150.00 W',
        max_power_limit: '300.00 W'
      },
      clocks: {
        graphics_clock: '1328 MHz',
        sm_clock: '1328 MHz',
        mem_clock: '715 MHz',
        video_clock: '1189 MHz'
      },
      applications_clocks: { graphics_clock: '1328 MHz', mem_clock: '715 MHz' },
      default_applications_clocks: {
        graphics_clock: '1328 MHz',
        mem_clock: '715 MHz'
      },
      max_clocks: {
        graphics_clock: '1480 MHz',
        sm_clock: '1480 MHz',
        mem_clock: '715 MHz',
        video_clock: '1480 MHz'
      },
      max_customer_boost_clocks: { graphics_clock: 'N/A' },
      clock_policy: { auto_boost: 'N/A', auto_boost_default: 'N/A' },
      supported_clocks: {
        supported_mem_clock: {
          value: '715 MHz',
          supported_graphics_clock: ['1480 MHz']
        }
      },
      processes: {
        process_info: [
          {
            pid: '8178',
            type: 'C',
            process_name: '/home/yonho67/miniconda3/bin/python',
            used_memory: '257 MiB'
          }
        ]
      },
      accounted_processes: ''
    },
    {
      id: '00000000:06:00.0',
      product_name: 'Tesla P100-SXM2-16GB',
      product_brand: 'Tesla',
      display_mode: 'Enabled',
      display_active: 'Disabled',
      persistence_mode: 'Disabled',
      accounting_mode: 'Disabled',
      accounting_mode_buffer_size: '4000',
      driver_model: { current_dm: 'N/A', pending_dm: 'N/A' },
      serial: '0324516217481',
      uuid: 'GPU-4b11e755-ed62-4e56-819f-5f7634bb1c88',
      minor_number: '1',
      vbios_version: '86.00.26.00.02',
      multigpu_board: 'No',
      board_id: '0x600',
      gpu_part_number: '900-2H403-0000-000',
      inforom_version: {
        img_version: 'H403.0201.00.04',
        oem_object: '1.1',
        ecc_object: '4.1',
        pwr_object: 'N/A'
      },
      gpu_operation_mode: { current_gom: 'N/A', pending_gom: 'N/A' },
      gpu_virtualization_mode: {
        virtualization_mode: 'None',
        host_vgpu_mode: 'N/A'
      },
      ibmnpu: { relaxed_ordering_mode: 'N/A' },
      pci: {
        pci_bus: '06',
        pci_device: '00',
        pci_domain: '0000',
        pci_device_id: '15F910DE',
        pci_bus_id: '00000000:06:00.0',
        pci_sub_system_id: '116B10DE',
        pci_gpu_link_info: {
          pcie_gen: { max_link_gen: '3', current_link_gen: '3' },
          link_widths: { max_link_width: '16x', current_link_width: '16x' }
        },
        pci_bridge_chip: { bridge_chip_type: 'N/A', bridge_chip_fw: 'N/A' },
        replay_counter: '0',
        replay_rollover_counter: '0',
        tx_util: '0 KB/s',
        rx_util: '0 KB/s'
      },
      fan_speed: 'N/A',
      performance_state: 'P0',
      clocks_throttle_reasons: {
        clocks_throttle_reason_gpu_idle: 'Active',
        clocks_throttle_reason_applications_clocks_setting: 'Not Active',
        clocks_throttle_reason_sw_power_cap: 'Not Active',
        clocks_throttle_reason_hw_slowdown: 'Not Active',
        clocks_throttle_reason_hw_thermal_slowdown: 'Not Active',
        clocks_throttle_reason_hw_power_brake_slowdown: 'Not Active',
        clocks_throttle_reason_sync_boost: 'Not Active',
        clocks_throttle_reason_sw_thermal_slowdown: 'Not Active',
        clocks_throttle_reason_display_clocks_setting: 'Not Active'
      },
      fb_memory_usage: {
        total: '16280 MiB',
        used: '10 MiB',
        free: '16270 MiB'
      },
      bar1_memory_usage: {
        total: '16384 MiB',
        used: '2 MiB',
        free: '16382 MiB'
      },
      compute_mode: 'Default',
      utilization: {
        gpu_util: '0 %',
        memory_util: '0 %',
        encoder_util: '0 %',
        decoder_util: '0 %'
      },
      encoder_stats: {
        session_count: '0',
        average_fps: '0',
        average_latency: '0'
      },
      fbc_stats: { session_count: '0', average_fps: '0', average_latency: '0' },
      ecc_mode: { current_ecc: 'Enabled', pending_ecc: 'Enabled' },
      ecc_errors: {
        volatile: {
          single_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          },
          double_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          }
        },
        aggregate: {
          single_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          },
          double_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          }
        }
      },
      retired_pages: {
        multiple_single_bit_retirement: {
          retired_count: '0',
          retired_pagelist: ''
        },
        double_bit_retirement: { retired_count: '0', retired_pagelist: '' },
        pending_blacklist: 'No',
        pending_retirement: 'No'
      },
      temperature: {
        gpu_temp: '36 C',
        gpu_temp_max_threshold: '85 C',
        gpu_temp_slow_threshold: '82 C',
        gpu_temp_max_gpu_threshold: 'N/A',
        memory_temp: 'N/A',
        gpu_temp_max_mem_threshold: 'N/A'
      },
      power_readings: {
        power_state: 'P0',
        power_management: 'Supported',
        power_draw: '33.32 W',
        power_limit: '300.00 W',
        default_power_limit: '300.00 W',
        enforced_power_limit: '300.00 W',
        min_power_limit: '150.00 W',
        max_power_limit: '300.00 W'
      },
      clocks: {
        graphics_clock: '405 MHz',
        sm_clock: '405 MHz',
        mem_clock: '715 MHz',
        video_clock: '835 MHz'
      },
      applications_clocks: { graphics_clock: '1328 MHz', mem_clock: '715 MHz' },
      default_applications_clocks: {
        graphics_clock: '1328 MHz',
        mem_clock: '715 MHz'
      },
      max_clocks: {
        graphics_clock: '1480 MHz',
        sm_clock: '1480 MHz',
        mem_clock: '715 MHz',
        video_clock: '1480 MHz'
      },
      max_customer_boost_clocks: { graphics_clock: 'N/A' },
      clock_policy: { auto_boost: 'N/A', auto_boost_default: 'N/A' },
      supported_clocks: {
        supported_mem_clock: {
          value: '715 MHz',
          supported_graphics_clock: ['1480 MHz']
        }
      },
      processes: '',
      accounted_processes: ''
    },
    {
      id: '00000000:84:00.0',
      product_name: 'Tesla P100-SXM2-16GB',
      product_brand: 'Tesla',
      display_mode: 'Enabled',
      display_active: 'Disabled',
      persistence_mode: 'Disabled',
      accounting_mode: 'Disabled',
      accounting_mode_buffer_size: '4000',
      driver_model: { current_dm: 'N/A', pending_dm: 'N/A' },
      serial: '0324516216546',
      uuid: 'GPU-d9663925-c6dc-2190-73ac-f522bb122178',
      minor_number: '2',
      vbios_version: '86.00.26.00.02',
      multigpu_board: 'No',
      board_id: '0x8400',
      gpu_part_number: '900-2H403-0000-000',
      inforom_version: {
        img_version: 'H403.0201.00.04',
        oem_object: '1.1',
        ecc_object: '4.1',
        pwr_object: 'N/A'
      },
      gpu_operation_mode: { current_gom: 'N/A', pending_gom: 'N/A' },
      gpu_virtualization_mode: {
        virtualization_mode: 'None',
        host_vgpu_mode: 'N/A'
      },
      ibmnpu: { relaxed_ordering_mode: 'N/A' },
      pci: {
        pci_bus: '84',
        pci_device: '00',
        pci_domain: '0000',
        pci_device_id: '15F910DE',
        pci_bus_id: '00000000:84:00.0',
        pci_sub_system_id: '116B10DE',
        pci_gpu_link_info: {
          pcie_gen: { max_link_gen: '3', current_link_gen: '3' },
          link_widths: { max_link_width: '16x', current_link_width: '16x' }
        },
        pci_bridge_chip: { bridge_chip_type: 'N/A', bridge_chip_fw: 'N/A' },
        replay_counter: '0',
        replay_rollover_counter: '0',
        tx_util: '0 KB/s',
        rx_util: '0 KB/s'
      },
      fan_speed: 'N/A',
      performance_state: 'P0',
      clocks_throttle_reasons: {
        clocks_throttle_reason_gpu_idle: 'Active',
        clocks_throttle_reason_applications_clocks_setting: 'Not Active',
        clocks_throttle_reason_sw_power_cap: 'Not Active',
        clocks_throttle_reason_hw_slowdown: 'Not Active',
        clocks_throttle_reason_hw_thermal_slowdown: 'Not Active',
        clocks_throttle_reason_hw_power_brake_slowdown: 'Not Active',
        clocks_throttle_reason_sync_boost: 'Not Active',
        clocks_throttle_reason_sw_thermal_slowdown: 'Not Active',
        clocks_throttle_reason_display_clocks_setting: 'Not Active'
      },
      fb_memory_usage: {
        total: '16280 MiB',
        used: '10 MiB',
        free: '16270 MiB'
      },
      bar1_memory_usage: {
        total: '16384 MiB',
        used: '2 MiB',
        free: '16382 MiB'
      },
      compute_mode: 'Default',
      utilization: {
        gpu_util: '0 %',
        memory_util: '0 %',
        encoder_util: '0 %',
        decoder_util: '0 %'
      },
      encoder_stats: {
        session_count: '0',
        average_fps: '0',
        average_latency: '0'
      },
      fbc_stats: { session_count: '0', average_fps: '0', average_latency: '0' },
      ecc_mode: { current_ecc: 'Enabled', pending_ecc: 'Enabled' },
      ecc_errors: {
        volatile: {
          single_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          },
          double_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          }
        },
        aggregate: {
          single_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          },
          double_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          }
        }
      },
      retired_pages: {
        multiple_single_bit_retirement: {
          retired_count: '0',
          retired_pagelist: ''
        },
        double_bit_retirement: { retired_count: '0', retired_pagelist: '' },
        pending_blacklist: 'No',
        pending_retirement: 'No'
      },
      temperature: {
        gpu_temp: '35 C',
        gpu_temp_max_threshold: '85 C',
        gpu_temp_slow_threshold: '82 C',
        gpu_temp_max_gpu_threshold: 'N/A',
        memory_temp: 'N/A',
        gpu_temp_max_mem_threshold: 'N/A'
      },
      power_readings: {
        power_state: 'P0',
        power_management: 'Supported',
        power_draw: '32.84 W',
        power_limit: '300.00 W',
        default_power_limit: '300.00 W',
        enforced_power_limit: '300.00 W',
        min_power_limit: '150.00 W',
        max_power_limit: '300.00 W'
      },
      clocks: {
        graphics_clock: '405 MHz',
        sm_clock: '405 MHz',
        mem_clock: '715 MHz',
        video_clock: '835 MHz'
      },
      applications_clocks: { graphics_clock: '1328 MHz', mem_clock: '715 MHz' },
      default_applications_clocks: {
        graphics_clock: '1328 MHz',
        mem_clock: '715 MHz'
      },
      max_clocks: {
        graphics_clock: '1480 MHz',
        sm_clock: '1480 MHz',
        mem_clock: '715 MHz',
        video_clock: '1480 MHz'
      },
      max_customer_boost_clocks: { graphics_clock: 'N/A' },
      clock_policy: { auto_boost: 'N/A', auto_boost_default: 'N/A' },
      supported_clocks: {
        supported_mem_clock: {
          value: '715 MHz',
          supported_graphics_clock: ['1480 MHz', '1468 MHz']
        }
      },
      processes: '',
      accounted_processes: ''
    },
    {
      id: '00000000:85:00.0',
      product_name: 'Tesla P100-SXM2-16GB',
      product_brand: 'Tesla',
      display_mode: 'Enabled',
      display_active: 'Disabled',
      persistence_mode: 'Disabled',
      accounting_mode: 'Disabled',
      accounting_mode_buffer_size: '4000',
      driver_model: { current_dm: 'N/A', pending_dm: 'N/A' },
      serial: '0324516216390',
      uuid: 'GPU-6c8de513-7058-84bb-7fcc-d6b01bb53ee5',
      minor_number: '3',
      vbios_version: '86.00.26.00.02',
      multigpu_board: 'No',
      board_id: '0x8500',
      gpu_part_number: '900-2H403-0000-000',
      inforom_version: {
        img_version: 'H403.0201.00.04',
        oem_object: '1.1',
        ecc_object: '4.1',
        pwr_object: 'N/A'
      },
      gpu_operation_mode: { current_gom: 'N/A', pending_gom: 'N/A' },
      gpu_virtualization_mode: {
        virtualization_mode: 'None',
        host_vgpu_mode: 'N/A'
      },
      ibmnpu: { relaxed_ordering_mode: 'N/A' },
      pci: {
        pci_bus: '85',
        pci_device: '00',
        pci_domain: '0000',
        pci_device_id: '15F910DE',
        pci_bus_id: '00000000:85:00.0',
        pci_sub_system_id: '116B10DE',
        pci_gpu_link_info: {
          pcie_gen: { max_link_gen: '3', current_link_gen: '3' },
          link_widths: { max_link_width: '16x', current_link_width: '16x' }
        },
        pci_bridge_chip: { bridge_chip_type: 'N/A', bridge_chip_fw: 'N/A' },
        replay_counter: '0',
        replay_rollover_counter: '0',
        tx_util: '0 KB/s',
        rx_util: '0 KB/s'
      },
      fan_speed: 'N/A',
      performance_state: 'P0',
      clocks_throttle_reasons: {
        clocks_throttle_reason_gpu_idle: 'Active',
        clocks_throttle_reason_applications_clocks_setting: 'Not Active',
        clocks_throttle_reason_sw_power_cap: 'Not Active',
        clocks_throttle_reason_hw_slowdown: 'Not Active',
        clocks_throttle_reason_hw_thermal_slowdown: 'Not Active',
        clocks_throttle_reason_hw_power_brake_slowdown: 'Not Active',
        clocks_throttle_reason_sync_boost: 'Not Active',
        clocks_throttle_reason_sw_thermal_slowdown: 'Not Active',
        clocks_throttle_reason_display_clocks_setting: 'Not Active'
      },
      fb_memory_usage: {
        total: '16280 MiB',
        used: '10 MiB',
        free: '16270 MiB'
      },
      bar1_memory_usage: {
        total: '16384 MiB',
        used: '2 MiB',
        free: '16382 MiB'
      },
      compute_mode: 'Default',
      utilization: {
        gpu_util: '0 %',
        memory_util: '0 %',
        encoder_util: '0 %',
        decoder_util: '0 %'
      },
      encoder_stats: {
        session_count: '0',
        average_fps: '0',
        average_latency: '0'
      },
      fbc_stats: { session_count: '0', average_fps: '0', average_latency: '0' },
      ecc_mode: { current_ecc: 'Enabled', pending_ecc: 'Enabled' },
      ecc_errors: {
        volatile: {
          single_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          },
          double_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          }
        },
        aggregate: {
          single_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          },
          double_bit: {
            device_memory: '0',
            register_file: '0',
            l1_cache: 'N/A',
            l2_cache: '0',
            texture_memory: '0',
            texture_shm: '0',
            cbu: 'N/A',
            total: '0'
          }
        }
      },
      retired_pages: {
        multiple_single_bit_retirement: {
          retired_count: '0',
          retired_pagelist: ''
        },
        double_bit_retirement: { retired_count: '0', retired_pagelist: '' },
        pending_blacklist: 'No',
        pending_retirement: 'No'
      },
      temperature: {
        gpu_temp: '38 C',
        gpu_temp_max_threshold: '85 C',
        gpu_temp_slow_threshold: '82 C',
        gpu_temp_max_gpu_threshold: 'N/A',
        memory_temp: 'N/A',
        gpu_temp_max_mem_threshold: 'N/A'
      },
      power_readings: {
        power_state: 'P0',
        power_management: 'Supported',
        power_draw: '32.84 W',
        power_limit: '300.00 W',
        default_power_limit: '300.00 W',
        enforced_power_limit: '300.00 W',
        min_power_limit: '150.00 W',
        max_power_limit: '300.00 W'
      },
      clocks: {
        graphics_clock: '405 MHz',
        sm_clock: '405 MHz',
        mem_clock: '715 MHz',
        video_clock: '835 MHz'
      },
      applications_clocks: { graphics_clock: '1328 MHz', mem_clock: '715 MHz' },
      default_applications_clocks: {
        graphics_clock: '1328 MHz',
        mem_clock: '715 MHz'
      },
      max_clocks: {
        graphics_clock: '1480 MHz',
        sm_clock: '1480 MHz',
        mem_clock: '715 MHz',
        video_clock: '1480 MHz'
      },
      max_customer_boost_clocks: { graphics_clock: 'N/A' },
      clock_policy: { auto_boost: 'N/A', auto_boost_default: 'N/A' },
      supported_clocks: {
        supported_mem_clock: {
          value: '715 MHz',
          supported_graphics_clock: ['1480 MHz', '1468 MHz']
        }
      },
      processes: '',
      accounted_processes: ''
    }
  ]
};

export type cuda_10_2_result = typeof dummy;

const nvidiaApi = axios.create({
  baseURL: auth['nvidia-ip'],
  timeout: 5000
});

export const Dashboard: React.FC = () => {
  const { dashboardInfo } = reducerDashboardInfo();
  const [result, setResult] = useState<cuda_10_2_result>(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [importInfo, setImportInfo] = useState<string>('');
  const [selectedGpu, setSelectedGpu] = useState<number>(0);

  useEffect(() => {
    let unmount = false;
    const onLoadApi = async () => {
      await nvidiaApi
        .get('/api')
        .then((response) => {
          if (unmount) return;
          if (response.status === 200) {
            setResult(response.data.nvidia_smi_log);
          } else {
            setResult(undefined);
          }
        })
        .catch((error) => {
          if (unmount) return;
          console.log('error', error);
        });
    };

    const interval = setInterval(() => {
      onLoadApi();
    }, 1000);

    return () => {
      unmount = true;
      clearInterval(interval);
    };
  }, []);

  const printAll = (
    jsonObject: any,
    edit: boolean,
    refreshValue: number,
    depth: number = 0
  ) => {
    return Object.keys(jsonObject).map((key: string, index: number) => (
      <Fragment key={index}>
        {typeof jsonObject[key] === 'string' &&
          (editMode || !dashboardInfo.get['nvidia'].ignore.includes(key)) && (
            <DashboardItem
              title={key}
              value={jsonObject[key]}
              depth={depth}
              gpu={'nvidia'}
              edit={edit}
              refreshValue={refreshValue}
            ></DashboardItem>
          )}
        {typeof jsonObject[key] === 'object' &&
          (editMode || !dashboardInfo.get['nvidia'].ignore.includes(key)) && (
            <DashboardItem
              title={key}
              value={jsonObject[key]}
              depth={depth}
              gpu={'nvidia'}
              edit={edit}
              refreshValue={refreshValue}
            >
              {printAll(jsonObject[key], edit, depth + 1)}
            </DashboardItem>
          )}
      </Fragment>
    ));
  };
  const doImport = () => {
    try {
      const parse = JSON.parse(importInfo);
      dashboardInfo.set(parse);
      toast.success('Success', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
    } catch (e) {
      toast.error('Invalid json', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
      });
    }
  };
  const doExport = () => {
    navigator.clipboard.writeText(JSON.stringify(dashboardInfo.get));
    toast.success('Copied', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
  };

  return (
    <Wrapper>
      {result && result.cuda_version === '10.2' && (
        <Fragment>
          <StyledHeader>
            <StyledList>
              <li>
                {result.gpu.map((_: any, gpuIndex: number) => (
                  <StyledPageButton
                    key={gpuIndex}
                    style={{
                      backgroundColor:
                        gpuIndex === selectedGpu ? '#b06601' : '',
                      color: gpuIndex === selectedGpu ? '#ffd36b' : ''
                    }}
                    onClick={() => setSelectedGpu(gpuIndex)}
                  >
                    {gpuIndex + 1}
                  </StyledPageButton>
                ))}
                <StyledPageButton
                  style={{
                    backgroundColor: selectedGpu === -1 ? '#b06601' : '',
                    color: selectedGpu === -1 ? '#ffd36b' : ''
                  }}
                  onClick={() => setSelectedGpu(-1)}
                >
                  ALL
                </StyledPageButton>
              </li>
              <li>attached_gpus: {result.attached_gpus}</li>
              <li>cuda_version: {result.cuda_version}</li>
              <li>driver_version: {result.driver_version}</li>
              <li>timestamp: {result.timestamp}</li>
              <li>
                <Button
                  primary={editMode}
                  onClick={() => setEditMode((prev) => !prev)}
                >
                  {editMode ? 'edit' : 'readonly'}
                </Button>
                <Button onClick={() => doImport()}>Import</Button>
                <Button onClick={() => doExport()}>Export</Button>
              </li>
            </StyledList>
            <StyledImportInput
              type="text"
              placeholder={'Import json: '}
              value={importInfo}
              onChange={(e) => setImportInfo(e.target.value)}
            />
          </StyledHeader>
          <StyledBody>
            <Panel>
              {selectedGpu !== -1 && (
                <Fragment>
                  <h2 className={'panel-title'}>
                    GPU {selectedGpu + 1} : {result.gpu[selectedGpu].id}
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {printAll(result.gpu[selectedGpu], editMode, selectedGpu)}
                  </div>
                </Fragment>
              )}
              {selectedGpu === -1 &&
                result.gpu.map((gpuEl, gpuIndex) => (
                  <Panel key={gpuIndex}>
                    <h2 className={'panel-title'}>
                      GPU {gpuIndex + 1} : {gpuEl.id}
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {printAll(gpuEl, editMode, gpuIndex)}
                    </div>
                  </Panel>
                ))}
            </Panel>
          </StyledBody>
          {/*  */}
        </Fragment>
      )}
      {!result && <span>Can't connect to server</span>}
    </Wrapper>
  );
};

export default Dashboard;
