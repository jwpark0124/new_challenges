// import React, { useEffect, useState } from 'react';
// import { useAxios, axiosInstance } from 'api';
// import { useAppContext } from 'store';

// function PostList() {
//   const {
//     store: { jwtToken },
//   } = useAppContext();

//   const [postList, setPostList] = useState([]);

//   const headers = { Authorization: `JWT ${jwtToken}` };

//   const [{ data: originPostList, loading, error }, refetch] = useAxios({
//     url: '/api/posts/',
//     headers,
//   });

//   useEffect(() => {
//     setPostList(originPostList);
//   }, [originPostList]);

//   return (
//     <div>
//       {postList &&
//         postList.map((postList) => (
//           <PostList postList={postList} key={postList.id} />
//         ))}
//     </div>
//   );
// }

// export default PostList;
