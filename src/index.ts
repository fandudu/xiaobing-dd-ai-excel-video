import {
  FieldType,
  fieldDecoratorKit,
  FormItemComponent,
  FieldExecuteCode,
  AuthorizationType,
} from "dingtalk-docs-cool-app";
const { t } = fieldDecoratorKit;

// 自己的业务
const domain = "aibeings-vip.xiaoice.com";
const baseUrl = `http://${domain}`;
const vhBizIds = {
  "张淑芬-大健康博主": "VHPUBJB6TBUCMUE",
  "静怡-女主播": "VHP3HOLVRPL9QYR",
  "文泽-科技产品种草": "VHPWHEUD6XTHZ5J",
  "冰冰-快消博主": "VHPHTWFSQSGASD4",
  "思悦-课程顾问": "VHPAPKRSKCGGCBU",
  "安娜-外语": "VHPHBRWKCZ2EDRS",
  "程也-美业博主": "VHPPKQW5VLGEQ6Q",
  "黎舒-护士": "VHPRDCRU619GBNC",
  "李白-古代名人": "VHPRTSSPRX2UZNQ",
  "可怡-带货女主播": "VHPD1KKPLNOJCF8",
};
const vhBizIdOptions = Object.keys(vhBizIds).map((key) => ({
  key: vhBizIds[key],
  title: key,
}));

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
      platform: "小冰数字人智能成片",
      szrfwkey: "数字人服务key",
      keyHolder: "请联系对接人获取subkey",
      noMatchId: "无效的数字演员ID，请联系对接人获取",
      szryyid: "数字演员",
      spzt: "视频主题",
      kbwa: "视频文案(重点建议：单条文案不超过130个字)",
      waError: "单条文案建议不超过130个字。",
      cpt: "产品图(重点建议：上传单元格图片不超过1张)",
      errorCpt: "建议上传单元格图片不超过1张。",
    },
    "en-US": {
      platform: "Xiaoice Digital Human Intelligent Video",
      szrfwkey: "Digital Human Service Key",
      keyHolder: "Please contact the connector to obtain the subkey",
      undefinedId:
        "Invalid Digital Actor ID, please contact the connector to obtain",
      szryyid: "Digital Actor ID",
      spzt: "Video Theme",
      kbwa: "Video Script (Note: Each script should not exceed 130 characters)",
      waError: "Each script is recommended to be no more than 130 characters.",
      cpt: "Product Image (Note: Please upload no more than 1 image per cell)",
      errorCpt: "Please upload no more than 1 image per cell.",
    },
    "ja-JP": {
      platform: "Xiaoice Digital Human Intelligent Video",
      szrfwkey: "デジタルヒューマンサービスキー",
      keyHolder: "接続者に連絡してサブキーを取得してください",
      undefinedId: "無効なデジタルアクターID、接続者に連絡して取得してください",
      szryyid: "デジタルアクターID",
      spzt: "ビデオテーマ",
      kbwa: "ビデオ文案(重点建议：単条文案不超过130个字)",
      waError: "単条文案は130字を超えないことをお勧めします。",
      cpt: "製品画像(重点建议：上传单元格图片不超过1张)",
      errorCpt: "製品画像は1セルあたり1枚までアップロードしてください。",
    },
  },
  // 定义捷径的入参
  formItems: [
    // {
    //   key: "subKey",
    //   label: t("szrfwkey"),
    //   component: FormItemComponent.Textarea,
    //   props: {
    //     placeholder: t("keyHolder"),
    //   },
    //   validator: {
    //     required: true,
    //   },
    // },
    // {
    //   key: "vhBizId",
    //   label: t("szryyid"),
    //   component: FormItemComponent.FieldSelect,
    //   props: {
    //     mode: "single",
    //     supportTypes: [FieldType.SingleSelect, FieldType.Text],
    //   },
    //   validator: {
    //     required: true,
    //   },
    // },
    {
      key: "vhBizId",
      label: t("szryyid"),
      component: FormItemComponent.SingleSelect,
      props: {
        defaultValue: vhBizIdOptions[0]?.key,
        placeholder: "请选择",
        options: vhBizIdOptions,
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
  authorizations: {
    id: "xiaobing_dd_ai_excel_video", // 授权的id，用于context.fetch第三个参数指定使用
    platform: t("platform"), // 授权平台，目前可以填写当前平台名称
    type: AuthorizationType.MultiHeaderToken, // 授权类型
    // 用户可以填写的key
    params: [{ key: "subscription-key", placeholder: t("keyHolder") }],
    required: true, // 设置为选填，用户如果填了授权信息，请求中则会携带授权信息，否则不带授权信息
    label: t("szrfwkey"), // 授权平台，告知用户填写哪个平台的信息
    tooltips: t("keyHolder"),
    instructionsUrl:
      "https://alidocs.dingtalk.com/i/nodes/YQBnd5ExVEjea40qCklxN6B5JyeZqMmz?doc_type=wiki_doc&iframeQuery=utm_source=portal&utm_medium=portal_recent&rnd=0.16896257984287688",
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
    const { vhBizId, topic = "", content, imageUrl } = formData;
    try {
      // 校验必填参数
      if (!vhBizId || !content) {
        return { code: FieldExecuteCode.Success, data: [] };
      }
      // 校验产品图
      if (imageUrl && imageUrl.length > 1) {
        return {
          code: FieldExecuteCode.Error,
          message: String(t("errorCpt")),
        };
      }
      // 校验视频文案
      if (content && content.length > 130) {
        return {
          code: FieldExecuteCode.Error,
          message: String(t("waError")),
        };
      }

      let params = {
        content, // 口播文案
        topic, // 视频主题
        vhBizId, // 数字人id
        materialList:
          imageUrl?.map((item: any) => {
            return {
              url: item.tmp_url,
            };
          }) || [], // 产品图
      };

      console.log("API1 入参:", params);
      const response: CreateResponse = await context
        .fetch(
          `${baseUrl}/openapi/aivideo/create`,
          {
            method: "POST",
            body: JSON.stringify(params),
            headers: {
              "Content-Type": "application/json",
            },
          },
          "xiaobing_dd_ai_excel_video"
        )
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
                },
              },
              "xiaobing_dd_ai_excel_video"
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
