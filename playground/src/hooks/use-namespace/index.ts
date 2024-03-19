/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description:
 * @Date: 2023-11-17 18:14:45
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2023-11-17 18:17:35
 */
import { Ref } from "vue";

export const useGetDerivedNamespace = (
  namespaceOverrides?: Ref<string | undefined>
) => {
  const namespace = namespaceOverrides?.value || "";
  return namespace;
};

export const useNamespace = (
  block: string,
  namespaceOverrides?: Ref<string | undefined>
) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);
  return {
    namespace,
  };
};
