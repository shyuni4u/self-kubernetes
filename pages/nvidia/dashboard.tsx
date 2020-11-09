import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import Wrapper from '../../components/organisms/Wrapper';
import Panel from '../../components/atoms/Panel';

import auth from '../../.env/auth.json';

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
  const [result, setResult] = useState<cuda_10_2_result>(undefined);

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

  const printAll = (jsonObject: any, depth: number = 0) => {
    return Object.keys(jsonObject).map((key: string, index: number) => (
      <div key={index}>
        {typeof jsonObject[key] === 'string' && (
          <span style={{ paddingLeft: `${depth * 20}px` }}>
            {key}: {jsonObject[key]}
            <br />
          </span>
        )}
        {typeof jsonObject[key] === 'object' &&
          printAll(jsonObject[key], depth + 1)}
      </div>
    ));
  };

  return (
    <Wrapper>
      {result && result.cuda_version === '10.2' && (
        <>
          <ul>
            <li>attached_gpus: {result.attached_gpus}</li>
            <li>cuda_version: {result.cuda_version}</li>
            <li>driver_version: {result.driver_version}</li>
            <li>timestamp: {result.timestamp}</li>
          </ul>
          {result.gpu.map((gpuEl, gpuIndex) => (
            <Panel key={gpuIndex}>
              <h2 className={'panel-title'}>GPU: {gpuEl.id}</h2>
              <div className={'panel-content'} style={{ textAlign: 'left' }}>
                {printAll(gpuEl)}
              </div>
            </Panel>
          ))}
        </>
      )}
      {!result && <span>Can't connect to server</span>}
    </Wrapper>
  );
};

export default Dashboard;
