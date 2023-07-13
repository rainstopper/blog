import { SidebarConfig } from 'vuepress';
import jvm from './jvm';
import read from './read';

export default {
  // JVM
  ...jvm,
  // Read
  ...read,
} as SidebarConfig;
