// src/hooks/useApi.ts
import { useState, useEffect } from "react";
import axios from "axios";

// 基础 API 地址（注意：你原来的 baseUrl 已经包含部分路径，这里拆分更合理）
const baseUrl = "https://api-v2.xdclass.net/api";

// 定义响应数据类型
interface RequestResponse {
  data: any; // 业务数据
  msg: string; // 提示信息
  code: number; // 状态码（200 通常表示成功）
}

/**
 * 自定义 API 请求 Hook
 * @param url 接口路径（相对于 baseUrl）
 * @param options 请求配置（method、body 等）
 * @param onSuccess 成功回调（接收响应数据）
 * @returns { loading, error } 加载状态和错误信息
 */
export function useApi(
  url: string,
  options?: { method?: string; body?: any }, // 简化 options，更直观
  onSuccess?: (data: any) => void
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 异步请求函数
    const fetchData = async () => {
      setLoading(true);
      setError(null); // 重置错误状态
      try {
        // 拼接完整 URL
        const fullUrl = `${baseUrl}${url}`;
        
        // 发起请求（适配 GET/POST 等方法，处理参数）
        const response = await axios({
          url: fullUrl,
          method: options?.method || "GET", // 默认 GET 方法
          // GET 用 params，POST 用 data（Axios 规范）
          [options?.method?.toUpperCase() === "GET" ? "params" : "data"]: options?.body || {},
        });

        // 假设后端返回格式为 { code, data, msg }
        const result = response.data as RequestResponse;

        // 业务成功（根据实际后端状态码判断）
        if (result.code === 0 && onSuccess) {
          onSuccess(result.data); // 调用成功回调，传递业务数据
        } else {
          throw new Error(result.msg || "请求失败");
        }
      } catch (err) {
        // 错误处理
        setError(
          err instanceof Error 
            ? err.message 
            : "发生未知错误"
        );
      } finally {
        setLoading(false);
      }
    };

    // 执行请求
    fetchData();
  }, [url, options, onSuccess]); // 依赖变化时重新请求

  return { loading, error };
}