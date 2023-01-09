import { api, staticQuerys } from ".";
import _ from "lodash-es";
import { errorDetail } from '../mock/detail'
export interface Detail {
  fid: string;
  allow_teenager: number;
  pageSize: number;
  tagInfoList: any[];
  authorPuid: string;
  domain_list: string[];
  nftInfo: any;
  noDataTitle: string;
  title: string;
  allCount: number;
  type: any;
  tid: string;
  video_publish: number;
  relation: number;
  forum_logo: string;
  video_url: any;
  videoTranscodeState: any;
  puid: string;
  offline_data: OfflineData;
  replyBtnText: string;
  client: string;
  share: Share;
  isrec: string;
  contentType: number;
  lights: number;
  share_num: number;
  canScoreSort: number;
  noDataBtnText: string;
  userModel: UserModel;
  author: Author;
  format: string;
  userName: string;
  unlights_enable: number;
  url: string;
  defOrder: string;
  nps: string;
  is_recommend_filter: number;
  jiangji_status: number;
  replies: number;
  forum_name: string;
  recommend_num: string;
  check_reply_url: string;
  topic: Topic2;
  page: string;
  video_info: any;
  status: any;
}

export interface OfflineData {
  data: Data;
  status: number;
}

export interface Data {
  fid: string;
  achievement: any;
  pid: number;
  nftInfo: NftInfo;
  tid: string;
  via: string;
  videoTranscodeState: number;
  author_puid: string;
  zoneId: number;
  contentType: number;
  is_login: number;
  share_num: number;
  create_time: number;
  groupid: string;
  update_info: string;
  format: string;
  defOrder: string;
  cardList: any[];
  is_recommend_filter: number;
  replies: string;
  jiangji_status: number;
  last_post_username: string;
  is_lock: number;
  topic: Topic;
  page: string;
  status: number;
  threadCover: any;
  userImg: string;
  gid: any;
  tagInfoList: any[];
  lastpost_time: number;
  title: string;
  content: string;
  allPage: number;
  visits: string;
  postAuthorPuid: number;
  puid: string;
  digest: number;
  isrec: string;
  topic_id: number;
  lights: number;
  bottom_ad: BottomAd;
  show_post_praise: number;
  merge_title: string;
  totalPage: number;
  f_video: number;
  nopic: number;
  shake_switch: number;
  user_banned: number;
  praise: Praise;
  nps: number;
  last_post_puid: number;
  forum: Forum;
  hits: number;
  isRegularized: boolean;
  recommend_num: string;
  check_reply_url: string;
  location: string;
  time: string;
  video_info: {
    img: string;
    src: string;
    origin: string;
    pid: string;
    tid: string;
    bullet_comment_num: string;
    from_url: string;
    vid: string;
    puid: string;
    size: string;
    addtime: string;
    expire: string;
    width: string;
    bg_img: string;
    play_num: string;
    height: string;
    status: string;
  };
  username: string;
}

export interface NftInfo {
  assetAmount: any;
  assetCate: any;
  assetId: any;
  assetTitle: any;
  assetType: any;
  contentUrl: any;
  hasNFT: any;
  id: any;
  ownerPuid: any;
  shardId: any;
  shardNo: any;
  shardUniqueCode: any;
}

export interface Topic {
  logo: string;
  name: string;
  topic_category: string;
  topic_id: number;
}

export interface BottomAd {}

export interface Praise {
  list: any[];
  tips: string;
  userinfo: Userinfo;
  status: number;
}

export interface Userinfo {
  uid: number;
  nickname: string;
  header: string;
}

export interface Forum {
  category: string;
  description: string;
  fid: number;
  forumadmin: string;
  logo: string;
  name: string;
  unlights_enable: number;
}

export interface Share {
  img: string;
  qq: string;
  qzone: string;
  summary: string;
  url: string;
  wechat: string;
  wechat_moments: string;
  weibo: string;
}

export interface UserModel {
  adminModelList: any[];
  blackUser: any;
  commonBanned: any;
  groupid: number;
  groups: string;
  header: string;
  headerBig: string;
  headerSmall: string;
  lastLoginTime: any;
  level: number;
  nftInfo: NftInfo2;
  ornamentIcon: string;
  puid: number;
  rightModelList: any;
  sex: number;
  spaceurl: string;
  trueName: string;
  userCertList: any[];
  userTakeBadge: UserTakeBadge;
  username: string;
}

export interface NftInfo2 {
  assetAmount: any;
  assetCate: any;
  assetId: any;
  assetTitle: any;
  assetType: any;
  contentUrl: any;
  hasNFT: any;
  id: any;
  ownerPuid: any;
  shardId: any;
  shardNo: any;
  shardUniqueCode: any;
}

export interface UserTakeBadge {
  badgeBgImg: any;
  badgeForwardUrl: any;
  badgeIcon: any;
  badgeId: any;
  name: any;
  puid: any;
}

export interface Author {
  enableSendMsg: boolean;
  header: string;
  name: string;
  nftInfo: NftInfo3;
  ornament: string;
  puid: number;
  time: string;
  view: number;
}

export interface NftInfo3 {
  assetAmount: any;
  assetCate: any;
  assetId: any;
  assetTitle: any;
  assetType: any;
  contentUrl: any;
  hasNFT: any;
  id: any;
  ownerPuid: any;
  shardId: any;
  shardNo: any;
  shardUniqueCode: any;
}

export interface Topic2 {
  logo: string;
  name: string;
  topic_category: string;
  topic_id: number;
}

export type DetailDataFormat = Omit<OfflineData["data"], "format"> & {
  format: {
    htmlV3: string;
    jsonV3: unknown;
    imgList?: Array<Record<string, unknown>>;
    appJsonV3?: unknown;
    videoInfo: unknown;
  };
};

/** 替换html里的图片链接到代理服务器 */
const replaceImg = [/src=\"https:\/\/i\d*\.hoopchina\.com\.cn/g, 'src="source'] as const;
/** 替换html里的视屏链接到代理服务器 */
const replaceVideo = [/src=\"https:\/\/v\.hoopchina\.com\.cn/g, 'src="video'] as const;
/** 替换视频链接到代理服务器 */
const replaceVideoUrl = [/https:\/\/v\.hoopchina\.com\.cn/g, "video"] as const;

export const getDetail = (postId: number) => {
  return api
    .get(`threads/${postId}`, {
      searchParams: {
        ...staticQuerys,
      },
    })
    .json<Detail>()
    .then((res) => {
      const data = res.offline_data.data;

      let html;

      const formatObj = JSON.parse(data?.format ?? "{}", (k, v) =>
        typeof v === "string" ? v.replace(/\\/g, "") : v
      );

      if ("htmlV3" in formatObj) {
        /** 替换资源链接 */
        html = formatObj.htmlV3.replace(...replaceImg).replace(...replaceVideo);
      }

      /** 纯视频帖 */
      if (!html && !_.isEmpty(data.video_info)) {
        replaceVideoUrl
        const newSrc = data.video_info.src.replace(...replaceVideoUrl);
        console.log(data.video_info.from_url, newSrc);
        html = /* html */ `
          <video src="${newSrc}" autoplay controls></video>
        `;
      }

      if (!html) {
        html = _.isEmpty(data.format)
          ? "<div>format empty</div>"
          : /* html */ `<div>
                <mark>未兼容的format格式</mark>
                <p>${JSON.stringify(formatObj)}</p>
              </div>
            `;
      }

      // @ts-ignore
      return {
        ...data,
        format: {
          htmlV3: html,
        },
      } as DetailDataFormat;
    });
};
