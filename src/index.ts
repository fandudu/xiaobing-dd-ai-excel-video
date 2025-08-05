import {
  FieldType,
  fieldDecoratorKit,
  FormItemComponent,
  FieldExecuteCode,
} from "dingtalk-docs-cool-app";
const { t } = fieldDecoratorKit;

// 自己的业务
const domain = "aibeings-vip.xiaoice.com";
const baseUrl = `http://${domain}`;
const vhBizIds = {
  "张淑芬-保健品种草": "VHPUBJB6TBUCMUE",
  "静怡-女主播": "VHP3HOLVRPL9QYR",
  "文泽-电子产品种草": "VHPWHEUD6XTHZ5J",
};

interface Response {
  code: number;
  message: string;
  traceId: string;
}
interface CreateResponse extends Response {
  data: string;
}

// 通过addDomainList添加请求接口的域名
fieldDecoratorKit.setDomainList([domain]);
fieldDecoratorKit.setDecorator({
  name: "智能成片AI字段",
  // 定义捷径的i18n语言资源
  i18nMap: {
    "zh-CN": {
      szrfwkey: "数字人服务key",
      keyHolder: "请联系对接人获取subkey",
      noMatchId: "无效的数字演员ID，请联系对接人获取",
      szryyid: "数字演员",
      spzt: "视频主题",
      kbwa: "口播文案",
      cpt: "产品图",
    },
    "en-US": {
      szrfwkey: "Digital Human Service Key",
      keyHolder: "Please contact the connector to obtain the subkey",
      undefinedId:
        "Invalid Digital Actor ID, please contact the connector to obtain",
      szryyid: "Digital Actor ID",
      spzt: "Video Theme",
      kbwa: "Script",
      cpt: "Product Image",
    },
    "ja-JP": {
      szrfwkey: "デジタルヒューマンサービスキー",
      keyHolder: "接続者に連絡してサブキーを取得してください",
      undefinedId: "無効なデジタルアクターID、接続者に連絡して取得してください",
      szryyid: "デジタルアクターID",
      spzt: "ビデオテーマ",
      kbwa: "スクリプト",
      cpt: "製品画像",
    },
  },
  // 定义捷径的入参
  formItems: [
    {
      key: "subKey",
      label: t("szrfwkey"),
      component: FormItemComponent.Textarea,
      props: {
        placeholder: t("keyHolder"),
      },
      validator: {
        required: true,
      },
    },
    {
      key: "vhBizId",
      label: t("szryyid"),
      component: FormItemComponent.FieldSelect,
      props: {
        mode: "single",
        supportTypes: [FieldType.SingleSelect],
      },
      validator: {
        required: true,
      },
    },
    {
      key: "topic",
      label: t("spzt"),
      component: FormItemComponent.FieldSelect,
      props: {
        mode: "single",
        supportTypes: [FieldType.Text],
      },
      validator: {
        required: false,
      },
    },
    {
      key: "content",
      label: t("kbwa"),
      component: FormItemComponent.FieldSelect,
      props: {
        mode: "single",
        supportTypes: [FieldType.Text],
      },
      validator: {
        required: true,
      },
    },
    {
      key: "imageUrl",
      label: t("cpt"),
      component: FormItemComponent.FieldSelect,
      props: {
        mode: "single",
        supportTypes: [FieldType.Attachment],
      },
      validator: {
        required: false,
      },
    },
  ],
  // 定义捷径的返回结果类型
  resultType: {
    type: FieldType.Attachment,
  },
  // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
  execute: async (
    context,
    formData: {
      account: number;
      subKey: string;
      vhBizId: string;
      topic: string;
      content: string;
      imageUrl: string[];
    }
  ) => {
    const { subKey, vhBizId, topic = "", content, imageUrl } = formData;
    try {
      // 校验必填参数
      if (!subKey || !vhBizId || !content) {
        return { code: FieldExecuteCode.Success, data: [] };
      }
      let trueVhBizId = vhBizIds[vhBizId];
      if (!trueVhBizId) {
        return {
          code: FieldExecuteCode.InvalidArgument,
          message: String(t("noMatchId")),
        };
      }
      let params = {
        content, // 口播文案
        topic, // 视频主题
        vhBizId: trueVhBizId, // 数字人id
        materialList:
          imageUrl?.map((item: any) => {
            return {
              url: item.tmp_url,
            };
          }) || [], // 产品图
      };
      console.log("API1 请求参数:", params, "subKey:", subKey);
      const response: CreateResponse = await context
        .fetch(`${baseUrl}/openapi/aivideo/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "subscription-key": subKey, // subkey
          },
          body: JSON.stringify(params),
        })
        .then((res) => res.json());
      console.log("API1 返回结果:", response);
      if (response.data) {
        let timerRef: NodeJS.Timeout | null = null;
        return new Promise((resolve) => {
          let waitTime = 0; // 等待时间，单位为毫秒
          timerRef = setInterval(async () => {
            waitTime += 5000;
            const response2 = await context.fetch(
              `${baseUrl}/openapi/aivideo/detail/${response.data}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "subscription-key": subKey, // subkey
                },
              }
            );
            const data2: any = await response2.json();
            if (data2.data?.outputData?.videoUrl) {
              clearInterval(timerRef);
              timerRef = null;
              console.log("API2 返回结果:", data2);
              resolve({
                code: FieldExecuteCode.Success,
                data: [
                  {
                    fileName: topic
                      ? topic + ".mp4"
                      : data2?.data.updateTime + ".mp4",
                    type: "mp4",
                    url: data2.data?.outputData?.videoUrl,
                  },
                ],
              });
            } else {
              console.log("等待视频生成,时间：", waitTime / 1000, "s");
            }
          }, 5000);
        });
      } else {
        console.log("请求失败:", response.message);
        return {
          code: FieldExecuteCode.Error,
          message: response.message,
        };
      }
    } catch (error) {
      console.log("请求出错:", String(error));
      return {
        code: FieldExecuteCode.Error,
        message: String(error),
      };
    }
  },
});
export default fieldDecoratorKit;
