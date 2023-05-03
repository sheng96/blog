import React, { useEffect, useMemo } from "react";
import {Avatar, Button, Divider, Input, message, Space} from "antd";
import {
  createCommentApi,
  getCommentApi,
  likeApi,
  unLikeApi,
} from "@/api/comment";
import { CommentData, CommentType } from "@/api/model/commentModel";
import dayjs from "dayjs";
import {
  LikeFilled,
  LikeOutlined,
  MessageFilled,
  MessageOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

// 这是一个评论组件

export const Comment = (props: any) => {
  //   创建浏览器指纹 用于判断是否是同一个人

  async function getCommentList() {
    const res = await getCommentApi(props.postId);
    setCommentList(res.data);
  }
  // 评论id
  const [commentId, setCommentId] = React.useState(0);

  const [commentList, setCommentList] = React.useState<CommentData>({
    data: [],
    count: 0,
  });
  useEffect(() => {
    getCommentList().then();
  }, []);
  return (
    <>
      {/*<CommentForm {...props} getCommentList={getCommentList}></CommentForm>*/}
      <CommentList
        list={commentList.data}
        count={commentList.count}
        {...props}
        getCommentList={getCommentList}
        commentId={commentId}
        setCommentId={setCommentId}
      />
    </>
  );
};

// 创建输入评论的表单, 用于评论组件的子组件

const CommentForm = (props: {
  postId: number;
  replyId?: number;
  getCommentList: any;
}) => {
  // 评论需要的参数有: 评论内容, 评论人, 评论人的邮箱
  // 评论内容和评论人是必填的, 评论人的邮箱可以不填
  const [content, setContent] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [email, setEmail] = React.useState("");

  //   根据输入的内容判断是否允许点击提交按钮
  const isSubimt = useMemo(() => {
    return !!(content && nickname && email);
  }, [content, nickname, email]);
  const submit = async () => {
    let data: {
      postId: number;
      replyId?: number;
    } = {
      postId: props.postId,
    };
    if (props.replyId) {
      data.replyId = props.replyId;
    }

    await createCommentApi({
      content,
      nickname,
      email,
      ...data,
    });
    //   提交成功后, 清空输入框
    setContent("");
    // setNickname("");
    // setEmail("");
    //   提交成功后, 刷新评论列表
    await getCommentApi(props.postId);
    props.getCommentList();
    message.success("评论成功");
  };
  return (
    <div className={` rounded-lg p-2`}>
      <div className={`flex mb-4`}>
        <Input
          size="large"
          addonBefore="昵称"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Input
          size="large"
          addonBefore="邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/*<Input addonBefore="http://"  defaultValue="mysite" />*/}
      </div>
      <TextArea
        size="large"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></TextArea>

      <div className={`flex justify-end mr-10 mt-4`}>
        <Button type="primary" disabled={!isSubimt} onClick={submit}>
          提交
        </Button>
      </div>
    </div>
  );
};

// 评论列表组件, 用于评论组件的子组件

const CommentList = ({
  list,
  count = 0,
  getCommentList,
  postId,
  commentId,
  setCommentId,
  subComment = false,
}: {
  list: CommentType[];
  count?: number;
  getCommentList: Function;
  postId: number;
  commentId: number;
  setCommentId: Function;
  subComment?: boolean;
}) => {
  // 获取浏览器指纹
  const browserFingerprint = window.localStorage.getItem("fp_token") as string;
  async function createLike(commentId: number) {
    await likeApi({
      commentId: commentId,
      browserFingerprint: browserFingerprint,
    });
    await getCommentList();
  }

  async function unLike(id: number) {
    console.log("取消点赞");
    await unLikeApi(id);
    await getCommentList();
  }

  return (
    <>
      {commentId === 0 && !subComment && (
        <CommentForm
          getCommentList={getCommentList}
          postId={postId}
        ></CommentForm>
      )}
      {!subComment && (
        <div>
          <span>共有{count}条评论</span>
        </div>
      )}
      {list.map((item, index) => {
        return (
          <div key={item.id} className={`mt-5`}>
            <div className={`flex mb-4`}>
              <Avatar
                className={`shrink-0`}
                size={subComment ? 30 : 40}
                shape="square"
              >
                {item.nickname}
              </Avatar>
              <div className={`ml-4 w-full`}>
                <div className={`flex items-center justify-between`}>
                  <div>
                    <span className={`mr-4`}>{item.nickname}</span>
                    <span className={`text-gray-400 text-sm`}>
                      {dayjs(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                    </span>
                  </div>
                  <div>
                    {/* 点赞按钮 */}
                    {item.like ? (
                      <LikeFilled
                        className={`mr-4 text-red-400 cursor-pointer`}
                        onClick={() => unLike(item.like?.id || 0)}
                      />
                    ) : (
                      <LikeOutlined
                        className={`mr-4  cursor-pointer`}
                        onClick={() => createLike(item.id)}
                      />
                    )}
                    {commentId === item.id ? (
                      <MessageFilled
                        className={`cursor-pointer`}
                        onClick={() => setCommentId(0)}
                      />
                    ) : (
                      <MessageOutlined
                        className={`cursor-pointer`}
                        onClick={() => setCommentId(item.id)}
                      />
                    )}
                  </div>
                </div>
                <div className={`my-2`}>{item.content}</div>
                {/* 用户评论时的设备和ip地址 */}
                <Space size={`small`} wrap>
                  <span
                    className={`bg-gray-200 px-1 text-gray-500 text-xs rounded`}
                  >
                    {item.address}
                  </span>
                  <span
                    className={`bg-gray-200 px-1 text-gray-500 text-xs rounded`}
                  >
                    {item.browser}
                  </span>
                  <span
                    className={`bg-gray-200 px-1 text-gray-500 text-xs rounded`}
                  >
                    {item.os}
                  </span>
                </Space>
              </div>
            </div>
            {/*输入框*/}
            {commentId === item.id && (
              <CommentForm
                getCommentList={getCommentList}
                postId={postId}
                replyId={item.id}
              ></CommentForm>
            )}
            {/* 子评论 */}
            {item.replies.length > 0 && (
              <div className={`pl-10 `}>
                <CommentList
                  list={item.replies}
                  getCommentList={getCommentList}
                  postId={postId}
                  commentId={commentId}
                  setCommentId={setCommentId}
                  subComment={true}
                />
              </div>
            )}

            {/* 分割线 最后一个不显示 */}
            {index < list.length - 1 && <Divider dashed />}
          </div>
        );
      })}
    </>
  );
};
