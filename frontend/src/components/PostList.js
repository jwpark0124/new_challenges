import React, { useEffect, useState } from 'react';
import { Alert } from 'antd';
import { useAxios, axiosInstance } from 'api';
// import Post from './Post';
import { useAppContext } from 'store';

function PostList() {
  const {
    store: { jwtToken },
  } = useAppContext();

  const [postList, setPostList] = useState([]);

  const headers = { Authorization: `JWT ${jwtToken}` };

  const [{ data: originPostList, loading, error }, refetch] = useAxios({
    url: '/api/posts/',
    headers,
  });

  useEffect(() => {
    setPostList(originPostList);
  }, [originPostList]);

  return (
    <div>
      {postList && postList.length === 0 && (
        <Alert type="warning" message="포스팅이 없습니다. :-(" />
      )}
      {postList &&
        postList.map((postList) => (
          <PostList postList={postList} key={postList.id} />
        ))}
    </div>
  );
}

export default PostList;
